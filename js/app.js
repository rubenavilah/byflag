$(document).ready(function(){
  console.log("ready");

  // The Toggle Off Canvas
  $(function() {
      // Toggle Nav on Click
      $('.toggle-nav').click(function() {
          // Calling a function in case you want to expand upon this.
          toggleNav();
          console.log("click!");
      });
  });
  //
  function toggleNav() {
      if ($('#wrapper').hasClass('show-nav')) {
          // Do things on Nav Close
          $('#wrapper').removeClass('show-nav');
      } else {
          // Do things on Nav Open
          $('#wrapper').addClass('show-nav');
      }
  }




});
