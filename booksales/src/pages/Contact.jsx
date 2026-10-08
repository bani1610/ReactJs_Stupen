function Contact() {
  return (
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <h1 className="h2">Hubungi AksaraBook</h1>
          <p className="lead text-body-secondary">
            Ada pertanyaan seputar ketersediaan stok buku, kurasi bacaan, atau kerja sama penerbitan?
            Sampaikan pesan Anda melalui formulir di bawah ini.
          </p>
        </div>

        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Informasi Toko</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Alamat Galeri</h6>
                  <small className="text-body-secondary">
                    Gedung Literasi Lt. 2, Jl. Malioboro No. 45, Yogyakarta
                  </small>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Email Layanan</h6>
                  <small className="text-body-secondary">halo@aksarabook.id</small>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">WhatsApp Center</h6>
                  <small className="text-body-secondary">+62 821 7890 1234</small>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                <div className="text-success">
                  <h6 className="my-0">Waktu Operasional</h6>
                  <small>Senin – Minggu</small>
                </div>
                <span className="text-success fw-semibold">09.00 - 21.00 WIB</span>
              </li>
            </ul>
          </div>

          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Formulir Pesan</h4>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    Nama Depan
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Contoh: Rian"
                    required
                  />
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Nama Belakang
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Contoh: Pratama"
                    required
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="nama@email.com"
                    required
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="subject" className="form-label">
                    Subjek Pertanyaan
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Contoh: Permintaan restock novel Bumi Manusia"
                    required
                  />
                </div>

                <div className="col-md-5">
                  <label htmlFor="topic" className="form-label">
                    Kategori Layanan
                  </label>
                  <select className="form-select" id="topic" defaultValue="Stok Buku" required>
                    <option value="Pesanan">Status Pesanan</option>
                    <option value="Stok Buku">Ketersediaan Stok Buku</option>
                    <option value="Kerja Sama">Kerja Sama & Pengadaan</option>
                    <option value="Kritik & Saran">Kritik & Saran</option>
                  </select>
                </div>

                <div className="col-12">
                  <label htmlFor="message" className="form-label">
                    Isi Pesan
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Tuliskan pertanyaan atau pesan Anda secara rinci di sini..."
                    required
                  ></textarea>
                </div>
              </div>

              <hr className="my-4" />

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="newsletter"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="newsletter">
                  Dapatkan buletin rekomendasi buku baru dan promo diskon mingguan
                </label>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Kirim Pesan Sekarang
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact