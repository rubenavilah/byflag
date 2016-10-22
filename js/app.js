//Our BD
var flags =
{
  CO:{
    name: "Colombia",
    flag: "img/Flag_of_Colombia.svg",
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
    price: "$4,5 USD",
  },
  BR:{
    name: "Brazil",
    flag: "img/brazilflag.png",
    price: "$4,5 USD",
  }
};
$(document).ready(function(){
  //assign map to world_div

  //assign map to world_div
  var map;
  map = new jvm.Map({
    container: $("#world-map"),
    map: "world_mill_en",
    regionStyle: {
      initial: {
        fill: "#B8E186"
      }
    },
    onRegionClick: function(event, code){
      //Capture HTML elemets
      var title = document.querySelector("#title");
      var flag = document.querySelector("#flag");
      var price = document.querySelector("#price");
      //Modifed HTML elements
      title.innerHTML = flags[code].name;
      flag.src = flags[code].flag;
      price.innerHTML = flags[code].price;
      $("#modal-info").modal("show");
    }
  });
});
  // The Toggle Off Canvas
  $(function(){
      // Toggle Nav on Click
      $(".toggle-nav").click(function() {
          // Calling a function in case you want to expand upon this.
          toggleNav();
          console.log("click!");
      });
  });
  function toggleNav() {
      if ($("#wrapper").hasClass("show-nav")) {
          // Do things on Nav Close
          $("#wrapper").removeClass("show-nav");
      } else {
          // Do things on Nav Open
          $("#wrapper").addClass("show-nav");
      }
  }
