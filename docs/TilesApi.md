# WxTiles.TilesApi

All URIs are relative to *https://api.wxtiles.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInstance**](TilesApi.md#getInstance) | **GET** /{ownerId}/layer/{layerId}/instance/{instanceId}/ | Information about a particular (potentially non-persistant) instance of a layer
[**getJSONLegend**](TilesApi.md#getJSONLegend) | **GET** /{ownerId}/legend/{layerId}/{instanceId}/{size}/{orientation}.json | A JSON representation of the legend for PNG map tiles
[**getLayer**](TilesApi.md#getLayer) | **GET** /{ownerId}/layer/{layerId}/ | Information about a specific layer
[**getLayers**](TilesApi.md#getLayers) | **GET** /{ownerId}/layer/ | Information about available Cloudburst layers
[**getLevels**](TilesApi.md#getLevels) | **GET** /{ownerId}/layer/{layerId}/instance/{instanceId}/levels/ | A collection of vertical levels for which data exists and can be requested (as tiles) for an instance of a layer.
[**getPNGLegend**](TilesApi.md#getPNGLegend) | **GET** /{ownerId}/legend/{layerId}/{instanceId}/{size}/{orientation}.png | A legend for PNG map tiles
[**getTile**](TilesApi.md#getTile) | **GET** /{ownerId}/tile/{layerId}/{instanceId}/{time}/{level}/{z}/{x}/{y2}.{extension} | A tiled map image, for use by map clients capable of consuming PNG map images in OGC TMS coordinate notation.
[**getTimes**](TilesApi.md#getTimes) | **GET** /{ownerId}/layer/{layerId}/instance/{instanceId}/times/ | A collection of moments in time for which data exists and can be requested (as tiles) for an instance of a layer.


<a name="getInstance"></a>
# **getInstance**
> Instance getInstance(ownerId, layerId, instanceId, )

Information about a particular (potentially non-persistant) instance of a layer

This endpoint provides information about an instance of a specific *Cloudburst* layer that can be requested as map tiles. Instances are typically added and removed as the data underlying a dataset changes with time (e.g. forecasts expire, and forecast horizons continuously move forward). Therefore a particular instance of a layer may not be persistant.

### Example
```javascript
var WxTiles = require('wx-tiles');

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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJSONLegend"></a>
# **getJSONLegend**
> Legend getJSONLegend(ownerId, layerId, instanceId, size, orientation)

A JSON representation of the legend for PNG map tiles

Legends are inferred from plot configurations for each layer. When a legend is disabled on a per-layer basis (or if a legend cannot be rendered due to the plot type), then this endpoint will return a 204 No Content response. Cloudburst internally uses this JSON representation to render the PNG version of the legend, and this endpoint is exposed to support client-side legend rendering and the interaction that implies. The size must be substituted by either &#x60;small&#x60; or &#x60;large&#x60;. The orientation must be substituted by either &#x60;horizontal&#x60; or &#x60;vertical&#x60;.

### Example
```javascript
var WxTiles = require('wx-tiles');

var apiInstance = new WxTiles.TilesApi();

var ownerId = "ownerId_example"; // String | The owner of the dataset.

var layerId = "layerId_example"; // String | The id of the layer.

var instanceId = "instanceId_example"; // String | The id of the instance.

var size = "size_example"; // String | The size.

var orientation = "orientation_example"; // String | The orientation.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getJSONLegend(ownerId, layerId, instanceId, size, orientation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **String**| The owner of the dataset. | 
 **layerId** | **String**| The id of the layer. | 
 **instanceId** | **String**| The id of the instance. | 
 **size** | **String**| The size. | 
 **orientation** | **String**| The orientation. | 

### Return type

[**Legend**](Legend.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLayer"></a>
# **getLayer**
> Layer getLayer(ownerId, layerId, )

Information about a specific layer

This endpoint provides information about a specific *Cloudburst* layer that can be requested as map tiles, and its metadata, including bounding boxes and the unit system (metric, USCS, etc.) that is used when rendering map tiles.

### Example
```javascript
var WxTiles = require('wx-tiles');

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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLayers"></a>
# **getLayers**
> Layers getLayers(ownerId, , opts)

Information about available Cloudburst layers

This endpoint returns information about all current *Cloudburst* layers that can be requested, and metadata about map layers, including bounding boxes and the unit system (metric, USCS, etc.) that is used when rendering map tiles.

### Example
```javascript
var WxTiles = require('wx-tiles');

var apiInstance = new WxTiles.TilesApi();

var ownerId = "ownerId_example"; // String | The owner of the dataset.

var opts = { 
  'tags': "tags_example" // String | Filter layers by tags, separated by commas. Using multiple `tags` parameters is equivalent to an `AND` operation. For example, `tags=x,y` is `x OR y`; `tags=x&tags=y` is `x AND y`; and `tags=x,y&tags=z` is `(x OR y) AND z`
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLayers(ownerId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **String**| The owner of the dataset. | 
 **tags** | **String**| Filter layers by tags, separated by commas. Using multiple &#x60;tags&#x60; parameters is equivalent to an &#x60;AND&#x60; operation. For example, &#x60;tags&#x3D;x,y&#x60; is &#x60;x OR y&#x60;; &#x60;tags&#x3D;x&amp;tags&#x3D;y&#x60; is &#x60;x AND y&#x60;; and &#x60;tags&#x3D;x,y&amp;tags&#x3D;z&#x60; is &#x60;(x OR y) AND z&#x60; | [optional] 

### Return type

[**Layers**](Layers.md)

### Authorization

No authorization required

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
var WxTiles = require('wx-tiles');

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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPNGLegend"></a>
# **getPNGLegend**
> getPNGLegend(ownerId, layerId, instanceId, size, orientation)

A legend for PNG map tiles

Legends are inferred from plot configurations for each layer. When a legend is disabled on a per-layer basis (or if a legend cannot be rendered due to the plot type), then this endpoint will return a 204 No Content response. The size must be substituted by either &#x60;small&#x60; or &#x60;large&#x60;. The orientation must be substituted by either &#x60;horizontal&#x60; or &#x60;vertical&#x60;.

### Example
```javascript
var WxTiles = require('wx-tiles');

var apiInstance = new WxTiles.TilesApi();

var ownerId = "ownerId_example"; // String | The owner of the dataset.

var layerId = "layerId_example"; // String | The id of the layer.

var instanceId = "instanceId_example"; // String | The id of the instance.

var size = "size_example"; // String | The size.

var orientation = "orientation_example"; // String | The orientation.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPNGLegend(ownerId, layerId, instanceId, size, orientation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **String**| The owner of the dataset. | 
 **layerId** | **String**| The id of the layer. | 
 **instanceId** | **String**| The id of the instance. | 
 **size** | **String**| The size. | 
 **orientation** | **String**| The orientation. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png

<a name="getTile"></a>
# **getTile**
> File getTile(ownerId, layerId, instanceId, time, level, z, x, y2, extension)

A tiled map image, for use by map clients capable of consuming PNG map images in OGC TMS coordinate notation.

Cloudburst produces map tiles, and PNG map tiles are the traditional format for representing these. Other possibilities include protocol-buffer vector tiles in the Mapbox vector tile specification, and others. This endpoint will most often be used by map clients (such as Leaflet, Mapbox GL JS, OpenLayers, and Google Maps), which know exactly which tiles to request for a given geographical map view and zoom level. **The Cloudburst Javascript API is responsible for completing the resource URI via these client libraries, based on what a user is authenticated to request, and what these layers support, via requests to other endpoints. Manual requests are possible but are not recommended.** The resources for a particular layer can be discovered through a &#x60;GET&#x60; request to &#x60;/layer/&lt;layerId&gt;/&#x60; and inspecting the response&#39;s &#x60;resources&#x60; property. The &#x60;/layer/&lt;layerId&gt;/&lt;instanceID&gt;/times/&#x60; endpoints can be used to request the times that are valid (many layer instances have only one time and/or vertical level).

### Example
```javascript
var WxTiles = require('wx-tiles');

var apiInstance = new WxTiles.TilesApi();

var ownerId = "ownerId_example"; // String | The owner of the dataset.

var layerId = "layerId_example"; // String | The id of the layer.

var instanceId = "instanceId_example"; // String | The id of the instance.

var time = new Date("2013-10-20T19:20:30+01:00"); // Date | The time.

var level = "level_example"; // String | The level.

var z = 56; // Integer | The z.

var x = 56; // Integer | The x.

var y2 = 56; // Integer | The y.

var extension = "extension_example"; // String | The extension.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTile(ownerId, layerId, instanceId, time, level, z, x, y2, extension, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **String**| The owner of the dataset. | 
 **layerId** | **String**| The id of the layer. | 
 **instanceId** | **String**| The id of the instance. | 
 **time** | **Date**| The time. | 
 **level** | **String**| The level. | 
 **z** | **Integer**| The z. | 
 **x** | **Integer**| The x. | 
 **y2** | **Integer**| The y. | 
 **extension** | **String**| The extension. | 

### Return type

**File**

### Authorization

No authorization required

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
var WxTiles = require('wx-tiles');

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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

