import { Link, Navigate, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { areas } from '../data/areas'

export function AreasPage() {
  return (
    <>
      <Seo
        title="시공지역"
        description="J&J adcompany 우선 홍보 지역은 창원, 마산, 진해, 밀양, 김해, 함안입니다. 창원에 제휴 시공업체 1곳이 선정되어 있습니다."
      />
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">시공지역</p>
          <h1>우선 여섯 지역</h1>
          <p className="lede">
            지금은 창원, 마산, 진해, 밀양, 김해, 함안만 홍보합니다. 제휴 시공은 창원
            1곳이며, 인접 지역은 그 업체의 일정으로 상담을 엽니다. 다른 도시는 파트너를
            더 고른 뒤에 추가합니다.
          </p>
        </div>
      </section>
      <section className="band">
        <div className="wrap area-cards">
          {areas.map((area) => (
            <Link key={area.slug} to={`/areas/${area.slug}`} className="area-card">
              <span>{area.partner ? '제휴 선정' : '우선 홍보'}</span>
              <h2>{area.name}</h2>
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
      <Seo title={`${area.name} 철거·인테리어`} description={area.lead} />
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">{area.region}</p>
          <h1>{area.name}</h1>
          <p className="lede">{area.lead}</p>
          <p className="status-pill">{area.partner ? '제휴 시공업체 선정' : '우선 홍보 · 전담 제휴는 추후'}</p>
        </div>
      </section>
      <section className="band">
        <div className="wrap detail-grid">
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
            욕실·주방·도배장판·조명과 필요한 철거, 폐기물 처리를 한 문의로 받을 수
            있습니다. 주소의 읍·면·동을 적어 주시면 방문 가능일을 가늠하기 쉽습니다.
          </p>
          <Link className="btn btn-solid" to={`/contact?area=${encodeURIComponent(area.name)}`}>
            {area.name} 문의 남기기
          </Link>
        </div>
      </section>
    </>
  )
}
