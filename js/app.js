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
  // Variables from maps
  var map;
  var coMap;

  // Definition from world map
  map = new jvm.Map({
  container: $("#world-map"),
  map: "world_mill_en",
  backgroundColor: "#547980",
  zoomOnScroll: true,
  zoomOnScrollSpeed: 5,
  panOnDrag: true,
  zoomMax: 4,
  regionStyle: {
      initial: {
          fill: "#E5FCC2",
          "stroke-opacity": 1,
      },
      hover: {
          "fill-opacity": 0.1,
          cursor: 'pointer',
          fill: "#9DE0AD",
      },
  },
  // Event click in some region
  onRegionClick: function(event, code) {
      openModal(code);
  },
});

// Definition from world map
coMap = new jvm.Map({
  container: $("#co-map"),
  map: "co_mill",
  backgroundColor: "#547980",
  zoomOnScroll: true,
  zoomOnScrollSpeed: 5,
  panOnDrag: true,
  zoomMax: 4,
  regionStyle: {
      initial: {
          fill: "#E5FCC2",
          "stroke-opacity": 1,
      },
      hover: {
          "fill-opacity": 0.1,
          cursor: 'pointer',
          fill: "#9DE0AD",
      },
  },
  // Event click in some region
  onRegionClick: function(event, code) {
      openModal(code);
  },
  });

  /* function open modal Country */
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

  // The Country Flags print y Search
  var country = flags;
  for (var codeCountry in country) {
      var theName = flags[codeCountry].name;
      var str = "<li>" + "<a" + " id=" + "'" + codeCountry + "'" + " href=" + "'#'" + ">" + codeCountry + " " + theName + "</a>" + " </li>";
      $("#country").append(str);
  }

//The Country maps get Click in Search
var idcountry = $("#country li a").on("click", function(){
  openModal(this.getAttribute("id"));
});

// jq Fucntion that execute the event click from view departments button
var viewDepartments = $("#view_departments").on("click", function(){
    // Gets the divs from the maps
    var coDiv = document.querySelector("#co-map");
    var worldDiv = document.querySelector("#world-map");
    var backButton =  document.querySelector("#back");
    //Display the colombian map and back button
    coDiv.removeAttribute('class', 'hidden');
    backButton.style.visibility = "visible";
    // hide the world map
    worldDiv.setAttribute('class', 'hidden');
    // Hide the modal
    $('#modal-info').modal('hide');
});

// jq Fucntion that execute the event click from back button
var back = $("#back").on("click", function(){
    // Gets the divs from the maps
    var coDiv = document.querySelector("#co-map");
    var worldDiv = document.querySelector("#world-map");
    var backButton =  document.querySelector("#back");
    // hide the colombian map and back button
    coDiv.setAttribute('class', 'hidden');
    backButton.style.visibility = "hidden";
    //Display the world map
    worldDiv.removeAttribute('class', 'hidden');
  });
  //jq Fucntion that execute the event click add to shopping car button
  var add_car_btn = $("#add_button").on("click", function(){
    shopingCar.add(selectedRegion);
  });

});// End Document.Ready()


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
