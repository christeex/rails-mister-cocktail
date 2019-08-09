import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["The greatest advantures happen after cocktails :)"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
