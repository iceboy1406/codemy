class TentangKami extends HTMLElement {
  connectedCallback() {
    this.render()
    document.title = 'Codemy - Tentang Kami'
  }
  render() {
    this.innerHTML = `
      <nav-bar></nav-bar>
    `
  }
}
customElements.define('tentang-kami', TentangKami)
