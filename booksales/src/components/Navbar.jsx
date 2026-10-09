import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? 'nav-link px-3 active fw-semibold bg-primary text-white rounded-pill shadow-sm'
      : 'nav-link px-3 text-secondary rounded-pill'

  const navLinkStyle = {
    transition: 'all 0.2s ease-in-out',
  }

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <Link
          to="/"
          className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
        >
          <i className="fa-solid fa-book-open fa-2xl text-primary"></i>
          <span className="ms-2 fs-4 fw-bold">AksaraBook</span>
        </Link>
      </div>

      <ul className="nav nav-pills col-12 col-md-auto mb-2 justify-content-center mb-md-0 gap-1">
        <li className="nav-item">
          <NavLink to="/" end className={getNavLinkClass} style={navLinkStyle}>
            <i className="fa-solid fa-house me-1"></i> Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/books" className={getNavLinkClass} style={navLinkStyle}>
            <i className="fa-solid fa-book-bookmark me-1"></i> Buku
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/team" className={getNavLinkClass} style={navLinkStyle}>
            <i className="fa-solid fa-users me-1"></i> Team
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className={getNavLinkClass} style={navLinkStyle}>
            <i className="fa-solid fa-envelope me-1"></i> Contact
          </NavLink>
        </li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary rounded-pill px-3 me-2">
          Masuk
        </button>
        <button type="button" className="btn btn-primary rounded-pill px-3">
          Daftar
        </button>
      </div>
    </header>
  )
}

export default Navbar