import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { SiteLayout } from './layout/SiteLayout'
import { HomePage } from './pages/HomePage'
import { AdminPage } from './pages/AdminPage'
import { LoginPage } from './pages/LoginPage'
import {
  isAuthenticated,
  loadPortfolioData,
  savePortfolioData,
  setAuthenticated,
} from '../shared/state/portfolioStore'
import { useMemo, useState } from 'react'
import type { PortfolioData } from '../types/portfolio'
import { downloadCv } from '../shared/utils/downloadCv'

export default function App() {
  const navigate = useNavigate()
  const [data, setData] = useState<PortfolioData>(() => loadPortfolioData())

  const auth = useMemo(() => isAuthenticated(), [])

  const handleDataChange = (next: PortfolioData) => {
    setData(next)
    savePortfolioData(next)
  }

  const handleDownload = async () => {
    try {
      await downloadCv(data)
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to download CV.'
      alert(message)
    }
  }

  const handleLogout = () => {
    setAuthenticated(false)
    navigate('/')
    window.location.reload()
  }

  return (
    <SiteLayout data={data} isLoggedIn={auth} onDownloadCv={handleDownload} onLogout={handleLogout}>
      <Routes>
        <Route path="/" element={<HomePage data={data} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={auth ? <AdminPage data={data} onSave={handleDataChange} /> : <Navigate to="/login" replace />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  )
}

