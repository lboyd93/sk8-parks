require(["esri/Map", "esri/views/MapView"], (Map, MapView) => {

    //Create the map & mapview
    const map = new Map({
        basemap: "topo-vector"
    });

    const view = new MapView({
        container: "viewDiv",
        map: map
    });

    //Create popup template for layer
    const template = {
        title: "{Location Name}",
        content: [{
            type: "fields",
            fieldInfos: [{
                    fieldName: "Address",
                    label: "Address"
                },
                {
                    fieldName: "Phone",
                    label: "Phone Number"
                },
                {
                    fieldName: "Website",
                    label: "Website"
                }
            ]
        }]
    }

    //create symbology from picture marker symbol
    let symbol = {
        type: "picture-marker", // autocasts as new PictureMarkerSymbol()
        url: "https://laurenb.esri.com/Personal/SkateParkFinder/sk8-parks/resources/sk8icon.jpg",
        width: "30px",
        height: "30px"
    };

    //add layer depending on source
    //var layer = addCSVLayer(template, symbol);
    var layer = addFeatureLayer(template, symbol);

    //Set view extent once layer loads
    layer.when(function() {
        view.extent = layer.fullExtent;
    }, function(error) {
        console.log(error);
    });

    map.add(layer);

});