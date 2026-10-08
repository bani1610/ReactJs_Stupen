const members = [
  {
    id: 1,
    name: 'Fajar Nugraha',
    role: 'Lead Book Curator',
    bio: 'Menyeleksi ribuan judul buku terbitan lokal dan internasional agar pembaca mendapatkan bacaan berkualitas.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&h=300&q=80',
  },
  {
    id: 2,
    name: 'Anindya Larasati',
    role: 'UI/UX & Creative Designer',
    bio: 'Mendesain tata letak visual platform toko buku agar nyaman, elegan, dan mudah dinavigasi oleh pengguna.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&h=300&q=80',
  },
  {
    id: 3,
    name: 'Bima Satria',
    role: 'Fullstack Web Developer',
    bio: 'Membangun arsitektur web responsif dan integrasi sistem katalog buku berbasis React.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&h=300&q=80',
  },
  {
    id: 4,
    name: 'Clarissa Maharani',
    role: 'Community & Editor Lead',
    bio: 'Mengelola klub buku bulanan dan menyusun ulasan mendalam bersama para pegiat literasi.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&h=300&q=80',
  },
  {
    id: 5,
    name: 'Dimas Prasetyo',
    role: 'Quality & Inventory Specialist',
    bio: 'Bertanggung jawab memastikan keaslian fisik setiap buku serta pengemasan aman hingga ke tangan pembeli.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&h=300&q=80',
  },
  {
    id: 6,
    name: 'Nabila Zahra',
    role: 'Customer Care & Reader Support',
    bio: 'Membantu pembaca menemukan buku yang tepat dan mendampingi kelancaran transaksi setiap hari.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&h=300&q=80',
  },
]

function Team() {
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Tim Kurasi & Pengembang</h1>
            <p className="lead text-body-secondary">
              Mengenal tim di balik AksaraBook yang berdedikasi menjaga kurasi bacaan,
              kualitas koleksi, serta kenyamanan pengalaman berbelanja buku Anda.
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {members.map((member) => (
              <div className="col" key={member.id}>
                <div className="card shadow-sm h-100">
                  <img
                    className="card-img-top"
                    src={member.image}
                    alt={member.name}
                    height="225"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text text-primary fw-medium mb-1">{member.role}</p>
                    <p className="card-text text-body-secondary flex-grow-1">{member.bio}</p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Profile
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Contact
                        </button>
                      </div>
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

export default Team