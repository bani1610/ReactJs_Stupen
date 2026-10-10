
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Book from "./pages/Book";
import initialBooks from "./Utils/books";

const STORAGE_KEY = "booksales_books";

function loadBooks() {
  try {
    const savedBooks = localStorage.getItem(STORAGE_KEY);

    if (savedBooks !== null) {
      const parsedBooks = JSON.parse(savedBooks);

      if (Array.isArray(parsedBooks)) {
        return parsedBooks;
      }
    }
  } catch (error) {
    console.error("Gagal membaca data buku:", error);
  }

  return initialBooks;
}

function App() {
  const [page, setPage] = useState("home");
  const [books, setBooks] = useState(loadBooks);

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(books)
      );
    } catch (error) {
      console.error("Gagal menyimpan data buku:", error);
    }
  }, [books]);

  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [
      ...prevBooks,
      newBook
    ]);
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">

      <Navbar page={page} setPage={setPage} />

      <main className="flex-grow-1">
        {page === "home" ? (
          <Home
            books={books}
            setPage={setPage}
          />
        ) : (
          <Book
            books={books}
            onAddBook={handleAddBook}
          />
        )}
      </main>

      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <small>
            © {new Date().getFullYear()} BookSales.
            Dibuat menggunakan React & Bootstrap.
          </small>
        </div>
      </footer>

    </div>
  );
}

export default App;
