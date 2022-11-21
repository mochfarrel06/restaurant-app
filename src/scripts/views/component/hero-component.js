class HeroComponent extends HTMLElement {
  connectedCallback() {
    // eslint-disable-next-line no-underscore-dangle
    this._render();
  }

  // eslint-disable-next-line no-underscore-dangle
  _render() {
    this.innerHTML = `
        <div class="hero">
            <div class="hero-overlay">
              <div class="hero-inner">
                <h1 class="hero-title">Temukan makanan dan minuman kesukaan anda</h1>
                <p class="hero-tag">Pilih makananan dan minuman yang anda ingin cari dari resto kami, selamat makan</p>
              </div>
            </div>
        </div>
        `;
  }
}

customElements.define('hero-component', HeroComponent);
