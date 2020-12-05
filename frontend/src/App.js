import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { useRoutes } from './routes'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  const routes = useRoutes()
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="app__content">{routes}</div>
      </div>
    </BrowserRouter>
  )
}

export default App
