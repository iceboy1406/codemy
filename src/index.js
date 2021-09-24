import './pages/Beranda/index.js'
import './pages/KatalogKelas/index.js'
import './pages/Kontak/index.js'
import './components/NavBar.js'
const app = document.querySelector('#app')
const halamanBeranda = document.createElement('halaman-beranda')
const katalogKelas = document.createElement('katalog-kelas')
const halamanKontak = document.createElement('halaman-kontak')
const renderPage = (pathName) => {
  switch (pathName) {
    case '/':
      history.pushState(null, null, pathName)
      app.innerHTML = ''
      app.appendChild(halamanBeranda)
      break
    case '/index.html':
      history.pushState(null, null, pathName)
      app.innerHTML = ''
      app.appendChild(halamanBeranda)
      break
    case '/katalog-kelas/':
      history.pushState(null, null, pathName)
      app.innerHTML = ''
      app.appendChild(katalogKelas)
      break
    case '/kontak/':
      history.pushState(null, null, pathName)
      app.innerHTML = ''
      app.appendChild(halamanKontak)
      break
    default:
      app.innerHTML = '404'
  }
}

window.addEventListener('load', () => {
  renderPage(location.pathname)
  document.body.addEventListener('click', (e) => {
    if (
      e.target.getAttributeNames().findIndex((attr) => attr === 'data-href') !==
      -1
    ) {
      e.preventDefault()
      renderPage(e.target.getAttribute('data-href'))
    }
    if (
      e.target.getAttributeNames().findIndex((attr) => attr === 'data-back') !==
      -1
    ) {
      e.preventDefault()
      history.back()
      renderPage(location.pathname)
    }
  })
})
