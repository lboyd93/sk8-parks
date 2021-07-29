require(["esri/Map", "esri/views/MapView", ], (Map, MapView) => {

    //Create the map & mapview
    const map = new Map({
        basemap: "topo-vector"
    });

    const view = new MapView({
        container: "viewDiv",
        map: map
    });

    //add layer depending on source
    //var layer = addCSVLayer(template, symbol);
    var layer = addFeatureLayer();

    //Set view extent once layer loads
    layer.when(function() {
        view.extent = layer.fullExtent;
    }, function(error) {
        console.log(error);
    });

    map.add(layer);

    addWidgets(view, layer);

});