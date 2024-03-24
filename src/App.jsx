import { Theme } from '@radix-ui/themes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AdmProvider } from './contexts/isAdmContext'
import { AppRoutes } from './routes'

function App() {
  return (
    <Theme>
      <AdmProvider>
        <AppRoutes />
        <ToastContainer />
      </AdmProvider>
    </Theme>
  )
}

export default App
