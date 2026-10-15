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
    id: 'haeche',
    title: '인테리어철거',
    summary: '다음 공사를 위해 필요한 마감만 걷어 냅니다.',
    points: ['손볼 곳만 표시하고 그 안을 철거합니다', '남길 문과 몰딩은 그대로 둡니다', '철거 뒤 바로 마감할 수 있게 정리합니다'],
    image: '/images/demo.jpg',
    imageAlt: '마감 경계가 표시된 인테리어철거 현장',
  },
  {
    id: 'imdae',
    title: '원상복구철거',
    summary: '임대 계약에 적힌 범위만 철거하고 정리합니다.',
    points: ['계약에 없는 공사는 넣지 않습니다', '간판은 소유를 확인한 뒤 내립니다', '열쇠를 넘길 때 사진으로 남깁니다'],
    image: '/images/restore.jpg',
    imageAlt: '집기를 뺀 원상복구철거 점포',
  },
  {
    id: 'sangga',
    title: '상가철거',
    summary: '매장, 학원, 사무실의 집기와 가벽, 바닥을 비웁니다.',
    points: ['영업 시간을 피해서 진행합니다', '유리와 일반 잔재는 따로 옮깁니다', '복도는 보양한 뒤 작업합니다'],
    image: '/images/commercial.jpg',
    imageAlt: '집기가 빠진 상가철거 매장',
  },
  {
    id: 'sikdang',
    title: '식당철거',
    summary: '홀과 주방을 나누고, 후드와 덕트는 따로 철거합니다.',
    points: ['영업이 끝난 뒤 홀부터 비웁니다', '가스와 냉장은 주방 철거 전에 막습니다', '기름때 세척은 철거와 따로 안내합니다'],
    image: '/images/restaurant.jpg',
    imageAlt: '주방을 비우는 식당철거',
  },
  {
    id: 'mul',
    title: '욕실주방철거',
    summary: '화장실과 주방에서 타일, 변기, 싱크대를 걷어 냅니다.',
    points: ['다시 쓸 설비는 미리 표시합니다', '방수까지 걷을지는 현장을 보고 정합니다', '누수가 있으면 바로 마감하지 않습니다'],
    image: '/images/wet.jpg',
    imageAlt: '타일과 싱크대를 들어낸 욕실주방철거',
  },
  {
    id: 'gubgan',
    title: '부분철거',
    summary: '가벽, 장판, 등 자리처럼 필요한 구간만 철거합니다.',
    points: ['살릴 가구는 다른 곳으로 옮깁니다', '먼지가 다른 방으로 나가지 않게 막습니다', '잔재는 작업 후 반출합니다'],
    image: '/images/partial.jpg',
    imageAlt: '한 구간만 열린 부분철거',
  },
  {
    id: 'janjae',
    title: '폐기물 처리',
    summary: '철거 잔재를 종류별로 모아 반출합니다.',
    points: ['타일과 석고는 생활쓰레기와 섞지 않습니다', '문과 상판은 따로 분류합니다', '반출 시간이 짧으면 일정을 나눠 안내합니다'],
    image: '/images/waste.jpg',
    imageAlt: '종류를 나눈 철거 잔재',
  },
]

export const interiorServices: ServiceItem[] = [
  {
    id: 'hwajangsil',
    title: '화장실',
    summary: '방수, 타일, 양변기, 세면대를 다시 시공합니다.',
    points: ['방수가 마른 뒤에 타일을 붙입니다', '환풍기와 조명 위치를 함께 봅니다', '물이 새는 곳은 철거를 먼저 합니다'],
    image: '/images/bathroom.jpg',
    imageAlt: '타일을 다시 붙인 화장실',
  },
  {
    id: 'jubang',
    title: '주방',
    summary: '상부장, 싱크대, 후드를 쓰는 동선에 맞게 배치합니다.',
    points: ['냉장고와 가스 자리를 먼저 정합니다', '상판만 바꿀 수도 있습니다', '콘센트는 가전 위치에 맞춥니다'],
    image: '/images/kitchen.jpg',
    imageAlt: '장을 다시 배치한 주방',
  },
  {
    id: 'sinkdae',
    title: '싱크대',
    summary: '싱크볼, 수전, 상판, 하부장만 교체합니다.',
    points: ['배수 위치에 맞춰 설치합니다', '벽 타일을 살리면 높이를 맞춥니다', '주방 전체 철거와는 따로 진행합니다'],
    image: '/images/sink.jpg',
    imageAlt: '상판과 수전을 바꾼 싱크대',
  },
  {
    id: 'tile',
    title: '타일',
    summary: '벽과 바닥의 필요한 면만 타일로 교체합니다.',
    points: ['욕실은 방수 상태를 먼저 확인합니다', '들뜬 타일은 덧붙이지 않습니다', '콘센트 자리를 함께 정리합니다'],
    image: '/images/tile.jpg',
    imageAlt: '벽을 다시 마감한 타일',
  },
  {
    id: 'jomyeong',
    title: '조명',
    summary: '등 개수와 스위치 위치를 방에 맞게 바꿉니다.',
    points: ['천장 상태를 보고 등 개수를 정합니다', '식탁 등은 식탁 자리에 맞춥니다', '우물천장 조명은 목공 뒤에 설치합니다'],
    image: '/images/lighting.jpg',
    imageAlt: '등 위치를 바꾼 조명',
  },
  {
    id: 'dobae',
    title: '도배장판',
    summary: '벽지와 바닥재를 교체합니다.',
    points: ['곰팡이가 있으면 원인을 먼저 확인합니다', '몰딩 교체 여부에 따라 일정이 달라집니다', '우물천장은 도배 전에 마감합니다'],
    image: '/images/wallpaper.jpg',
    imageAlt: '벽지와 바닥을 교체한 도배장판',
  },
  {
    id: 'molding-line',
    title: '몰딩',
    summary: '천장선, 걸레받이, 문선을 정리합니다.',
    points: ['문 여닫힘에 맞춰 문선을 답니다', '장판 두께에 맞춰 걸레받이를 답니다', '도배와 함께 마감할 수 있습니다'],
    image: '/images/molding.jpg',
    imageAlt: '천장선을 정리한 몰딩',
  },
  {
    id: 'umul',
    title: '우물천정',
    summary: '거실 천장에 단을 두고 간접조명을 넣습니다.',
    points: ['등 자리를 피해서 단 높이를 정합니다', '나중에 등을 갈 수 있게 점검구를 둡니다', '도배보다 천장 공사를 먼저 합니다'],
    image: '/images/ceiling.jpg',
    imageAlt: '간접조명이 들어간 우물천정',
  },
  {
    id: 'mokgong',
    title: '문·중문·목공',
    summary: '방문, 중문, 신발장을 교체하거나 새로 답니다.',
    points: ['문틀을 본 뒤 문을 고릅니다', '신발장은 현관 바닥에 맞춥니다', '문틀 철거가 필요하면 그 범위만 추가합니다'],
    image: '/images/door.jpg',
    imageAlt: '문을 교체한 목공 인테리어',
  },
  {
    id: 'bosu',
    title: '부분수리·집수리',
    summary: '누수, 들뜬 장판, 깨진 타일처럼 작은 곳만 고칩니다.',
    points: ['누수는 아래층을 확인한 뒤 엽니다', '장판은 부분 수리와 전체 교체를 비교합니다', '나온 잔재는 따로 처리합니다'],
    image: '/images/repair.jpg',
    imageAlt: '부분만 손본 집수리',
  },
]

export const engagements = [
  {
    title: '인테리어만',
    text: '철거 없이 마감만 합니다. 화장실, 싱크대, 도배장판, 조명, 우물천장처럼 이번에 손볼 곳만 고르면 됩니다.',
  },
  {
    title: '철거·정리만',
    text: '걷어 내고 치우는 일에서 끝냅니다. 인테리어 자재는 넣지 않고, 다음 공사가 시작되기 전에 자리를 비웁니다.',
  },
  {
    title: '철거 후 인테리어',
    text: '필요한 곳을 철거·정리한 뒤 인테리어를 이어서 합니다. 방수, 목공, 도배장판이 겹치지 않게 날짜를 나눕니다.',
  },
] as const

export const quoteLines = [
  {
    label: '남길 것',
    text: '배관, 문틀, 몰딩, 다시 달 조명처럼 해체하지 않을 것을 사진에 표시합니다.',
  },
  {
    label: '걷을 것',
    text: '인테리어철거, 상가철거, 식당철거, 원상복구철거, 욕실주방철거 중 해당하는 이름만 적습니다.',
  },
  {
    label: '양중',
    text: '승강기 허용 시간, 사다리차, 골목 인력 운반을 철거비와 다른 줄에 적습니다.',
  },
  {
    label: '잔재',
    text: '차 대수와 폐기물 종류를 인테리어 자재와 섞지 않습니다.',
  },
  {
    label: '마감',
    text: '화장실, 주방, 싱크대, 타일, 조명, 도배장판, 몰딩, 우물천정 중 이번에 하는 것만 적습니다.',
  },
] as const
