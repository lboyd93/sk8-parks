function createFeatureLayer(template, symbol) {
    let featureLayer;

    require(["esri/layers/FeatureLayer"], (FeatureLayer) => {

        let urlFeatureLayer = "https://services8.arcgis.com/saVeZItOAdgjvI3s/arcgis/rest/services/la_skateparks/FeatureServer/0";

        //Create FeatureLayer with template and symbology
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