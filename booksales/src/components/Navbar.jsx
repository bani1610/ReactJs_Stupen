import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? 'nav-link px-3 active text-primary fw-bold border-bottom border-2 border-primary'
      : 'nav-link px-3 link-body-emphasis'

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

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <NavLink to="/" end className={getNavLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/books" className={getNavLinkClass}>
            Buku
          </NavLink>
        </li>
        <li>
          <NavLink to="/team" className={getNavLinkClass}>
            Team
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={getNavLinkClass}>
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">
          Masuk
        </button>
        <button type="button" className="btn btn-primary">
          Daftar
        </button>
      </div>
    </header>
  )
}

export default Navbar