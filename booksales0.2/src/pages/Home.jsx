
import BookCard from "../components/BookCard";

function Home({ books, setPage }) {
  return (
    <>
      <section className="bg-primary text-white py-5">
        <div className="container py-4">
          <h1 className="display-5 fw-bold">
            Selamat Datang di BookSales
          </h1>

          <p className="lead mt-3">
            Temukan berbagai koleksi buku pemrograman,
            teknologi, dan pengembangan diri.
          </p>

          <button
            className="btn btn-light btn-lg mt-3"
            onClick={() => setPage("book")}
          >
            Jelajahi Buku
            <i className="bi bi-arrow-right ms-2"></i>
          </button>
        </div>
      </section>

      <section className="container py-5">
        <div className="mb-4">
          <h2 className="fw-bold text-dark">Koleksi Buku</h2>
          <p className="text-muted">
            Pilihan buku untuk menemani proses belajarmu.
          </p>
        </div>

        <div className="row g-4">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
