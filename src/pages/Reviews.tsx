import { useState } from 'react'
import type { FormEvent } from 'react'
import { Seo } from '../components/Seo'
import { StoryList } from '../components/StoryList'
import { REVIEWS_DESCRIPTION, REVIEWS_TITLE } from '../data/seo'
import { stories } from '../data/stories'
import {
  loadReviews,
  reviewCategories,
  saveReview,
  type Review,
  type ReviewCategory,
} from '../data/reviews'

export function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(() => loadReviews())
  const [open, setOpen] = useState(false)

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
          <p className="kicker">현장 메모</p>
          <h1>현장에서 금액을 나눈 기록</h1>
          <p className="lede lede-wide">
            창원, 마산, 진해, 김해, 밀양, 함안에서 인테리어철거, 상가철거, 화장실, 주방,
            도배장판을 왜 다른 줄로 적었는지 남긴 글입니다.
          </p>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <StoryList stories={stories} />
          {reviews.length > 0 ? (
            <div className="review-list">
              {reviews.map((review) => (
                <article key={review.id}>
                  <p>
                    {review.area} · {review.category} · {review.date}
                  </p>
                  <h2>{review.title}</h2>
                  <p>{review.summary}</p>
                </article>
              ))}
            </div>
          ) : null}
          <button type="button" className="text-link text-btn" onClick={() => setOpen((v) => !v)}>
            {open ? '등록 닫기' : '현장 기록 남기기'}
          </button>
          {open ? (
            <form className="form" onSubmit={onSubmit}>
              <p className="form-note">
                이 글은 서버로 보내지 않습니다. 이 브라우저를 닫아도 이 기기에만 남아 있습니다.
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
                  <select name="category" required defaultValue="화장실">
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
