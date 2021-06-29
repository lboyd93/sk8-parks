require(["esri/Map", "esri/views/MapView", "esri/layers/CSVLayer"], (Map, MapView, CSVLayer) => {

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

    let url = "https://laurenb.esri.com/Personal/SkateParkFinder/sk8-parks/resources/LASkateparks-June21.csv";

    //Create the CSVLayer and set lat/long fields
    let csvLayer = new CSVLayer({
        url: url,
        latitudeField: "lat",
        longitudeField: "long",
        copyright: "https://data.lacity.org",
        popupTemplate: template
    });

    //Set view extent once CSVLayer loads
    csvLayer.when(function() {
        view.extent = csvLayer.fullExtent;
    }, function(error) {
        console.log(error);
    });



    map.add(csvLayer);
});