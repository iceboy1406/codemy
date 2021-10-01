class FooterSection extends HTMLElement {
  connectedCallback() {
    this.render()
  }
  render() {
    this.innerHTML = `
    <footer>
    <div class="company-information">
      <a data-href="/" class="nav-brand">
        <img src="/src/assets/icons/brand-logo.svg" alt="" /> Codemy
      </a>
      <p class="company-description">
        Codemy adalah sebuah platform pembelajaran online tentang pemrograman dan pengembangan software berbasis video dengan kurikulum yang sesuai kebutuhan industri global dan para pengajar yang ahli di bidangnya 
      </p>
      <p class="company-copyright">&copy 2021 Eko Susilo</p>
    </div>
    <div class="menu">
      <h1>Menu</h1>
      <div class="menu-list">
        <a data-href="/">Beranda</a>
        <a data-href="/katalog-kelas/">Katalog Kelas</a>
        <a data-href="/learning-path/">Learning Path</a>
        <a data-href="/kontak/">Kontak</a>
        <a data-href="/tentang-kami/">Tentang Kami</a>
      </div>
    </div>
    <div class="social-media">
      <h1>Media Sosial</h1>
      <div class="social-media-list">
        <a href="http://www.facebook.com" target="blank">
          <facebook-icon></facebook-icon>
        </a>
        <a href="http://www.twitter.com" target="blank">
          <twitter-icon></twitter-icon>
        </a>
        <a href="http://www.instagram.com" target="blank">
          <instagram-icon></instagram-icon>
        </a>
        <a href="http://www.github.com" target="blank">
          <github-icon></github-icon>
        </a>
        <a href="http://www.youtube.com" target="blank">
          <youtube-icon></youtube-icon>
        </a>
      </div>
    </div>
    <div class="alamat">
      <h1>Alamat</h1>
      <p>Jl. DR. Soeparno No.29, Purwokerto Wetan, Kec. Purwokerto Tim., Kabupaten Banyumas, Jawa Tengah 53123</p>
    </div>
    </footer>
    `
  }
}
customElements.define('footer-section', FooterSection)
