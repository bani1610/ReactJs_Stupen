import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function MainLayout() {
  return (
    <div className="container">
      {/* Header / Navigasi */}
      <Navbar />

      {/* Outlet untuk menampilkan halaman anak (Home, Books, Team, Contact) */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default MainLayout
