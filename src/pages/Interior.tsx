import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { RegionLinks } from '../components/SeoLinks'
import { INTERIOR_DESCRIPTION, INTERIOR_TITLE, REGION_LINE } from '../data/seo'
import { interiorServices } from '../data/services'

export function InteriorPage() {
  return (
    <>
      <Seo title={INTERIOR_TITLE} description={INTERIOR_DESCRIPTION} />
      <section className="page-hero">
        <div className="wrap page-hero-grid">
          <div>
            <p className="kicker">인테리어</p>
            <h1>화장실, 주방, 도배장판, 우물천정</h1>
            <p className="lede lede-wide">
              화장실, 주방, 싱크대, 타일, 조명, 도배장판, 몰딩, 우물천정 시공을 {REGION_LINE}{' '}
              순으로 안내합니다. 철거가 필요하면 인테리어철거나 욕실주방철거를 앞에 두고,
              마감은 제휴 업체가 이어서 합니다.
            </p>
          </div>
          <img src="/images/remodel.jpg" alt="도배장판과 조명이 끝난 거실" />
        </div>
      </section>
      <section className="band">
        <div className="wrap service-list">
          {interiorServices.map((item, index) => (
            <article key={item.id} id={item.id} className={index % 2 ? 'service-row flip' : 'service-row'}>
              <img src={item.image} alt={item.imageAlt} />
              <div>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="section-title">
            <p className="kicker">지역</p>
            <h2>{REGION_LINE}</h2>
            <p className="sub">화장실, 싱크대, 도배장판, 우물천정 상담도 이 순서대로 받습니다.</p>
          </div>
          <RegionLinks />
        </div>
      </section>
      <section className="band">
        <div className="wrap note">
          <h2>상담 전에 있으면 좋은 자료</h2>
          <ul>
            <li>화장실·주방·우물천정의 참고 사진</li>
            <li>누수 이력, 도배장판 면의 곰팡이 여부</li>
            <li>싱크대와 타일, 조명을 직접 살지 시공에 포함할지</li>
            <li>이사나 입주 날짜</li>
          </ul>
          <Link className="btn btn-solid" to="/contact">
            인테리어 상담
          </Link>
        </div>
      </section>
    </>
  )
}
