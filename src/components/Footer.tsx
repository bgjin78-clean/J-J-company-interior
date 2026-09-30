import { Link } from 'react-router-dom'
import { SITE } from '../data/site'

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <div>
          <p className="foot-brand">
            <img src="/logo.svg" alt="" width={42} height={42} />
            J&amp;J <span>adcompany</span>
          </p>
          <p>
            광고대행업체가 운영하는 철거·인테리어 홍보 플랫폼입니다. 현장 시공은
            지역 제휴업체가 담당하고, 이 사이트는 권역 안내와 상담 연결을 맡습니다.
          </p>
        </div>
        <div>
          <p className="foot-label">메뉴</p>
          <Link to="/interior">인테리어</Link>
          <Link to="/demolition">철거·정리</Link>
          <Link to="/areas">시공지역</Link>
          <Link to="/partners">협력업체 모집</Link>
          <Link to="/reviews">작업후기</Link>
          <Link to="/contact">문의</Link>
        </div>
        <div>
          <p className="foot-label">안내</p>
          <p>우선 홍보 창원 · 마산 · 진해 · 밀양 · 김해 · 함안</p>
          <p>제휴 시공 창원 1곳 선정</p>
          <p>{SITE.hours}</p>
          {SITE.email ? <p>{SITE.email}</p> : <p>전화·메일은 제휴 소개가 확정되면 게시합니다.</p>}
        </div>
      </div>
      <div className="wrap foot-bottom">
        <span>© {new Date().getFullYear()} {SITE.name}</span>
        <span>{SITE.nameKo}</span>
      </div>
    </footer>
  )
}
