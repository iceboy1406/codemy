import popularClasses from './data.js'
class KelasPopuler extends HTMLElement {
  connectedCallback() {
    this.render()
  }
  render() {
    this.innerHTML = `
    <section class="popular-class">
      <section-header section-badge='Kelas Populer' section-title='Kelas Berikut ini sudah banyak yang bergabung loh, yakin ngga ikut gabung?'></section-header>
      <div class="popular-class-list">
        ${popularClasses
          .map((popularClass) => {
            return `
          <div class="popular-class-list-item">
            <img src="${popularClass.photo}" class="class-photo" alt="" />
            <h1 class="class-name">${popularClass.name}</h1>
            <div class="rating-group">
              <span class="rating">${popularClass.rating}</span>
              <full-star-icon></full-star-icon>
              <full-star-icon></full-star-icon>
              <full-star-icon></full-star-icon>
              <full-star-icon></full-star-icon>
              <half-star-icon></half-star-icon>
              <span class="students-count">(${popularClass.students})</span>
            </div>
            <p class="price">${popularClass.price}</p>
          </div>
          `
          })
          .join('')}

      </div>
    </section>
    `
  }
}
customElements.define('kelas-populer', KelasPopuler)
