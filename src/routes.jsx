// AppRoutes.js
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navigation } from './components/navigation'
import { Classes } from './pages/Classes'
import { Estudantes } from './pages/Estudantes'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Professores } from './pages/Professores'
import { Usuarios } from './pages/Usuarios'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/*"
        element={
          <main className="flex">
            <header>
              <Navigation />
            </header>
            <section className="w-screen">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/estudantes" element={<Estudantes />} />
                <Route path="/professores" element={<Professores />} />
                <Route path="/turmas" element={<Classes />} />
                <Route path="/usuarios" element={<Usuarios />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </section>
          </main>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
