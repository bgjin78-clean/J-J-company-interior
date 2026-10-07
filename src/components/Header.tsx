import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SITE, phoneHref } from '../data/site'

const links = [
  { to: '/', label: '홈' },
  { to: '/interior', label: '인테리어' },
  { to: '/demolition', label: '철거·정리' },
  { to: '/areas', label: '시공지역' },
  { to: '/partners', label: '협력업체' },
  { to: '/reviews', label: '작업후기' },
  { to: '/contact', label: '문의' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="head">
      <div className="recruit-bar">
        <div className="wrap">
          <Link to="/partners" onClick={() => setOpen(false)}>
            협력업체 모집중
          </Link>
        </div>
      </div>
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
          <span>철거, 인테리어</span>
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
        <a className="head-cta" href={phoneHref}>
          {SITE.phoneDisplay}
        </a>
      </div>
    </header>
  )
}
