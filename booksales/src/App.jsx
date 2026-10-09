import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Home from './pages/Home'
import Team from './pages/Team'
import Contact from './pages/Contact'
import ProductList from './components/Product'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Route: Membungkus elemen bersama (Navbar, Outlet, Footer) */}
        <Route element={<MainLayout />}>
          {/* Index Route */}
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />

          {/* Halaman Katalog Buku */}
          <Route path="/books" element={<ProductList />} />
          <Route path="/buku" element={<ProductList />} />

          {/* Halaman Team dan Contact */}
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App