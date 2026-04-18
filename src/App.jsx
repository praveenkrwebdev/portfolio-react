import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppBtn from './components/WhatsAppBtn'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'

export default function App() {
  return (
    <BrowserRouter>
      <div style={{position:'fixed',inset:0,overflow:'hidden',pointerEvents:'none',zIndex:-1}}>
        <div className="blob blob1" />
        <div className="blob blob2" />
      </div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
      <WhatsAppBtn />
    </BrowserRouter>
  )
}
