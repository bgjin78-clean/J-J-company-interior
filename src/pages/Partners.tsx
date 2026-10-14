import { Link } from 'react-router-dom'
import { KoreaPartnerMap } from '../components/KoreaPartnerMap'
import { Seo } from '../components/Seo'
import { PARTNERS_DESCRIPTION, PARTNERS_TITLE, PATHS } from '../data/seo'

const terms = [
  {
    title: '직접 하는 일',
    text: '철거 또는 인테리어를 현장에서 하는 팀만 받습니다. 연결만 하는 경우는 적지 않습니다.',
  },
  {
    title: '가는 곳',
    text: '창원, 마산, 진해, 김해, 밀양, 함안 중 실제로 출동하는 곳과, 면 단위까지 가는지를 적어 주세요.',
  },
  {
    title: '금액 줄',
    text: '철거, 인테리어 자재, 잔재 차, 양중을 한 문장에 섞지 않고 나눌 수 있으면 됩니다.',
  },
  {
    title: '이름을 올리는 조건',
    text: '상호, 연락처, 현장 사진을 페이지에 써도 되는지에 대한 답이 있어야 합니다.',
  },
]

export function PartnersPage() {
  return (
    <>
      <Seo title={PARTNERS_TITLE} description={PARTNERS_DESCRIPTION} />
      <section className="page-hero">
        <div className="wrap page-hero-grid">
          <div>
            <p className="kicker">시공 협력</p>
            <h1>철거·인테리어를 직접 하는 팀</h1>
            <p className="lede">
              경남에서 해체와 마감을 직접 하는 팀의 소개를 받습니다. 가는 지역과
              최근 철거·인테리어 현장을 남겨 주시면 연락드립니다.
            </p>
            <Link className="btn btn-solid" to={`${PATHS.consult}?type=partner`}>
              팀 소개 남기기
            </Link>
          </div>
          <img src="/images/studio.jpg" alt="시공 범위를 정리하는 업무 공간" />
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-title">
            <p className="kicker">지역</p>
            <h2>시·도로 보는 활동 지역</h2>
            <p className="sub">
              대한민국을 도와 시·군으로 나눴습니다. 색이 들어간 곳은 창원입니다.
              마산과 진해는 창원시에 포함됩니다.
            </p>
          </div>
          <KoreaPartnerMap />
        </div>
      </section>

      <section className="band band-tight">
        <div className="wrap">
          <div className="section-title">
            <p className="kicker">안내</p>
            <h2>소개에 적혀 있으면 읽는 내용</h2>
            <p className="sub">직접 하는 철거·인테리어와 출동 지역이 먼저입니다.</p>
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
