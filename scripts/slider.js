export const Slider = () => {
  let swiper = {}
  return swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    speed: 500,

    autoHeight: true,

    spaceBetween: 60,

    slidesPerView: 3,
    slidesPerGroup: 3,

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      1240: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
      480: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
    }
  });
}