require(["esri/Map", "esri/views/MapView", ], (Map, MapView) => {

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
        title: "{Location_Name}",
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
        url: "https://lboyd93.github.io/sk8-parks/resources/sk8icon.jpg",
        width: "30px",
        height: "30px"
    };

    //add featurelayer
    var layer = createFeatureLayer(template, symbol);
    map.add(layer);

    //Set view extent once layer loads and add widgets
    view.when(function() {
        view.ui.add("dropdown", {
            position: "bottom-left"
        });
        view.whenLayerView(layer).then(function(layerView) {
            view.extent = layerView.layer.fullExtent;
            addSearchWidget(view, layer);
            //addDirectionsWidget(view, layer);
            addFeatureTable(view, layer);
            layerView.watch("updating", function(val) {
                if (!val) { // wait for the layer view to finish updating
                    let query = layerView.createQuery();
                    layerView.queryFeatures(query).then(function(results) {
                        let features = results.features;
                        let locationName = "Location_Name";
                        features.forEach(feature => {
                            //TODO : Get the names to render in the dropdown list
                            const item = document.createElement("calcite-dropdown-item");
                            item.setAttribute("value", feature.attributes[locationName]);
                            document.getElementById("dropdown").appendChild(item);
                        });
                    });
                }
            });

        }, function(error) {
            console.log(error);
        });
    });


});