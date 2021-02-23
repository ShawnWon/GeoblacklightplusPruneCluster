Blacklight.onLoad(function() {
  $('[data-map="home"]').each(function(i, element) {

    var container = L.DomUtil.get('map');
    if(container != null){
      container._leaflet_id = null;
    }

    var geoblacklight = new GeoBlacklight.Viewer.Map(this),
        data = $(this).data();

    var coordi = [1.3521,103.8189];

    geoblacklight.map.setView(coordi,3);
    geoblacklight.map.options.maxZoom = 7;  
    var pruneCluster = new PruneClusterForLeaflet(); 

    oboe('/demomarkerdata.json')
      .node('*', function( doc ){
          if(typeof doc.c != 'undefined'){
            var latlng = doc.c.split(",")

            var marker = new PruneCluster.Marker(latlng[0],latlng[1], {popup: "<a href='/catalog/" + doc.l + "'>" + doc.t + "</a>"});
            pruneCluster.RegisterMarker(marker);
         }
        }
      )
      .done(function(){
        geoblacklight.map.addLayer(pruneCluster)
      })
  });
});



