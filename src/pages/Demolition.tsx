import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { demolitionServices } from '../data/services'

export function DemolitionPage() {
  return (
    <>
      <Seo
        title="철거·정리"
        description="부분철거, 인테리어철거, 상가·사무실, 원상복구, 욕실·주방 철거, 폐기물 처리. 우선 홍보 지역 제휴 시공 안내."
      />
      <section className="page-hero">
        <div className="wrap page-hero-grid">
          <div>
            <p className="kicker">철거·정리</p>
            <h1>새 마감 전의 해체와 반출</h1>
            <p className="lede">
              철거는 그 자체로 끝내기보다, 인테리어가 들어갈 자리를 비우는 공정으로
              안내합니다. 부분 해체부터 상가 원상복구, 폐기물 처리까지 제휴 업체가
              범위와 반출을 견적에 나눠 적습니다.
            </p>
          </div>
          <img src="/images/partial.jpg" alt="구조가 드러난 공사 현장" />
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
        <div className="wrap note">
          <h2>철거 상담에 도움이 되는 정보</h2>
          <ul>
            <li>남길 설비와 걷어 낼 범위를 표시한 사진</li>
            <li>아파트라면 작업 가능 시간과 승강기 규정</li>
            <li>상가 원상복구라면 계약서의 복구 문구</li>
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
