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


$("#video__play").click(function(e){
  e.preventDefault();
  var dataYoutube = $(this).parents('.js-video').attr('data-youtube');
  $(this).parents('.js-video').html('<iframe width=100% height=100% src="https://www.youtube.com/embed/'+ dataYoutube +'?autoplay=1" frameborder="0" allowfullscreen></iframe>')
});

$('.more-revs').click(function (e) {
  e.preventDefault();
$(this).hide();  
  $('.more-revs-items-block').slideDown();
});








 $('div.lazy').lazy();


  $('img.lazy').lazy({
    effect: "fadeIn",
    effectTime: 200,
    threshold: 0,  
  });

  
  $('.card-thumb').click(function (e) {
    $('.card-thumb').removeClass('active');
    const href = $(this).attr('href');
    e.preventDefault();
    $('.card-slide-image').attr('src', '');
    setTimeout(function () {
      $('.card-slide-image').attr('src', href);
    }, 100);
    $(this).addClass('active');
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
let textt = $(this).text();
$('.tabs-active-pda').html(textt);
$('.tabs-control').addClass('slideUp').removeClass('slideDown');
    var item = $(this).closest('.tabs-control-1 .tabs_control_item'),
    contentItem = $('.tabs_content-1 .tabs_content_item'),
    itemPosition = item.index();

    contentItem.eq(itemPosition)
    .add(item)
    .addClass('active')
    .siblings()
    .removeClass('active');

  });


$('.tabs-active-pda').click(function () {
  $('.tabs-control').removeClass('slideUp').addClass('slideDown');
});



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

