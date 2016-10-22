$(document).ready(function(){

  var map;
  map = new jvm.Map({
    container: $('#world-map'),
    map: 'world_mill_en',
    flags:flags,
    regionStyle: {
      initial: {
        fill: '#C6E5D9'
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

var country = flags;
for (var codeCountry in country) {
  var theName = flags[codeCountry].name;
  $("#country").append("<li>" + codeCountry + " " + theName + "</li>");
}

var keys = [];
for (var key in flags) {
  if (flags.hasOwnProperty(key)) {
    keys.push(key);
  }
}
keys.sort();
console.log(keys);

var order = $("#order").on("click", function(){
    $("#country").empty();

  });



  // var a = [];
  // var b = [];
  // for (var key in flags) {
  //   a.push(flags[key].name);
  //   b.push(flags[key].code);
  //   var country = $("#country").append("<li>" + a + "</li>");
  // }


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
