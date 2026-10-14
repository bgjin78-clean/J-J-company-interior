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
          <h1>현장에 필요한 철거를 진행합니다</h1>
          <p className="lede lede-wide">
            {REGION_LINE}에서 집과 상가의 철거를 상담합니다. 인테리어를 앞둔 해체, 임대 종료
            후의 원상복구철거, 상가철거와 식당철거, 욕실과 주방처럼 물을 쓰는 공간, 일부만
            비우는 부분철거와 잔재 정리까지 현장 범위에 맞춰 진행합니다.
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
      <section className="band" id="prep">
        <div className="wrap note">
          <h2>철거 상담 전에 준비할 사항</h2>
          <p>아래를 미리 챙겨 주시면 상담이 더 빨리 진행됩니다.</p>
          <ul>
            <li>남길 곳과 걷어 낼 곳이 같이 보이게 찍은 사진</li>
            <li>아파트라면 승강기를 쓸 수 있는 시간</li>
            <li>원상복구철거라면 복구 범위가 적힌 계약서</li>
            <li>식당철거라면 주방 설비 사진과 마지막 영업 시간</li>
            <li>폐기물을 실을 차가 설 수 있는 자리</li>
          </ul>
          <Link className="btn btn-solid" to={PATHS.consult}>
            철거 상담하기
          </Link>
        </div>
      </section>
    </>
  )
}
