import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { StoryList } from '../components/StoryList'
import { DEMOLITION_DESCRIPTION, DEMOLITION_TITLE, REGION_LINE } from '../data/seo'
import { demolitionServices } from '../data/services'
import { stories } from '../data/stories'

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
              인테리어철거, 원상복구철거, 상가철거, 식당철거, 욕실주방철거를 {REGION_LINE}에서
              합니다. 철거는 인테리어가 들어갈 자리를 비우는 공정이고, 범위와 반출은 견적에
              나눠 적습니다.
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
            <p className="kicker">현장 글</p>
            <h2>철거가 남은 지역 이야기</h2>
          </div>
          <StoryList stories={stories.filter((story) => story.category !== '화장실' && story.category !== '우물천정')} />
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
