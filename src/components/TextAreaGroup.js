class TextAreaGroup extends HTMLElement {
  constructor() {
    super()
    this.formId = this.getAttribute('formId') || ''
    this.formLabel = this.getAttribute('formLabel') || ''
    this.placeholder = this.getAttribute('placeholder') || ''
    this.type = this.getAttribute('type') || 'text'
    this.name = this.getAttribute('name') || ''
  }
  connectedCallback() {
    this.render()
  }
  render() {
    this.innerHTML = `
    <div class="text-area-group">
      <label for="${this.formId}">${this.formLabel}</label>
      <textarea type="${this.type}" placeholder="${this.placeholder}" id="${this.formId}" name="${this.name}"></textarea>
    </div>
    `
  }
}
customElements.define('text-area-group', TextAreaGroup)
