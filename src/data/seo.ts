import { areas } from './areas'
import { faqs, homeFaqs } from './faq'
import { HOME_DESCRIPTION, HOME_TITLE, SITE } from './site'

export const ORIGIN = 'https://interior.jjadcompany.co.kr'

export const demolitionTerms = [
  { label: '인테리어철거', href: '/demolition#interior-demo' },
  { label: '원상복구철거', href: '/demolition#restore' },
  { label: '상가철거', href: '/demolition#commercial' },
  { label: '식당철거', href: '/demolition#restaurant' },
  { label: '욕실주방철거', href: '/demolition#bathroom-kitchen' },
] as const

export const interiorTerms = [
  { label: '화장실', href: '/interior#bathroom' },
  { label: '주방', href: '/interior#kitchen' },
  { label: '싱크대', href: '/interior#sink' },
  { label: '타일', href: '/interior#tile-paint' },
  { label: '조명', href: '/interior#lighting' },
  { label: '도배장판', href: '/interior#wallpaper-floor' },
  { label: '몰딩', href: '/interior#molding' },
  { label: '우물천정', href: '/interior#ceiling' },
] as const

export const REGION_LINE = '창원, 마산, 진해, 김해, 밀양, 함안'

export const DEMOLITION_TITLE = '인테리어철거·원상복구철거·상가철거·식당철거·욕실주방철거'
export const DEMOLITION_DESCRIPTION = `${REGION_LINE} 인테리어철거, 원상복구철거, 상가철거, 식당철거, 욕실주방철거.`

export const INTERIOR_TITLE = '화장실·주방·싱크대·타일·조명·도배장판·몰딩·우물천정'
export const INTERIOR_DESCRIPTION = `${REGION_LINE} 화장실, 주방, 싱크대, 타일, 조명, 도배장판, 몰딩, 우물천정 인테리어 상담.`

export const AREAS_TITLE = '창원·마산·진해·김해·밀양·함안 철거·인테리어'
export const AREAS_DESCRIPTION = `${REGION_LINE} 철거·인테리어 현장 글. 인테리어철거, 상가철거, 화장실, 도배장판, 우물천정이 지역 이야기 안에 있습니다.`

export const CONTACT_TITLE = '철거·인테리어 상담 | 창원·마산·진해·김해·밀양·함안'
export const CONTACT_DESCRIPTION = `${REGION_LINE} 인테리어철거, 상가철거, 식당철거, 화장실, 주방, 도배장판, 우물천정 상담.`

export const PARTNERS_TITLE = '시공 협력 | 철거·인테리어'
export const PARTNERS_DESCRIPTION = '철거·인테리어를 직접 하는 업체의 소개를 받습니다.'

export const REVIEWS_TITLE = '작업후기 | 창원 철거·인테리어'
export const REVIEWS_DESCRIPTION = `${REGION_LINE} 인테리어철거, 상가철거, 화장실, 주방, 도배장판 작업후기.`

export function areaTitle(name: string) {
  return `${name} 인테리어철거·상가철거·화장실·도배장판`
}

export function areaSearchCopy(name: string) {
  return `${name}에서는 인테리어철거, 원상복구철거, 상가철거, 식당철거, 욕실주방철거를 상담하고, 마감은 화장실, 주방, 싱크대, 타일, 조명, 도배장판, 몰딩, 우물천정으로 이어갑니다.`
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
      h1: '창원 철거와 인테리어를 한 흐름으로 안내합니다',
      placename: '창원시',
    },
    {
      path: '/demolition',
      title: DEMOLITION_TITLE,
      description: DEMOLITION_DESCRIPTION,
      h1: '인테리어철거, 상가철거, 식당철거',
      placename: '창원시',
    },
    {
      path: '/interior',
      title: INTERIOR_TITLE,
      description: INTERIOR_DESCRIPTION,
      h1: '화장실, 주방, 도배장판, 우물천정',
      placename: '창원시',
    },
    {
      path: '/areas',
      title: AREAS_TITLE,
      description: AREAS_DESCRIPTION,
      h1: REGION_LINE,
      placename: '창원시',
    },
    ...areas.map((area) => ({
      path: `/areas/${area.slug}`,
      title: areaTitle(area.name),
      description: areaSearchCopy(area.name),
      h1: `${area.name} 철거·인테리어`,
      placename: area.name,
    })),
    {
      path: '/contact',
      title: CONTACT_TITLE,
      description: CONTACT_DESCRIPTION,
      h1: '시공 상담',
      placename: '창원시',
    },
    {
      path: '/partners',
      title: PARTNERS_TITLE,
      description: PARTNERS_DESCRIPTION,
      h1: '함께 현장을 보는 업체',
      placename: '창원시',
    },
    {
      path: '/reviews',
      title: REVIEWS_TITLE,
      description: REVIEWS_DESCRIPTION,
      h1: '지역에 남긴 시공 글',
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
      alternateName: [SITE.nameKo, '철거·인테리어'],
      url: `${ORIGIN}/`,
      telephone: '+82-10-4026-0892',
      description: HOME_DESCRIPTION,
      areaServed: areas.map((area) => ({
        '@type': 'AdministrativeArea',
        name: area.region,
      })),
      knowsAbout,
    },
    {
      '@type': 'WebSite',
      '@id': `${ORIGIN}/#website`,
      name: '철거·인테리어',
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

  if (normalized === '/' || normalized === '/contact') {
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
  if (path === '/demolition') items.push({ name: '철거', path })
  else if (path === '/interior') items.push({ name: '인테리어', path })
  else if (path === '/areas') items.push({ name: '시공지역', path })
  else if (path.startsWith('/areas/')) {
    items.push({ name: '시공지역', path: '/areas' })
    const area = areas.find((item) => path === `/areas/${item.slug}`)
    items.push({ name: area ? `${area.name} 철거·인테리어` : '지역', path })
  } else if (path === '/contact') items.push({ name: '문의', path })
  else if (path === '/partners') items.push({ name: '시공 협력', path })
  else if (path === '/reviews') items.push({ name: '작업후기', path })

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
