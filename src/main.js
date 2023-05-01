require([
	"esri/Map",
	"esri/views/MapView",
	"esri/layers/RouteLayer",
	"esri/core/reactiveUtils",
], (Map, MapView, RouteLayer, reactiveUtils) => {
	const routeLayer = new RouteLayer();
	//Create the map & mapview
	const map = new Map({
		basemap: "topo-vector",
		layers: [routeLayer],
	});

	const view = new MapView({
		container: "viewDiv",
		map: map,
	});

	const dropdown = document.getElementById("dropdown");
	dropdown.addEventListener("calciteDropdownSelect", dropdownOnSelectEvent);

	//Create popup template for layer
	const template = {
		title: "{Location_Name}",
		content: [
			{
				type: "fields",
				fieldInfos: [
					{
						fieldName: "Address",
						label: "Address",
					},
					{
						fieldName: "Phone",
						label: "Phone Number",
					},
					{
						fieldName: "Website",
						label: "Website",
					},
				],
			},
		],
	};

	//create symbology from picture marker symbol
	const symbol = {
		type: "picture-marker", // autocasts as new PictureMarkerSymbol()
		url: "https://lboyd93.github.io/sk8-parks/resources/sk8icon.jpg",
		width: "30px",
		height: "30px",
	};

	//add featurelayer
	const layer = createFeatureLayer(template, symbol);
	map.add(layer);

	//Set view extent once layer loads and add widgets
	view.when(() => {
		//add all UI components when the view loads
		view.ui.add("dropdown", {
			position: "bottom-left",
		});
		addWidgets(view, layer, routeLayer);
		//create a layerview to query
		view.whenLayerView(layer).then(
			(layerView) => {
				view.extent = layerView.layer.fullExtent;
				reactiveUtils.watch(
					() => !layerView.updating,
					() => {
						// wait for the layer view to finish updating
						let query = layerView.createQuery();
						//query for all features with all OutFields
						layerView.queryFeatures(query).then((results) => {
							let features = results.features;
							let locationName = "Location_Name";
							//populate the calcite dropdown
							features.forEach((feature) => {
								//TODO : Get the names to render in the dropdown list
								const item = document.createElement("calcite-dropdown-item");
								item.value = feature.attributes[locationName];
								item.innerHTML = feature.attributes[locationName];
								document.getElementById("dropdown").appendChild(item);
							});
						});
					}
				);
			},
			(error) => {
				console.log(error);
			}
		);
	});

	function dropdownOnSelectEvent(event) {
		const target = event.target;
		const selectItems = dropdown.selectedItems;
		console.log(selectItems);
	}
});
