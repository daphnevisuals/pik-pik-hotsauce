const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  spaceBetween: 60,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
