import learningPaths from './data.js'
class LearningPath extends HTMLElement {
  connectedCallback() {
    this.render()
    document.title = 'Codemy - Learning Path'
  }
  render() {
    this.innerHTML = `
      <nav-bar></nav-bar>
      <main>
      <header>
        <section-header section-badge="Learning Path" section-title="Kami menyediakan beberapa learning path agar anda tidak kebingungan harus memulai dari kelas yang mana."></section-header>
      </header>
      <div class="learning-path-list">
      ${learningPaths
        .map((learningPath) => {
          return `
          <div class="learning-path-list-item">
            <img src="${learningPath.ilustrasi}" alt="" />
            <h1 class="nama-learning-path">${learningPath.nama}</h1>
            <p class="jumlah-kelas">Ada ${learningPath.jumlahKelas} kelas</p>
            <button>Lihat</button>
          </div>
        `
        })
        .join('')}
      </div>
      </main>
      <footer-section></footer-section>
    `
  }
}
customElements.define('learning-path', LearningPath)
