import { BrowserRouter as Router } from 'react-router-dom'
import './App.scss'
import AppRoutes from './routes.tsx'

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
