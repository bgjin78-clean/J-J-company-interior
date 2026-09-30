import { Link } from 'react-router-dom'
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
          <Link to="/interior">인테리어</Link>
          <Link to="/demolition">철거·정리</Link>
          <Link to="/partners">협력업체 모집</Link>
          <Link to="/reviews">작업후기</Link>
          <Link to="/contact">문의</Link>
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
        <span>철거, 인테리어</span>
      </div>
    </footer>
  )
}
