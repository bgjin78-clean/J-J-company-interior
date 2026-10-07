import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { KeywordGroups } from '../components/SeoLinks'
import { StoryList } from '../components/StoryList'
import { homeFaqs } from '../data/faq'
import { HOME_DESCRIPTION, HOME_TITLE } from '../data/site'
import { stories } from '../data/stories'
import { demolitionServices, interiorServices, processSteps } from '../data/services'

export function HomePage() {
  return (
    <>
      <Seo title={HOME_TITLE} description={HOME_DESCRIPTION} />

      <p className="partner-call">
        <Link to="/partners">지역별 협력업체 모집중</Link>
      </p>

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1>
              철거와 인테리어를
              <br />
              한 흐름으로 안내합니다
            </h1>
            <p className="lede">
              비울 곳은 인테리어철거와 상가철거로, 화장실·주방·도배장판·우물천정은
              마감으로 이어갑니다.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-solid" to="/contact">
                시공 상담 남기기
              </Link>
              <Link className="btn btn-line" to="/reviews">
                현장 글 보기
              </Link>
            </div>
          </div>
          <figure className="hero-photo">
            <img src="/images/hero.jpg" alt="철거 후 마감한 주거 인테리어" />
            <figcaption>
              <strong>철거, 인테리어</strong>
              <span>해체부터 마감까지</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-title">
            <h2>주요업무분야</h2>
          </div>
          <div className="field-groups">
            <div>
              <h3>철거</h3>
              <div className="field-grid">
                {demolitionServices.map((item) => (
                  <Link key={item.id} to={`/demolition#${item.id}`} className="field-card">
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
                  <Link key={item.id} to={`/interior#${item.id}`} className="field-card">
                    <img src={item.image} alt={item.imageAlt} />
                    <strong>{item.title}</strong>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-title">
            <h2>시공후기</h2>
          </div>
          <StoryList stories={stories} linked compact />
        </div>
      </section>

      <section className="band band-tight">
        <div className="wrap">
          <div className="section-title">
            <p className="kicker">공종</p>
            <h2>자주 찾는 시공</h2>
            <p className="sub">
              인테리어철거, 원상복구철거, 상가철거, 식당철거, 욕실주방철거와 화장실, 주방,
              싱크대, 타일, 조명, 도배장판, 몰딩, 우물천정.
            </p>
          </div>
          <KeywordGroups />
        </div>
      </section>

      <section className="band">
        <div className="wrap split">
          <Link to="/interior" className="split-card">
            <p>인테리어</p>
            <h2>마감 시공</h2>
            <span>
              {interiorServices
                .slice(0, 4)
                .map((s) => s.title)
                .join(' · ')}
            </span>
            <em>분야 보기</em>
          </Link>
          <Link to="/demolition" className="split-card split-card-dark">
            <p>철거·정리</p>
            <h2>해체와 반출</h2>
            <span>
              {demolitionServices
                .slice(0, 4)
                .map((s) => s.title)
                .join(' · ')}
            </span>
            <em>분야 보기</em>
          </Link>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-title">
            <p className="kicker">순서</p>
            <h2>상담이 시공으로 이어지는 과정</h2>
          </div>
          <ol className="steps">
            {processSteps.map((step) => (
              <li key={step.step}>
                <span>{step.step}</span>
                <strong>{step.title}</strong>
                <p>{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band">
        <div className="wrap faq-preview">
          <div>
            <p className="kicker">질문</p>
            <h2>상담 전에 자주 묻는 일</h2>
            <Link className="text-link" to="/contact">
              문의·전체 FAQ
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
