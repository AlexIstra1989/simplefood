$(document).ready(function(){
 $('.menu__burger').on('click', function() {
  $('.menu').toggleClass('menu--active'),
  $('.menu__burger').toggleClass('menu__burger--active');
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


});


