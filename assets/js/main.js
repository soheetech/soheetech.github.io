$(document).ready(function(){

  // header search button
  $('.btn-search').click(function(){
    if($('#w-menu').hasClass('vh') == false){
      $('#w-menu').addClass('vh');
      $('#btn-menu').removeClass('open');
    }
    $('#w-search').toggleClass('vh');
    return false;
  });
  
  // search close
  $('#bg-search').click(function(){
    $('#w-search').toggleClass('vh');
  });
      
  // mobile dropdown menu
  $('#btn-menu').click(function(){
    if($('#w-search').hasClass('vh') == false){
      $('#w-search').addClass('vh');
    }
    $('#w-menu').toggleClass('vh');
    if($('#w-menu').hasClass('vh') == true){
      $('#btn-menu').removeClass('open');
    } else {
      $('#btn-menu').addClass('open');
    }
    return false;
  });
  
});
