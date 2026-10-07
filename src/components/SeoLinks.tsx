import { Link } from 'react-router-dom'
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
