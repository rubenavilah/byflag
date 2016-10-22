
$(document).ready(function(){
  // Variables from maps
  var map;
  var coMap;
  // Definition from world map
  map = new jvm.Map({
    container: $("#world-map"),
    map: "world_mill_en",
    regionStyle: {
      initial: {
        fill: "#B8E186"
      }
    },
    onRegionClick: function(event, code){
      // Event click in some region
      console.log(event);
      console.log(code);
      var title = document.querySelector("#title");
      var flag = document.querySelector("#flag");
      var price = document.querySelector("#price");
      //Modifed HTML elements
      title.innerHTML = flags[code].name;
      flag.src = flags[code].flag;
      price.innerHTML = flags[code].price;
      $("#modal-info").modal("show");
    },
  });

  // Definition from Colombian map
  coMap = new jvm.Map({
    container: $("#co-map"),
    map: "co_mill",
    regionStyle: {
      initial: {
        fill: "#B8E186"
      }
    },
    onRegionClick: function(event, code){
      // Event click in some region
      console.log(event);
      console.log(code);
      var title = document.querySelector("#title");
      var flag = document.querySelector("#flag");
      var price = document.querySelector("#price");
      //Modifed HTML elements
      title.innerHTML = flags[code].name;
      flag.src = flags[code].flag;
      price.innerHTML = flags[code].price;
      $("#modal-info").modal("show");
    },
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

  // js Fucntion that execute the event click from view departments button
  var viewDepartments = $("#view_departments").on("click", function(){
      // Gets the divs from the maps
      var coDiv = document.querySelector("#co-map");
      var worldDiv = document.querySelector("#world-map");
      //Display the colombian map
      coDiv.removeAttribute('class', 'hidden');
      // hide the world map
      worldDiv.setAttribute('class', 'hidden');
      // Hide the modal
      $('#modal-info').modal('hide');
  });

  // js Fucntion that execute the event click from back button
  var back = $("#back").on("click", function(){
      // Gets the divs from the maps
      var coDiv = document.querySelector("#co-map");
      var worldDiv = document.querySelector("#world-map");
      // hide the colombian map
      coDiv.setAttribute('class', 'hidden');
      //Display the world map
      worldDiv.removeAttribute('class', 'hidden');
  });



});// End Document.Ready()


  // The Toggle Off Canvas
  $(function(){
      // Toggle Nav on Click
      $(".toggle-nav").click(function() {
          // Calling a function in case you want to expand upon this.
          toggleNav();
          console.log("click!");
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
