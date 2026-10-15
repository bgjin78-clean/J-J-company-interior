import { Link, Navigate, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { KeywordGroups } from '../components/SeoLinks'
import { StoryList } from '../components/StoryList'
import { areas, districtGuides } from '../data/areas'
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
          <p className="kicker">시공지역</p>
          <h1>시공지역</h1>
          <p className="lede lede-wide">
            창원, 마산, 진해, 김해, 밀양, 함안을 시 단위로 안내하고, 상담이 잦은 읍·면·동은
            현장 조건이 다르게 적혀 있습니다. 승강기 시간, 골목 반출, 임대 종료일이 견적을
            바꿉니다.
          </p>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="section-title">
            <h2>지역별 안내</h2>
            <p className="sub">시·군 페이지에서 철거와 인테리어를 그 지역 조건으로 읽습니다.</p>
          </div>
          <div className="city-board">
            {areas.map((area) => (
              <Link key={area.slug} to={`${PATHS.region}/${area.slug}`} className="city-card">
                <em>{area.region}</em>
                <h2>{area.name} 철거·인테리어</h2>
                <p>{area.lead}</p>
                <span>자세히 보기</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="band band-tight">
        <div className="wrap">
          <div className="section-title">
            <h2>상담이 잦은 읍·면·동</h2>
            <p className="sub">동네마다 먼저 묻는 공종이 다릅니다. 같은 문장을 반복하지 않습니다.</p>
          </div>
          <div className="dong-grid">
            {districtGuides.map((item) => (
              <Link key={item.dong} to={`${PATHS.region}/${item.slug}`} className="dong-card">
                <small>
                  {item.city} · {item.focus}
                </small>
                <strong>{item.dong}</strong>
                <p>{item.line}</p>
              </Link>
            ))}
          </div>
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
