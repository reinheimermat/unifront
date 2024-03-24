import { Theme } from '@radix-ui/themes'
import { Navigation } from './components/navigation'
import { Home } from './pages/home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Theme>
      <main className="flex">
        <header>
          <Navigation />
        </header>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/estudantes" element={'<Students />'} />
            <Route path="/professores" element={'<Teachers />'} />
            <Route path="/turmas" element={'<Classes />'} />
            <Route path="/usuarios" element={'<Users />'} />
          </Routes>
        </section>
      </main>
    </Theme>
  )
}

export default App
