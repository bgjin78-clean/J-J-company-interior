import { Link, Navigate, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { KeywordGroups } from '../components/SeoLinks'
import { areas } from '../data/areas'
import { AREAS_DESCRIPTION, AREAS_TITLE, REGION_LINE, areaSearchCopy, areaTitle } from '../data/seo'

export function AreasPage() {
  return (
    <>
      <Seo title={AREAS_TITLE} description={AREAS_DESCRIPTION} />
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">시공지역</p>
          <h1>{REGION_LINE}</h1>
          <p className="lede lede-wide">
            철거·인테리어 상담은 창원, 마산, 진해, 김해, 밀양, 함안 순입니다. 인테리어철거,
            원상복구철거, 상가철거, 식당철거, 욕실주방철거와 화장실, 주방, 싱크대, 타일, 조명,
            도배장판, 몰딩, 우물천정을 안내합니다. 제휴 시공은 창원 1곳이며, 다른 도시는
            파트너를 더 고른 뒤에 추가합니다.
          </p>
        </div>
      </section>
      <section className="band">
        <div className="wrap area-cards">
          {areas.map((area) => (
            <Link key={area.slug} to={`/areas/${area.slug}`} className="area-card">
              <span>{area.partner ? '제휴 선정' : '우선 홍보'}</span>
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
  if (!area) return <Navigate to="/areas" replace />

  return (
    <>
      <Seo title={areaTitle(area.name)} description={areaSearchCopy(area.name)} />
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">{area.region}</p>
          <h1>{area.name} 철거·인테리어</h1>
          <p className="lede lede-wide">{areaSearchCopy(area.name)}</p>
          <p className="lede">{area.lead}</p>
          <p className="status-pill">{area.partner ? '제휴 시공업체 선정' : '우선 홍보 · 전담 제휴는 추후'}</p>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="section-title">
            <h2>{area.name}에서 안내하는 공종</h2>
          </div>
          <KeywordGroups />
        </div>
        <div className="wrap detail-grid detail-gap">
          <div>
            <h2>이 지역에서 보는 점</h2>
            <ul className="plain-list">
              {area.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>우선 안내 권역</h2>
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
            {area.name} 인테리어철거, 상가철거, 식당철거와 화장실, 싱크대, 도배장판, 우물천정을
            한 문의로 받을 수 있습니다. 주소의 읍·면·동을 적어 주시면 방문 가능일을 가늠하기
            쉽습니다.
          </p>
          <Link className="btn btn-solid" to={`/contact?area=${encodeURIComponent(area.name)}`}>
            {area.name} 문의 남기기
          </Link>
        </div>
      </section>
    </>
  )
}
