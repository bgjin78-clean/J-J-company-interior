import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { homeFaqs } from '../data/faq'
import { PATHS } from '../data/seo'
import { HOME_DESCRIPTION, HOME_TITLE, SITE, phoneHref, priorityRegions } from '../data/site'
import { stories } from '../data/stories'
import { demolitionServices, engagements, interiorServices } from '../data/services'

const entries = [
  {
    to: PATHS.interior,
    label: '인테리어',
    text: '화장실, 주방, 싱크대, 도배장판, 조명, 우물천정처럼 이번에 닫는 칸만 적습니다.',
  },
  {
    to: PATHS.cheolgeo,
    label: '철거·정리',
    text: '상가철거, 식당철거, 원상복구, 부분철거와 잔재 반출을 마감비와 섞지 않습니다.',
  },
  {
    to: PATHS.region,
    label: '시공지역',
    text: '창원·마산·진해·김해·밀양·함안. 승강기 시간과 골목 반입이 동네마다 다릅니다.',
  },
  {
    to: PATHS.notes,
    label: '작업후기',
    text: '금액을 나눈 이유와, 해체 전과 마감 후를 현장 단위로 남겨 두었습니다.',
  },
]

export function HomePage() {
  return (
    <>
      <Seo title={HOME_TITLE} description={HOME_DESCRIPTION} />

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="kicker">JJ애드컴퍼니 · {priorityRegions.join(' · ')}</p>
            <h1>
              경남 철거·인테리어는
              <br />
              범위를 나눠 적습니다
            </h1>
            <p className="lede">
              {SITE.nameKo}가 창원에서 함안까지 현장을 받습니다. 비울 곳은 철거·정리로,
              다시 닫을 칸은 인테리어로 견적을 나눕니다. 전화 {SITE.phoneDisplay}.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-solid" to={PATHS.interior}>
                인테리어 보기
              </Link>
              <Link className="btn btn-line" to={PATHS.cheolgeo}>
                철거·정리 보기
              </Link>
            </div>
          </div>
          <figure className="hero-photo">
            <img src="/images/hero.jpg" alt="우물천정과 마루를 마친 경남 아파트 거실" />
            <figcaption>
              <strong>{SITE.nameKo}</strong>
              <span>철거 줄과 마감 줄을 분리</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="band band-tight">
        <div className="wrap entry-grid">
          {entries.map((item) => (
            <Link key={item.to} to={item.to} className="entry-card">
              <span>{item.label}</span>
              <p>{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-title">
            <h2>시공할 방식을 먼저 고릅니다</h2>
            <p className="sub">인테리어만 할지, 철거·정리만 할지, 철거한 뒤 인테리어까지 할지를 먼저 정합니다.</p>
          </div>
          <div className="choice-grid">
            {engagements.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-tight">
        <div className="wrap">
          <div className="trade-block">
            <div className="section-title">
              <h2>인테리어</h2>
              <p className="sub">이번에 손볼 곳만 고릅니다.</p>
            </div>
            <div className="trade-grid">
              {interiorServices.map((item) => (
                <Link key={item.id} to={`${PATHS.interior}#${item.id}`} className="trade-card">
                  <strong>{item.title}</strong>
                  <p>{item.summary}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="trade-block">
            <div className="section-title">
              <h2>철거·정리</h2>
              <p className="sub">다음에 쓰기 좋게, 필요한 곳만 걷어 내고 치웁니다.</p>
            </div>
            <div className="trade-grid">
              {demolitionServices.map((item) => (
                <Link key={item.id} to={`${PATHS.cheolgeo}#${item.id}`} className="trade-card">
                  <strong>{item.title}</strong>
                  <p>{item.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-title">
            <h2>작업후기에서 범위가 갈린 현장</h2>
            <Link className="text-link" to={PATHS.notes}>
              작업후기 전체
            </Link>
          </div>
          <div className="case-grid">
            {stories.slice(0, 3).map((story) => (
              <article key={story.id} className="case-card">
                <p className="case-meta">
                  <span>{story.category}</span>
                  <span>{story.date}</span>
                  <span>{story.area}</span>
                </p>
                <h3>{story.title}</h3>
                <p>{story.after}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-tight">
        <div className="wrap faq-preview">
          <div>
            <h2>상담 전에 갈리는 질문</h2>
            <Link className="text-link" to={PATHS.consult}>
              문의·FAQ
            </Link>
          </div>
          <div className="faq-list">
            {homeFaqs().map((item) => (
              <details key={item.id}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap call-band">
          <div>
            <h2>시공상담 · 업체상담</h2>
            <p>
              집을 맡기는 상담과, 직접 시공하는 팀의 상담을 나눠 받습니다. 전화 {SITE.phoneDisplay},{' '}
              {SITE.hours}.
            </p>
          </div>
          <div className="hero-actions">
            <a className="btn btn-solid" href={phoneHref}>
              {SITE.phoneDisplay}
            </a>
            <Link className="btn btn-line" to={PATHS.consult}>
              상담 문의
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
