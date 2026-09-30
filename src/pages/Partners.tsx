import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { areas } from '../data/areas'

const terms = [
  {
    title: '시공 주체',
    text: '철거·인테리어·폐기물 처리를 직접 수행하는 업체. 홍보만 하는 영업 조직은 받지 않습니다.',
  },
  {
    title: '권역',
    text: '사무실이나 실제 출동 팀이 우선 여섯 지역 안에 있어야 합니다. 창원은 이미 1곳이 있어 후순위입니다.',
  },
  {
    title: '견적 방식',
    text: '철거, 마감, 폐기물 처리, 양중비를 항목으로 나눠 설명할 수 있어야 합니다.',
  },
  {
    title: '소개 자료',
    text: '상호, 대표 연락처, 최근 현장 사진 사용 동의가 있어야 이 사이트에 이름을 올립니다.',
  },
]

export function PartnersPage() {
  return (
    <>
      <Seo
        title="협력업체 모집"
        description="J&J adcompany가 철거·인테리어 제휴 시공업체를 모집합니다. 창원 1곳 선정, 마산·진해·밀양·김해·함안 우선."
      />
      <section className="page-hero">
        <div className="wrap page-hero-grid">
          <div>
            <p className="kicker">협력업체 모집</p>
            <h1>같이 알릴 시공 파트너</h1>
            <p className="lede">
              J&amp;J adcompany는 광고로 지역 업체를 소개합니다. 고객이 남긴 상담은
              선정된 업체로 연결되고, 계약과 시공 책임은 그 업체에 있습니다. 지금은
              창원 제휴 1곳이 정해져 있고, 비어 있는 권역을 이어서 채웁니다.
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
            <p className="kicker">현재 선정</p>
            <h2>창원 제휴 1곳</h2>
          </div>
          <article className="selected">
            <p>선정 완료</p>
            <h3>창원 시공 파트너</h3>
            <p>
              창원을 거점으로 활동하는 철거·인테리어 업체입니다. 상호와 연락처는
              소개 문안이 확정되면 게시합니다. 마산, 진해, 밀양, 김해, 함안 상담도
              일정에 따라 이 업체로 먼저 연결합니다.
            </p>
          </article>
          <div className="area-index area-index-gap">
            {areas.map((area) => (
              <div key={area.slug} className="area-row area-row-static">
                <strong>{area.name}</strong>
                <span>{area.partner ? '제휴 선정' : '모집·연결 검토'}</span>
                <em>{area.partner ? '추가 선정은 후순위' : '우선 홍보 지역'}</em>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-title">
            <p className="kicker">보는 기준</p>
            <h2>신청 전에 맞춰 보는 항목</h2>
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
