import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { areas } from '../data/areas'
import { faqs } from '../data/faq'
import { demolitionServices, featured, interiorServices, processSteps } from '../data/services'

export function HomePage() {
  return (
    <>
      <Seo description="J&J adcompany는 창원 제휴 시공업체를 시작으로 마산·진해·밀양·김해·함안의 철거와 인테리어를 홍보합니다. 협력업체를 모집합니다." />

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="kicker">경남 우선 권역 홍보</p>
            <h1>
              철거와
              <br />
              인테리어를
              <br />
              지역 제휴로
              <br />
              잇습니다
            </h1>
            <p className="lede">
              J&amp;J adcompany는 시공사가 아니라 광고대행 플랫폼입니다. 창원에서
              제휴 업체 1곳을 선정했고, 마산·진해·밀양·김해·함안을 먼저 알린 뒤
              권역을 넓혀 갑니다.
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
              <strong>창원 제휴</strong>
              <span>시공 파트너 1곳</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="recruit" id="recruit">
        <div className="wrap recruit-grid">
          <div>
            <p className="kicker kicker-light">협력업체 모집</p>
            <h2>지역 시공 파트너를 찾습니다</h2>
            <p>
              철거, 폐기물 처리, 욕실·주방·도배장판·조명 인테리어를 하는 업체를
              권역별로 선정해 이 플랫폼에서 홍보합니다. 고객 상담은 선정된 업체
              소개로 이어지고, 견적과 시공은 그 업체가 직접 합니다.
            </p>
          </div>
          <ul className="recruit-points">
            <li>
              <b>01</b>
              <span>창원 1곳 선정 완료. 상호 안내는 소개 자료가 정리되는 대로 올립니다.</span>
            </li>
            <li>
              <b>02</b>
              <span>마산, 진해, 밀양, 김해, 함안은 우선 홍보 지역입니다. 전담 제휴는 이어서 뽑습니다.</span>
            </li>
            <li>
              <b>03</b>
              <span>그 밖 시·군은 파트너가 늘어난 뒤 순차적으로 엽니다.</span>
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
            <h2>홍보는 플랫폼이, 시공은 제휴 업체가</h2>
          </div>
          <div className="trio">
            <article>
              <img src="/images/studio.jpg" alt="상담을 정리하는 업무 공간" />
              <h3>광고·연결</h3>
              <p>지역과 공종을 나눠 소개하고, 상담 요청을 해당 제휴 업체로 넘깁니다.</p>
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
            <p className="kicker">우선 지역</p>
            <h2>여섯 곳을 먼저 알립니다</h2>
            <p className="sub">
              마산과 진해는 창원시 안 생활권이지만 지역명으로 따로 안내합니다. 이후
              경남 다른 도시로 제휴를 넓힐 예정입니다.
            </p>
          </div>
          <div className="area-index">
            {areas.map((area, index) => (
              <Link key={area.slug} to={`/areas/${area.slug}`} className="area-row">
                <b>{String(index + 1).padStart(2, '0')}</b>
                <strong>{area.name}</strong>
                <span>{area.partner ? '제휴 선정' : '우선 홍보'}</span>
                <em>{area.region}</em>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap partner-spotlight">
          <img src="/images/remodel.jpg" alt="리모델링이 끝난 거실은 창원 제휴 시공의 방향 예시" />
          <div>
            <p className="kicker">창원 제휴</p>
            <h2>선정된 시공 파트너</h2>
            <p>
              창원 지역 철거·인테리어 업체 1곳을 제휴로 골랐습니다. 상호와 대표
              연락처는 소개 문구가 확정되면 이 자리에 올립니다. 그때까지 창원 상담은
              문의 양식으로 받고, 마산·진해·밀양·김해·함안은 같은 파트너의 일정으로
              가능 여부를 확인합니다.
            </p>
            <Link className="btn btn-solid" to="/areas/changwon">
              창원 안내 보기
            </Link>
          </div>
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
