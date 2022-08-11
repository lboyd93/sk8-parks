function addSearchWidget(view, layer) {
    require(["esri/widgets/Search"], (Search) => {
        //add Search Widget to search for the skate park locations
        const searchWidget = new Search({
            view: view,
            apiKey: "CHANGEAPIKEY",
            includeDefaultSources: false,
            sources: [{
                layer: layer,
                searchFields: ["Location_Name"],
                displayField: "Location_Name",
                placeholder: "example: Stoner Skate Park",
                zoomScale: 20
            }]
        });
        // Adds the Search widget below other elements in
        // the top right corner of the view
        view.ui.add(searchWidget, {
            position: "top-left",
            index: 0
        });

    });
}

function addDirectionsWidget(view, layer) {
    require(["esri/widgets/Directions"], (Directions) => {
        const directionsWidget = new Directions({
            view: view,
            //apiKey: "CHANGEAPIKEY"
            searchProperties: {
                sources: [{
                    layer: layer,
                    searchFields: ["Location_Name"],
                    displayField: "Location_Name",
                    placeholder: "Imperial Courts Skate Park",
                    filter: {
                        geometry: layer.fullExtent
                    }
                }]
            }
        });
        // Adds the Directions widget below other elements in
        // the top right corner of the view
        view.ui.add(directionsWidget, {
            position: "top-right",
            index: 0
        });
    });
}


function addFeatureTable(view, layer) {
    require(["esri/widgets/FeatureTable"], (FeatureTable) => {
        //Set up feature table and fields to display
        //Add to div already created
        const featureTable = new FeatureTable({
            view: view,
            layer: layer,
            attachmentsEnabled: true,
            fieldConfigs: [{
                    name: "Location_Name",
                    label: "Skate Park",
                    direction: "asc"
                },
                {
                    name: "Address",
                    label: "Address"
                },
                {
                    name: "Website",
                    label: "Website"
                },
                {
                    name: "Phone",
                    label: "Phone Number"
                },
                {
                    name: "CouncilDistrict",
                    label: "Council District"
                }
            ],
            container: "tableDiv"
        });
    });
}