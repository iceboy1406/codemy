class TelahDipercaya extends HTMLElement {
  connectedCallback() {
    this.render()
  }
  render() {
    this.innerHTML = `
    <section class="telah-dipercaya">
    <section-header section-badge="Terpercaya" section-title="Codemy telah dipercaya oleh perusahaan-perusahaan terkenal di dunia"></section-header>
        <div class="perusahaan-list">
          <div class="perusahaan-list-item">
            <img src="/src/assets/images/company-logo/google.png" alt="Google Icon" />
          </div>
          <div class="perusahaan-list-item">
            <img src="/src/assets/images/company-logo/aws.png" alt="AWS Icon" />
          </div>
          <div class="perusahaan-list-item">
            <img src="/src/assets/images/company-logo/ibm.png" alt="IBM Icon" />
          </div>
          <div class="perusahaan-list-item">
            <img src="/src/assets/images/company-logo/intel.png" alt="Intel Icon" />
          </div>
          <div class="perusahaan-list-item">
            <img src="/src/assets/images/company-logo/microsoft.png" alt="Microsoft Icon" />
          </div>
        </div>
      </section>
    `
  }
}
customElements.define('telah-dipercaya', TelahDipercaya)
