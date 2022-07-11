import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Erro from './pages/erro'
import Filme from './pages/filme'
import Home from './pages/home'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />

        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
