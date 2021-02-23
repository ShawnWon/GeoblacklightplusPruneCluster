//= require handlebars.runtime
//= require geoblacklight/geoblacklight
//= require geoblacklight/basemaps
//= require geoblacklight/controls
//= require geoblacklight/viewers
//= require geoblacklight/modules
//= require geoblacklight/downloaders
//= require leaflet-iiif
//= require esri-leaflet

//= require prunecluster/dist/PruneCluster.js
//= require oboe/dist/oboe-browser.js

GeoBlacklight.Basemaps.esri =  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: false,
  maxZoom: 10,
  worldCopyJump: true,
  retina: '@2x',
  detectRetina: false,
  noWrap: false,
});
