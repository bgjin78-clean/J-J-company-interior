export type ServiceItem = {
  id: string
  title: string
  summary: string
  points: string[]
  image: string
  imageAlt: string
}

export const demolitionServices: ServiceItem[] = [
  {
    id: 'interior-demo',
    title: '인테리어철거',
    summary: '리모델링 전에 기존 마감재를 걷어 내고, 다음 공정이 들어가게 현장을 비우는 인테리어철거입니다.',
    points: ['화장실·주방·거실 마감 해체', '남길 배관·전기 표시', '후속 시공 동선 확보'],
    image: '/images/demo.jpg',
    imageAlt: '인테리어철거를 준비하는 실내',
  },
  {
    id: 'restore',
    title: '원상복구철거',
    summary: '임대가 끝날 때 계약서에 적힌 범위만 되돌려 인도하는 원상복구철거입니다.',
    points: ['복구 범위 사진 대조', '바닥·벽·천장 마감 철거', '폐기물 반출 후 현장 인도'],
    image: '/images/restore.jpg',
    imageAlt: '원상복구철거를 앞둔 빈 실내',
  },
  {
    id: 'commercial',
    title: '상가철거',
    summary: '매장, 학원, 사무실을 비울 때 집기와 부착 인테리어를 일정에 맞춰 걷어 내는 상가철거입니다.',
    points: ['집기·간판 틀·가벽 해체', '영업 시간에 맞춘 야간·주말 협의', '승강기·하역 동선 확인'],
    image: '/images/commercial.jpg',
    imageAlt: '상가철거 후 비어 있는 상업 공간',
  },
  {
    id: 'restaurant',
    title: '식당철거',
    summary: '식당과 카페의 홀, 주방 설비, 덕트를 영업이 끝난 일정에 맞춰 분리하는 식당철거입니다.',
    points: ['홀 집기·칸막이·바닥', '주방 설비·후드·덕트', '기름 구간은 따로 반출'],
    image: '/images/commercial.jpg',
    imageAlt: '식당철거로 비워 낸 상업 공간',
  },
  {
    id: 'bathroom-kitchen',
    title: '욕실주방철거',
    summary: '화장실 타일과 주방 싱크대처럼 물이 있는 마감을 누수 구간과 나눠 분리하는 욕실주방철거입니다.',
    points: ['타일·위생도기·수전', '싱크대·상판·후드', '하부 방수층 확인'],
    image: '/images/wet.jpg',
    imageAlt: '욕실주방철거 대상인 세면 공간',
  },
  {
    id: 'partial',
    title: '부분철거',
    summary: '살려 둘 마감은 남기고, 손볼 구간만 해체합니다.',
    points: ['가벽·칸막이·마루·타일 일부', '분진이 번지지 않게 보양', '잔재 임시 정리'],
    image: '/images/partial.jpg',
    imageAlt: '부분 해체 공사 중인 실내',
  },
  {
    id: 'waste',
    title: '폐기물 처리',
    summary: '철거 잔재는 종류별로 나눠 반출하고, 처리 절차는 견적에 미리 적습니다.',
    points: ['혼합 건설폐기물 분리', '대형 폐기물·고철 안내', '작업 후 바닥 청소'],
    image: '/images/waste.jpg',
    imageAlt: '정리 중인 공사 잔재',
  },
]

export const interiorServices: ServiceItem[] = [
  {
    id: 'bathroom',
    title: '화장실',
    summary: '욕실이라고도 부르는 화장실을 방수, 타일, 도기까지 다시 짜는 시공입니다.',
    points: ['방수와 타일', '세면대·양변기·수전', '환기·거울장'],
    image: '/images/bathroom.jpg',
    imageAlt: '타일 마감이 된 화장실',
  },
  {
    id: 'kitchen',
    title: '주방',
    summary: '수납과 동선에 맞춰 주방을 다시 배치합니다. 싱크대만 바꾸는 상담도 받습니다.',
    points: ['상부장·하부장', '상판과 후드', '조명·콘센트 위치'],
    image: '/images/kitchen.jpg',
    imageAlt: '우드 상판이 있는 주방',
  },
  {
    id: 'sink',
    title: '싱크대',
    summary: '상판, 하부장, 수전만 교체해도 주방 사용이 달라지는 싱크대 시공입니다.',
    points: ['싱크대 교체·이전', '상판·수전', '배수와 벽 타일 마감'],
    image: '/images/kitchen.jpg',
    imageAlt: '싱크대가 놓인 주방',
  },
  {
    id: 'tile-paint',
    title: '타일',
    summary: '오염되거나 톤이 어긋난 벽과 바닥을 타일과 도장으로 맞춥니다.',
    points: ['벽·바닥 타일', '실내 페인트', '갈라진 면 보수 후 시공'],
    image: '/images/tile.jpg',
    imageAlt: '타일 마감이 끝난 실내',
  },
  {
    id: 'lighting',
    title: '조명',
    summary: '등 위치와 스위치 높이를 바꿔 방의 밝기를 용도에 맞추는 조명 시공입니다.',
    points: ['매입등·간접등·펜던트', '스위치·콘센트 이동', '마감 전 점등 확인'],
    image: '/images/lighting.jpg',
    imageAlt: '조명이 있는 실내',
  },
  {
    id: 'wallpaper-floor',
    title: '도배장판',
    summary: '벽지와 바닥재만 갈라도 집 인상이 바뀌는 도배장판 마감입니다.',
    points: ['합지·실크 도배', '장판·마루', '들뜸·곰팡이 면 정리 후 시공'],
    image: '/images/wallpaper.jpg',
    imageAlt: '도배장판이 끝난 거실',
  },
  {
    id: 'molding',
    title: '몰딩',
    summary: '천장선과 바닥선을 정리해 도배 끝이 단정하게 보이게 하는 몰딩 시공입니다.',
    points: ['천장몰딩·중간몰딩', '걸레받이·문선', '우물천정 이음과 틈 코킹'],
    image: '/images/molding.jpg',
    imageAlt: '몰딩이 있는 흰 벽과 바닥',
  },
  {
    id: 'ceiling',
    title: '우물천정',
    summary: '거실 천장을 한 단 올려 간접조명을 넣는 우물천정 시공입니다. 우물천장으로 부르는 현장도 같은 공정입니다.',
    points: ['우물 단차와 간접조명', '몰딩·도배장판과 이음', '등 위치와 점검구'],
    image: '/images/lighting.jpg',
    imageAlt: '간접조명이 들어간 우물천정',
  },
  {
    id: 'door',
    title: '문·중문·목공',
    summary: '방문, 중문, 붙박이 수납으로 동선과 수납을 같이 고칩니다.',
    points: ['방문·문틀·중문', '붙박이장·신발장', '문틈 소음 보강'],
    image: '/images/door.jpg',
    imageAlt: '우드 도어와 복도',
  },
  {
    id: 'partial-repair',
    title: '부분수리·집수리',
    summary: '전체를 뜯지 않고 새는 곳, 들뜬 곳, 깨진 곳만 손봅니다.',
    points: ['누수·곰팡이·틈', '타일 파손·장판 들뜸', '소규모 보수'],
    image: '/images/repair.jpg',
    imageAlt: '집수리 도구와 작업 장면',
  },
]

export const featured = [
  { id: 'demo', name: '인테리어철거', path: '/demolition#interior-demo', image: '/images/demo.jpg' },
  { id: 'commercial', name: '상가철거', path: '/demolition#commercial', image: '/images/commercial.jpg' },
  { id: 'bathroom', name: '화장실', path: '/interior#bathroom', image: '/images/bathroom.jpg' },
  { id: 'kitchen', name: '주방', path: '/interior#kitchen', image: '/images/kitchen.jpg' },
  { id: 'wallpaper', name: '도배장판', path: '/interior#wallpaper-floor', image: '/images/wallpaper.jpg' },
  { id: 'ceiling', name: '우물천정', path: '/interior#ceiling', image: '/images/lighting.jpg' },
] as const

export const processSteps = [
  {
    step: '01',
    title: '범위 확인',
    desc: '철거가 필요한지, 인테리어만으로 끝나는지 상담 내용으로 먼저 가릅니다.',
  },
  {
    step: '02',
    title: '방문일 안내',
    desc: '주소와 공사 범위를 보고 현장에 갈 날을 잡습니다.',
  },
  {
    step: '03',
    title: '현장 상담·견적',
    desc: '범위, 자재, 철거 잔재 처리까지 현장에서 확인하고 일정과 금액을 안내합니다.',
  },
  {
    step: '04',
    title: '시공 후 기록',
    desc: '공사가 끝나면 그 지역 이야기를 후기 글에 남겨 다음 상담에 참고합니다.',
  },
]
