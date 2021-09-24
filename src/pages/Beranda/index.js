class HalamanBeranda extends HTMLElement {
  connectedCallback() {
    this.render()
  }
  render() {
    this.innerHTML = `
      <h1>Beranda</h1>
      <a data-href="/katalog-kelas/">Katalog Kelas</a>
      <div data-href="/kontak/">Kontak</div>
    `
  }
}
customElements.define('halaman-beranda', HalamanBeranda)
