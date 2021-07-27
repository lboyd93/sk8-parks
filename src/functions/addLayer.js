function addFeatureLayer(template, symbol) {
    let featureLayer;

    require(["esri/layers/FeatureLayer"], (FeatureLayer) => {

        let urlFeatureLayer = "https://services8.arcgis.com/saVeZItOAdgjvI3s/arcgis/rest/services/la_skateparks/FeatureServer/0";

        //Create the CSVLayer and set lat/long fields
        featureLayer = new FeatureLayer({
            url: urlFeatureLayer,
            popupTemplate: template,
            renderer: {
                type: "simple",
                symbol: symbol
            }
        });

    });

    return featureLayer;
}

// TODO: CVSLayer no longer working when added to this function file - need to check why
// function addCSVLayer(template, symbol) {
//     let csvLayer;

//     require(["esri/layers/CSVLayer"], (CSVLayer) => {

//         let urlCSV = "https://lboyd93.github.io/sk8-parks/resources/LASkateparks-June21.csv";

//         //Create the CSVLayer and set lat/long fields
//         csvLayer = new CSVLayer({
//             url: urlCSV,
//             latitudeField: "lat",
//             longitudeField: "long",
//             copyright: "https://data.lacity.org",
//             popupTemplate: template,
//             renderer: {
//                 type: "simple",
//                 symbol: symbol
//             }
//         });

//     });

//     return csvLayer;
// }