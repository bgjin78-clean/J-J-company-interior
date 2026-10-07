export const HOME_TITLE = '창원 철거·인테리어 | 인테리어철거·상가철거·화장실'
export const HOME_DESCRIPTION =
  '창원, 마산, 진해, 김해, 밀양, 함안 철거·인테리어 상담. 인테리어철거, 원상복구철거, 상가철거, 식당철거, 욕실주방철거와 화장실, 주방, 싱크대, 타일, 조명, 도배장판, 몰딩, 우물천정.'

export const SITE = {
  name: 'J&J adcompany',
  nameKo: '제이앤제이 애드컴퍼니',
  phoneDisplay: '010-4026-0892',
  phoneTel: '01040260892',
  /** 넣으면 문의 양식이 메일 앱으로 전달됩니다. */
  email: '',
  hours: '평일 09:00–18:00',
  description: HOME_DESCRIPTION,
} as const

export const priorityRegions = ['창원', '마산', '진해', '김해', '밀양', '함안'] as const

export const phoneHref = `tel:${SITE.phoneTel}`

export function pageTitle(page?: string) {
  return page?.trim() ? page : HOME_TITLE
}
