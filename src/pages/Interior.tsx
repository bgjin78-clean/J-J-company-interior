import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { StoryList } from '../components/StoryList'
import { INTERIOR_DESCRIPTION, INTERIOR_TITLE, PATHS, REGION_LINE } from '../data/seo'
import { interiorServices } from '../data/services'
import { stories } from '../data/stories'

export function InteriorPage() {
  return (
    <>
      <Seo title={INTERIOR_TITLE} description={INTERIOR_DESCRIPTION} />
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">인테리어</p>
          <h1>인테리어는 하는 항목만 닫습니다</h1>
          <p className="lede lede-wide">
            {REGION_LINE}에서 화장실, 주방, 싱크대, 타일, 조명, 도배장판, 몰딩, 우물천정을
            필요한 줄만 견적에 넣습니다. 가벽이나 철거할 설비가 있을 때만 인테리어철거,
            욕실주방철거를 앞에 둡니다.
          </p>
        </div>
      </section>
      <section className="band">
        <div className="wrap spec-list">
          {interiorServices.map((item) => (
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
            <h2>마감 순서가 남은 기록</h2>
          </div>
          <StoryList
            stories={stories.filter((story) => story.category !== '상가철거' && story.category !== '원상복구철거')}
          />
        </div>
      </section>
      <section className="band">
        <div className="wrap note">
          <h2>인테리어 상담에 있으면 일정 계산이 됩니다</h2>
          <ul>
            <li>화장실, 주방, 우물천정 중 이번에 손볼 곳의 사진</li>
            <li>누수가 아래층까지 갔는지, 도배할 면에 곰팡이가 있는지</li>
            <li>싱크대, 타일, 조명을 가져온 것인지 시공에 넣을 것인지</li>
            <li>이사 날짜. 방수와 우물천정은 그 날짜에서 거꾸로 셉니다</li>
          </ul>
          <Link className="btn btn-solid" to={PATHS.consult}>
            인테리어 항목 남기기
          </Link>
        </div>
      </section>
    </>
  )
}
