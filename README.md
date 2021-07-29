# sk8-parks

This application uses the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/latest/) to display skate parks around Southern California allowing you to search for them and find directions to them from any location within the map. 

### Live sample available [here](https://lboyd93.github.io/sk8-parks/)! 

**Note**: You will need to sign in to use the Directions widget as of now. This may be changed in the future with [API keys](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/#api-keys).


## TODO
- [x] Display Skate Parks with [CSVLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-CSVLayer.html)
- [x] Change symbology to [PictureMarkerSymbol](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-PictureMarkerSymbol.html)
- [x] Add [PopupTemplate](https://developers.arcgis.com/javascript/latest/api-reference/esri-PopupTemplate.html) to display attribute information
- [x] Add [Search widget](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Search.html)
- [x] Add [Directions widget](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Directions.html)
- [x] Add [FeatureTable widget](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTable.html)
- [ ] Add custom menu item to FeatureTable Widget with [menuConfig property](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTable.html#menuConfig)
- [ ] Create [Web Style](https://pro.arcgis.com/en/pro-app/latest/help/sharing/overview/share-a-web-style.htm) and/or [Dictionary Renderer](https://pro.arcgis.com/en/pro-app/latest/help/mapping/layer-properties/dictionary-renderer.htm) for symbology
- [x] Publish CSV data as Feature Layer with Developer Account
- [x] Display data as [FeatureLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html)
- [ ] Add drop down list using Calcite Design System [Select component](https://developers.arcgis.com/calcite-design-system/components/select/) to jump to park that was picked


## Data Sources
- [LA City Skate Park Data](https://data.lacity.org/w/vwra-z6jg/ir6t-6fx6?cur=vn91vhpgz-a&from=JQ_ENgWb8Pi)