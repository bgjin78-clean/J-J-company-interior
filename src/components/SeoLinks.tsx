import { Link } from 'react-router-dom'
import { areas } from '../data/areas'
import { demolitionTerms, interiorTerms } from '../data/seo'

export function KeywordGroups() {
  return (
    <div className="keyword-groups">
      <div>
        <h3>철거</h3>
        <div className="chips">
          {demolitionTerms.map((term) => (
            <Link key={term.label} to={term.href}>
              {term.label}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h3>인테리어</h3>
        <div className="chips">
          {interiorTerms.map((term) => (
            <Link key={term.label} to={term.href}>
              {term.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export function RegionLinks() {
  return (
    <div className="area-index">
      {areas.map((area, index) => (
        <Link key={area.slug} to={`/areas/${area.slug}`} className="area-row">
          <b>{String(index + 1).padStart(2, '0')}</b>
          <strong>{area.name}</strong>
          <span>{area.partner ? '제휴 선정' : '우선 홍보'}</span>
          <em>{area.headline}</em>
        </Link>
      ))}
    </div>
  )
}
