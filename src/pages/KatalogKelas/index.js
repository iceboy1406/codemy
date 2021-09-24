class KatalogKelas extends HTMLElement {
  connectedCallback() {
    this.render()
  }
  render() {
    this.innerHTML = `
      <h1>Katalog Kelas</h1>
      <div data-href="/">Beranda</div>
      <div data-href="/kontak/">Kontak</div>
    `
  }
}
customElements.define('katalog-kelas', KatalogKelas)
