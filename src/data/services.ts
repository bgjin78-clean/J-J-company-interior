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
    id: 'partial',
    title: '부분철거',
    summary: '살려 둘 마감은 남기고, 손볼 구간만 제휴 시공업체가 해체합니다.',
    points: ['가벽·칸막이·마루·타일 일부', '분진이 번지지 않게 보양', '잔재 임시 정리'],
    image: '/images/partial.jpg',
    imageAlt: '부분 해체 공사 중인 실내',
  },
  {
    id: 'interior-demo',
    title: '인테리어철거',
    summary: '리모델링 전에 기존 마감재를 걷어 내고 다음 공정이 들어가게 현장을 비웁니다.',
    points: ['욕실·주방·거실 마감 해체', '남길 배관·전기 표시', '후속 시공 동선 확보'],
    image: '/images/demo.jpg',
    imageAlt: '현장 철거를 준비하는 작업 공간',
  },
  {
    id: 'commercial',
    title: '상가·사무실 철거',
    summary: '매장, 학원, 사무실을 비울 때 집기와 부착 인테리어를 일정에 맞춰 걷어 냅니다.',
    points: ['집기·간판 틀·가벽 해체', '영업 시간에 맞춘 야간·주말 협의', '승강기·하역 동선 확인'],
    image: '/images/commercial.jpg',
    imageAlt: '비어 있는 사무실 공간',
  },
  {
    id: 'restore',
    title: '원상복구 철거',
    summary: '임대 종료 때 계약서에 적힌 범위만 되돌려 인도할 수 있게 정리합니다.',
    points: ['복구 범위 사진 대조', '바닥·벽·천장 마감 철거', '폐기물 반출 후 현장 인도'],
    image: '/images/restore.jpg',
    imageAlt: '원상복구를 앞둔 빈 실내',
  },
  {
    id: 'bathroom-kitchen',
    title: '욕실·주방 철거',
    summary: '물이 있는 공간은 누수 구간을 가린 뒤 타일, 도기, 싱크를 분리합니다.',
    points: ['타일·위생도기·수전', '싱크대·상판·후드', '하부 방수층 확인'],
    image: '/images/wet.jpg',
    imageAlt: '욕실 설비와 세면 공간',
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
    title: '욕실 리모델링',
    summary: '방수, 타일, 도기까지 물 쓰는 공간을 다시 짜는 시공입니다.',
    points: ['방수와 타일', '세면대·양변기·수전', '환기·거울장'],
    image: '/images/bathroom.jpg',
    imageAlt: '밝은 타일 욕실',
  },
  {
    id: 'kitchen',
    title: '주방 인테리어',
    summary: '싱크와 수납, 상판 높이를 동선에 맞춰 다시 배치합니다.',
    points: ['싱크대·수납장', '상판 교체', '후드·조명·콘센트'],
    image: '/images/kitchen.jpg',
    imageAlt: '우드 상판 주방',
  },
  {
    id: 'wallpaper-floor',
    title: '도배·장판',
    summary: '벽지와 바닥재만 갈라도 집 인상이 바뀌는 기본 마감입니다.',
    points: ['합지·실크 도배', '장판·마루', '들뜸·곰팡이 면 정리 후 시공'],
    image: '/images/wallpaper.jpg',
    imageAlt: '벽지와 바닥이 정리된 거실',
  },
  {
    id: 'lighting',
    title: '조명·전기 마감',
    summary: '등 위치와 스위치 높이를 바꿔 방의 밝기를 용도에 맞춥니다.',
    points: ['매입등·간접등·펜던트', '스위치·콘센트 이동', '마감 전 점등 확인'],
    image: '/images/lighting.jpg',
    imageAlt: '펜던트 조명이 있는 실내',
  },
  {
    id: 'molding',
    title: '몰딩·걸레받이',
    summary: '천장선과 바닥선을 정리해 도배 끝이 단정하게 보이게 합니다.',
    points: ['천장몰딩·중간몰딩', '걸레받이·문선', '틈 코킹'],
    image: '/images/molding.jpg',
    imageAlt: '몰딩이 있는 흰 벽과 바닥',
  },
  {
    id: 'tile-paint',
    title: '타일·페인트',
    summary: '오염되거나 톤이 어긋난 벽과 바닥을 타일과 도장으로 맞춥니다.',
    points: ['벽·바닥 타일', '실내 페인트', '갈라진 면 보수 후 도장'],
    image: '/images/tile.jpg',
    imageAlt: '페인트와 마감이 끝난 거실',
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
  { id: 'bathroom', name: '욕실', path: '/interior#bathroom', image: '/images/bathroom.jpg' },
  { id: 'kitchen', name: '주방', path: '/interior#kitchen', image: '/images/kitchen.jpg' },
  { id: 'wallpaper', name: '도배장판', path: '/interior#wallpaper-floor', image: '/images/wallpaper.jpg' },
  { id: 'lighting', name: '조명', path: '/interior#lighting', image: '/images/lighting.jpg' },
  { id: 'remodel', name: '리모델링', path: '/interior', image: '/images/remodel.jpg' },
  { id: 'demo', name: '철거', path: '/demolition', image: '/images/demo.jpg' },
] as const

export const processSteps = [
  {
    step: '01',
    title: '권역 확인',
    desc: '주소가 창원·마산·진해·밀양·김해·함안인지 먼저 봅니다. 이 여섯 곳이 현재 우선 홍보 지역입니다.',
  },
  {
    step: '02',
    title: '제휴 파트너 연결',
    desc: '창원 상담은 선정된 제휴 시공업체로 안내합니다. 인접 권역도 같은 홍보 순서로 연결을 검토합니다.',
  },
  {
    step: '03',
    title: '현장 상담·견적',
    desc: '범위, 자재, 철거 잔재 처리까지 제휴 업체가 현장에서 확인하고 일정과 금액을 안내합니다.',
  },
  {
    step: '04',
    title: '시공 후 기록',
    desc: '공사가 끝나면 동의한 작업 이야기를 이 플랫폼 후기에 남겨 다음 상담에 참고합니다.',
  },
]
