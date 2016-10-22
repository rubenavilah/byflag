var selectedRegion = "";

/* function open modal info */
function openModal(code) {
  selectedRegion = code;
  var title = document.querySelector("#title");
  var flag = document.querySelector("#flag");
  var price = document.querySelector("#price");
  //Modifed HTML elements
  title.innerHTML = flags[code].name;
  flag.src = flags[code].flag;
  price.innerHTML = flags[code].price;
  $("#modal-info").modal("show");
}
/*Shoping Car Object*/
var shopingCar = {
  total: 0,
  quantity: 0,
  flags: [],
  add: function (code) {
    selectedcode = {
      name: flags[code].name,
      flag: flags[code].flag,
      price: flags[code].price,
    };
    this.flags.push(selectedcode);
    this.quantity++;
    this.total = this.total + selectedcode.price;
    console.log(shopingCar);
  },
  remove: function () {
    /**/
  },
  buy: function () {
    /**/
  }
};

/* When the document is ready */
$(document).ready(function(){
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
        openModal(code);
    },

  });

/* append li child to ul parent */
var country = flags;
for (var codeCountry in country) {
  var theName = flags[codeCountry].name;
  var str = "<li>" +"<a" + " id=" + "'" + codeCountry + "'" +" href=" +"'#'" +">" +codeCountry +" " +theName +"</a>" +" </li>";
  $("#country").append(str);
}
var idcountry = $("#country li a").on("click", function(){
  openModal(this.getAttribute("id"));
});

var add_car_btn = $("#add_button").on("click", function(){
  shopingCar.add(selectedRegion);
  });
});

/* */
var keys = [];
for (var key in flags) {
  if (flags.hasOwnProperty(key)) {
    keys.push(key);
  }
}

keys.sort();
//console.log(keys);
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
  $(function(){
      // Toggle Nav on Click
      $(".toggle-nav").click(function() {
          // Calling a function in case you want to expand upon this.
          toggleNav();
          //console.log("click!");
      });
  });
  //
  function toggleNav() {
      if ($("#wrapper").hasClass("show-nav")) {
          // Do things on Nav Close
          $("#wrapper").removeClass("show-nav");
      } else {
          // Do things on Nav Open
          $("#wrapper").addClass("show-nav");
      }
  }
