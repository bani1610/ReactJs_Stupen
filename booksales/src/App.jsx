import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Team from './pages/Team'
import Contact from './pages/Contact'
import ProductList from './components/Product'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        {/* Header */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<ProductList />} />
          <Route path="/buku" element={<ProductList />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App