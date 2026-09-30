import { readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const tmp = tmpdir()
const provincesSrc = JSON.parse(readFileSync(join(tmp, 'skorea-provinces.json'), 'utf8'))
const munisSrc = JSON.parse(readFileSync(join(tmp, 'skorea-muni.json'), 'utf8'))

const PROVINCE = {
  '11': '서울특별시',
  '21': '부산광역시',
  '22': '대구광역시',
  '23': '인천광역시',
  '24': '광주광역시',
  '25': '대전광역시',
  '26': '울산광역시',
  '29': '세종특별자치시',
  '31': '경기도',
  '32': '강원특별자치도',
  '33': '충청북도',
  '34': '충청남도',
  '35': '전북특별자치도',
  '36': '전라남도',
  '37': '경상북도',
  '38': '경상남도',
  '39': '제주특별자치도',
}

const ORDER = ['11', '21', '22', '23', '24', '25', '26', '29', '31', '32', '33', '34', '35', '36', '37', '38', '39']
const METRO = new Set(['11', '21', '22', '23', '24', '25', '26', '29'])

const minLon = 124.55
const maxLon = 131.15
const minLat = 33.05
const maxLat = 38.72
const scale = 74
const cos = Math.cos((36.4 * Math.PI) / 180)
const pad = 10

function project([lon, lat]) {
  const x = (lon - minLon) * scale * cos
  const y = (maxLat - lat) * scale
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10]
}

function dist(p, a, b) {
  const [x, y] = p
  const [x1, y1] = a
  const [x2, y2] = b
  const dx = x2 - x1
  const dy = y2 - y1
  const len = Math.hypot(dx, dy)
  if (len === 0) return Math.hypot(x - x1, y - y1)
  return Math.abs(dy * x - dx * y + x2 * y1 - y2 * x1) / len
}

function simplify(points, eps) {
  if (points.length < 3) return points
  let max = 0
  let idx = 0
  const end = points.length - 1
  for (let i = 1; i < end; i++) {
    const d = dist(points[i], points[0], points[end])
    if (d > max) {
      max = d
      idx = i
    }
  }
  if (max > eps) {
    const left = simplify(points.slice(0, idx + 1), eps)
    const right = simplify(points.slice(idx), eps)
    return left.slice(0, -1).concat(right)
  }
  return [points[0], points[end]]
}

function ringPath(ring, eps) {
  if (!ring || ring.length < 4) return ''
  const simplified = simplify(ring, eps)
  const pts = []
  for (const coord of simplified) {
    const p = project(coord)
    const prev = pts[pts.length - 1]
    if (prev && prev[0] === p[0] && prev[1] === p[1]) continue
    pts.push(p)
  }
  if (pts.length < 3) return ''
  let d = `M${pts[0][0]} ${pts[0][1]}`
  for (let i = 1; i < pts.length; i++) d += `L${pts[i][0]} ${pts[i][1]}`
  return `${d}Z`
}

function geomPath(geom, eps) {
  const polys = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates
  let d = ''
  for (const poly of polys) {
    for (const ring of poly) d += ringPath(ring, eps)
  }
  return d
}

function cityOf(name, provCode) {
  if (METRO.has(provCode)) return PROVINCE[provCode]
  const matched = name.match(/^(.+시).+구$/)
  if (matched) return matched[1]
  return name
}

const regions = []
for (const feature of munisSrc.features) {
  const code = String(feature.properties.code)
  const provCode = code.slice(0, 2)
  const name = feature.properties.name
  const d = geomPath(feature.geometry, 0.0045)
  if (!d) continue
  regions.push({
    code,
    name,
    province: PROVINCE[provCode] ?? provCode,
    provCode,
    city: cityOf(name, provCode),
    d,
  })
}

const provinceOutlines = []
for (const feature of provincesSrc.features) {
  const code = String(feature.properties.code)
  const d = geomPath(feature.geometry, 0.006)
  if (!d) continue
  provinceOutlines.push({
    code,
    name: PROVINCE[code] ?? feature.properties.name,
    d,
  })
}

function boundsOf(items) {
  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity
  const re = /[ML](-?\d+\.?\d*) (-?\d+\.?\d*)/g
  for (const item of items) {
    for (const match of item.d.matchAll(re)) {
      const x = Number(match[1])
      const y = Number(match[2])
      if (x < minX) minX = x
      if (y < minY) minY = y
      if (x > maxX) maxX = x
      if (y > maxY) maxY = y
    }
  }
  return {
    x: Math.floor(minX - pad),
    y: Math.floor(minY - pad),
    w: Math.ceil(maxX - minX + pad * 2),
    h: Math.ceil(maxY - minY + pad * 2),
  }
}

const view = boundsOf(regions)
const gyeongnamRegions = regions.filter((item) => item.provCode === '38')
const gyeongnamView = boundsOf(gyeongnamRegions)

function centroid(d) {
  const pts = [...d.matchAll(/[ML](-?\d+\.?\d*) (-?\d+\.?\d*)/g)].map((match) => [
    Number(match[1]),
    Number(match[2]),
  ])
  if (!pts.length) return null
  const x = pts.reduce((sum, point) => sum + point[0], 0) / pts.length
  const y = pts.reduce((sum, point) => sum + point[1], 0) / pts.length
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10]
}

const changwonCenters = gyeongnamRegions
  .filter((item) => item.city === '창원시')
  .map((item) => centroid(item.d))
  .filter((point) => point)
const partnerMark = {
  name: '창원',
  x:
    Math.round(
      (changwonCenters.reduce((sum, point) => sum + point[0], 0) / changwonCenters.length) * 10,
    ) / 10,
  y:
    Math.round(
      (changwonCenters.reduce((sum, point) => sum + point[1], 0) / changwonCenters.length) * 10,
    ) / 10,
}

const index = ORDER.map((code) => {
  const name = PROVINCE[code]
  const cities = [...new Set(regions.filter((item) => item.provCode === code).map((item) => item.city))]
  cities.sort((a, b) => a.localeCompare(b, 'ko'))
  return {
    code,
    name,
    metro: METRO.has(code),
    cities: METRO.has(code) ? [] : cities,
  }
})

const file = `/* Generated from KOSTAT 2018 boundaries. Regenerate with scripts/build-korea-map.mjs */
export type MapRegion = {
  code: string
  name: string
  province: string
  provCode: string
  city: string
  d: string
}

export type ProvinceOutline = {
  code: string
  name: string
  d: string
}

export type RegionGroup = {
  code: string
  name: string
  metro: boolean
  cities: string[]
}

export const mapView = ${JSON.stringify(view)}
export const gyeongnamView = ${JSON.stringify(gyeongnamView)}
export const partnerMark = ${JSON.stringify(partnerMark)}
export const regions: MapRegion[] = ${JSON.stringify(regions)}
export const provinceOutlines: ProvinceOutline[] = ${JSON.stringify(provinceOutlines)}
export const regionIndex: RegionGroup[] = ${JSON.stringify(index)}
`

const outPath = join('src', 'data', 'koreaMap.ts')
writeFileSync(outPath, file)
const gn = index.find((item) => item.code === '38')
console.log('regions', regions.length, 'bytes', Buffer.byteLength(file))
console.log('view', view)
console.log('partner', partnerMark)
console.log('gyeongnam', gyeongnamView)
console.log(gn.cities.join(', '))
