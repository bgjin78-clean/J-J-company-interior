import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'
import { AreasPage, AreaDetailPage } from './pages/Areas'
import { ContactPage } from './pages/Contact'
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
          <Route path="interior" element={<InteriorPage />} />
          <Route path="demolition" element={<DemolitionPage />} />
          <Route path="areas" element={<AreasPage />} />
          <Route path="areas/:slug" element={<AreaDetailPage />} />
          <Route path="partners" element={<PartnersPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
