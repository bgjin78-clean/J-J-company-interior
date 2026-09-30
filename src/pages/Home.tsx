import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { faqs } from '../data/faq'
import { demolitionServices, featured, interiorServices, processSteps } from '../data/services'

export function HomePage() {
  return (
    <>
      <Seo description="철거와 인테리어 시공을 안내합니다. 그 외 지역의 협력업체를 모집합니다." />

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="kicker">철거, 인테리어</p>
            <h1>
              철거와 인테리어를
              <br />
              한 흐름으로 안내합니다
            </h1>
            <p className="lede">
              해체가 필요한 구간은 철거로 비우고, 욕실·주방·도배장판·조명 같은
              마감은 인테리어로 이어갑니다. 현장 시공은 제휴 업체가 맡습니다.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-solid" to="/contact">
                시공 상담 남기기
              </Link>
              <Link className="btn btn-line" to="/partners">
                협력업체 모집 보기
              </Link>
            </div>
          </div>
          <figure className="hero-photo">
            <img src="/images/hero.jpg" alt="밝은 우드 톤의 주거 공간" />
            <figcaption>
              <strong>철거, 인테리어</strong>
              <span>해체부터 마감까지</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="recruit" id="recruit">
        <div className="wrap recruit-grid">
          <div>
            <p className="kicker kicker-light">협력업체 모집</p>
            <h2>그 외 지역 협력업체를 모집합니다</h2>
            <p>
              철거와 인테리어를 직접 시공하는 업체를 모집합니다. 이미 제휴가 있는
              지역이 아닌 곳에서 활동하는 업체의 신청을 받습니다.
            </p>
          </div>
          <ul className="recruit-points">
            <li>
              <b>01</b>
              <span>철거, 폐기물 처리, 인테리어 마감을 직접 시공하는 업체</span>
            </li>
            <li>
              <b>02</b>
              <span>그 외 지역에서 출동이 가능한 업체</span>
            </li>
            <li>
              <b>03</b>
              <span>철거, 마감, 폐기물 처리를 항목으로 나눠 견적할 수 있는 업체</span>
            </li>
          </ul>
          <Link className="btn btn-signal" to="/partners">
            협력 신청 안내
          </Link>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-title">
            <p className="kicker">하는 일</p>
            <h2>철거 다음이 인테리어입니다</h2>
          </div>
          <div className="trio">
            <article>
              <img src="/images/studio.jpg" alt="상담을 정리하는 업무 공간" />
              <h3>상담 연결</h3>
              <p>공사 범위를 듣고, 시공 가능한 제휴 업체로 상담을 넘깁니다.</p>
            </article>
            <article>
              <img src="/images/demo.jpg" alt="철거 현장 작업" />
              <h3>철거·정리</h3>
              <p>부분철거부터 상가 원상복구, 폐기물 반출까지 인테리어 전 공정으로 안내합니다.</p>
            </article>
            <article>
              <img src="/images/house.jpg" alt="마감이 끝난 주택 외관" />
              <h3>인테리어</h3>
              <p>욕실, 주방, 도배장판, 조명, 목공처럼 생활 마감을 제휴 시공으로 연결합니다.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="band band-tight">
        <div className="wrap">
          <div className="section-title">
            <p className="kicker">공종</p>
            <h2>자주 찾는 시공</h2>
          </div>
          <div className="poster-row">
            {featured.map((item) => (
              <Link key={item.id} to={item.path} className="poster">
                <img src={item.image} alt="" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
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
            <h2>플랫폼에 대해 먼저 묻는 것</h2>
            <Link className="text-link" to="/contact">
              문의·전체 FAQ
            </Link>
          </div>
          <div className="faq-list">
            {faqs.slice(0, 4).map((item) => (
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
