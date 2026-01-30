import Swiper from 'swiper';
import 'swiper/css/bundle';

let styleSwiper;

styleSwiper = new Swiper('.style-swiper-container', {
  direction: 'horizontal',
  loop: false,
  centeredSlides: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  initialSlide: 0,
  spaceBetween: 24,
  speed: 500,
  allowTouchMove: true,
  grabCursor: true,
  breakpoints: {
    1440: {
      slidesPerView: 4,
      centeredSlides: false,
      spaceBetween: 32,
      allowTouchMove: false,
      grabCursor: false,
    },
  },

  on: {
    init(swiper) {
      document.querySelector('.style-swiper-container').classList.add('show');
    },
  },
});
