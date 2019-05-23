import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  const bannerText = document.getElementById('banner-typed-text');

  if (bannerText) {
    new Typed(bannerText, {
      strings: ['Cheers, Cheers, Cheers', 'Salud', '干杯', 'Jubel', 'Cheers to the freaking weekend', 'Na zdrowie', 'Proost', 'Santé', 'ΥΓΕΙΑ', '건배', 'Saúde'],
      typeSpeed: 100,
      backSpeed: 80,
      loop: true
    });
  }
}

export { loadDynamicBannerText };
