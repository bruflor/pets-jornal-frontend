import { useState } from 'react'
import { Menu } from './components/menu'
import { Nav } from './components/Nav'
import { Category } from './pages/Category'
import './App.css'
import { Home } from './pages/home'
import { AppRoute} from './pages/routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Menu></Menu>
      <div className="main">
        <Nav></Nav>

        <AppRoute></AppRoute>

      </div>

    </div>
  )
}

export default App
