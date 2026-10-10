
function Navbar({ page, setPage }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
      <div className="container py-2">
        <a
          className="navbar-brand fw-bold fs-4"
          href="#home"
          onClick={() => setPage("home")}
        >
          <i className="bi bi-book-half me-2"></i>
          BookSales
        </a>

        <div className="d-flex gap-2">
          <button
            className={`btn ${
              page === "home"
                ? "btn-primary"
                : "btn-outline-light"
            }`}
            onClick={() => setPage("home")}
          >
            Home
          </button>

          <button
            className={`btn ${
              page === "book"
                ? "btn-primary"
                : "btn-outline-light"
            }`}
            onClick={() => setPage("book")}
          >
            Daftar Buku
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
