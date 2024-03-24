import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { DashBoard } from './pages/Dashboard'
import { Login } from './pages/Login'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
