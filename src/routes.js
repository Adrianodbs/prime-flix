import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Filme from './pages/filme'
import Home from './pages/home'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
