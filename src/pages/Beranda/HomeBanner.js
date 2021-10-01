class HomeBanner extends HTMLElement {
  connectedCallback() {
    this.render()
  }
  render() {
    this.innerHTML = `
      <section class="home-banner">
        <div class="caption">
          <h1>
            Belajar Pemrograman sesuai kebutuhan industri langsung dari ahlinya
          </h1>
          <p>
            Dapatkan video pembelajaran programming dengan kualitas yang terjamin serta pengajar yang kompeten dan ahli di bidangnya
          </p>
          <button class="cta-button" data-href="/learning-path/">Belajar Sekarang</button>
        </div>
        <div class="image">
          <img src="/src/assets/images/home-banner.webp" alt="Home Banner Image" />
        </div>
      </section>
    `
  }
}
customElements.define('home-banner', HomeBanner)
