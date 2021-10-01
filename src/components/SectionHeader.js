class SectionHeader extends HTMLElement {
  constructor() {
    super()
    this.sectionBadge = this.getAttribute('section-badge')
    this.sectionTitle = this.getAttribute('section-title')
  }
  connectedCallback() {
    this.render()
  }
  render() {
    this.innerHTML = `
      <div class="section-header">
        <p class="badge">${this.sectionBadge}</p>
        <h1 class="title">${this.sectionTitle}</h1>
      </div>
    `
  }
}
customElements.define('section-header', SectionHeader)
