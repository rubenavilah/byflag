var flags =
{
  CO:{
    codigo: "CO",
    nombre: "Colombia",
    bandera: "img/Flag_of_Colombia.svg",
    cmyk: {
      color1:{C:0, M:0, Y:100, K:0},
      color2:{C:100, M:45, Y:0, K:0},
      color3:{C:0, M:0, Y:100, K:0},
    },
    rgb: {
      color1:{R:0,G:0,B:0},
      color2:{R:0,G:0,B:0},
      color3:{R:0,G:0,B:0},
    },
    precio: "$4,5 USD",
  },
};
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
        var title = document.querySelector("#title");
        var flag = document.querySelector("#flag");
        var precio = document.querySelector("#precio");
        title.innerHTML = flags[code].nombre;
        flag.src = flags[code].bandera;
        precio.innerHTML = flags[code].precio;
        $("#modal-info").modal("show");
        console.log(flags[code]);
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
