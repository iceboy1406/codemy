class HalamanSignup extends HTMLElement {
  connectedCallback() {
    this.render()
  }
  render() {
    this.innerHTML = `
      <div class="auth-container">
        <div class="auth-card">
          <div class="image-group">
            <img src="/src/assets/images/SIGNUP_IMAGE.svg" alt="" />
          </div>
          <div class="auth-form-group">
            <a data-href="/" class="back-to-home">
              <left-arrow-icon></left-arrow-icon> Kembali ke halaman utama
            </a>
            <h1>Silahkan isi semua form yang disediakan untuk membuatkan akun anda</h1>
            <text-input-group placeholder="Masukan Nama Lengkap Anda" formLabel="Nama Lengkap" type="text" formId="nama_lengkap_form" name="nama_lengkap"></text-input-group>
            <text-input-group placeholder="Masukan Email Anda" formLabel="E-mail" type="email" formId="email_form" name="email"></text-input-group>
            <text-input-group placeholder="Masukan Password Anda" formLabel="Password" type="password" formId="password_form" name="password"></text-input-group>
            <text-input-group placeholder="Masukan Password Anda Sekali Lagi" formLabel="Konfirmasi Password" type="password" formId="konfirmasi_password_form" name="konfirmasi_password"></text-input-group>
            <button>Daftar</button>
            <p class="belum-punya-akun">Anda sudah punya akun? <a data-href="/masuk/">Login Sekarang</a></p>
          </div>
        </div>
      </div>
    `
  }
}
customElements.define('halaman-signup', HalamanSignup)
