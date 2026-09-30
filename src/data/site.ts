export const SITE = {
  name: 'J&J adcompany',
  nameKo: '제이앤제이 애드컴퍼니',
  phoneDisplay: '',
  phoneTel: '',
  /** 넣으면 문의 양식이 메일 앱으로 전달됩니다. */
  email: '',
  hours: '평일 09:00–18:00',
  description:
    'J&J adcompany는 철거·인테리어 시공 제휴업체를 홍보하는 광고대행 플랫폼입니다. 창원 제휴를 시작으로 마산, 진해, 밀양, 김해, 함안을 우선 안내합니다.',
} as const

export const priorityRegions = ['창원', '마산', '진해', '밀양', '김해', '함안'] as const

export function pageTitle(page?: string) {
  return page ? `${page} | ${SITE.name}` : `${SITE.name} | 철거·인테리어 홍보`
}
