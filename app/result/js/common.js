jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu").slideToggle();
    return false;
  });

  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });


  $(".top-mnu").click(function (e) {
    e.stopPropagation();
  });


  //$('.wrapper').prepend('<span class="eye-3"></span>');


/************************************/

$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");

});

/************************************/


  $('.card-thumb').click(function (e) {
    $('.card-thumb').removeClass('active');
    const href = $(this).attr('href');
    e.preventDefault();
    $('.card-slide-image').attr('src', '');
    setTimeout(function () {
      $('.card-slide-image').attr('src', href);
    }, 100);
    $(this).addClass('active')
  });


  //$("#phone_1").mask("+7 (999) 999-99-99");

//Add Inactive Class To All Accordion Headers
$('.accordion-header').toggleClass('inactive-header');

  //Set The Accordion Content Width
  var contentwidth = $('.accordion-header').width();
  $('.accordion-content').css({'width' : contentwidth });
  
  //Open The First Accordion Section When Page Loads
  $('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
  $('.accordion-content').first().slideDown().toggleClass('open-content');
  
  // The Accordion Effect
  $('.accordion-header').click(function () {
    if($(this).is('.inactive-header')) {
      $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
      $(this).toggleClass('active-header').toggleClass('inactive-header');
      $(this).next().slideToggle().toggleClass('open-content');
    }
    
    else {
      $(this).toggleClass('active-header').toggleClass('inactive-header');
      $(this).next().slideToggle().toggleClass('open-content');
    }
  });


  $('.tabs-control-1 .tabs_control_link').click(function (e) {
    e.preventDefault();

    var item = $(this).closest('.tabs-control-1 .tabs_control_item'),
    contentItem = $('.tabs_content-1 .tabs_content_item'),
    itemPosition = item.index();

    contentItem.eq(itemPosition)
    .add(item)
    .addClass('active')
    .siblings()
    .removeClass('active');

  });


  $('.tabs-control-2 .tabs_control_link').click(function (e) {
    e.preventDefault();

    var item = $(this).closest('.tabs-control-2 .tabs_control_item'),
    contentItem = $('.tabs_content-2 .tabs_content_item'),
    itemPosition = item.index();

    contentItem.eq(itemPosition)
    .add(item)
    .addClass('active')
    .siblings()
    .removeClass('active');

  });

/*  $("#calc-distance").slider({
    range: "min",
    step: 50000,
    value: 750000,
    min: 0,
    max: 10000000,
    slide: function( event, ui ) {
      $( "#amount-distance" ).val( ui.value.toLocaleString() );
    }
  });
  $( "#amount-distance" ).val( $( "#calc-distance" ).slider( "value" ).toLocaleString() );

  $("#calc-distance-2").slider({
    range: "min",
    step: 50000,
    value: 0,
    min: 0,
    max: 10000000,
    slide: function( event, ui ) {
      $( "#amount-distance-2" ).val( ui.value.toLocaleString() );
    }
  });
  $( "#amount-distance-2" ).val( $( "#calc-distance-2" ).slider( "value" ).toLocaleString() );*/



/*  $('.carous-items').slick({  


   dots: true,
   infinite: true,
   speed: 300,
   slidesToShow: 1,
   centerMode: true,
   variableWidth: true
 });*/

/*
  infinite: true,
  speed: 300,
  slidesToShow: 10,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: false,
  variableWidth: true,
  autoplaySpeed: 4000,
  cssEase: 'ease-out',
  dots: true
  */



  $('.link').click(function(e) {
    $('.modal-overlay_1').fadeIn();
    e.preventDefault();
    $('body').addClass('ohi');
  });


  $('.pop-close, .modal-overlay').click(function(e) {
    e.preventDefault();
    $('.modal-overlay').fadeOut();
    $('body').removeClass('ohi');
  });




  $(window).scroll(function(){
    var wt = $(window).scrollTop();  
    var wh = $(window).height();  
  /*var et = $('.card-tabs-row').offset().top;
  var eh = $('.card-tabs-row').outerHeight();
  var dh = $(document).height();   
  if (wt + wh >= et || wh + wt == dh || eh + et < wh){
    console.log('Элемент показан');
  }*/
  if (wt > 600) {
    $('.card-fixed').slideDown(100)
  }
  else {
    $('.card-fixed').slideUp(100)
  }
});



if($('.try-input-date').length) {
  $('.try-input-date').datepicker({
    dateFormat: 'dd.mm.yy',
    firstDay : 1,
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
  });
}



  $('[data-fancybox="gallery-1"]').fancybox({
    arrows: true,
    infobar: false,
    smallBtn: true,
    toolbar: false,
    iframe : {
      css : {
        width : '950px'
      }
    },    
    slideClass: "myClass",
    baseClass: "myclass"
  });


//  $('select').fancySelect();

}); //ready

