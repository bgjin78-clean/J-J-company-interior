import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PATHS } from '../data/seo'

const links = [
  { to: '/', label: '홈' },
  { to: PATHS.interior, label: '인테리어' },
  { to: PATHS.cheolgeo, label: '철거·정리' },
  { to: PATHS.region, label: '시공지역' },
  { to: PATHS.notes, label: '작업후기' },
  { to: PATHS.consult, label: '문의·FAQ' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="head">
      <div className="wrap head-row">
        <button
          className={open ? 'menu is-open' : 'menu'}
          aria-label="메뉴"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          메뉴
        </button>
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <img src="/logo.svg?v=2" alt="" width={42} height={42} />
          <span className="logo-name">
            <strong>JJ애드컴퍼니</strong>
            <em>부산·경남 철거·인테리어</em>
          </span>
        </Link>
        <nav className={open ? 'nav is-open' : 'nav'}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Link className="head-cta" to={PATHS.consult} onClick={() => setOpen(false)}>
          상담 문의
        </Link>
      </div>
    </header>
  )
}
