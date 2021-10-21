import './components/index.js'
import './pages/index.js'

const app = document.querySelector('#app')
const halamanBeranda = document.createElement('halaman-beranda')
const katalogKelas = document.createElement('katalog-kelas')
const halamanKontak = document.createElement('halaman-kontak')
const learningPath = document.createElement('learning-path')
const tentangKami = document.createElement('tentang-kami')
const halamanLogin = document.createElement('halaman-login')
const halamanSignup = document.createElement('halaman-signup')
const renderPage = (pathName) => {
  window.scrollTo(0, 0)
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
    case '/learning-path/':
      history.pushState(null, null, pathName)
      app.innerHTML = ''
      app.appendChild(learningPath)
      break
    case '/tentang-kami/':
      history.pushState(null, null, pathName)
      app.innerHTML = ''
      app.appendChild(tentangKami)
      break
    case '/kontak/':
      history.pushState(null, null, pathName)
      app.innerHTML = ''
      app.appendChild(halamanKontak)
      break
    case '/masuk/':
      history.pushState(null, null, pathName)
      app.innerHTML = ''
      app.appendChild(halamanLogin)
      break
    case '/daftar/':
      history.pushState(null, null, pathName)
      app.innerHTML = ''
      app.appendChild(halamanSignup)
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
window.addEventListener('popstate', () => {
  renderPage(location.pathname)
})
const linkElement = document.createElement('link')
linkElement.rel = 'icon'
linkElement.href = '/src/assets/icons/brand-logo.svg'
document.head.appendChild(linkElement)
var atOptions = {
  key: 'd905e08c824a51b116957eb59f07e70f',
  format: 'iframe',
  height: 90,
  width: 728,
  params: {},
}
document.write(
  '<scr' +
    'ipt type="text/javascript" src="http' +
    (location.protocol === 'https:' ? 's' : '') +
    '://www.effectiveperformanceformat.com/d905e08c824a51b116957eb59f07e70f/invoke.js"></scr' +
    'ipt>'
)
