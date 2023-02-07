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


    for (let i = 0; i < 4; i++) {
      $('#face-slider').on('input', function(event) {
      updateScene(this.value, '#focal_grid'+String(i), i);
    });
    }
    $('#focal-slider').on('input', function(event) {
      updateImage(this.value, '#focal_grid1');
    });
    bulmaSlider.attach();

    for (let i = 0; i < 4; i++) {
      updateScene($('#face-slider').val(), '#focal_grid'+String(i), i);
    }
    updateImage($('#focal-slider').val(), '#focal_grid1');
})

window.onresize = function(){
    for (let i = 0; i < 4; i++) {
      updateScene($('#face-slider').val(), '#focal_grid'+String(i), i);
    }
    updateImage($('#focal-slider').val(), '#focal_grid1');
};


$(window).on("load", function(){
    for (let i = 0; i < 4; i++) {
      updateScene($('#face-slider').val(), '#focal_grid'+String(i), i);
    }
    updateImage($('#focal-slider').val(), '#focal_grid1');
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

function updateScene(value, tag, k) {
   // 'P1EV-060208_2',
    var id_table_0 = ['7WUF-060329_2',  '1FPP-060329_2', 'WWGO-060329_2', '9QAD-050615_2', 'QZGT-060329_2', '5ZAZ-060208_2', 'XWQM-060208_2', 'J6XX-060208_2', 'FHNJ-060329_2',   'VND0-060329_2',   '8S7R-060329_2',  'RXZN-060208_2', 'QHTL-060329_2',  '23UG-060329_2',   'FPOG-060329_2',   'WHO1-060329_2',   '92RT-050419_2',   'QQXY-060329_2',  '3XKB-060208_2',     '535X-060329_2',   'JFZC-050419_2',   'X5FH-050622_2', '9UL2-050611_2',   'R77S-060329_2',    'K36K-060208_2',   'XOPC-060329_2', 'ALMI-060208_2',  '60R0-060329_2',   'K5AT-050611_2',  'AMOH-060329_2',   'S36F-050611_2',  '62RT-060329_2',   'KKMI-060329_2',   'YWXB-060329_2',  'B4IY-050419_2',   'SDCQ-060329_2',  '73MC-050615_2',   'KN46-060208_2',   'Z7QW-060208_2', 'BHSN-050615_2',   'T6D7-060329_2',  '7FNY-060329_2',   'MSX9-060329_2',   'ZBZP-050611_2', 'BUP6-060329_2',   'UYGI-060329_2', '7IVG-060208_2',   'NRRD-060208_2',   'ENGX-060208_2',   'VIMC-050615_2'];
    var id_table = id_table_0;
    // var methods_list = ['','_ours_dolly','_fried_dolly','_ref']
    var methods_list = ['','_ours_dolly','','']
    //$(tag).height(Math.round($(tag).height()))
    // width = $(tag)[0].getBoundingClientRect().width
    // naturalwidth= $(tag)[0].naturalWidth;
    // num_images = naturalwidth/512.0;
    // console.log(width);
    // console.log(naturalwidth);
    // console.log(value);
    // let left = value * width / num_images;
    // console.log(left);
    $(tag).attr('src', "./static/images/CMDP/"+id_table[value]+methods_list[k]+".png");
    // $('#sequence_name').attr('innerHTML', ": "+id_table[value]+"&nbsp;");
    document.getElementById("sequence_name").innerHTML = id_table[value].slice(0, -2);+"&nbsp;";
    document.getElementById("frame-idx").innerHTML =  ("00"+String(Number(value)+1)).slice(-2);
}