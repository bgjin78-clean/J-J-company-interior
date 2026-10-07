import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { RegionLinks } from '../components/SeoLinks'
import { DEMOLITION_DESCRIPTION, DEMOLITION_TITLE, REGION_LINE } from '../data/seo'
import { demolitionServices } from '../data/services'

export function DemolitionPage() {
  return (
    <>
      <Seo title={DEMOLITION_TITLE} description={DEMOLITION_DESCRIPTION} />
      <section className="page-hero">
        <div className="wrap page-hero-grid">
          <div>
            <p className="kicker">철거·정리</p>
            <h1>인테리어철거, 상가철거, 식당철거</h1>
            <p className="lede lede-wide">
              인테리어철거, 원상복구철거, 상가철거, 식당철거, 욕실주방철거를 {REGION_LINE}{' '}
              순으로 상담합니다. 철거는 인테리어가 들어갈 자리를 비우는 공정으로 안내하고,
              범위와 반출은 제휴 업체가 견적에 나눠 적습니다.
            </p>
          </div>
          <img src="/images/partial.jpg" alt="인테리어철거로 구조가 드러난 현장" />
        </div>
      </section>
      <section className="band">
        <div className="wrap service-list">
          {demolitionServices.map((item, index) => (
            <article key={item.id} id={item.id} className={index % 2 ? 'service-row flip' : 'service-row'}>
              <img src={item.image} alt={item.imageAlt} />
              <div>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="section-title">
            <p className="kicker">지역</p>
            <h2>{REGION_LINE}</h2>
            <p className="sub">상가철거와 식당철거, 원상복구철거 일정은 이 순서대로 확인합니다.</p>
          </div>
          <RegionLinks />
        </div>
      </section>
      <section className="band">
        <div className="wrap note">
          <h2>철거 상담에 도움이 되는 정보</h2>
          <ul>
            <li>남길 설비와 걷어 낼 범위를 표시한 사진</li>
            <li>아파트라면 작업 가능 시간과 승강기 규정</li>
            <li>원상복구철거라면 계약서의 복구 문구</li>
            <li>식당철거라면 주방 설비와 영업 종료 시각</li>
            <li>폐기물 차량이 대기할 자리</li>
          </ul>
          <Link className="btn btn-solid" to="/contact">
            철거 상담
          </Link>
        </div>
      </section>
    </>
  )
}
