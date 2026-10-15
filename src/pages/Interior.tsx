import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { ServiceCards } from '../components/ServiceCards'
import { INTERIOR_DESCRIPTION, INTERIOR_TITLE, PATHS, REGION_LINE } from '../data/seo'
import { SITE, phoneHref } from '../data/site'
import { interiorServices } from '../data/services'

const prep = [
  '밝게, 따뜻하게, 무채색처럼 원하는 톤과 참고 사진을 준비해 주세요.',
  '화장실은 누수 이력, 도배는 곰팡이·결로가 있었는지를 알려 주시면 범위를 줄일 수 있습니다.',
  '타일, 조명, 싱크대 상판을 이미 사 두었는지, 시공에 넣을지를 구분해 주세요.',
  '이사·입주 날짜가 있으면 방수와 우물천정은 그 날짜에서 거꾸로 셉니다.',
]

export function InteriorPage() {
  return (
    <>
      <Seo title={INTERIOR_TITLE} description={INTERIOR_DESCRIPTION} />
      <section className="page-hero">
        <div className="wrap page-hero-grid">
          <div>
            <p className="kicker">인테리어</p>
            <h1>인테리어는 손보는 칸만 닫습니다</h1>
            <p className="lede">
              {REGION_LINE}. 화장실, 주방, 싱크대, 타일, 조명, 도배장판, 몰딩, 우물천정,
              문과 부분수리까지 필요한 항목만 견적에 넣습니다. 가벽이나 철거할 설비가 있을
              때만 철거를 앞에 둡니다.
            </p>
          </div>
          <img src="/images/ceiling.jpg" alt="간접조명이 들어간 우물천정" />
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="section-title">
            <h2>인테리어 세부 분야</h2>
            <p className="sub">한 칸만 맡겨도 되고, 철거가 필요한 집은 해체 다음 마감으로 이어집니다.</p>
          </div>
          <ServiceCards items={interiorServices} />
        </div>
      </section>
      <section className="band band-tight">
        <div className="wrap prep">
          <h2>시공 전에 있으면 일정 계산이 됩니다</h2>
          <ul>
            {prep.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link className="btn btn-solid" to={PATHS.consult}>
            인테리어 상담
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
