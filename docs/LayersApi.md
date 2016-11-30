# WxTiles.LayersApi

All URIs are relative to *http://127.16.1.15/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLayer**](LayersApi.md#getLayer) | **GET** /{ownerId}/layer/{layerId}/ | Information about a specific layer
[**getLayers**](LayersApi.md#getLayers) | **GET** /{ownerId}/layer/ | Information about available WXTiles layers


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

var apiInstance = new WxTiles.LayersApi();

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

var apiInstance = new WxTiles.LayersApi();

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

