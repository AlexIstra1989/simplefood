$(document).ready(function(){
 $('.menu__burger').on('click', function() {
  $('.menu').toggleClass('menu--active'),
  $('.menu__burger').toggleClass('menu__burger--active');
 });

 $('.catalog__filters-btn').on('click', function() {
  $('.catalog__aside').toggleClass('catalog__aside--active'),
  $('.catalog__filters-btn').toggleClass('catalog__filters-btn--active');
 });

 $('.catalog__filters-btn').on('click', function() {
  $('.catalog__menu').toggleClass('catalog__menu--active');
 });


 $('.menu__burger').click(function (event) {
  event.preventDefault();
  $('body').toggleClass('overflow');
 });

 $('.slider__inner').slick({
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
 });

 $('.product__slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<img src="../images/icons/next-arrow.svg" alt="">',
  prevArrow: '<img src="../images/icons/prev-arrow.svg" alt="">'
 });

 $('.promotions__inner').slick({
  responsive: [
   {
    breakpoints: 2048,
    settings: 'unslick'
   },
   // {
   //   breakpoints: 576,
   //   settings: {
   //    dots: true,
   //    arrows: false,
   //    infinite: true,
   //    slidesToShow: 1,
   //    slidesToScroll: 1,
   //   }
   //  }
   ],
 });

 $('.product-tabs__link').on('click', function (e) {
  e.preventDefault();
  $('.product-tabs__link').removeClass('product-tabs__link--active');
  $(this).addClass('product-tabs__link--active');
  $('.product-tabs__item').removeClass('product-tabs__item--active');
  $($(this).attr('href')).addClass('product-tabs__item--active');
 });


 $('.catalog__price-scale').ionRangeSlider({
  type: "double",
  min: 0,
  max: 999,
  prefix: $,
  onStart: function (data) {
   $('.catalog__price-from').text(data.from);
   $('.catalog__price-to').text(data.to);
  },
  onChange: function (data) {
   $('.catalog__price-from').text(data.from);
   $('.catalog__price-to').text(data.to);
  },
 });

 $('.product__star').rateYo({
  starWidth: "17px",
  normalFill: "#ccccce",
  retedFill: "#ffc35b",
  readOnly: true,
  starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 "/></g></svg>'
 });   
});


