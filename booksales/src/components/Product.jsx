const books = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    description:
      'Metode teruji membentuk kebiasaan efektif dan mengikis kebiasaan destruktif melalui langkah-langkah mikro yang konsisten.',
    price: 'Rp 98.000',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=500&h=300&q=80',
  },
  {
    id: 2,
    title: 'Filosofi Teras',
    author: 'Henry Manampiring',
    description:
      'Panduan praktis mengadopsi stoisisme kuno agar terbebas dari kecemasan berlebih dan emosi negatif dalam keseharian.',
    price: 'Rp 89.000',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&h=300&q=80',
  },
  {
    id: 3,
    title: 'Bumi Manusia',
    author: 'Pramoedya Ananta Toer',
    description:
      'Roman epik sejarah pergerakan nasional yang mengisahkan cinta, harga diri, dan pertarungan martabat kemanusiaan.',
    price: 'Rp 125.000',
    image: 'https://images.unsplash.com/photo-1532012164546-f432f2e3777f?auto=format&fit=crop&w=500&h=300&q=80',
  },
  {
    id: 4,
    title: 'Sapiens: Riwayat Umat Manusia',
    author: 'Yuval Noah Harari',
    description:
      'Eksplorasi berani perjalanan evolusi Homo sapiens dari kawanan purba hingga mendominasi tatanan global modern.',
    price: 'Rp 145.000',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=500&h=300&q=80',
  },
  {
    id: 5,
    title: 'Psikologi Uang',
    author: 'Morgan Housel',
    description:
      'Catatan berharga mengenai seni mengelola kekayaan, menahan ego, dan memahami bias psikologis dalam finansial.',
    price: 'Rp 92.000',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=500&h=300&q=80',
  },
  {
    id: 6,
    title: 'Laskar Pelangi',
    author: 'Andrea Hirata',
    description:
      'Memoar menggetarkan hati sepuluh anak laskar pelangi yang pantang menyerah merawat cita-cita di tengah keterbatasan.',
    price: 'Rp 88.000',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=500&h=300&q=80',
  },
]

function ProductList() {
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Koleksi Terpopuler</h1>
            <p className="lead text-body-secondary">
              Deretan judul pilihan yang paling banyak dibaca, diapresiasi, dan direkomendasikan oleh komunitas pembaca kami.
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {books.map((book) => (
              <div className="col" key={book.id}>
                <div className="card shadow-sm h-100">
                  <img
                    className="card-img-top"
                    src={book.image}
                    alt={book.title}
                    height="225"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title mb-1">{book.title}</h5>
                    <small className="text-muted mb-2">{book.author}</small>
                    <p className="card-text text-body-secondary flex-grow-1">{book.description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Detail
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                        >
                          Beli
                        </button>
                      </div>
                      <small className="text-body-secondary fw-semibold">{book.price}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList