class Navbar extends HTMLElement {
  connectedCallback() {
    this.render()
    this.sideBarToggleHandler()
    this.activeNavLinkHandler()
  }
  sideBarToggleHandler() {
    const navBar = this.querySelector('nav.navbar')
    const navItem = this.querySelector('.nav-item')
    const sidebarToggle = this.querySelector('.sidebar-toggle')
    const sidebarCloseArea = this.querySelector('.sidebar-close-area')
    sidebarToggle.addEventListener('click', () => {
      navItem.classList.add('show')
      navBar.classList.add('when-sidebar-open')
    })
    sidebarCloseArea.addEventListener('click', () => {
      navItem.classList.remove('show')
      navBar.classList.remove('when-sidebar-open')
    })
  }
  activeNavLinkHandler() {
    if (location.pathname === '/index.html') {
      document.querySelector('[data-href="/"].nav-link').classList.add('active')
    } else {
      document
        .querySelector('[data-href="/"].nav-link')
        .classList.remove('active')
      document
        .querySelector(`[data-href="${location.pathname}"].nav-link`)
        .classList.add('active')
    }
  }
  render() {
    this.innerHTML = `
    <nav class="navbar">
      <div class="sidebar-toggle">
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
      <a data-href="/" class="nav-brand">
        <img src="/src/assets/icons/brand-logo.svg" alt="" />  
      Codemy
      </a>
      <div class="nav-item">
        <div class="nav-list">
        <div class="nav-link-group">
          <a class="nav-link" data-href="/">Beranda</a>
          <a class="nav-link" data-href="/katalog-kelas/">Katalog Kelas</a>
          <a class="nav-link" data-href="/learning-path/">Learning Path</a>
          <a class="nav-link" data-href="/tentang-kami/">Tentang Kami</a>
          <a class="nav-link" data-href="/kontak/">Kontak</a>
          </div>
          <div class="auth">
            <a class="masuk" data-href="/masuk/">Masuk</a>
            <a class="daftar" data-href="/daftar/">Daftar</a>
          </div>
        </div>
        <div class="sidebar-close-area">
        </div>
      </div>
    </nav>
    `
  }
}
customElements.define('nav-bar', Navbar)
