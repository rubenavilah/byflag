$(document).ready(function() {
  // Open Modal Country
  function openModal(code) {
      var title = document.querySelector("#title");
      var flag = document.querySelector("#flag");
      var price = document.querySelector("#price");
      //Modifed HTML elements
      title.innerHTML = flags[code].name;
      flag.src = flags[code].flag;
      price.innerHTML = flags[code].price;
      console.log("entro");
      $("#modal-info").modal("show");
  }

  // Initialize the Map
  var map;
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
      onRegionClick: function(event, code) {
          openModal(code);
      },
  });

  // The Country Flags print y Search
  var country = flags;
  for (var codeCountry in country) {
      var theName = flags[codeCountry].name;
      var str = "<li>" + "<a" + " id=" + "'" + codeCountry + "'" + " href=" + "'#'" + ">" + codeCountry + " " + theName + "</a>" + " </li>";
      $("#country").append(str);
  }

  // The Country maps get Click in Search
  var idcountry = $("#country li a").on("click", function() {
      openModal(this.getAttribute("id"));
  });

  // Order the countrys in Search
  var order = $("#order").on("click", function() {
      $("#country").empty();
  });
});

// The Toggle Off Canvas
$(function() {
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
