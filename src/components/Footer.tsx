import { Link } from 'react-router-dom'
import { areas } from '../data/areas'
import { PATHS } from '../data/seo'
import { SITE, phoneHref } from '../data/site'

export function Footer() {
  return (
    <footer className="foot" id="bottom">
      <div className="wrap foot-grid">
        <div className="foot-brand-block">
          <p className="foot-brand">
            <img src="/logo.svg?v=2" alt="" width={42} height={42} />
            <span>JJ애드컴퍼니</span>
          </p>
          <p>
            제이앤제이 애드컴퍼니. 창원·마산·진해·김해·밀양·함안에서 철거·정리와 인테리어
            마감을 범위별로 진행합니다.
          </p>
          <a className="foot-phone" href={phoneHref}>
            {SITE.phoneDisplay}
          </a>
          <p>
            {SITE.hours}
            <br />
            현장 방문은 일정 협의 후 진행합니다.
          </p>
        </div>
        <div>
          <p className="foot-label">메뉴</p>
          <Link to="/">홈</Link>
          <Link to={PATHS.interior}>인테리어</Link>
          <Link to={PATHS.cheolgeo}>철거·정리</Link>
          <Link to={PATHS.region}>시공지역</Link>
          <Link to={PATHS.notes}>작업후기</Link>
          <Link to={PATHS.consult}>문의·FAQ</Link>
          <Link to={PATHS.partners}>시공 협력</Link>
        </div>
        <div>
          <p className="foot-label">시공지역</p>
          {areas.map((area) => (
            <Link key={area.slug} to={`${PATHS.region}/${area.slug}`}>
              {area.name} 철거·인테리어
            </Link>
          ))}
        </div>
        <div>
          <p className="foot-label">사업자 정보</p>
          <dl className="biz-fields">
            <div>
              <dt>업체명</dt>
              <dd>{SITE.nameKo}</dd>
            </div>
            <div>
              <dt>영문</dt>
              <dd>{SITE.name}</dd>
            </div>
            <div>
              <dt>연락처</dt>
              <dd>
                <a href={phoneHref}>{SITE.phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt>상담</dt>
              <dd>{SITE.hours}</dd>
            </div>
            <div>
              <dt>시공상담</dt>
              <dd>철거·인테리어 범위</dd>
            </div>
            <div>
              <dt>업체상담</dt>
              <dd>직접 시공하는 팀</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="wrap foot-bottom">
        <span>© {SITE.nameKo}</span>
        <span>경남 철거·인테리어 · {SITE.phoneDisplay}</span>
      </div>
    </footer>
  )
}
