$(document).ready(function(){

  // header search button
  $('.btn-search').click(function(){
    if($('#menu-wrap').hasClass('vh') == false){
      $('#menu-wrap').addClass('vh');
      $('#btn-menu').removeClass('open');
    }
    $('#w-search').toggleClass('vh');
    return false;
  });
  
  // search close
  $('#w-search').click(function(){
    $('#w-search').toggleClass('vh');
  });
      
  // mobile dropdown menu
  $('#btn-menu').click(function(){
    if($('#w-search').hasClass('vh') == false){
      $('#w-search').addClass('vh');
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
