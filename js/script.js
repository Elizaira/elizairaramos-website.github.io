// Scroll function courtesy of Scott Dowding; http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling

$(document).ready(function() {
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $('.scroll-animations .animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('fadeInLeft');
      }
    });
  });
});

$(document).ready(function(e){
  $('#equal_sign').click(function(){
    $('#content').toggle();
    e.stopPropagation();
    $('hide-menu').toggleClass('show-menu');
  });

  $('#click-me1').click(function(){
    $('#tab-content1').show();
    $('#tab-content2').hide();
    $('#tab-content3').hide();
    $('#click-me1').css({
      'color':'#26405e',
      'background-color':'white',
      'padding':'21px',
      'margin': '0',
    });
    $('#click-me2').css({
      'color':'white',
      'background-color':'#26405e',
      'padding':'21px',
      'margin': '0',
    });
    $('#click-me3').css({
      'color':'white',
      'background-color':'#26405e',
      'padding':'21px',
      'margin': '0',
    });
  });

  $('#click-me2').click(function(){
    $('#tab-content2').show();
    $('#tab-content1').hide();
    $('#tab-content3').hide();
    $('#click-me2').css({
      'color':'#26405e',
      'background-color':'white',
      'padding':'21px',
      'margin': '0',
    });
    $('#click-me1').css({
      'color':'white',
      'background-color':'#26405e',
      'padding':'21px',
      'margin': '0',
    });
    $('#click-me3').css({
      'color':'white',
      'background-color':'#26405e',
      'padding':'21px',
      'margin': '0',
    });
  });

  $('#click-me3').click(function(){
    $('#tab-content3').show();
    $('#tab-content2').hide();
    $('#tab-content1').hide();
    $('#click-me3').css({
      'color':'#26405e',
      'background-color':'white',
      'padding':'21px',
      'margin': '0',
    });
    $('#click-me1').css({
      'color':'white',
      'background-color':'#26405e',
      'padding':'21px',
      'margin': '0',
    });
    $('#click-me2').css({
      'color':'white',
      'background-color':'#26405e',
      'padding':'21px',
      'margin': '0',
    });
  });


});