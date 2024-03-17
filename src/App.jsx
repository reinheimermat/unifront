import { Theme } from '@radix-ui/themes'
import { SubHeader } from './components/sub-header'
import { DashBoard } from './pages/dashboard'

function App() {
  return (
    <Theme>
      <header>
        <SubHeader />
      </header>
      <main>
        <DashBoard />
      </main>
    </Theme>
  )
}

export default App
