export type Story = {
  id: string
  area: string
  slug: string
  category: string
  title: string
  body: string
}

export const stories: Story[] = [
  {
    id: 'changwon',
    area: '창원',
    slug: 'changwon',
    category: '상가철거',
    title: '상남동 상가철거는 문 닫은 뒤에만 잡았습니다',
    body: '옆 가게가 낮에 영업해서 집기와 가벽은 폐점 뒤에 걷었습니다. 바닥 인테리어철거는 다음 날 오전으로 넘겼고, 같은 건물의 세대 화장실과 도배장판은 상가 일정에 넣지 않았습니다.',
  },
  {
    id: 'masan',
    area: '마산',
    slug: 'masan',
    category: '원상복구철거',
    title: '오동동 계약은 홀까지만 원상복구철거였습니다',
    body: '임대 문장에 주방은 없었습니다. 홀은 원상복구철거로 닫고, 후드와 덕트는 식당철거로 줄을 나눠 임대인 확인을 받은 뒤 밤에 분리했습니다.',
  },
  {
    id: 'jinhae',
    area: '진해',
    slug: 'jinhae',
    category: '욕실주방철거',
    title: '용원 욕실주방철거와 도배장판을 같은 주로 넣지 않았습니다',
    body: '타일과 싱크대를 들어낸 주는 방수 확인만 했습니다. 도배장판과 조명은 입주 청소가 끝난 다음 주로 옮겼고, 구도심 주택은 1톤 트럭 진입 사진을 먼저 받았습니다.',
  },
  {
    id: 'gimhae',
    area: '김해',
    slug: 'gimhae',
    category: '화장실',
    title: '장유는 화장실 전체, 싱크대는 상판만',
    body: '화장실 인테리어는 방수와 타일로 닫았습니다. 주방은 하부장을 두고 싱크대와 수전만 바꿨고, 오염된 벽 타일 폭만 철거 범위에 넣었습니다.',
  },
  {
    id: 'miryang',
    area: '밀양',
    slug: 'miryang',
    category: '우물천정',
    title: '삼문동 우물천정은 도배장판보다 목공이 먼저였습니다',
    body: '간접조명 배선을 끝내고 단차 메움을 마친 뒤에 도배장판과 몰딩을 올렸습니다. 우물천장으로 문의한 집도 같은 순서로 적었습니다.',
  },
  {
    id: 'haman',
    area: '함안',
    slug: 'haman',
    category: '인테리어철거',
    title: '칠원 인테리어철거는 주방과 조명 범위만 비웠습니다',
    body: '집 전체를 걷지 않고 손볼 벽과 바닥만 인테리어철거로 표시했습니다. 창고 잔재는 생활쓰레기와 섞지 않고 종류를 나눠 반출한 뒤 주방과 조명을 이었습니다.',
  },
]
