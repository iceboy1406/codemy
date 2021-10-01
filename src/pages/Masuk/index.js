class HalamanLogin extends HTMLElement {
  connectedCallback() {
    this.render()
  }
  render() {
    this.innerHTML = `
      <div class="auth-container">
        <div class="auth-card">
          <div class="image-group">
            <img src="/src/assets/images/LOGIN_IMAGE.svg" alt="" />
          </div>
          <div class="auth-form-group">
            <a data-href="/" class="back-to-home">
              <left-arrow-icon></left-arrow-icon> Kembali ke halaman utama
            </a>
            <h1>Silahkan Login untuk bisa mengakses pembelajaran yang ada di Codemy</h1>
            <text-input-group placeholder="Masukan Email Anda" formLabel="E-mail" type="email" formId="email_form" name="email"></text-input-group>
            <text-input-group placeholder="Masukan Password Anda" formLabel="Password" type="password" formId="password_form" name="password"></text-input-group>
            <button>Masuk</button>
            <p class="sudah-punya-akun">Anda belum punya akun? <a data-href="/daftar/">Buat Sekarang</a></p>
          </div>
        </div>
      </div>
    `
  }
}
customElements.define('halaman-login', HalamanLogin)
