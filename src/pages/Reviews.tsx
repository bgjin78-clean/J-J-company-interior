import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { Seo } from '../components/Seo'
import { REVIEWS_DESCRIPTION, REVIEWS_TITLE } from '../data/seo'
import {
  loadReviews,
  reviewCategories,
  saveReview,
  type Review,
  type ReviewCategory,
} from '../data/reviews'

export function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(() => loadReviews())
  const [filter, setFilter] = useState<(typeof reviewCategories)[number]>('전체')
  const [open, setOpen] = useState(false)

  const filtered = useMemo(() => {
    if (filter === '전체') return reviews
    return reviews.filter((review) => review.category === filter)
  }, [filter, reviews])

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const title = String(data.get('title') ?? '').trim()
    const summary = String(data.get('summary') ?? '').trim()
    const area = String(data.get('area') ?? '').trim()
    const category = String(data.get('category') ?? '') as ReviewCategory
    const date = String(data.get('date') ?? '')
    if (!title || !summary || !area || !date) return
    setReviews(saveReview({ title, summary, area, category, date }))
    event.currentTarget.reset()
    setOpen(false)
  }

  return (
    <>
      <Seo title={REVIEWS_TITLE} description={REVIEWS_DESCRIPTION} />
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">작업후기</p>
          <h1>시공 기록을 쌓는 자리</h1>
          <p className="lede lede-wide">
            창원, 마산, 진해, 김해, 밀양, 함안의 인테리어철거, 상가철거, 화장실, 주방,
            도배장판 시공이 끝나고 고객이 동의한 이야기만 남깁니다. 아직 공개할 후기가
            없으면 목록은 비어 있습니다.
          </p>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="filter-row">
            {reviewCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={filter === category ? 'chip is-on' : 'chip'}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
          {filtered.length === 0 ? (
            <div className="empty">
              <h2>아직 공개된 후기가 없습니다</h2>
              <p>사진 사용에 동의한 시공 기록만 차례로 올립니다.</p>
            </div>
          ) : (
            <div className="review-list">
              {filtered.map((review) => (
                <article key={review.id}>
                  <p>
                    {review.area} · {review.category} · {review.date}
                  </p>
                  <h2>{review.title}</h2>
                  <p>{review.summary}</p>
                </article>
              ))}
            </div>
          )}
          <button type="button" className="text-link text-btn" onClick={() => setOpen((v) => !v)}>
            {open ? '등록 닫기' : '현장 기록 남기기'}
          </button>
          {open ? (
            <form className="form" onSubmit={onSubmit}>
              <p className="form-note">
                이 기록은 지금 사용 중인 브라우저에만 저장됩니다. 서버로 전송되지 않습니다.
              </p>
              <label>
                제목
                <input name="title" required maxLength={80} />
              </label>
              <div className="form-row">
                <label>
                  지역
                  <input name="area" required maxLength={40} placeholder="시공 지역" />
                </label>
                <label>
                  공종
                  <select name="category" required defaultValue="욕실">
                    {reviewCategories
                      .filter((category) => category !== '전체')
                      .map((category) => (
                        <option key={category}>{category}</option>
                      ))}
                  </select>
                </label>
                <label>
                  날짜
                  <input name="date" type="date" required defaultValue={new Date().toISOString().slice(0, 10)} />
                </label>
              </div>
              <label>
                내용
                <textarea name="summary" required rows={5} maxLength={500} />
              </label>
              <button className="btn btn-solid" type="submit">
                이 브라우저에 저장
              </button>
            </form>
          ) : null}
        </div>
      </section>
    </>
  )
}
