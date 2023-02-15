$(document).ready(function(){

  // header search button
  $('.btn-search').click(function(){
    if($('#menu-wrap').hasClass('vh') == false){
      $('#menu-wrap').addClass('vh');
      $('#btn-menu').removeClass('open');
    }
    $('#search-wrap').toggleClass('vh');
    if($('#search-wrap').hasClass('vh') == true){
      $('header .btn-search > span').text('search');
    } else {
      $('header .btn-search > span').text('close');
    }
    return false;
  });
      
  // mobile dropdown menu
  $('#btn-menu').click(function(){
    if($('#search-wrap').hasClass('vh') == false){
      $('#search-wrap').addClass('vh');
      $('header .btn-search > span').text('search');
    }
    $('#menu-wrap').toggleClass('vh');
    if($('#menu-wrap').hasClass('vh') == true){
      $('#btn-menu').removeClass('open');
    } else {
      $('#btn-menu').addClass('open');
    }
    return false;
  });
  
});
