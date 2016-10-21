$(document).ready(function(){
  console.log("ready");

  var map;

  map = new jvm.Map({
    container: $('#world-map'),
    map: 'world_mill_en',
    flags:flags,
    regionStyle: {
      initial: {
        fill: '#B8E186'
      }
    },
    onRegionClick: function(event, code){
        var title = document.querySelector("#title");
        var flag = document.querySelector("#flag");
        var precio = document.querySelector("#precio");
        title.innerHTML = flags[code].name;
        flag.src = flags[code].flag;
        precio.innerHTML = flags[code].price;
        $("#modal-info").modal("show");
      }
  });

  var a = [];
  for (var key in flags) {
    a.push(flags[key].name);
    console.log(a);
    var country = $("#country").append("<li>"+a +"</li>");
  }

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
