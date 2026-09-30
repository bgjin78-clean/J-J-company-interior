import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { interiorServices } from '../data/services'

export function InteriorPage() {
  return (
    <>
      <Seo
        title="인테리어"
        description="욕실, 주방, 도배장판, 조명, 몰딩, 타일, 목공, 부분수리 인테리어 안내."
      />
      <section className="page-hero">
        <div className="wrap page-hero-grid">
          <div>
            <p className="kicker">인테리어</p>
            <h1>생활 마감을 제휴 시공으로</h1>
            <p className="lede">
              욕실과 주방, 도배·장판, 조명, 몰딩, 타일·페인트, 문과 목공, 부분수리.
              철거가 필요하면 해체를 앞에 두고, 마감은 제휴 업체가 이어서 합니다.
            </p>
          </div>
          <img src="/images/remodel.jpg" alt="마감이 끝난 거실" />
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
        <div className="wrap note">
          <h2>상담 전에 있으면 좋은 자료</h2>
          <ul>
            <li>원하는 밝기와 참고 사진</li>
            <li>욕실·주방의 누수 이력, 도배면의 곰팡이 여부</li>
            <li>자재를 직접 살지, 시공에 포함할지</li>
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
