
import { useEffect, useState } from "react";

function BookCard({ book }) {
  const fallback =
    "https://placehold.co/300x400?text=No+Cover";

  const [imageSrc, setImageSrc] = useState(book.image || fallback);

  useEffect(() => {
    setImageSrc(book.image || fallback);
  }, [book.image]);

  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="card h-100 shadow-sm border-0">

        <div
          className="bg-light d-flex align-items-center justify-content-center p-3"
          style={{ height: "320px" }}
        >
          <img
            src={imageSrc}
            alt={`Sampul ${book.title}`}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain"
            }}
            onError={() => {
              if (imageSrc !== fallback) {
                setImageSrc(fallback);
              }
            }}
          />
        </div>

        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold text-dark">
            {book.title}
          </h5>

          <p className="text-muted small">
            <i className="bi bi-person me-2"></i>
            {book.author}
          </p>

          <p className="card-text text-secondary">
            {book.description}
          </p>

          <div className="mt-auto">
            <span className="badge bg-primary">
              {book.year}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BookCard;
