$(document).ready(function(){

  // search button
  $('.btn-search').click(function(){
    if($('#menu-wrap').hasClass('vh') == false){
      $('#menu-wrap').addClass('vh');
    }
    if($('#search-wrap').hasClass('vh') == false){
      $('header .btn-search').text('Close');
    } else {
      $('header .btn-search').text('Search');
    }
    $('#search-wrap').toggleClass('vh');
    return false;
  });
      
  // mobile menu button
  $('#btn-menu').click(function(){
    if($('#search-wrap').hasClass('vh') == false){
      $('#search-wrap').addClass('vh');
    }
    if($('#menu-wrap').hasClass('vh') == false){
      $('#btn-menu').addClass('open');
    } else {
      $('#btn-menu').removeClass('open');
    }
    $('#menu-wrap').toggleClass('vh');
    return false;
  });
  
});
