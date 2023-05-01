function addWidgets(view, layer, routeLayer) {
	require([
		"esri/widgets/Search",
		"esri/widgets/Directions",
		"esri/widgets/FeatureTable",
		"esri/widgets/Expand",
	], (Search, Directions, FeatureTable, Expand) => {
		//add Search Widget to search for the skate park locations
		const searchWidget = new Search({
			view: view,
			apiKey: "CHANGEAPIKEY",
			includeDefaultSources: false,
			sources: [
				{
					layer: layer,
					searchFields: ["Location_Name"],
					displayField: "Location_Name",
					placeholder: "Example: Imperial Courts Skate Park",
					zoomScale: 20,
				},
			],
		});

		const searchExpand = new Expand({
			view: view,
			content: searchWidget,
		});
		// Adds the Search widget below other elements in
		// the top right corner of the view
		view.ui.add(searchExpand, {
			position: "top-left",
			index: 0,
		});

		const directionsWidget = new Directions({
			view: view,
			//apiKey: "CHANGEAPIKEY"
			searchProperties: {
				sources: [
					{
						layer: layer,
						searchFields: ["Location_Name"],
						displayField: "Location_Name",
						placeholder: "Example: Imperial Courts Skate Park",
						filter: {
							geometry: layer.fullExtent,
						},
					},
				],
			},
			layer: routeLayer,
		});

		const directionsExpand = new Expand({
			view: view,
			content: directionsWidget,
		});

		// Adds the Directions widget below other elements in
		// the top right corner of the view
		view.ui.add(directionsExpand, {
			position: "top-right",
		});

		//Set up feature table and fields to display
		//Add to div already created
		const featureTable = new FeatureTable({
			view: view,
			layer: layer,
			attachmentsEnabled: true,
			fieldConfigs: [
				{
					name: "Location_Name",
					label: "Skate Park",
					direction: "asc",
				},
				{
					name: "Address",
					label: "Address",
				},
				{
					name: "Website",
					label: "Website",
				},
				{
					name: "Phone",
					label: "Phone Number",
				},
				{
					name: "CouncilDistrict",
					label: "Council District",
				},
			],
			container: "tableDiv",
		});
	});
}
