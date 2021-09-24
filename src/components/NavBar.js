class Navbar extends HTMLElement {
  connectedCallback() {
    this.render()
  }
  render() {
    this.innerHTML = `
    <nav class="navbar">
      <div className="sidebar-toggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
      <div className="nav-brand">Codemy</div>
      <div className="nav-item">
        <div className="nav-list">
          <a data-href="/">Beranda</a>
          <a data-href="/katalog-kelas/">Katalog Kelas</a>
          <a data-href="/learning-path/">Learning Path</a>
          <a data-href="/tentang-kami/">Tentang Kami</a>
          <a data-href="/kontak/">Kontak</a>
        </div>
        <div className="sidebar-close">
        </div>
      </div>
    </nav>
    `
  }
}
customElements.define('nav-bar', Navbar)
