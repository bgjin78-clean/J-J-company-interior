import { Link, Navigate, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { KeywordGroups } from '../components/SeoLinks'
import { StoryList } from '../components/StoryList'
import { areas } from '../data/areas'
import { stories } from '../data/stories'
import { AREAS_DESCRIPTION, AREAS_TITLE, PATHS, areaSearchCopy, areaTitle } from '../data/seo'

export function LegacyAreaRedirect() {
  const { slug } = useParams()
  return <Navigate to={`${PATHS.region}/${slug ?? ''}`} replace />
}

export function AreasPage() {
  return (
    <>
      <Seo title={AREAS_TITLE} description={AREAS_DESCRIPTION} />
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">경남권</p>
          <h1>경남 여섯 지역의 철거·인테리어</h1>
          <p className="lede lede-wide">
            창원, 마산, 진해, 김해, 밀양, 함안은 승강기 시간, 골목 반출, 임대 종료일이
            다릅니다. 인테리어철거와 상가철거, 화장실과 도배장판, 우물천정은 그 조건 위에
            올라갑니다.
          </p>
        </div>
      </section>
      <section className="band">
        <div className="wrap area-cards">
          {areas.map((area) => (
            <Link key={area.slug} to={`${PATHS.region}/${area.slug}`} className="area-card">
              <span>{area.places[0]}</span>
              <h2>{area.name} 철거·인테리어</h2>
              <p>{area.headline}</p>
              <em>{area.region}</em>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export function AreaDetailPage() {
  const { slug } = useParams()
  const area = areas.find((item) => item.slug === slug)
  if (!area) return <Navigate to={PATHS.region} replace />

  return (
    <>
      <Seo title={areaTitle(area.name)} description={areaSearchCopy(area.name)} />
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">{area.region}</p>
          <h1>
            {area.name} 철거를 먼저, 인테리어는 그다음
          </h1>
          <p className="lede lede-wide">{areaSearchCopy(area.name)}</p>
          <p className="lede">{area.lead}</p>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="section-title">
            <h2>{area.name}에서 나눈 기록</h2>
          </div>
          <StoryList stories={stories.filter((story) => story.slug === area.slug)} />
        </div>
        <div className="wrap detail-gap">
          <div className="section-title">
            <h2>{area.name}에서 고르는 이름</h2>
          </div>
          <KeywordGroups />
        </div>
        <div className="wrap detail-grid detail-gap">
          <div>
            <h2>이 지역에서 비용이 달라지는 이유</h2>
            <ul className="plain-list">
              {area.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>주소에 자주 적히는 동네</h2>
            <div className="chips">
              {area.places.map((place) => (
                <span key={place}>{place}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="wrap note note-gap">
          <h2>{area.name} 상담</h2>
          <p>
            {area.name} 인테리어철거, 상가철거, 식당철거와 화장실, 싱크대, 도배장판,
            우물천정은 한 양식에 받습니다. 읍·면·동을 적으면 왕복이 되는지 먼저 가늠합니다.
          </p>
          <Link className="btn btn-solid" to={`${PATHS.consult}?area=${encodeURIComponent(area.name)}`}>
            {area.name} 범위 남기기
          </Link>
        </div>
      </section>
    </>
  )
}
