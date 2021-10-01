class HalamanKontak extends HTMLElement {
  connectedCallback() {
    this.render()
    document.title = 'Codemy - Kontak'
  }
  render() {
    this.innerHTML = `
      <nav-bar></nav-bar>
      <section class="kontak-banner">
        <div class="image-side">
          <img src="/src/assets/images/CONTACT_IMAGE.svg" alt="" />
        </div>
        <div class="form-side">
          <h1>Silahkan hubungi kami melalui email dengan mengisi form dibawah ini</h1>
          <text-input-group placeholder="Masukan Email Anda" formLabel="E-mail" formId="email_form" name="email_form" type="email"></text-input-group>
          <text-input-group placeholder="Masukan Subjek Email" formLabel="Subjek" formId="subject_form" name="subject_form" type="text"></text-input-group>
          <text-area-group placeholder="Masukan Pesan anda" formLabel="Isi Pesan" formId="isi_pesan_form" name="isi_pesan_form" type="text"></text-area-group>
          <button class="cta-submit">Kirim</button>
        </div>
      </section>
      <footer-section></footer-section>
    `
  }
}
customElements.define('halaman-kontak', HalamanKontak)
