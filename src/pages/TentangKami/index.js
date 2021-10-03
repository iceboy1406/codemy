class TentangKami extends HTMLElement {
  connectedCallback() {
    this.render()
    document.title = 'Codemy - Tentang Kami'
  }
  render() {
    this.innerHTML = `
      <nav-bar></nav-bar>
      <main>
          <img src="/src/assets/images/TENTANG_KAMI.svg" alt="" />
          <section-header section-badge="Tentang Kami" section-title="Apa sih sebenarnya Codemy itu?"></section-header>
          <p>Codemy adalah sebuah platform pembelajaran digital terutama yang berhubungan dengan Software Engineering berbasis video. Codemy hadir dengan kurikulum yang sesuai kebutuhan industri saat ini. Para pengajar yang mengajar di sini merupakan para senior programmer yang sudah berpengalaman dan expert di bidangnya. Kami hadir untuk menyediakan platform belajar bagi siapa saja, entah mahasiswa TI, siswa SMK maupun SMA maupun masyarakat umum yang tertarik untuk mendalami software engineering. Tiap kelasnya memiliki harga yang terjangkau dan sekali bayar maka bisa diakses selamanya. Kami berharap dengan adanya Codemy bisa membantu memajukan skill anak bangsa di era Revolusi Industri 4.0 ini</p>
      </main>
      <footer-section></footer-section>
    `
  }
}
customElements.define('tentang-kami', TentangKami)
