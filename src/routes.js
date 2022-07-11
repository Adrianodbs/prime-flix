import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Filme from './pages/filme'
import Home from './pages/home'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
