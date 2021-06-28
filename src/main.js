require(["esri/Map", "esri/views/MapView", "esri/layers/CSVLayer"], (Map, MapView, CSVLayer) => {

    //Create the map & mapview
    const map = new Map({
        basemap: "topo-vector"
    });

    const view = new MapView({
        container: "viewDiv",
        map: map
    });

    let url = "https://laurenb.esri.com/Personal/SkateParkFinder/LASkateparks.csv";

    //Create the CSVLayer and set lat/long fields
    let csvLayer = new CSVLayer({
        url: url,
        latitudeField: "lat",
        longitudeField: "long"
    });

    //Set view extent once CSVLayer loads
    csvLayer.when(function() {
        view.extent = csvLayer.fullExtent;
    }, function(error) {
        console.log(error);
    });

    map.add(csvLayer);
});