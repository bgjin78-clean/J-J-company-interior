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
    title: '창원 상남동에서 상가철거를 마친 뒤',
    body: '영업이 끝난 매장에서 집기와 가벽을 걷어 내는 상가철거였습니다. 바닥까지 비운 자리는 인테리어철거로 다음 공정을 열었고, 아파트 세대는 화장실과 도배장판으로 끝을 맞췄습니다.',
  },
  {
    id: 'masan',
    area: '마산',
    slug: 'masan',
    category: '원상복구철거',
    title: '마산 오동동, 원상복구철거와 식당철거',
    body: '임대가 끝난 점포는 계약에 적힌 범위만 되돌려 인도하는 원상복구철거로 정리했습니다. 홀을 비우는 식당철거는 주방 설비와 덕트를 따로 분리한 뒤 반출했습니다.',
  },
  {
    id: 'jinhae',
    area: '진해',
    slug: 'jinhae',
    category: '욕실주방철거',
    title: '진해 용원 아파트의 욕실주방철거',
    body: '화장실 타일과 주방 싱크대를 먼저 들어내는 욕실주방철거를 하고, 입주 전에 도배장판과 조명을 이었습니다. 구도심 주택은 반출로가 좁아 사진을 받고 일정을 잡았습니다.',
  },
  {
    id: 'gimhae',
    area: '김해',
    slug: 'gimhae',
    category: '화장실',
    title: '김해 장유, 화장실과 싱크대',
    body: '장유 단지 화장실은 방수와 타일부터 다시 짰습니다. 주방은 전체를 뜯지 않고 싱크대와 상판만 바꿨고, 오염된 벽 타일만 맞춰 끝을 냈습니다.',
  },
  {
    id: 'miryang',
    area: '밀양',
    slug: 'miryang',
    category: '우물천정',
    title: '밀양 삼문동 도배장판과 우물천정',
    body: '삼문동 거실은 도배장판을 갈고 천장 몰딩으로 선을 정리했습니다. 우물천정은 한 단 올려 간접조명을 넣었고, 우물천장으로 부르는 현장도 같은 순서로 닫았습니다.',
  },
  {
    id: 'haman',
    area: '함안',
    slug: 'haman',
    category: '인테리어철거',
    title: '함안 칠원 주택의 인테리어철거',
    body: '칠원읍 주택은 손볼 구간만 인테리어철거로 비웠습니다. 주방 동선과 조명을 이어서 정리했고, 창고가 섞인 자리는 잔재 종류를 나눠 반출했습니다.',
  },
]
