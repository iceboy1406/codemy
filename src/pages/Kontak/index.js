class HalamanKontak extends HTMLElement {
  connectedCallback() {
    this.render()
  }
  render() {
    this.innerHTML = `
      <h1>Kontak</h1>
      <div data-href="/">Beranda</div>
      <div data-href="/katalog-kelas/">Katalog Kelas</div>
    `
  }
}
customElements.define('halaman-kontak', HalamanKontak)
