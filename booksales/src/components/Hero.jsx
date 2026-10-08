function Hero() {
  return (
    <div className="container my-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
            Pustaka Inspirasi: Temukan Bacaan yang Mengubah Sudut Pandangmu.
          </h1>
          <p className="lead text-body-secondary mt-3">
            Koleksi buku kurasi pilihan dari sastra klasik hingga pengembangan diri terbaik. 
            Semua buku 100% original, bergaransi, dan siap dikirim ke seluruh penjuru Indonesia.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 mt-4">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
              Beli Sekarang
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              Lihat Katalog
            </button>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img
            className="rounded-lg-3 w-100 h-100"
            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=720&q=80"
            alt="Pustaka Inspirasi Buku Pilihan"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero