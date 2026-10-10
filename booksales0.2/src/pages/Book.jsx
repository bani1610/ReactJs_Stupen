
import BookCard from "../components/BookCard";
import AddBookModal from "../components/AddBookModal";

function Book({ books, onAddBook }) {
  return (
    <div className="container py-5">

      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h1 className="fw-bold text-dark mb-2">
            Koleksi Buku
          </h1>

          <p className="text-muted mb-0">
            Kelola dan jelajahi seluruh koleksi buku.
          </p>
        </div>

        <button
          type="button"
          className="btn btn-primary px-4 py-2"
          data-bs-toggle="modal"
          data-bs-target="#addBookModal"
        >
          <i className="bi bi-plus-lg me-2"></i>
          Tambah Buku
        </button>
      </div>

      <div className="alert alert-light border d-flex align-items-center gap-2">
        <i className="bi bi-collection text-primary"></i>
        Total koleksi:
        <strong>{books.length} Buku</strong>
      </div>

      <div className="row g-4 mt-2">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      <AddBookModal onAddBook={onAddBook} />

    </div>
  );
}

export default Book;
