$(document).ready(function(){

  // search button
  $('.btn-search').click(function(){
    if($('#menu-wrap').hasClass('vh') == false){
      $('#menu-wrap').addClass('vh');
    }
    if($('#search-wrap').hasClass('vh') == true){
      $('header .btn-search').text('Search');
    } else {
      $('header .btn-search').text('Close');
    }
    $('#search-wrap').toggleClass('vh');
    return false;
  });
      
  // mobile menu button
  $('#btn-menu').click(function(){
    if($('#search-wrap').hasClass('vh') == false){
      $('#search-wrap').addClass('vh');
    }
    if($('#menu-wrap').hasClass('vh') == true){
      $('#btn-menu').removeClass('open');
    } else {
      $('#btn-menu').addClass('open');
    }
    $('#menu-wrap').toggleClass('vh');
    return false;
  });
  
});
