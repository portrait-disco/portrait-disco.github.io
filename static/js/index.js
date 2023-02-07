window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    $('.results-carousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 5000
    });



    $('#focal-slider').on('input', function(event) {
      updateImage(this.value, '#focal_grid2');
    });
    $('#wild-slider').on('input', function(event) {
      updateImage(this.value, '#wild_grid2');
    });
    $('#wild2-slider').on('input', function(event) {
      updateImage(this.value, '#wild2_grid2');
    });
    bulmaSlider.attach();

    updateImage($('#focal-slider').val(), '#focal_grid2');
    updateImage($('#wild-slider').val(), '#wild_grid2');
    updateImage($('#wild2-slider').val(), '#wild2_grid2');
})

window.onresize = function(){
    updateImage($('#focal-slider').val(), '#focal_grid2');
    updateImage($('#wild-slider').val(), '#wild_grid2');
    updateImage($('#wild2-slider').val(), '#wild2_grid2');
};


$(window).on("load", function(){
    updateImage($('#focal-slider').val(), '#focal_grid2');
    updateImage($('#wild-slider').val(), '#wild_grid2');
    updateImage($('#wild2-slider').val(), '#wild2_grid2');
    // Reset gifs once everything is loaded to synchronize playback.
    $('.preload').attr('src', function(i, a){
        $(this).attr('src','').removeClass('preload').attr('src', a);
    });

    
});

Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};


// function updateImage(value, tag, max_size=100.0) {
//   //$(tag).height(Math.round($(tag).height()))
//   width = $(tag)[0].getBoundingClientRect().width
//   naturalwidth= $(tag)[0].naturalWidth;
//   num_images = naturalwidth/340.0;
//   console.log(naturalwidth);
//   let left = value * width / num_images;
//   $(tag).css('left', -left + 'px');
// }

function updateImage(value, tag) {
    //$(tag).height(Math.round($(tag).height()))
    width = $(tag)[0].getBoundingClientRect().width
    naturalwidth= $(tag)[0].naturalWidth;
    num_images = naturalwidth/512.0;
    // console.log(width);
    // console.log(naturalwidth);
    console.log(value);
    let left = value * width / num_images;
    console.log(left);
    $(tag).css('left', -left + 'px');
}