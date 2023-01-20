$(document).ready(function(){

  // search button
  $('.btn-search').click(function(){
    if($('#menu-wrap').hasClass('vh') == false){
      $('#menu-wrap').addClass('vh');
      $('#btn-menu').removeClass('open');
    }
    $('#search-wrap').toggleClass('vh');
    if($('#search-wrap').hasClass('vh') == true){
      $('header .btn-search').text('Search');
    } else {
      $('header .btn-search').text('Close');
    }
    return false;
  });
      
  // mobile menu button
  $('#btn-menu').click(function(){
    if($('#search-wrap').hasClass('vh') == false){
      $('#search-wrap').addClass('vh');
      $('header .btn-search').text('Search');
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
