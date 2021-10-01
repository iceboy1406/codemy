import whyChooseUsLists from './data.js'
class WhyChooseUs extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
      <section class="why-choose-us">
        <section-header section-badge='Kenapa Memilih Kami' section-title='Alasan mengapa Codemy merupakan pilihan yang tepat untuk belajar pemrograman'></section-header>
        <div class="why-choose-us-list">
        ${whyChooseUsLists
          .map((item) => {
            return `
            <div class="why-choose-us-list-item">
              <img src="${item.icons}" alt="" class="icon" />
              <h1 class="heading-text">${item.headingText}</h1>
              <p class="subheading-text">${item.subheadingText}</p>
            </div>
          `
          })
          .join('')}

        </div>
      </section>
    `
  }
}
customElements.define('why-choose-us', WhyChooseUs)
