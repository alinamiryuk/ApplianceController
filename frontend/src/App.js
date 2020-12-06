import './App.css'
import { useRoutes } from './routes'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  const routes = useRoutes()
  return (
    <div className="app">
      <Navbar />
      <div className="app__content">{routes}</div>
    </div>
  )
}

export default App
