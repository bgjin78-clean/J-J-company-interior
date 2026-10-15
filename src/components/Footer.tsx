import { Link } from 'react-router-dom'
import { PATHS } from '../data/seo'
import { SITE, phoneHref } from '../data/site'

const businessFields = [
  { label: '업체명', value: '' },
  { label: '사업자등록번호', value: '' },
  { label: '연락처', value: SITE.phoneDisplay },
]

export function Footer() {
  return (
    <footer className="foot" id="bottom">
      <div className="wrap foot-grid">
        <div className="foot-brand-block">
          <p className="foot-brand">
            <img src="/logo.svg?v=2" alt="" width={32} height={32} />
            <span>
              JJ애드컴퍼니
              <small>광고대행</small>
            </span>
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
        </div>
        <div>
          <p className="foot-label">시공지역</p>
          <p className="foot-region">부산, 경남 전지역</p>
        </div>
        <div>
          <p className="foot-label">시공업체 정보</p>
          <dl className="biz-fields">
            {businessFields.map((field) => (
              <div key={field.label}>
                <dt>{field.label}</dt>
                <dd>
                  {field.label === '연락처' && field.value ? (
                    <a href={phoneHref}>{field.value}</a>
                  ) : (
                    field.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="wrap foot-bottom">
        <span>© {SITE.nameKo}</span>
        <span>광고대행 · 부산, 경남 전지역</span>
      </div>
    </footer>
  )
}
