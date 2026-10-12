import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'
import { AreaDetailPage, AreasPage, LegacyAreaRedirect } from './pages/Areas'
import { ContactPage, LegacyContactRedirect } from './pages/Contact'
import { DemolitionPage } from './pages/Demolition'
import { HomePage } from './pages/Home'
import { InteriorPage } from './pages/Interior'
import { PartnersPage } from './pages/Partners'
import { ReviewsPage } from './pages/Reviews'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cheolgeo" element={<DemolitionPage />} />
          <Route path="interior-magam" element={<InteriorPage />} />
          <Route path="gwonyeok" element={<AreasPage />} />
          <Route path="gwonyeok/:slug" element={<AreaDetailPage />} />
          <Route path="partners" element={<PartnersPage />} />
          <Route path="hyeonjang" element={<ReviewsPage />} />
          <Route path="sangdam" element={<ContactPage />} />
          <Route path="demolition" element={<Navigate to="/cheolgeo" replace />} />
          <Route path="interior" element={<Navigate to="/interior-magam" replace />} />
          <Route path="areas" element={<Navigate to="/gwonyeok" replace />} />
          <Route path="areas/:slug" element={<LegacyAreaRedirect />} />
          <Route path="reviews" element={<Navigate to="/hyeonjang" replace />} />
          <Route path="contact" element={<LegacyContactRedirect />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
