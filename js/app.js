// Crea el mapa de todo el mundo
$(function(){
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
});
