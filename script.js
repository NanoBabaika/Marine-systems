console.log('Hi!');



// Свайпер вариант1
const swiper = new Swiper('.swiper-orders', {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },
  
  });