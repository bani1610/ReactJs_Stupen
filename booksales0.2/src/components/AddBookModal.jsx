
import { useState } from "react";

const initialForm = {
  title: "",
  author: "",
  year: "",
  description: "",
  image: ""
};

function AddBookModal({ onAddBook }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [imageError, setImageError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));

    if (name === "image") {
      setImageError(false);
    }
  };

  const validate = () => {
    const newErrors = {};
    const year = Number(form.year);
    const currentYear = new Date().getFullYear();

    if (!form.title.trim()) {
      newErrors.title = "Judul buku wajib diisi.";
    }

    if (!form.author.trim()) {
      newErrors.author = "Nama penulis wajib diisi.";
    }

    if (
      !form.year ||
      !Number.isInteger(year) ||
      year < 1000 ||
      year > currentYear
    ) {
      newErrors.year = "Masukkan tahun terbit yang valid.";
    }

    if (!form.description.trim()) {
      newErrors.description = "Deskripsi wajib diisi.";
    }

    if (form.image.trim()) {
      try {
        const url = new URL(form.image.trim());

        if (!["http:", "https:"].includes(url.protocol)) {
          newErrors.image = "Gunakan URL HTTP atau HTTPS.";
        }
      } catch {
        newErrors.image = "URL gambar tidak valid.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const newBook = {
      id: crypto.randomUUID(),
      title: form.title.trim(),
      author: form.author.trim(),
      year: Number(form.year),
      description: form.description.trim(),
      image: form.image.trim() ||
        "https://placehold.co/300x400?text=No+Cover"
    };

    onAddBook(newBook);

    setForm(initialForm);
    setErrors({});
    setImageError(false);

    // Tutup modal melalui tombol Bootstrap
    document.getElementById("closeAddBookModal")?.click();
  };

  return (
    <div
      className="modal fade"
      id="addBookModal"
      tabIndex="-1"
      aria-labelledby="addBookModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content border-0 shadow">

          <div className="modal-header bg-primary text-white">
            <h5
              className="modal-title fw-bold"
              id="addBookModalLabel"
            >
              <i className="bi bi-book-plus me-2"></i>
              Tambah Buku Baru
            </h5>

            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="modal-body p-4">
              <div className="row g-4">

                <div className="col-md-7">
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Judul Buku *
                    </label>
                    <input
                      type="text"
                      name="title"
                      className={`form-control ${errors.title ? "is-invalid" : ""}`}
                      placeholder="Contoh: Belajar React JS"
                      value={form.title}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">
                      {errors.title}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Nama Penulis *
                    </label>
                    <input
                      type="text"
                      name="author"
                      className={`form-control ${errors.author ? "is-invalid" : ""}`}
                      placeholder="Nama penulis buku"
                      value={form.author}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">
                      {errors.author}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Tahun Terbit *
                    </label>
                    <input
                      type="number"
                      name="year"
                      className={`form-control ${errors.year ? "is-invalid" : ""}`}
                      placeholder="2026"
                      min="1000"
                      max={new Date().getFullYear()}
                      value={form.year}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">
                      {errors.year}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Deskripsi Buku *
                    </label>
                    <textarea
                      name="description"
                      rows="4"
                      className={`form-control ${errors.description ? "is-invalid" : ""}`}
                      placeholder="Tuliskan deskripsi buku..."
                      value={form.description}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">
                      {errors.description}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      URL Gambar Sampul
                    </label>
                    <input
                      type="url"
                      name="image"
                      className={`form-control ${errors.image ? "is-invalid" : ""}`}
                      placeholder="https://example.com/cover.jpg"
                      value={form.image}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">
                      {errors.image}
                    </div>
                    <small className="text-muted">
                      Kosongkan jika tidak memiliki gambar.
                    </small>
                  </div>
                </div>

                <div className="col-md-5">
                  <label className="form-label fw-semibold">
                    Preview Sampul
                  </label>

                  <div className="border rounded-3 p-3 bg-light text-center">
                    <img
                      src={
                        form.image && !imageError
                          ? form.image
                          : "https://placehold.co/300x400?text=Preview+Buku"
                      }
                      alt="Preview sampul"
                      className="img-fluid rounded"
                      style={{
                        height: "280px",
                        width: "100%",
                        objectFit: "contain"
                      }}
                      onError={() => setImageError(true)}
                    />
                    {imageError && (
                      <small className="text-danger d-block mt-2">
                        Gambar tidak dapat dimuat.
                      </small>
                    )}
                  </div>
                </div>

              </div>
            </div>

            <div className="modal-footer">
              <button
                id="closeAddBookModal"
                type="button"
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Batal
              </button>

              <button
                type="submit"
                className="btn btn-primary"
              >
                <i className="bi bi-check-circle me-2"></i>
                Simpan Buku
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default AddBookModal;
