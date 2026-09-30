import { useState } from 'react'
import {
  gyeongnamView,
  mapView,
  partnerMark,
  provinceOutlines,
  regionIndex,
  regions,
  type MapRegion,
  type ProvinceOutline,
} from '../data/koreaMap'

const PARTNER_CITY = '창원시'

type Hot = string | null

function tipFor(city: Hot) {
  if (!city) return '지도나 표의 시·군에 커서를 올리면 그 지역이 표시됩니다.'
  if (city === PARTNER_CITY) {
    return '경상남도 창원시 · 제휴 시공업체가 있습니다. 마산·진해도 이 시에 포함됩니다.'
  }
  const region = regions.find((item) => item.city === city)
  return region ? `${region.province} ${city} · 협력업체 없음` : city
}

function RegionShape({
  region,
  hot,
  onHot,
}: {
  region: MapRegion
  hot: Hot
  onHot: (city: Hot) => void
}) {
  const partner = region.city === PARTNER_CITY
  const active = hot === region.city
  const label = `${region.province} ${region.name}`
  return (
    <path
      className={`city${partner ? ' is-partner' : ''}${active ? ' is-hot' : ''}`}
      d={region.d}
      fillRule="evenodd"
      onMouseEnter={() => onHot(region.city)}
      onMouseLeave={() => onHot(null)}
      onClick={() => onHot(region.city)}
    >
      <title>{label}</title>
    </path>
  )
}

function MapFrame({
  title,
  label,
  view,
  areas,
  outlines,
  hot,
  onHot,
  zoom,
}: {
  title: string
  label: string
  view: { x: number; y: number; w: number; h: number }
  areas: MapRegion[]
  outlines: ProvinceOutline[]
  hot: Hot
  onHot: (city: Hot) => void
  zoom?: boolean
}) {
  return (
    <figure className={zoom ? 'korea-map korea-map-zoom' : 'korea-map'}>
      <svg viewBox={`${view.x} ${view.y} ${view.w} ${view.h}`} role="img" aria-label={label}>
        <rect x={view.x} y={view.y} width={view.w} height={view.h} fill="#d7e4ec" />
        {areas
          .filter((region) => region.city !== PARTNER_CITY)
          .map((region) => (
            <RegionShape key={region.code} region={region} hot={hot} onHot={onHot} />
          ))}
        {outlines.map((outline) => (
          <path key={outline.code} className="prov" d={outline.d} fillRule="evenodd" />
        ))}
        {areas
          .filter((region) => region.city === PARTNER_CITY)
          .map((region) => (
            <RegionShape key={region.code} region={region} hot={hot} onHot={onHot} />
          ))}
        {zoom ? (
          <text className="map-label" x={partnerMark.x} y={partnerMark.y} textAnchor="middle">
            {partnerMark.name}
          </text>
        ) : null}
      </svg>
      <figcaption>{title}</figcaption>
    </figure>
  )
}

export function KoreaPartnerMap() {
  const [hot, setHot] = useState<Hot>(null)
  const gyeongnam = regions.filter((region) => region.provCode === '38')
  const gyeongnamOutline = provinceOutlines.filter((outline) => outline.code === '38')

  return (
    <div className="korea-board">
      <div className="korea-maps">
        <MapFrame
          title="대한민국 시·도"
          label="대한민국 시·도 지도. 창원시에 협력업체가 있습니다."
          view={mapView}
          areas={regions}
          outlines={provinceOutlines}
          hot={hot}
          onHot={setHot}
        />
        <MapFrame
          title="경상남도 시·군"
          label="경상남도 시·군 지도. 창원시가 색으로 표시되어 있습니다."
          view={gyeongnamView}
          areas={gyeongnam}
          outlines={gyeongnamOutline}
          hot={hot}
          onHot={setHot}
          zoom
        />
      </div>
      <p className="korea-tip">{tipFor(hot)}</p>
      <div className="korea-legend">
        <span>
          <i className="swatch is-on" /> 협력업체 있음
        </span>
        <span>
          <i className="swatch" /> 협력업체 없음
        </span>
      </div>
      <div className="region-table-wrap">
        <table className="region-table">
          <thead>
            <tr>
              <th>시·도</th>
              <th>시·군</th>
            </tr>
          </thead>
          <tbody>
            {regionIndex.map((group) => {
              const rowHot = group.metro ? hot === group.name : group.cities.includes(hot ?? '')
              return (
                <tr key={group.code} className={rowHot ? 'is-hot' : undefined}>
                  <th scope="row">{group.name}</th>
                  <td>
                    {group.metro ? (
                      <span className="city-note">시 전체 · 협력업체 없음</span>
                    ) : (
                      group.cities.map((city) => {
                        const partner = city === PARTNER_CITY
                        return (
                          <button
                            key={city}
                            type="button"
                            className={`city-chip${partner ? ' is-partner' : ''}${hot === city ? ' is-hot' : ''}`}
                            onMouseEnter={() => setHot(city)}
                            onMouseLeave={() => setHot(null)}
                            onFocus={() => setHot(city)}
                            onBlur={() => setHot(null)}
                          >
                            {partner ? '창원시 · 협력' : city}
                          </button>
                        )
                      })
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
