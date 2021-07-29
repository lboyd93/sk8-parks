function addWidgets(view, layer) {

    require(["esri/widgets/Search", "esri/widgets/Directions", "esri/widgets/FeatureTable"], (Search, Directions, FeatureTable) => {
        //add Search Widget to search for the skate park locations
        let searchWidget = new Search({
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

        let directionsWidget = new Directions({
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