class LearningPath extends HTMLElement {
  connectedCallback() {
    this.render()
    document.title = 'Codemy - Learning Path'
  }
  render() {
    this.innerHTML = `
      <nav-bar></nav-bar>
    `
  }
}
customElements.define('learning-path', LearningPath)
