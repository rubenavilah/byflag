$(document).ready(function(){
  console.log("ready");

  var map;
  map = new jvm.Map({
    container: $('#world-map'),
    map: 'world_mill_en',
    regionStyle: {
      initial: {
        fill: '#B8E186'
      }
    },
    onRegionClick: function(event, code){
      console.log(event);
      console.log(code);
      console.log(map.getRegionName(code));
    }

  });

  // The Toggle Off Canvas

  $(function() {
      // Toggle Nav on Click
      $('.toggle-nav').click(function() {
          // Calling a function in case you want to expand upon this.
          toggleNav();
          console.log("click!");
      });
  });
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
