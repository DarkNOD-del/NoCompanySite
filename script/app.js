VANTA.NET({
  el: "#intro",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xff0000,
  backgroundColor: 0x10110,
  maxDistance: 27.00,
  spacing: 18.00
})

$(function(){
  var header = $('#header');
  var introH = $('#intro').innerHeight();
  var scrollOffset = $(window).scrollTop();

  /*Check scroll*/
  checkScroll(scrollOffset);
  $(window).on("scroll", function(){
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset){
    if(scrollOffset >= introH) header.addClass("fixed");
    else header.removeClass("fixed");
  }


  /*Smooth scroll*/
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("html, body").animate({
      scrollTop: blockOffset
    }, 500);
  });


  /*Slider*/
  $("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});

