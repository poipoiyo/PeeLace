# PeeLace

<img src="https://github.com/poipoiyo/Demo-image/blob/main/PeeLace/Icon.png" width="40%" />

A place to pee. 

Users are allowed to search restrooms nearby.

# Feature

- Search nearby restroom. (limit in Taiwan area)

<img src="https://github.com/poipoiyo/Demo-image/blob/main/PeeLace/Search.png" width="80%" />

- Side bar to list all the results. 

- Detail information can be viewed in marker window.

<img src="https://github.com/poipoiyo/Demo-image/blob/main/PeeLace/FilterWindow.png" width="80%" />

- Interactive with each marker. 

- We can navigate, search new center, and report error if there exists or not exists restroom.

<img src="https://github.com/poipoiyo/Demo-image/blob/main/PeeLace/WindowFeature.png" width="80%" />

- Since it's a website, it's also available through mobile phone. [WebView](https://developer.android.com/develop/ui/views/layout/webapps/webview)

# Requirements

- Keys should be placed inside `database.ejs` and `mapService.ejs`

- Google api: [Directions API](https://developers.google.com/maps/documentation/directions/overview?hl=en), [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview?hl=en)

- Firestore: To get my own database keys

<img src="https://github.com/poipoiyo/Demo-image/blob/main/PeeLace/GoogleMapAPI.png" width="80%" />

# Data format

<img src="https://github.com/poipoiyo/Demo-image/blob/main/PeeLace/DataFormat.png" width="30%" />

# More detail about google map
1. [Map style](https://developers.google.com/maps/documentation/javascript/examples/style-array)
2. [Restrict map only in Taiwan](https://developers.google.com/maps/documentation/javascript/examples/control-bounds-restriction)
3. [Map Event](https://developers.google.com/maps/documentation/javascript/events?hl=en) : Such as click, zoom
4. [Custom marker](https://developers.google.com/maps/documentation/javascript/custom-markers?hl=en)
5. [Custom window info](https://developers.google.com/maps/documentation/javascript/infowindows?hl=en)
6. [Navigate](https://developers.google.com/maps/documentation/directions/overview?hl=en)
