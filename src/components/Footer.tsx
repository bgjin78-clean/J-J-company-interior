import { Link } from 'react-router-dom'
import { areas } from '../data/areas'
import { PATHS } from '../data/seo'
import { SITE, phoneHref } from '../data/site'

const fields = [
  { label: '업체명', value: '' },
  { label: '연락처', value: SITE.phoneDisplay },
  { label: '사업자등록번호', value: '' },
  { label: '광고업', value: '' },
]

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <div>
          <p className="foot-label">메뉴</p>
          <Link to={PATHS.cheolgeo}>철거</Link>
          <Link to={PATHS.interior}>인테리어</Link>
          <Link to={PATHS.region}>경남권</Link>
          {areas.map((area) => (
            <Link key={area.slug} to={`${PATHS.region}/${area.slug}`}>
              {area.name} 철거·인테리어
            </Link>
          ))}
          <Link to={PATHS.partners}>시공 협력</Link>
          <Link to={PATHS.notes}>현장 메모</Link>
          <Link to={PATHS.consult}>상담</Link>
        </div>
        <div>
          <p className="foot-label">사업자 정보</p>
          <dl className="biz-fields">
            {fields.map((field) => (
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
        <span>경남권 철거·인테리어</span>
      </div>
    </footer>
  )
}
