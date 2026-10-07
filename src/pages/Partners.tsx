import { Link } from 'react-router-dom'
import { KoreaPartnerMap } from '../components/KoreaPartnerMap'
import { Seo } from '../components/Seo'
import { PARTNERS_DESCRIPTION, PARTNERS_TITLE } from '../data/seo'

const terms = [
  {
    title: '시공 주체',
    text: '철거·인테리어·폐기물 처리를 직접 수행하는 업체만 받습니다.',
  },
  {
    title: '그 외 지역',
    text: '이미 제휴가 정해진 지역이 아닌 곳에서 활동하는 업체를 모집합니다.',
  },
  {
    title: '견적 방식',
    text: '철거, 마감, 폐기물 처리, 양중비를 항목으로 나눠 설명할 수 있어야 합니다.',
  },
  {
    title: '소개 자료',
    text: '상호, 연락처, 최근 현장 사진 사용 동의가 있어야 이름을 올립니다.',
  },
]

export function PartnersPage() {
  return (
    <>
      <Seo title={PARTNERS_TITLE} description={PARTNERS_DESCRIPTION} />
      <section className="page-hero">
        <div className="wrap page-hero-grid">
          <div>
            <p className="kicker">협력업체 모집</p>
            <h1>그 외 지역 시공 파트너</h1>
            <p className="lede">
              철거와 인테리어를 직접 하는 업체를 모집합니다. 이미 제휴가 있는 지역이
              아닌 곳의 신청을 받으며, 상담과 시공은 선정된 업체가 맡습니다.
            </p>
            <Link className="btn btn-solid" to="/contact?type=partner">
              협력 신청하기
            </Link>
          </div>
          <img src="/images/studio.jpg" alt="제휴 논의를 정리하는 업무 공간" />
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-title">
            <p className="kicker">지역</p>
            <h2>시·도로 보는 협력업체</h2>
            <p className="sub">
              대한민국을 도와 시·군으로 나눴습니다. 색이 들어간 창원시에 제휴 시공업체가 있습니다.
              마산과 진해는 창원시에 포함됩니다.
            </p>
          </div>
          <KoreaPartnerMap />
        </div>
      </section>

      <section className="band band-tight">
        <div className="wrap">
          <div className="section-title">
            <p className="kicker">모집</p>
            <h2>그 외 지역 업체를 찾습니다</h2>
            <p className="sub">
              활동 지역과 주요 공종을 적어 주시면 비어 있는 지역부터 검토합니다.
            </p>
          </div>
          <div className="term-grid">
            {terms.map((term, index) => (
              <article key={term.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{term.title}</h3>
                <p>{term.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
