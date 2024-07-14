(function ($) {
  $(".banner-slider").owlCarousel({
   loop: true,
    speed:1000,
    nav: false,
   autoplay:false,
    infinite: true,
    items: 1,
    dots: true,
    touchMove: true,
    autoHeight: true,
    autoplayHoverPause: true,  
    autoplaySpeed: 2000,
    animateOut: 'fadeOut'
  });
    
//奇唯醫療高效解決方案
  $(".solution_slider").owlCarousel({
    loop:true,
    speed: 1000,
    autoplay: true,
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    touchMove: true,
    pauseOnHover: true,
    centerMode: false,
    autoplaySpeed: 3400,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1100: {
        items: 3
      },
    },
  });
})(jQuery); 
