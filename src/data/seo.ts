import { areas } from './areas'
import { faqs, homeFaqs } from './faq'
import { HOME_DESCRIPTION, HOME_TITLE, SITE } from './site'

export const ORIGIN = 'https://interior.jjadcompany.co.kr'

export const PATHS = {
  cheolgeo: '/cheolgeo',
  interior: '/interior-magam',
  region: '/gwonyeok',
  notes: '/hyeonjang',
  consult: '/sangdam',
  partners: '/partners',
} as const

export const demolitionTerms = [
  { label: '인테리어철거', href: `${PATHS.cheolgeo}#haeche` },
  { label: '원상복구철거', href: `${PATHS.cheolgeo}#imdae` },
  { label: '상가철거', href: `${PATHS.cheolgeo}#sangga` },
  { label: '식당철거', href: `${PATHS.cheolgeo}#sikdang` },
  { label: '욕실주방철거', href: `${PATHS.cheolgeo}#mul` },
] as const

export const interiorTerms = [
  { label: '화장실', href: `${PATHS.interior}#hwajangsil` },
  { label: '주방', href: `${PATHS.interior}#jubang` },
  { label: '싱크대', href: `${PATHS.interior}#sinkdae` },
  { label: '타일', href: `${PATHS.interior}#tile` },
  { label: '조명', href: `${PATHS.interior}#jomyeong` },
  { label: '도배장판', href: `${PATHS.interior}#dobae` },
  { label: '몰딩', href: `${PATHS.interior}#molding-line` },
  { label: '우물천정', href: `${PATHS.interior}#umul` },
] as const

export const REGION_LINE = '창원, 마산, 진해, 김해, 밀양, 함안'

export const DEMOLITION_TITLE = '경남권 철거 | 인테리어철거·상가철거·식당철거·원상복구'
export const DEMOLITION_DESCRIPTION = `${REGION_LINE}에서 인테리어철거, 원상복구철거, 상가철거, 식당철거, 욕실주방철거를 금액 줄로 나눠 적습니다.`

export const INTERIOR_TITLE = '경남권 인테리어 | 화장실·주방·싱크대·도배장판·우물천정'
export const INTERIOR_DESCRIPTION = `${REGION_LINE} 인테리어. 화장실, 주방, 싱크대, 타일, 조명, 도배장판, 몰딩, 우물천정은 철거가 필요할 때만 앞에 해체를 붙입니다.`

export const AREAS_TITLE = '창원·마산·진해·김해·밀양·함안 철거·인테리어'
export const AREAS_DESCRIPTION = `${REGION_LINE} 철거·인테리어. 지역마다 상가철거, 원상복구철거, 화장실, 도배장판, 우물천정 진행이 달라집니다.`

export const CONTACT_TITLE = '경남권 철거·인테리어 상담'
export const CONTACT_DESCRIPTION = `${REGION_LINE} 인테리어철거, 상가철거, 식당철거, 화장실, 주방, 도배장판, 우물천정 상담.`

export const PARTNERS_TITLE = '철거·인테리어 시공 협력'
export const PARTNERS_DESCRIPTION = '경남권에서 철거와 인테리어를 직접 하는 팀의 소개를 받습니다.'

export const REVIEWS_TITLE = '경남권 철거·인테리어 현장 메모'
export const REVIEWS_DESCRIPTION = `${REGION_LINE} 인테리어철거, 상가철거, 화장실, 주방, 도배장판을 어떻게 나눠 적었는지 남긴 글입니다.`

export function areaTitle(name: string) {
  return `${name} 철거·인테리어 | 상가철거·화장실·도배장판`
}

export function areaSearchCopy(name: string) {
  return `${name}에서는 인테리어철거, 원상복구철거, 상가철거, 식당철거, 욕실주방철거를 먼저 고르고, 인테리어는 화장실, 주방, 싱크대, 타일, 조명, 도배장판, 몰딩, 우물천정 중에서 이번에 하는 것만 붙입니다.`
}

export type SeoEntry = {
  path: string
  title: string
  description: string
  h1: string
  placename: string
}

export function seoEntries(): SeoEntry[] {
  return [
    {
      path: '/',
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      h1: '철거는 필요한 곳만 걷어 내고, 인테리어는 그 자리에 맞춥니다',
      placename: '창원시',
    },
    {
      path: PATHS.cheolgeo,
      title: DEMOLITION_TITLE,
      description: DEMOLITION_DESCRIPTION,
      h1: '현장에 필요한 철거를 진행합니다',
      placename: '창원시',
    },
    {
      path: PATHS.interior,
      title: INTERIOR_TITLE,
      description: INTERIOR_DESCRIPTION,
      h1: '인테리어는 하는 항목만 닫습니다',
      placename: '창원시',
    },
    {
      path: PATHS.region,
      title: AREAS_TITLE,
      description: AREAS_DESCRIPTION,
      h1: '경남 여섯 지역의 철거·인테리어',
      placename: '창원시',
    },
    ...areas.map((area) => ({
      path: `${PATHS.region}/${area.slug}`,
      title: areaTitle(area.name),
      description: areaSearchCopy(area.name),
      h1: `${area.name} 철거를 먼저, 인테리어는 그다음`,
      placename: area.name,
    })),
    {
      path: PATHS.consult,
      title: CONTACT_TITLE,
      description: CONTACT_DESCRIPTION,
      h1: '철거와 인테리어 상담',
      placename: '창원시',
    },
    {
      path: PATHS.partners,
      title: PARTNERS_TITLE,
      description: PARTNERS_DESCRIPTION,
      h1: '철거·인테리어를 직접 하는 팀',
      placename: '창원시',
    },
    {
      path: PATHS.notes,
      title: REVIEWS_TITLE,
      description: REVIEWS_DESCRIPTION,
      h1: '현장에서 금액을 나눈 기록',
      placename: '창원시',
    },
  ]
}

export function findSeo(path: string) {
  const normalized = normalizePath(path)
  return seoEntries().find((entry) => entry.path === normalized)
}

export function normalizePath(path: string) {
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1)
  return path || '/'
}

function pageUrl(path: string) {
  return path === '/' ? `${ORIGIN}/` : `${ORIGIN}${path}`
}

export function jsonLdFor(path: string, title: string, description: string) {
  const normalized = normalizePath(path)
  const url = pageUrl(normalized)
  const knowsAbout = [
    ...demolitionTerms.map((term) => term.label),
    ...interiorTerms.map((term) => term.label),
  ]
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'ProfessionalService',
      '@id': `${ORIGIN}/#business`,
      name: SITE.name,
      alternateName: [SITE.nameKo, '경남권 철거·인테리어'],
      url: `${ORIGIN}/`,
      telephone: '+82-10-4026-0892',
      description: HOME_DESCRIPTION,
      slogan: '철거는 필요한 곳만 걷어 내고, 인테리어는 그 자리에 맞춥니다',
      areaServed: areas.map((area) => ({
        '@type': 'AdministrativeArea',
        name: area.region,
      })),
      knowsAbout,
    },
    {
      '@type': 'WebSite',
      '@id': `${ORIGIN}/#website`,
      name: '경남권 철거·인테리어',
      url: `${ORIGIN}/`,
      inLanguage: 'ko-KR',
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: 'ko-KR',
      isPartOf: { '@id': `${ORIGIN}/#website` },
      about: { '@id': `${ORIGIN}/#business` },
    },
    breadcrumb(normalized),
  ]

  if (normalized === '/' || normalized === PATHS.consult) {
    const items = normalized === '/' ? homeFaqs() : faqs
    graph.push({
      '@type': 'FAQPage',
      mainEntity: items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}

function breadcrumb(path: string) {
  const items: { name: string; path: string }[] = [{ name: '홈', path: '/' }]
  if (path === PATHS.cheolgeo) items.push({ name: '철거', path })
  else if (path === PATHS.interior) items.push({ name: '인테리어', path })
  else if (path === PATHS.region) items.push({ name: '경남권', path })
  else if (path.startsWith(`${PATHS.region}/`)) {
    items.push({ name: '경남권', path: PATHS.region })
    const area = areas.find((item) => path === `${PATHS.region}/${item.slug}`)
    items.push({ name: area ? `${area.name} 철거·인테리어` : '지역', path })
  } else if (path === PATHS.consult) items.push({ name: '상담', path })
  else if (path === PATHS.partners) items.push({ name: '시공 협력', path })
  else if (path === PATHS.notes) items.push({ name: '현장 메모', path })

  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  }
}
