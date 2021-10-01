import testimoniSiswa from './data.js'
let selectedItemIndex = 0
class TestimonialSiswa extends HTMLElement {
  connectedCallback() {
    this.render()
    this.selectHandler()
    this.renderTestimonial()
  }
  selectHandler() {
    const selectItems = this.querySelectorAll('.testimonial-select-item')
    selectItems[0].classList.add('active')
    for (let i = 0; i < selectItems.length; i++) {
      selectItems[i].addEventListener('click', () => {
        selectedItemIndex = i
        for (let selectItem of selectItems) {
          selectItem.classList.remove('active')
        }
        selectItems[i].classList.add('active')
        this.renderTestimonial()
      })
    }
  }
  renderTestimonial() {
    const testimonialContainer = this.querySelector('.testimonial-container')
    testimonialContainer.classList.remove('anim')
    setTimeout(() => {
      testimonialContainer.classList.add('anim')
      testimonialContainer.innerHTML = `
      <img src="${testimoniSiswa[selectedItemIndex].fotoURI}" alt="" />
      <h1 class="nama">${testimoniSiswa[selectedItemIndex].nama}</h1>
      <p class="kelas">${testimoniSiswa[selectedItemIndex].kelas}</p>
    <p class="testimoni">"${testimoniSiswa[selectedItemIndex].testimoni}"
    </p>
    `
    }, 100)
  }
  render() {
    this.innerHTML = `
    <section class="testimonial-siswa">
    <section-header section-title="Testimoni para siswa terhadap kualitas pembelajaran di Codemy" section-badge="Testimonial"></section-header>
      <div class="testimonial-container">

      </div>
      <div class="testimonial-select-list">
      ${testimoniSiswa
        .map((arr) => {
          return `
        <div class="testimonial-select-item">
          <img src="${arr.fotoURI}" alt="Foto ${arr.nama}" />
        </div>
        `
        })
        .join('')}
      </div>
    </section>
    `
  }
}
customElements.define('testimonial-siswa', TestimonialSiswa)
