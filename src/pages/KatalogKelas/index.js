import katalogKelas from './data.js'
class KatalogKelas extends HTMLElement {
  connectedCallback() {
    this.render()
    document.title = 'Codemy - Katalog Kelas'
  }
  render() {
    this.innerHTML = `
      <nav-bar></nav-bar>
      <div class="katalog-kelas">
        <header>
          <section-header section-badge="Katalog Kelas" section-title="Berikut ini adalah daftar kelas apa saja yang bisa anda ikuti di Codemy"></section-header>
          <text-input-group placeholder="Cari Kelas..."></text-input-group>
        </header>
        <div class="katalog-kelas-list">
          ${katalogKelas
            .map((kelas) => {
              return `
            <div class="katalog-kelas-list-item">
              <img src="${kelas.photo}" class="class-photo" alt="" />
              <h1 class="class-name">${kelas.name}</h1>
              <div class="rating-group">
                <span class="rating">${kelas.rating}</span>
                <full-star-icon></full-star-icon>
                <full-star-icon></full-star-icon>
                <full-star-icon></full-star-icon>
                <full-star-icon></full-star-icon>
                <half-star-icon></half-star-icon>
                <span class="students-count">(${kelas.students})</span>
              </div>
              <p class="price">${kelas.price}</p>
            </div>
            `
            })
            .join('')}
        </div>
      </div>
      <footer-section></footer-section>
    `
  }
}
customElements.define('katalog-kelas', KatalogKelas)
