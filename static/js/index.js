window.HELP_IMPROVE_VIDEOJS = false;



var id_table_0 = ['ct2-CGSVRN', 'np10-CXQFYN', 'x3-VHQTSI', 'ct1-DIVUYD',  'x26-FVPOQG', 'x28-LBFFPD', 'np1-JYEFHB', 'x25-YFOSCZ', 'np2-ZBDKCJ', 'np7-LBIDIJ', 'tp1-PAFAEH', 'tp0-RWHPIX', 'x17-JVSNDO', 'x36-RIVJAK', 'x20-VNOEMX', 'ct3-GLGJJW', 'np6-ZRSUNQ', 'x39-HLEYJC', 'x19-PFHBBG', 'x16-CWOEGT'];
var id_table_zhao = ['x14-FJHAPL',  'x5-XDTZRN', 'x9-GHBTYP', 'x1-WDVURU', 'x7-OXFJXM', 'x8-NYGSLL', 'x11-SNSEER', 'x30-OZZPJT', 'x10-UFQKEA', 'x13-ABTDLR', 'x2-JNIGNT', 'x32-PKEGLK'];

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });


    /*
    var options = {
      slidesToScroll: 1,
      slidesToShow: 3,
      loop: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
    }

    // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
      // Add listener to  event
      carousels[i].on('before:show', state => {
        console.log(state);
      });
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
      // bulmaCarousel instance is available as element.bulmaCarousel
      element.bulmaCarousel.on('before-show', function(state) {
        console.log(state);
      });
    }
    */


     $('.results-carousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      autoplay: true,
      centerMode: true,
      autoplaySpeed: 3000,
      variableWidth: true
    });

    $('#face-slider').on('input', function(event) {
      updateScene(this.value, '#focal_grid0', 0, $('#focal-slider').val());
    });
    for (let i = 1; i < 3; i++) {
      $('#face-slider').on('input', function(event) {
      updateSceneM(this.value, '#focal_grid'+String(i), i, $('#focal-slider').val());
    });
    }
    $('#focal-slider').on('input', function(event) {
      updateImage($('#focal-slider').val(), '#focal_grid1', $('#face-slider').val(), 1);
    });
    $('#focal-slider').on('input', function(event) {
      updateImage($('#focal-slider').val(), '#focal_grid2', $('#face-slider').val(), 2);
    });
    bulmaSlider.attach();


    updateScene($('#face-slider').val(), '#focal_grid0', 0, $('#focal-slider').val());
    for (let i = 1; i < 3; i++) {
      updateSceneM($('#face-slider').val(), '#focal_grid'+String(i), i, $('#focal-slider').val());
    }
    updateImage($('#focal-slider').val(), '#focal_grid1', $('#face-slider').val(), 1);
    updateImage($('#focal-slider').val(), '#focal_grid2', $('#face-slider').val(), 2);
})

window.onresize = function(){
    updateScene($('#face-slider').val(), '#focal_grid0', 0, $('#focal-slider').val());
    for (let i = 1; i < 3; i++) {
      updateSceneM($('#face-slider').val(), '#focal_grid'+String(i), i, $('#focal-slider').val());
    }
    updateImage($('#focal-slider').val(), '#focal_grid1', $('#face-slider').val(), 1);
    updateImage($('#focal-slider').val(), '#focal_grid2', $('#face-slider').val(), 2);
};


$(window).on("load", function(){
    updateScene($('#face-slider').val(), '#focal_grid0', 0, $('#focal-slider').val());
    for (let i = 1; i < 3; i++) {
      updateSceneM($('#face-slider').val(), '#focal_grid'+String(i), i, $('#focal-slider').val());
    }
    updateImage($('#focal-slider').val(), '#focal_grid1', $('#face-slider').val(), 1);
    updateImage($('#focal-slider').val(), '#focal_grid2', $('#face-slider').val(), 2);
    // Reset gifs once everything is loaded to synchronize playback.
    $('.preload').attr('src', function(i, a){
        $(this).attr('src','').removeClass('preload').attr('src', a);
    });

    
});

Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};


function updateImage(value, tag, ID, k) {
    //$(tag).height(Math.round($(tag).height()))
    // width = $(tag)[0].getBoundingClientRect().width
    // naturalwidth= $(tag)[0].naturalWidth;
    // num_images = naturalwidth/512.0;
    // console.log(width);
    // console.log(naturalwidth);
    // console.log(value);
    // let left = value * width / num_images;
    // console.log(left);
    // $(tag).css('left', -left + 'px');
    var id_table = id_table_0;
    var methods_list = ['','_ours_dolly','_fried'];
    $(tag).attr('src', "./static/images/Wild/"+id_table[ID]+
      methods_list[k]+'/'+String(value)+".png");
}

function updateScene(value, tag, k, focal) {
    // 'tp3-CTTSKA', 
    // 'tp4-DOEGEL', 
     // 'x35-JFUJTJ'
     // 'tp0-MSBXWE', 'np9-EYBFBI', 'np16-SPKCNT', 'np9-EYBFBI', 
    // var id_table_0 = ['ct2-CGSVRN', 'np10-CXQFYN', 'x3-VHQTSI', 'ct1-DIVUYD', 'x44-BOBYEY',  'x26-FVPOQG', 'x28-LBFFPD', 'np1-JYEFHB', 'x25-YFOSCZ', 'np2-ZBDKCJ', 'np7-LBIDIJ', 'tp1-PAFAEH', 'tp0-RWHPIX', 'x17-JVSNDO', 'x36-RIVJAK', 'x20-VNOEMX', 'ct3-GLGJJW', 'np6-ZRSUNQ', 'x39-HLEYJC', 'x19-PFHBBG', 'x16-CWOEGT'];
    var id_table = id_table_0;
    // var methods_list = ['','_ours_dolly','_fried_dolly','_ref']
    var methods_list = ['','_ours_dolly','_fried'];
    //$(tag).height(Math.round($(tag).height()))
    // width = $(tag)[0].getBoundingClientRect().width
    // naturalwidth= $(tag)[0].naturalWidth;
    // num_images = naturalwidth/512.0;
    // console.log(width);
    // console.log(naturalwidth);
    console.log(value);
    // let left = value * width / num_images;
    // console.log(left);
    $(tag).attr('src', "./static/images/Wild/"+id_table[value]+methods_list[k]+".png");
    // $('#sequence_name').attr('innerHTML', ": "+id_table[value]+"&nbsp;");
    // document.getElementById("sequence_name").innerHTML = id_table[value].slice(0, -2);+"&nbsp;";
    // document.getElementById("frame-idx").innerHTML =  ("00"+String(Number(value)+1)).slice(-2);
}

function updateSceneM(value, tag, k, focal) {
    // 'tp3-CTTSKA', 
    // 'tp4-DOEGEL', 
     // 'x35-JFUJTJ'
     // 'tp0-MSBXWE', 'np9-EYBFBI', 'np16-SPKCNT', 'np9-EYBFBI',  
    var id_table = id_table_0;
    // var methods_list = ['','_ours_dolly','_fried_dolly','_ref']
    var methods_list = ['','_ours_dolly','_fried'];
    //$(tag).height(Math.round($(tag).height()))
    // width = $(tag)[0].getBoundingClientRect().width
    // naturalwidth= $(tag)[0].naturalWidth;
    // num_images = naturalwidth/512.0;
    // console.log(width);
    // console.log(naturalwidth);
    // console.log(value);
    // let left = value * width / num_images;
    // console.log(left);
    $(tag).attr('src', "./static/images/Wild/"+id_table[value]+methods_list[k]+'/'+String(focal)+".png");
    // $('#sequence_name').attr('innerHTML', ": "+id_table[value]+"&nbsp;");
    // document.getElementById("sequence_name").innerHTML = id_table[value].slice(0, -2);+"&nbsp;";
    // document.getElementById("frame-idx").innerHTML =  ("00"+String(Number(value)+1)).slice(-2);
}


function updateImageWhole(value, tag) {
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

function updateSceneZhao(value, tag, k) {
    var id_table = id_table_zhao;
    // var methods_list = ['','_ours_dolly','_fried_dolly','_ref']
    var methods_list = ['','_ours_dolly','_Fried', '_Zhao']
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