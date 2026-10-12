import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { KeywordGroups } from '../components/SeoLinks'
import { StoryList } from '../components/StoryList'
import { areas } from '../data/areas'
import { homeFaqs } from '../data/faq'
import { PATHS } from '../data/seo'
import { HOME_DESCRIPTION, HOME_TITLE } from '../data/site'
import { stories } from '../data/stories'
import { demolitionServices, engagements, interiorServices, quoteLines } from '../data/services'

export function HomePage() {
  return (
    <>
      <Seo title={HOME_TITLE} description={HOME_DESCRIPTION} />

      <p className="partner-call">
        <Link to={PATHS.partners}>철거·인테리어 협력 팀을 찾습니다</Link>
      </p>

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="kicker">창원 · 마산 · 진해 · 김해 · 밀양 · 함안</p>
            <h1>
              철거 범위를 적은 뒤에
              <br />
              인테리어를 붙입니다
            </h1>
            <p className="lede">
              인테리어철거, 상가철거, 식당철거, 원상복구철거, 욕실주방철거는 항목으로
              나누고, 비운 자리에 화장실·주방·도배장판·우물천정을 올립니다.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-solid" to={PATHS.consult}>
                범위부터 남기기
              </Link>
              <Link className="btn btn-line" to={PATHS.notes}>
                나눈 기록 보기
              </Link>
            </div>
          </div>
          <figure className="hero-photo">
            <img src="/images/hero.jpg" alt="철거 후 인테리어 마감을 올린 거실" />
            <figcaption>
              <strong>창원권 철거·인테리어</strong>
              <span>해체 줄과 마감 줄을 분리</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="band band-tight">
        <div className="wrap">
          <div className="section-title">
            <h2>맡기는 방식을 먼저 고릅니다</h2>
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

      <section className="band">
        <div className="wrap">
          <div className="section-title">
            <h2>견적에 나누는 줄</h2>
            <p className="sub">철거비, 양중, 잔재, 인테리어 자재를 한 문장에 섞지 않습니다.</p>
          </div>
          <ul className="line-list">
            {quoteLines.map((line) => (
              <li key={line.label}>
                <strong>{line.label}</strong>
                <span>{line.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-title">
            <h2>공종 이름</h2>
            <p className="sub">철거 다섯 가지와 인테리어 마감을 각각 다른 주소로 열어 둡니다.</p>
          </div>
          <div className="field-groups">
            <div>
              <h3>철거</h3>
              <div className="field-grid">
                {demolitionServices.map((item) => (
                  <Link key={item.id} to={`${PATHS.cheolgeo}#${item.id}`} className="field-card">
                    <img src={item.image} alt={item.imageAlt} />
                    <strong>{item.title}</strong>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3>인테리어</h3>
              <div className="field-grid">
                {interiorServices.map((item) => (
                  <Link key={item.id} to={`${PATHS.interior}#${item.id}`} className="field-card">
                    <img src={item.image} alt={item.imageAlt} />
                    <strong>{item.title}</strong>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="detail-gap">
            <KeywordGroups />
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-title">
            <h2>생활권마다 다른 일정</h2>
          </div>
          <div className="area-index">
            {areas.map((area, index) => (
              <Link key={area.slug} to={`${PATHS.region}/${area.slug}`} className="area-row">
                <b>{String(index + 1).padStart(2, '0')}</b>
                <strong>{area.name}</strong>
                <span>철거·인테리어</span>
                <em>{area.headline}</em>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-title">
            <h2>최근에 금액을 나눈 현장</h2>
          </div>
          <StoryList stories={stories} linked compact />
        </div>
      </section>

      <section className="band">
        <div className="wrap faq-preview">
          <div>
            <h2>상담 전에 갈리는 질문</h2>
            <Link className="text-link" to={PATHS.consult}>
              상담·나머지 질문
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
    </>
  )
}
