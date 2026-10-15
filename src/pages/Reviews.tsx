import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { PATHS, REVIEWS_DESCRIPTION, REVIEWS_TITLE } from '../data/seo'
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
  const [filter, setFilter] = useState('전체')

  const categories = useMemo(
    () => ['전체', ...Array.from(new Set(stories.map((story) => story.category)))],
    [],
  )
  const visible = filter === '전체' ? stories : stories.filter((story) => story.category === filter)

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
          <h1>작업후기</h1>
          <p className="lede lede-wide">
            창원, 마산, 진해, 김해, 밀양, 함안에서 철거 범위와 인테리어 항목을 왜 다른 줄로
            적었는지 남긴 기록입니다. 금액이 갈린 이유만 적고, 같은 문장을 반복하지 않습니다.
          </p>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="filter-row" role="tablist" aria-label="공종">
            {categories.map((category) => (
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
          <div className="case-list">
            {visible.map((story) => (
              <article key={story.id} className="case">
                <p className="case-meta">
                  <span>{story.category}</span>
                  <span>{story.date}</span>
                  <span>{story.area}</span>
                </p>
                <h2>{story.title}</h2>
                <p className="case-body">{story.body}</p>
                <div className="case-split">
                  <div>
                    <b>전</b>
                    <p>{story.before}</p>
                  </div>
                  <div>
                    <b>후</b>
                    <p>{story.after}</p>
                  </div>
                </div>
                <p className="case-tags">{story.tags.join(' · ')}</p>
                <Link className="text-link" to={`${PATHS.region}/${story.slug}`}>
                  {story.area.split(' ')[0]} 시공지역
                </Link>
              </article>
            ))}
          </div>

          {reviews.length > 0 ? (
            <div className="review-list detail-gap">
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
            {open ? '메모 닫기' : '이 기기에만 메모 남기기'}
          </button>
          {open ? (
            <form className="form" onSubmit={onSubmit}>
              <p className="form-note">
                이 글은 서버로 보내지 않습니다. 브라우저를 닫아도 이 기기에만 남아 있습니다.
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
