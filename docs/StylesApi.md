# WxTiles.StylesApi

All URIs are relative to *http://127.16.1.15/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getJSONLegend**](StylesApi.md#getJSONLegend) | **GET** /{ownerID}/legend/{layerId}/{styleId}.json | JSON represention of a style as implemented by a particular layer. Can be used for rendering custom a legend.
[**getPNGLegend**](StylesApi.md#getPNGLegend) | **GET** /{ownerId}/legend/{layerId}/{styleId}/{size}/{orientation}.png | A legend for PNG map tiles


<a name="getJSONLegend"></a>
# **getJSONLegend**
> getJSONLegend(ownerId, layerId, styleId, )

JSON represention of a style as implemented by a particular layer. Can be used for rendering custom a legend.

Unlike image legends, the JSON representation of a style always exists.

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

var apiInstance = new WxTiles.StylesApi();

var ownerId = "ownerId_example"; // String | The owner of the dataset.

var layerId = "layerId_example"; // String | The id of the layer.

var styleId = "styleId_example"; // String | The id of the style.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getJSONLegend(ownerId, layerId, styleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **String**| The owner of the dataset. |
 **layerId** | **String**| The id of the layer. |
 **styleId** | **String**| The id of the style. |

### Return type

null (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPNGLegend"></a>
# **getPNGLegend**
> getPNGLegend(ownerId, layerId, styleId, size, orientation)

A legend for PNG map tiles

Available legends reflect the styles implemented by a layer. When a legend is disabled on a per-style basis (or if a legend cannot be rendered due to the style), then this endpoint will return a 204 No Content response. The size must be substituted by either &#x60;small&#x60; or &#x60;large&#x60;. The orientation must be substituted by either &#x60;horizontal&#x60; or &#x60;vertical&#x60;.

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

var apiInstance = new WxTiles.StylesApi();

var ownerId = "ownerId_example"; // String | The owner of the dataset.

var layerId = "layerId_example"; // String | The id of the layer.

var styleId = "styleId_example"; // String | The id of the style.

var size = "size_example"; // String | The size.

var orientation = "orientation_example"; // String | The orientation.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPNGLegend(ownerId, layerId, styleId, size, orientation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **String**| The owner of the dataset. |
 **layerId** | **String**| The id of the layer. |
 **styleId** | **String**| The id of the style. |
 **size** | **String**| The size. |
 **orientation** | **String**| The orientation. |

### Return type

null (empty response body)

### Authorization

[apiKeyQuery](../README.md#apiKeyQuery), [apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png
