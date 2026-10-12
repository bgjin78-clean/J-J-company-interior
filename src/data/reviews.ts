export type ReviewCategory =
  | '상가철거'
  | '원상복구철거'
  | '인테리어철거'
  | '부분철거'
  | '화장실'
  | '싱크대'
  | '우물천정'
  | '도배장판'
  | '주방'
  | '조명'
  | '몰딩'
  | '타일'
  | '목공'
  | '부분수리'

export type Review = {
  id: string
  title: string
  category: ReviewCategory
  area: string
  date: string
  summary: string
}

export const reviewCategories: Array<ReviewCategory | '전체'> = [
  '전체',
  '상가철거',
  '원상복구철거',
  '인테리어철거',
  '부분철거',
  '화장실',
  '싱크대',
  '우물천정',
  '도배장판',
  '주방',
  '조명',
  '몰딩',
  '타일',
  '목공',
  '부분수리',
]

const KEY = 'jj-adcompany-reviews'

export function loadReviews(): Review[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as Review[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveReview(input: Omit<Review, 'id'>): Review[] {
  const next = [{ ...input, id: crypto.randomUUID() }, ...loadReviews()]
  localStorage.setItem(KEY, JSON.stringify(next))
  return next
}
