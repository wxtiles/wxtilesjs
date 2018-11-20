**This package is no longer maintained.**
<!--

1) wxtiles-docs: npm run build-swagger-js-client
2) Copy that into wxtiles/js
3) Look at diff.
4) Commit
5) Travis builds and deploys

If you add stuff to the api you might need to change the hand written wrapper.js
https://github.com/wxtiles/js/blob/master/src/wrapper.js
That file basically re-exports everything into a nicer namespace.
The comments like `* @borrows  module:api/TilesApi#getLayer` make sure the docs have that same namespace.

The best way might be to just have /vX/ branches and make travis publish to dist/{branch}/blah.js

 -->

# Building wxtilesjs
[![Build Status](https://travis-ci.org/wxtiles/js.svg?branch=master)](https://travis-ci.org/wxtiles/js)

To build this repo run `npm install` followed by `npm run prepare-deploy`.  
This will place the Webpacked JavaScript file at `out/dist/wxTiles.js` and the documentation for the client library at `out/docs/wxTiles.md`.

Travis will publish these files to https://wxtiles.github.io/js/dist/wxTiles.js and https://wxtiles.github.io/js/docs/wxTiles.md  
The documentation file is used by docs.wxtiles.com and is pretty formated at http://docs.wxtiles.com/wxtilesjs-docs/

# wx_tiles

WxTiles - JavaScript client for wx_tiles
Make and explore beautiful, rapidly-refreshed weather maps with the WXTiles API
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 3.0.0
- Package version: 3.0.0
- Build date: 2016-11-30T16:18:25.498+13:00
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install wx_tiles --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var WxTiles = require('wx_tiles');

var defaultClient = WxTiles.ApiClient.instance;

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix['apikey'] = "Token"

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix['apikey'] = "Token"

var api = new WxTiles.InstancesApi()

var ownerId = "ownerId_example"; // {String} The owner of the dataset.

var layerId = "layerId_example"; // {String} The id of the layer.

var instanceId = "instanceId_example"; // {String} The id of the instance.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getInstance(ownerId, layerId, instanceId, , callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://172.16.1.50/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*WxTiles.InstancesApi* | [**getInstance**](docs/InstancesApi.md#getInstance) | **GET** /{ownerId}/layer/{layerId}/instance/{instanceId}/ | Information about a particular (potentially non-persistant) instance of a layer
*WxTiles.InstancesApi* | [**getLevels**](docs/InstancesApi.md#getLevels) | **GET** /{ownerId}/layer/{layerId}/instance/{instanceId}/levels/ | A collection of vertical levels for which data exists and can be requested (as tiles) for an instance of a layer.
*WxTiles.InstancesApi* | [**getTimes**](docs/InstancesApi.md#getTimes) | **GET** /{ownerId}/layer/{layerId}/instance/{instanceId}/times/ | A collection of moments in time for which data exists and can be requested (as tiles) for an instance of a layer.
*WxTiles.LayersApi* | [**getLayer**](docs/LayersApi.md#getLayer) | **GET** /{ownerId}/layer/{layerId}/ | Information about a specific layer
*WxTiles.LayersApi* | [**getLayers**](docs/LayersApi.md#getLayers) | **GET** /{ownerId}/layer/ | Information about available WXTiles layers
*WxTiles.LegendsApi* | [**getPNGLegend**](docs/LegendsApi.md#getPNGLegend) | **GET** /{ownerId}/legend/{layerId}/{styleId}/{size}/{orientation}.png | A legend for PNG map tiles
*WxTiles.LegendsApi* | [**ownerIDLegendLayerIdStyleIdJsonGet**](docs/LegendsApi.md#ownerIDLegendLayerIdStyleIdJsonGet) | **GET** /{ownerID}/legend/{layerId}/{StyleId}.json | JSON represention of a style as implemented by a particular layer. Can be used for rendering custom a legend.
*WxTiles.LevelsApi* | [**getLevels**](docs/LevelsApi.md#getLevels) | **GET** /{ownerId}/layer/{layerId}/instance/{instanceId}/levels/ | A collection of vertical levels for which data exists and can be requested (as tiles) for an instance of a layer.
*WxTiles.StylesApi* | [**getPNGLegend**](docs/StylesApi.md#getPNGLegend) | **GET** /{ownerId}/legend/{layerId}/{styleId}/{size}/{orientation}.png | A legend for PNG map tiles
*WxTiles.StylesApi* | [**ownerIDLegendLayerIdStyleIdJsonGet**](docs/StylesApi.md#ownerIDLegendLayerIdStyleIdJsonGet) | **GET** /{ownerID}/legend/{layerId}/{StyleId}.json | JSON represention of a style as implemented by a particular layer. Can be used for rendering custom a legend.
*WxTiles.TilesApi* | [**getInstance**](docs/TilesApi.md#getInstance) | **GET** /{ownerId}/layer/{layerId}/instance/{instanceId}/ | Information about a particular (potentially non-persistant) instance of a layer
*WxTiles.TilesApi* | [**getLayer**](docs/TilesApi.md#getLayer) | **GET** /{ownerId}/layer/{layerId}/ | Information about a specific layer
*WxTiles.TilesApi* | [**getLayers**](docs/TilesApi.md#getLayers) | **GET** /{ownerId}/layer/ | Information about available WXTiles layers
*WxTiles.TilesApi* | [**getLevels**](docs/TilesApi.md#getLevels) | **GET** /{ownerId}/layer/{layerId}/instance/{instanceId}/levels/ | A collection of vertical levels for which data exists and can be requested (as tiles) for an instance of a layer.
*WxTiles.TilesApi* | [**getTile**](docs/TilesApi.md#getTile) | **GET** /{ownerId}/tile/{layerId}/{styleId}/{instanceId}/{time}/{level}/{z}/{x}/{y}.{extension} | A tiled map image, for use by map clients capable of consuming PNG map images in OGC TMS coordinate notation.
*WxTiles.TilesApi* | [**getTimes**](docs/TilesApi.md#getTimes) | **GET** /{ownerId}/layer/{layerId}/instance/{instanceId}/times/ | A collection of moments in time for which data exists and can be requested (as tiles) for an instance of a layer.
*WxTiles.TimesApi* | [**getTimes**](docs/TimesApi.md#getTimes) | **GET** /{ownerId}/layer/{layerId}/instance/{instanceId}/times/ | A collection of moments in time for which data exists and can be requested (as tiles) for an instance of a layer.


## Documentation for Models

 - [WxTiles.Bounds](docs/Bounds.md)
 - [WxTiles.Dimension](docs/Dimension.md)
 - [WxTiles.Error](docs/Error.md)
 - [WxTiles.Instance](docs/Instance.md)
 - [WxTiles.Layer](docs/Layer.md)
 - [WxTiles.LayerDefaults](docs/LayerDefaults.md)
 - [WxTiles.Layers](docs/Layers.md)
 - [WxTiles.LegendResources](docs/LegendResources.md)
 - [WxTiles.Level](docs/Level.md)
 - [WxTiles.Levels](docs/Levels.md)
 - [WxTiles.MaxNativeZoom](docs/MaxNativeZoom.md)
 - [WxTiles.MinNativeZoom](docs/MinNativeZoom.md)
 - [WxTiles.PartialInstance](docs/PartialInstance.md)
 - [WxTiles.Region](docs/Region.md)
 - [WxTiles.Resources](docs/Resources.md)
 - [WxTiles.Style](docs/Style.md)
 - [WxTiles.Tag](docs/Tag.md)
 - [WxTiles.Time](docs/Time.md)
 - [WxTiles.Times](docs/Times.md)


## Documentation for Authorization


### apiKeyQuery

- **Type**: API key
- **API key parameter name**: apikey
- **Location**: URL query string

### apiKeyHeader

- **Type**: API key
- **API key parameter name**: apikey
- **Location**: HTTP header
