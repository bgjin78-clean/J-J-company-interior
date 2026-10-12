import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { StoryList } from '../components/StoryList'
import { DEMOLITION_DESCRIPTION, DEMOLITION_TITLE, PATHS, REGION_LINE } from '../data/seo'
import { demolitionServices } from '../data/services'
import { stories } from '../data/stories'

export function DemolitionPage() {
  return (
    <>
      <Seo title={DEMOLITION_TITLE} description={DEMOLITION_DESCRIPTION} />
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">철거</p>
          <h1>철거는 다섯 가지로 나눠 적습니다</h1>
          <p className="lede lede-wide">
            {REGION_LINE}에서 인테리어철거, 원상복구철거, 상가철거, 식당철거, 욕실주방철거를
            한 금액으로 묶지 않습니다. 부분철거와 잔재 차는 해당할 때만 줄을 추가합니다.
          </p>
        </div>
      </section>
      <section className="band">
        <div className="wrap spec-list">
          {demolitionServices.map((item) => (
            <article key={item.id} id={item.id} className="spec">
              <img src={item.image} alt={item.imageAlt} />
              <div>
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
            <h2>철거 범위가 남은 기록</h2>
          </div>
          <StoryList stories={stories.filter((story) => story.category !== '화장실' && story.category !== '우물천정')} />
        </div>
      </section>
      <section className="band">
        <div className="wrap note">
          <h2>철거 상담에 사진을 붙이면 좋은 것</h2>
          <ul>
            <li>남길 문과 걷을 벽이 같이 보이게 찍은 사진</li>
            <li>아파트 승강기 사용이 끝나는 시각</li>
            <li>원상복구철거라면 복구 문장이 있는 계약 한 장</li>
            <li>식당철거라면 주방 설비와 마지막 영업 시각</li>
            <li>잔재 차가 설 자리</li>
          </ul>
          <Link className="btn btn-solid" to={PATHS.consult}>
            철거 범위 남기기
          </Link>
        </div>
      </section>
    </>
  )
}
