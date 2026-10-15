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

export const DEMOLITION_TITLE = '경남 철거·정리 | JJ애드컴퍼니 · 상가철거·원상복구·부분철거'
export const DEMOLITION_DESCRIPTION = `${REGION_LINE}. 제이앤제이 애드컴퍼니의 인테리어철거, 원상복구철거, 상가철거, 식당철거, 부분철거와 폐기물 정리. 상담 ${SITE.phoneDisplay}.`

export const INTERIOR_TITLE = '경남 인테리어 | JJ애드컴퍼니 · 화장실·주방·도배장판·우물천정'
export const INTERIOR_DESCRIPTION = `${REGION_LINE} 인테리어. 제이앤제이 애드컴퍼니가 화장실, 주방, 싱크대, 타일, 조명, 도배장판, 몰딩, 우물천정을 필요한 칸만 진행합니다.`

export const AREAS_TITLE = '시공지역 | 창원·마산·진해·김해·밀양·함안 · JJ애드컴퍼니'
export const AREAS_DESCRIPTION = `${REGION_LINE} 시공지역. 지역마다 상가철거, 원상복구철거, 화장실, 도배장판, 우물천정 조건이 다릅니다. ${SITE.nameKo}.`

export const CONTACT_TITLE = '문의·FAQ | 경남 철거·인테리어 상담 · JJ애드컴퍼니'
export const CONTACT_DESCRIPTION = `${REGION_LINE} 시공상담과 업체상담. 인테리어철거, 상가철거, 화장실, 주방, 도배장판, 우물천정. 전화 ${SITE.phoneDisplay}.`

export const PARTNERS_TITLE = '철거·인테리어 시공 협력 | JJ애드컴퍼니'
export const PARTNERS_DESCRIPTION = '경남에서 철거와 인테리어를 직접 하는 팀의 업체상담을 받습니다. 제이앤제이 애드컴퍼니.'

export const REVIEWS_TITLE = '작업후기 | 경남 철거·인테리어 현장 · JJ애드컴퍼니'
export const REVIEWS_DESCRIPTION = `${REGION_LINE} 작업후기. 인테리어철거, 상가철거, 화장실, 주방, 도배장판을 어떻게 나눠 적었는지 남긴 글입니다.`

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
      h1: '경남 철거·인테리어는 범위를 나눠 적습니다',
      placename: '창원시',
    },
    {
      path: PATHS.cheolgeo,
      title: DEMOLITION_TITLE,
      description: DEMOLITION_DESCRIPTION,
      h1: '철거·정리는 비울 곳만 걷습니다',
      placename: '창원시',
    },
    {
      path: PATHS.interior,
      title: INTERIOR_TITLE,
      description: INTERIOR_DESCRIPTION,
      h1: '인테리어는 손보는 칸만 닫습니다',
      placename: '창원시',
    },
    {
      path: PATHS.region,
      title: AREAS_TITLE,
      description: AREAS_DESCRIPTION,
      h1: '시공지역',
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
      h1: '문의·FAQ',
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
      h1: '작업후기',
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
      name: SITE.nameKo,
      alternateName: [SITE.name, 'JJ애드컴퍼니', '경남 철거·인테리어'],
      url: `${ORIGIN}/`,
      telephone: '+82-10-4026-0892',
      description: HOME_DESCRIPTION,
      slogan: '경남 철거·인테리어는 범위를 나눠 적습니다',
      openingHours: 'Mo-Fr 09:00-18:00',
      areaServed: areas.map((area) => ({
        '@type': 'AdministrativeArea',
        name: area.region,
      })),
      knowsAbout,
    },
    {
      '@type': 'WebSite',
      '@id': `${ORIGIN}/#website`,
      name: 'JJ애드컴퍼니',
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

  const faqItems =
    normalized === '/'
      ? homeFaqs()
      : normalized === PATHS.consult
        ? faqs
        : normalized === PATHS.interior
          ? faqs.filter((item) => item.category === '인테리어')
          : normalized === PATHS.cheolgeo
            ? faqs.filter((item) => item.category === '철거')
            : null
  if (faqItems && faqItems.length > 0) {
    const items = faqItems
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
  if (path === PATHS.cheolgeo) items.push({ name: '철거·정리', path })
  else if (path === PATHS.interior) items.push({ name: '인테리어', path })
  else if (path === PATHS.region) items.push({ name: '시공지역', path })
  else if (path.startsWith(`${PATHS.region}/`)) {
    items.push({ name: '시공지역', path: PATHS.region })
    const area = areas.find((item) => path === `${PATHS.region}/${item.slug}`)
    items.push({ name: area ? `${area.name} 철거·인테리어` : '지역', path })
  }   else if (path === PATHS.consult) items.push({ name: '문의·FAQ', path })
  else if (path === PATHS.partners) items.push({ name: '시공 협력', path })
  else if (path === PATHS.notes) items.push({ name: '작업후기', path })

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
