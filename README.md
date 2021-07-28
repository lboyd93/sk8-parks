# sk8-parks

This application will display skate parks in Los Angeles based on data from [LA City Data](https://data.lacity.org/w/vwra-z6jg/ir6t-6fx6?cur=vn91vhpgz-a&from=JQ_ENgWb8Pi) using the ArcGIS API for JavaScript.

Live sample available [here](https://lboyd93.github.io/sk8-parks/)! Note: You will need to sign in to use the widgets as of now. This may be changed in the future with API keys.


## TODO
- [x] Display Skate Parks with [CSVLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-CSVLayer.html)
- [x] Change symbology to [PictureMarkerSymbol](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-PictureMarkerSymbol.html)
- [x] Add [PopupTemplate](https://developers.arcgis.com/javascript/latest/api-reference/esri-PopupTemplate.html) to display attribute information
- [x] Add [Search widget](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Search.html)
- [ ] Add [Directions widget](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Directions.html)
- [ ] Add [FeatureTable widget](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTable.html)
- [ ] Create [Web Style](https://pro.arcgis.com/en/pro-app/latest/help/sharing/overview/share-a-web-style.htm) and/or [Dictionary Renderer](https://pro.arcgis.com/en/pro-app/latest/help/mapping/layer-properties/dictionary-renderer.htm) for symbology
- [x] Publish CSV data as Feature Layer with Developer Account
- [x] Display data as [FeatureLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html)
- [ ] Add drop down list using Calcite Design System [Select component](https://developers.arcgis.com/calcite-design-system/components/select/) to jump to park that was picked
