import './HomeBanner.js'
import './TelahDipercaya.js'
import './WhyChooseUs/index.js'
import './KelasPopuler/index.js'
import './Testimonial/index.js'
class HalamanBeranda extends HTMLElement {
  connectedCallback() {
    this.render()
    document.title = 'Codemy - Beranda'
  }
  render() {
    this.innerHTML = `
      <nav-bar></nav-bar>
      <home-banner></home-banner>
      <why-choose-us></why-choose-us>
      <kelas-populer></kelas-populer>
      <testimonial-siswa></testimonial-siswa>
      <telah-dipercaya></telah-dipercaya>
      <footer-section></footer-section>
    `
  }
}
customElements.define('halaman-beranda', HalamanBeranda)
