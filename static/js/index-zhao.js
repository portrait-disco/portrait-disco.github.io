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
    // 'tp3-CTTSKA', 
    // 'tp4-DOEGEL', 
     // 'x35-JFUJTJ'
     // 'tp0-MSBXWE', 'np9-EYBFBI', 'np16-SPKCNT', 'np9-EYBFBI', 
    var id_table_0 = ['x14-FJHAPL',  'x5-XDTZRN', 'x9-GHBTYP', 'x1-WDVURU', 'x7-OXFJXM', 'x8-NYGSLL', 'x12-RKGMOQ', 'x11-SNSEER', 'x30-OZZPJT', 'x10-UFQKEA', 'x13-ABTDLR', 'x2-JNIGNT', 'x32-PKEGLK'];
    var id_table = id_table_0;
    // var methods_list = ['','_ours_dolly','_fried_dolly','_ref']
    var methods_list = ['','_ours_dolly','_']
    //$(tag).height(Math.round($(tag).height()))
    // width = $(tag)[0].getBoundingClientRect().width
    // naturalwidth= $(tag)[0].naturalWidth;
    // num_images = naturalwidth/512.0;
    // console.log(width);
    // console.log(naturalwidth);
    // console.log(value);
    // let left = value * width / num_images;
    // console.log(left);
    $(tag).attr('src', "./static/images/Zhao/"+id_table[value]+methods_list[k]+".png");
    // $('#sequence_name').attr('innerHTML', ": "+id_table[value]+"&nbsp;");
    // document.getElementById("sequence_name").innerHTML = id_table[value].slice(0, -2);+"&nbsp;";
    document.getElementById("frame-idx").innerHTML =  ("00"+String(Number(value)+1)).slice(-2);
}