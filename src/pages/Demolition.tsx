import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { ServiceCards } from '../components/ServiceCards'
import { DEMOLITION_DESCRIPTION, DEMOLITION_TITLE, PATHS, REGION_LINE } from '../data/seo'
import { SITE, phoneHref } from '../data/site'
import { demolitionServices } from '../data/services'

const prep = [
  '남길 곳과 걷어 낼 곳이 같이 보이게 찍은 사진',
  '아파트라면 승강기를 쓸 수 있는 시간',
  '원상복구철거라면 복구 범위가 적힌 계약 문장',
  '식당철거라면 주방 설비 사진과 마지막 영업 시간',
  '폐기물을 실을 차가 설 자리',
]

export function DemolitionPage() {
  return (
    <>
      <Seo title={DEMOLITION_TITLE} description={DEMOLITION_DESCRIPTION} />
      <section className="page-hero">
        <div className="wrap page-hero-grid">
          <div>
            <p className="kicker">철거·정리</p>
            <h1>철거·정리는 비울 곳만 걷습니다</h1>
            <p className="lede">
              {REGION_LINE}의 집과 상가를 받습니다. 인테리어 전 해체, 임대가 끝난 원상복구,
              상가철거와 식당철거, 물을 쓰는 칸, 한 구간만 여는 부분철거, 잔재 정리까지
              현장 범위에 맞춰 진행합니다.
            </p>
          </div>
          <img src="/images/partial.jpg" alt="한 구간만 걷어 낸 부분철거 현장" />
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="section-title">
            <h2>철거·정리 세부 분야</h2>
            <p className="sub">해체비, 양중, 잔재는 인테리어 자재와 다른 줄로 적습니다.</p>
          </div>
          <ServiceCards items={demolitionServices} />
        </div>
      </section>
      <section className="band band-tight">
        <div className="wrap prep">
          <h2>철거 상담 전에 준비하면 좋은 것</h2>
          <ul>
            {prep.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link className="btn btn-solid" to={PATHS.consult}>
            철거 상담
          </Link>
        </div>
      </section>
      <section className="band">
        <div className="wrap call-band">
          <div>
            <p className="kicker">JJ애드컴퍼니</p>
            <h2>{SITE.phoneDisplay}</h2>
            <p>
              {SITE.hours} · {REGION_LINE}
            </p>
          </div>
          <a className="btn btn-solid" href={phoneHref}>
            전화 상담
          </a>
        </div>
      </section>
    </>
  )
}
