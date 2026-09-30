import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SITE } from '../data/site'

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
        <p>
          협력업체 모집 중
          <span>창원 제휴 시공 1곳 선정</span>
          <span>우선 권역 창원 · 마산 · 진해 · 밀양 · 김해 · 함안</span>
          <Link className="recruit-link" to="/partners" onClick={() => setOpen(false)}>
            모집 안내
          </Link>
        </p>
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
          <img className="logo-img" src="/logo.svg" alt="" width={48} height={48} />
          <span className="logo-sub">
            <strong>J&amp;J adcompany</strong>
            <em>철거·인테리어 홍보</em>
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
        <Link className="head-cta" to="/contact" onClick={() => setOpen(false)}>
          {SITE.phoneDisplay || '상담 남기기'}
        </Link>
      </div>
    </header>
  )
}
