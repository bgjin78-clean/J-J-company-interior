import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { ServiceCards } from '../components/ServiceCards'
import { INTERIOR_DESCRIPTION, INTERIOR_TITLE, PATHS } from '../data/seo'
import { SITE, phoneHref } from '../data/site'
import { interiorServices } from '../data/services'

const prep = [
  '원하는 분위기와 참고 사진을 준비해 주세요.',
  '누수나 곰팡이가 있었으면 미리 알려 주세요.',
  '자재를 이미 사 두었는지, 시공에 포함할지 알려 주세요.',
  '이사 날짜가 있으면 그 날짜에 맞춰 일정을 잡습니다.',
]

export function InteriorPage() {
  return (
    <>
      <Seo title={INTERIOR_TITLE} description={INTERIOR_DESCRIPTION} />
      <section className="page-hero">
        <div className="wrap page-hero-grid">
          <div>
            <p className="kicker">인테리어</p>
            <h1>필요한 곳만 인테리어합니다</h1>
            <p className="lede">
              부산, 경남 전지역에서 필요한 곳만 진행합니다. 화장실, 주방, 도배, 조명처럼
              이번에 하는 공사만 맡기시면 됩니다. 철거가 필요하면 그 부분만 먼저 정리합니다.
            </p>
          </div>
          <img src="/images/ceiling.jpg" alt="간접조명이 들어간 우물천정" />
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="section-title">
            <h2>인테리어 세부 분야</h2>
            <p className="sub">필요한 공간만 따로 진행할 수 있습니다.</p>
          </div>
          <ServiceCards items={interiorServices} />
        </div>
      </section>
      <section className="band band-tight">
        <div className="wrap prep">
          <h2>상담 전에 알려 주시면 좋은 것</h2>
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
            <h2>{SITE.phoneDisplay}</h2>
            <p>
              {SITE.hours} · 부산, 경남 전지역
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
