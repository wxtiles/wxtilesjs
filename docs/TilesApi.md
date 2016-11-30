# WxTiles.TilesApi

All URIs are relative to *http://127.16.1.15/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInstance**](TilesApi.md#getInstance) | **GET** /{ownerId}/layer/{layerId}/instance/{instanceId}/ | Information about a particular (potentially non-persistant) instance of a layer
[**getLayer**](TilesApi.md#getLayer) | **GET** /{ownerId}/layer/{layerId}/ | Information about a specific layer
[**getLayers**](TilesApi.md#getLayers) | **GET** /{ownerId}/layer/ | Information about available WXTiles layers
[**getLevels**](TilesApi.md#getLevels) | **GET** /{ownerId}/layer/{layerId}/instance/{instanceId}/levels/ | A collection of vertical levels for which data exists and can be requested (as tiles) for an instance of a layer.
[**getTile**](TilesApi.md#getTile) | **GET** /{ownerId}/tile/{layerId}/{styleId}/{instanceId}/{time}/{level}/{z}/{x}/{y}.{extension} | A tiled map image, for use by map clients capable of consuming PNG map images in OGC TMS coordinate notation.
[**getTimes**](TilesApi.md#getTimes) | **GET** /{ownerId}/layer/{layerId}/instance/{instanceId}/times/ | A collection of moments in time for which data exists and can be requested (as tiles) for an instance of a layer.


<a name="getInstance"></a>
# **getInstance**
> Instance getInstance(ownerId, layerId, instanceId, )

Information about a particular (potentially non-persistant) instance of a layer

This endpoint provides information about an instance of a specific *WXTiles* layer that can be requested as map tiles. Instances are typically added and removed as the data underlying a dataset changes with time (e.g. forecasts expire, and forecast horizons continuously move forward). Therefore a particular instance of a layer may not be persistant.

### Example
```javascript
var WxTiles = require('wx_tiles');
var defaultClient = WxTiles.ApiClient.default;

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new WxTiles.TilesApi();

var ownerId = "ownerId_example"; // String | The owner of the dataset.

var layerId = "layerId_example"; // String | The id of the layer.

var instanceId = "instanceId_example"; // String | The id of the instance.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInstance(ownerId, layerId, instanceId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **String**| The owner of the dataset. | 
 **layerId** | **String**| The id of the layer. | 
 **instanceId** | **String**| The id of the instance. | 

### Return type

[**Instance**](Instance.md)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLayer"></a>
# **getLayer**
> Layer getLayer(ownerId, layerId, )

Information about a specific layer

This endpoint provides information about a specific *WXTiles* layer that can be requested as map tiles, and its metadata, including bounding boxes and the unit system (metric, USCS, etc.) that is used when rendering map tiles.

### Example
```javascript
var WxTiles = require('wx_tiles');
var defaultClient = WxTiles.ApiClient.default;

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new WxTiles.TilesApi();

var ownerId = "ownerId_example"; // String | The owner of the dataset.

var layerId = "layerId_example"; // String | The id of the layer.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLayer(ownerId, layerId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **String**| The owner of the dataset. | 
 **layerId** | **String**| The id of the layer. | 

### Return type

[**Layer**](Layer.md)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLayers"></a>
# **getLayers**
> Layers getLayers(ownerId, )

Information about available WXTiles layers

This endpoint returns information about all current *WXTiles* layers that can be requested, and metadata about map layers, including bounding boxes and the unit system (metric, USCS, etc.) that is used when rendering map tiles.

### Example
```javascript
var WxTiles = require('wx_tiles');
var defaultClient = WxTiles.ApiClient.default;

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new WxTiles.TilesApi();

var ownerId = "ownerId_example"; // String | The owner of the dataset.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLayers(ownerId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **String**| The owner of the dataset. | 

### Return type

[**Layers**](Layers.md)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLevels"></a>
# **getLevels**
> Levels getLevels(ownerId, layerId, instanceId, )

A collection of vertical levels for which data exists and can be requested (as tiles) for an instance of a layer.

This endpoint exposes the array of vertical positions that data exists for a particular instance. Each element can be used to substitute the {level} part of a tile URL. Not all layer instances have a vertical (e.g. it may be surface wave height and therefore only apply at sea level). If a layer has no vertical dimension, the array will be empty.

### Example
```javascript
var WxTiles = require('wx_tiles');
var defaultClient = WxTiles.ApiClient.default;

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new WxTiles.TilesApi();

var ownerId = "ownerId_example"; // String | The owner of the dataset.

var layerId = "layerId_example"; // String | The id of the layer.

var instanceId = "instanceId_example"; // String | The id of the instance.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLevels(ownerId, layerId, instanceId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **String**| The owner of the dataset. | 
 **layerId** | **String**| The id of the layer. | 
 **instanceId** | **String**| The id of the instance. | 

### Return type

[**Levels**](Levels.md)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTile"></a>
# **getTile**
> File getTile(ownerId, layerId, styleId, instanceId, time, level, z, x, y, extension)

A tiled map image, for use by map clients capable of consuming PNG map images in OGC TMS coordinate notation.

WXTiles produces map tiles, and PNG map tiles are the traditional format for representing these. Other possibilities include protocol-buffer vector tiles in the Mapbox vector tile specification, and others. This endpoint will most often be used by map clients (such as Leaflet, Mapbox GL JS, OpenLayers, and Google Maps), which know exactly which tiles to request for a given geographical map view and zoom level. **The WXTiles Javascript API is responsible for completing the resource URI via these client libraries, based on what a user is authenticated to request, and what these layers support, via requests to other endpoints. Manual requests are possible but are not recommended.** The resources for a particular layer can be discovered through a &#x60;GET&#x60; request to &#x60;/layer/&lt;layerId&gt;/&#x60; and inspecting the response&#39;s &#x60;resources&#x60; property. The &#x60;/layer/&lt;layerId&gt;/&lt;instanceID&gt;/times/&#x60; endpoints can be used to request the times that are valid (many layer instances have only one time and/or vertical level).

### Example
```javascript
var WxTiles = require('wx_tiles');
var defaultClient = WxTiles.ApiClient.default;

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new WxTiles.TilesApi();

var ownerId = "ownerId_example"; // String | The owner of the dataset.

var layerId = "layerId_example"; // String | The id of the layer.

var styleId = "styleId_example"; // String | The id of the style.

var instanceId = "instanceId_example"; // String | The id of the instance.

var time = new Date("2013-10-20T19:20:30+01:00"); // Date | The time.

var level = "level_example"; // String | The level.

var z = 56; // Integer | The z.

var x = 56; // Integer | The x.

var y = 56; // Integer | The y.

var extension = "extension_example"; // String | The extension.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTile(ownerId, layerId, styleId, instanceId, time, level, z, x, y, extension, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **String**| The owner of the dataset. | 
 **layerId** | **String**| The id of the layer. | 
 **styleId** | **String**| The id of the style. | 
 **instanceId** | **String**| The id of the instance. | 
 **time** | **Date**| The time. | 
 **level** | **String**| The level. | 
 **z** | **Integer**| The z. | 
 **x** | **Integer**| The x. | 
 **y** | **Integer**| The y. | 
 **extension** | **String**| The extension. | 

### Return type

**File**

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png

<a name="getTimes"></a>
# **getTimes**
> Times getTimes(ownerId, layerId, instanceId, )

A collection of moments in time for which data exists and can be requested (as tiles) for an instance of a layer.

This endpoint exposes the array of moments that data exists for a particular instance. Each element can be used to substitute the &lt;time&gt; part of a tile URL. Not all layer instances have a temporal dimension (e.g. it may be static bathymetry, or an observational dataset with no forecast or hindcast). If a layer has no temporal dimension, the array will be empty. The times in the array may not be unique (this is almost always due to grouped datasets containing overlapping time steps).

### Example
```javascript
var WxTiles = require('wx_tiles');
var defaultClient = WxTiles.ApiClient.default;

// Configure API key authorization: apiKeyQuery
var apiKeyQuery = defaultClient.authentications['apiKeyQuery'];
apiKeyQuery.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyQuery.apiKeyPrefix = 'Token';

// Configure API key authorization: apiKeyHeader
var apiKeyHeader = defaultClient.authentications['apiKeyHeader'];
apiKeyHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyHeader.apiKeyPrefix = 'Token';

var apiInstance = new WxTiles.TilesApi();

var ownerId = "ownerId_example"; // String | The owner of the dataset.

var layerId = "layerId_example"; // String | The id of the layer.

var instanceId = "instanceId_example"; // String | The id of the instance.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTimes(ownerId, layerId, instanceId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **String**| The owner of the dataset. | 
 **layerId** | **String**| The id of the layer. | 
 **instanceId** | **String**| The id of the instance. | 

### Return type

[**Times**](Times.md)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

