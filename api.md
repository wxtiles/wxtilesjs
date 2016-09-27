## Modules

<table>
  <thead>
    <tr>
      <th>Module</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><a href="#module_api/TilesApi">api/TilesApi</a></td>
    <td><p>Tiles service.</p>
</td>
    </tr>
<tr>
    <td><a href="#module_ApiClient">ApiClient</a></td>
    <td></td>
    </tr>
<tr>
    <td><a href="#module_index">index</a></td>
    <td><p>Make_and_explore_beautiful_rapidly_refreshed_weather_maps_with_the_Cloudburst_API.<br>
The <code>index</code> module provides access to constructors for all the classes which comprise the public API.</p>
<p>
An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
<pre>
var WxTiles = require(&#39;index&#39;); // See note below<em>.
var xxxSvc = new WxTiles.XxxApi(); // Allocate the API class we&#39;re going to use.
var yyyModel = new WxTiles.Yyy(); // Construct a model instance.
yyyModel.someProperty = &#39;someValue&#39;;
...
var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
...
</pre>
<em></em>NOTE: For a top-level AMD script, use require([&#39;index&#39;], function(){...})
and put the application logic within the callback function.</em>
</p>
<p>
A non-AMD browser application (discouraged) might do something like this:
<pre>
var xxxSvc = new WxTiles.XxxApi(); // Allocate the API class we&#39;re going to use.
var yyy = new WxTiles.Yyy(); // Construct a model instance.
yyyModel.someProperty = &#39;someValue&#39;;
...
var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
...
</pre>
</p></td>
    </tr>
<tr>
    <td><a href="#module_model/Bounds">model/Bounds</a></td>
    <td><p>The Bounds model module.</p>
</td>
    </tr>
<tr>
    <td><a href="#module_model/Error">model/Error</a></td>
    <td><p>The Error model module.</p>
</td>
    </tr>
<tr>
    <td><a href="#module_model/Instance">model/Instance</a></td>
    <td><p>The Instance model module.</p>
</td>
    </tr>
<tr>
    <td><a href="#module_model/Layer">model/Layer</a></td>
    <td><p>The Layer model module.</p>
</td>
    </tr>
<tr>
    <td><a href="#module_model/Layers">model/Layers</a></td>
    <td><p>The Layers model module.</p>
</td>
    </tr>
<tr>
    <td><a href="#module_model/Level">model/Level</a></td>
    <td><p>The Level model module.</p>
</td>
    </tr>
<tr>
    <td><a href="#module_model/Levels">model/Levels</a></td>
    <td><p>The Levels model module.</p>
</td>
    </tr>
<tr>
    <td><a href="#module_model/MaxNativeZoom">model/MaxNativeZoom</a></td>
    <td><p>The MaxNativeZoom model module.</p>
</td>
    </tr>
<tr>
    <td><a href="#module_model/Metadata">model/Metadata</a></td>
    <td><p>The Metadata model module.</p>
</td>
    </tr>
<tr>
    <td><a href="#module_model/MinNativeZoom">model/MinNativeZoom</a></td>
    <td><p>The MinNativeZoom model module.</p>
</td>
    </tr>
<tr>
    <td><a href="#module_model/PartialInstance">model/PartialInstance</a></td>
    <td><p>The PartialInstance model module.</p>
</td>
    </tr>
<tr>
    <td><a href="#module_model/Resources">model/Resources</a></td>
    <td><p>The Resources model module.</p>
</td>
    </tr>
<tr>
    <td><a href="#module_model/Time">model/Time</a></td>
    <td><p>The Time model module.</p>
</td>
    </tr>
<tr>
    <td><a href="#module_model/Times">model/Times</a></td>
    <td><p>The Times model module.</p>
</td>
    </tr>
<tr>
    <td><a href="#module_wxTiles">wxTiles</a></td>
    <td><p>Tiles service.</p>
</td>
    </tr>
</tbody>
</table>

<a name="module_api/TilesApi"></a>

## api/TilesApi
Tiles service.

**Version**: 1.2.0  

* [api/TilesApi](#module_api/TilesApi)
    * [exports](#exp_module_api/TilesApi--exports) ⏏
        * [new exports(apiClient)](#new_module_api/TilesApi--exports_new)
        * [exports.getInstance(ownerId, layerId, instanceId, callback)](#module_api/TilesApi--exports+getInstance)
        * [exports.getLayer(ownerId, layerId, callback)](#module_api/TilesApi--exports+getLayer)
        * [exports.getLayers(ownerId, opts, callback)](#module_api/TilesApi--exports+getLayers)
        * [exports.getLevels(ownerId, layerId, instanceId, callback)](#module_api/TilesApi--exports+getLevels)
        * [exports.getPNGLegend(ownerId, layerId, instanceId, size, orientation, callback)](#module_api/TilesApi--exports+getPNGLegend)
        * [exports.getTile(ownerId, layerId, instanceId, time, level, z, x, y2, extension, callback)](#module_api/TilesApi--exports+getTile)
        * [exports.getTimes(ownerId, layerId, instanceId, callback)](#module_api/TilesApi--exports+getTimes)
        * [exports~getInstanceCallback](#module_api/TilesApi--exports..getInstanceCallback) : <code>function</code>
        * [exports~getLayerCallback](#module_api/TilesApi--exports..getLayerCallback) : <code>function</code>
        * [exports~getLayersCallback](#module_api/TilesApi--exports..getLayersCallback) : <code>function</code>
        * [exports~getLevelsCallback](#module_api/TilesApi--exports..getLevelsCallback) : <code>function</code>
        * [exports~getPNGLegendCallback](#module_api/TilesApi--exports..getPNGLegendCallback) : <code>function</code>
        * [exports~getTileCallback](#module_api/TilesApi--exports..getTileCallback) : <code>function</code>
        * [exports~getTimesCallback](#module_api/TilesApi--exports..getTimesCallback) : <code>function</code>

<a name="exp_module_api/TilesApi--exports"></a>

### exports ⏏
**Kind**: Exported class  
<a name="new_module_api/TilesApi--exports_new"></a>

#### new exports(apiClient)
Constructs a new TilesApi.


| Param | Type | Description |
| --- | --- | --- |
| apiClient | <code>[ApiClient](#module_ApiClient)</code> | Optional API client implementation to use, default to [module:ApiClient#instance](module:ApiClient#instance) if unspecified. |

<a name="module_api/TilesApi--exports+getInstance"></a>

#### exports.getInstance(ownerId, layerId, instanceId, callback)
Information about a particular (potentially non-persistant) instance of a layer
This endpoint provides information about an instance of a specific *Cloudburst* layer that can be requested as map tiles. Instances are typically added and removed as the data underlying a dataset changes with time (e.g. forecasts expire, and forecast horizons continuously move forward). Therefore a particular instance of a layer may not be persistant.

**Kind**: instance method of <code>[exports](#exp_module_api/TilesApi--exports)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ownerId | <code>String</code> | The owner of the dataset. |
| layerId | <code>String</code> | The id of the layer. |
| instanceId | <code>String</code> | The id of the instance. |
| callback | <code>[getInstanceCallback](#module_api/TilesApi--exports..getInstanceCallback)</code> | The callback function, accepting three arguments: error, data, response data is of type: [model/Instance](#module_model/Instance) |

<a name="module_api/TilesApi--exports+getLayer"></a>

#### exports.getLayer(ownerId, layerId, callback)
Information about a specific layer
This endpoint provides information about a specific *Cloudburst* layer that can be requested as map tiles, and its metadata, including bounding boxes and the unit system (metric, USCS, etc.) that is used when rendering map tiles.

**Kind**: instance method of <code>[exports](#exp_module_api/TilesApi--exports)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ownerId | <code>String</code> | The owner of the dataset. |
| layerId | <code>String</code> | The id of the layer. |
| callback | <code>[getLayerCallback](#module_api/TilesApi--exports..getLayerCallback)</code> | The callback function, accepting three arguments: error, data, response data is of type: [model/Layer](#module_model/Layer) |

<a name="module_api/TilesApi--exports+getLayers"></a>

#### exports.getLayers(ownerId, opts, callback)
Information about available Cloudburst layers
This endpoint returns information about all current *Cloudburst* layers that can be requested, and metadata about map layers, including bounding boxes and the unit system (metric, USCS, etc.) that is used when rendering map tiles.

**Kind**: instance method of <code>[exports](#exp_module_api/TilesApi--exports)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ownerId | <code>String</code> | The owner of the dataset. |
| opts | <code>Object</code> | Optional parameters |
| opts.tags | <code>String</code> | Filter layers by tags, separated by commas. Using multiple &#x60;tags&#x60; parameters is equivalent to an &#x60;AND&#x60; operation. For example, &#x60;tags&#x3D;x,y&#x60; is &#x60;x OR y&#x60;; &#x60;tags&#x3D;x&amp;tags&#x3D;y&#x60; is &#x60;x AND y&#x60;; and &#x60;tags&#x3D;x,y&amp;tags&#x3D;z&#x60; is &#x60;(x OR y) AND z&#x60; |
| callback | <code>[getLayersCallback](#module_api/TilesApi--exports..getLayersCallback)</code> | The callback function, accepting three arguments: error, data, response data is of type: [model/Layers](#module_model/Layers) |

<a name="module_api/TilesApi--exports+getLevels"></a>

#### exports.getLevels(ownerId, layerId, instanceId, callback)
A collection of vertical levels for which data exists and can be requested (as tiles) for an instance of a layer.
This endpoint exposes the array of vertical positions that data exists for a particular instance. Each element can be used to substitute the {level} part of a tile URL. Not all layer instances have a vertical (e.g. it may be surface wave height and therefore only apply at sea level). If a layer has no vertical dimension, the array will be empty.

**Kind**: instance method of <code>[exports](#exp_module_api/TilesApi--exports)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ownerId | <code>String</code> | The owner of the dataset. |
| layerId | <code>String</code> | The id of the layer. |
| instanceId | <code>String</code> | The id of the instance. |
| callback | <code>[getLevelsCallback](#module_api/TilesApi--exports..getLevelsCallback)</code> | The callback function, accepting three arguments: error, data, response data is of type: [model/Levels](#module_model/Levels) |

<a name="module_api/TilesApi--exports+getPNGLegend"></a>

#### exports.getPNGLegend(ownerId, layerId, instanceId, size, orientation, callback)
A legend for PNG map tiles
Legends are inferred from plot configurations for each layer. When a legend is disabled on a per-layer basis (or if a legend cannot be rendered due to the plot type), then this endpoint will return a 204 No Content response. The size must be substituted by either &#x60;small&#x60; or &#x60;large&#x60;. The orientation must be substituted by either &#x60;horizontal&#x60; or &#x60;vertical&#x60;.

**Kind**: instance method of <code>[exports](#exp_module_api/TilesApi--exports)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ownerId | <code>String</code> | The owner of the dataset. |
| layerId | <code>String</code> | The id of the layer. |
| instanceId | <code>String</code> | The id of the instance. |
| size | <code>module:model/String</code> | The size. |
| orientation | <code>module:model/String</code> | The orientation. |
| callback | <code>[getPNGLegendCallback](#module_api/TilesApi--exports..getPNGLegendCallback)</code> | The callback function, accepting three arguments: error, data, response |

<a name="module_api/TilesApi--exports+getTile"></a>

#### exports.getTile(ownerId, layerId, instanceId, time, level, z, x, y2, extension, callback)
A tiled map image, for use by map clients capable of consuming PNG map images in OGC TMS coordinate notation.
Cloudburst produces map tiles, and PNG map tiles are the traditional format for representing these. Other possibilities include protocol-buffer vector tiles in the Mapbox vector tile specification, and others. This endpoint will most often be used by map clients (such as Leaflet, Mapbox GL JS, OpenLayers, and Google Maps), which know exactly which tiles to request for a given geographical map view and zoom level. **The Cloudburst Javascript API is responsible for completing the resource URI via these client libraries, based on what a user is authenticated to request, and what these layers support, via requests to other endpoints. Manual requests are possible but are not recommended.** The resources for a particular layer can be discovered through a &#x60;GET&#x60; request to &#x60;/layer/&lt;layerId&gt;/&#x60; and inspecting the response&#39;s &#x60;resources&#x60; property. The &#x60;/layer/&lt;layerId&gt;/&lt;instanceID&gt;/times/&#x60; endpoints can be used to request the times that are valid (many layer instances have only one time and/or vertical level).

**Kind**: instance method of <code>[exports](#exp_module_api/TilesApi--exports)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ownerId | <code>String</code> | The owner of the dataset. |
| layerId | <code>String</code> | The id of the layer. |
| instanceId | <code>String</code> | The id of the instance. |
| time | <code>Date</code> | The time. |
| level | <code>String</code> | The level. |
| z | <code>Integer</code> | The z. |
| x | <code>Integer</code> | The x. |
| y2 | <code>Integer</code> | The y. |
| extension | <code>module:model/String</code> | The extension. |
| callback | <code>[getTileCallback](#module_api/TilesApi--exports..getTileCallback)</code> | The callback function, accepting three arguments: error, data, response data is of type: [File](File) |

<a name="module_api/TilesApi--exports+getTimes"></a>

#### exports.getTimes(ownerId, layerId, instanceId, callback)
A collection of moments in time for which data exists and can be requested (as tiles) for an instance of a layer.
This endpoint exposes the array of moments that data exists for a particular instance. Each element can be used to substitute the &lt;time&gt; part of a tile URL. Not all layer instances have a temporal dimension (e.g. it may be static bathymetry, or an observational dataset with no forecast or hindcast). If a layer has no temporal dimension, the array will be empty. The times in the array may not be unique (this is almost always due to grouped datasets containing overlapping time steps).

**Kind**: instance method of <code>[exports](#exp_module_api/TilesApi--exports)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ownerId | <code>String</code> | The owner of the dataset. |
| layerId | <code>String</code> | The id of the layer. |
| instanceId | <code>String</code> | The id of the instance. |
| callback | <code>[getTimesCallback](#module_api/TilesApi--exports..getTimesCallback)</code> | The callback function, accepting three arguments: error, data, response data is of type: [model/Times](#module_model/Times) |

<a name="module_api/TilesApi--exports..getInstanceCallback"></a>

#### exports~getInstanceCallback : <code>function</code>
Callback function to receive the result of the getInstance operation.

**Kind**: inner typedef of <code>[exports](#exp_module_api/TilesApi--exports)</code>  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>String</code> | Error message, if any. |
| data | <code>[model/Instance](#module_model/Instance)</code> | The data returned by the service call. |
| response | <code>String</code> | The complete HTTP response. |

<a name="module_api/TilesApi--exports..getLayerCallback"></a>

#### exports~getLayerCallback : <code>function</code>
Callback function to receive the result of the getLayer operation.

**Kind**: inner typedef of <code>[exports](#exp_module_api/TilesApi--exports)</code>  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>String</code> | Error message, if any. |
| data | <code>[model/Layer](#module_model/Layer)</code> | The data returned by the service call. |
| response | <code>String</code> | The complete HTTP response. |

<a name="module_api/TilesApi--exports..getLayersCallback"></a>

#### exports~getLayersCallback : <code>function</code>
Callback function to receive the result of the getLayers operation.

**Kind**: inner typedef of <code>[exports](#exp_module_api/TilesApi--exports)</code>  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>String</code> | Error message, if any. |
| data | <code>[model/Layers](#module_model/Layers)</code> | The data returned by the service call. |
| response | <code>String</code> | The complete HTTP response. |

<a name="module_api/TilesApi--exports..getLevelsCallback"></a>

#### exports~getLevelsCallback : <code>function</code>
Callback function to receive the result of the getLevels operation.

**Kind**: inner typedef of <code>[exports](#exp_module_api/TilesApi--exports)</code>  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>String</code> | Error message, if any. |
| data | <code>[model/Levels](#module_model/Levels)</code> | The data returned by the service call. |
| response | <code>String</code> | The complete HTTP response. |

<a name="module_api/TilesApi--exports..getPNGLegendCallback"></a>

#### exports~getPNGLegendCallback : <code>function</code>
Callback function to receive the result of the getPNGLegend operation.

**Kind**: inner typedef of <code>[exports](#exp_module_api/TilesApi--exports)</code>  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>String</code> | Error message, if any. |
| data |  | This operation does not return a value. |
| response | <code>String</code> | The complete HTTP response. |

<a name="module_api/TilesApi--exports..getTileCallback"></a>

#### exports~getTileCallback : <code>function</code>
Callback function to receive the result of the getTile operation.

**Kind**: inner typedef of <code>[exports](#exp_module_api/TilesApi--exports)</code>  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>String</code> | Error message, if any. |
| data | <code>File</code> | The data returned by the service call. |
| response | <code>String</code> | The complete HTTP response. |

<a name="module_api/TilesApi--exports..getTimesCallback"></a>

#### exports~getTimesCallback : <code>function</code>
Callback function to receive the result of the getTimes operation.

**Kind**: inner typedef of <code>[exports](#exp_module_api/TilesApi--exports)</code>  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>String</code> | Error message, if any. |
| data | <code>[model/Times](#module_model/Times)</code> | The data returned by the service call. |
| response | <code>String</code> | The complete HTTP response. |

<a name="module_ApiClient"></a>

## ApiClient
**Version**: 1.2.0  

* [ApiClient](#module_ApiClient)
    * [exports](#exp_module_ApiClient--exports) ⏏
        * [new exports()](#new_module_ApiClient--exports_new)
        * [exports.basePath](#module_ApiClient--exports+basePath) : <code>String</code>
        * [exports.authentications](#module_ApiClient--exports+authentications) : <code>Array.&lt;String&gt;</code>
        * [exports.defaultHeaders](#module_ApiClient--exports+defaultHeaders) : <code>Array.&lt;String&gt;</code>
        * [exports.timeout](#module_ApiClient--exports+timeout) : <code>Number</code>
        * [exports.paramToString(param)](#module_ApiClient--exports+paramToString) ⇒ <code>String</code>
        * [exports.buildUrl(path, pathParams)](#module_ApiClient--exports+buildUrl) ⇒ <code>String</code>
        * [exports.isJsonMime(contentType)](#module_ApiClient--exports+isJsonMime) ⇒ <code>Boolean</code>
        * [exports.jsonPreferredMime(contentTypes)](#module_ApiClient--exports+jsonPreferredMime) ⇒ <code>String</code>
        * [exports.isFileParam(param)](#module_ApiClient--exports+isFileParam) ⇒ <code>Boolean</code>
        * [exports.normalizeParams(params)](#module_ApiClient--exports+normalizeParams) ⇒ <code>Object.&lt;String, Object&gt;</code>
        * [exports.buildCollectionParam(param, collectionFormat)](#module_ApiClient--exports+buildCollectionParam) ⇒ <code>String</code> &#124; <code>Array</code>
        * [exports.applyAuthToRequest(request, authNames)](#module_ApiClient--exports+applyAuthToRequest)
        * [exports.deserialize(response, returnType)](#module_ApiClient--exports+deserialize) ⇒
        * [exports.callApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts, returnType, callback)](#module_ApiClient--exports+callApi) ⇒ <code>Object</code>
        * [exports.CollectionFormatEnum](#module_ApiClient--exports.CollectionFormatEnum) : <code>enum</code>
        * [exports.instance](#module_ApiClient--exports.instance) : <code>[exports](#exp_module_ApiClient--exports)</code>
        * [exports.parseDate(str)](#module_ApiClient--exports.parseDate) ⇒ <code>Date</code>
        * [exports.convertToType(data, type)](#module_ApiClient--exports.convertToType) ⇒
        * [exports.constructFromObject(data, obj)](#module_ApiClient--exports.constructFromObject)
        * [exports~callApiCallback](#module_ApiClient--exports..callApiCallback) : <code>function</code>

<a name="exp_module_ApiClient--exports"></a>

### exports ⏏
**Kind**: Exported class  
<a name="new_module_ApiClient--exports_new"></a>

#### new exports()
Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
application to use this class directly - the *Api and model classes provide the public API for the service. The
contents of this file should be regarded as internal but are documented for completeness.

<a name="module_ApiClient--exports+basePath"></a>

#### exports.basePath : <code>String</code>
The base URL against which to resolve every API call's (relative) path.

**Kind**: instance property of <code>[exports](#exp_module_ApiClient--exports)</code>  
**Default**: <code>https://api.wxtiles.com/v0</code>  
<a name="module_ApiClient--exports+authentications"></a>

#### exports.authentications : <code>Array.&lt;String&gt;</code>
The authentication methods to be included for all API calls.

**Kind**: instance property of <code>[exports](#exp_module_ApiClient--exports)</code>  
<a name="module_ApiClient--exports+defaultHeaders"></a>

#### exports.defaultHeaders : <code>Array.&lt;String&gt;</code>
The default HTTP headers to be included for all API calls.

**Kind**: instance property of <code>[exports](#exp_module_ApiClient--exports)</code>  
**Default**: <code>{}</code>  
<a name="module_ApiClient--exports+timeout"></a>

#### exports.timeout : <code>Number</code>
The default HTTP timeout for all API calls.

**Kind**: instance property of <code>[exports](#exp_module_ApiClient--exports)</code>  
**Default**: <code>60000</code>  
<a name="module_ApiClient--exports+paramToString"></a>

#### exports.paramToString(param) ⇒ <code>String</code>
Returns a string representation for an actual parameter.

**Kind**: instance method of <code>[exports](#exp_module_ApiClient--exports)</code>  
**Returns**: <code>String</code> - The string representation of <code>param</code>.  

| Param | Description |
| --- | --- |
| param | The actual parameter. |

<a name="module_ApiClient--exports+buildUrl"></a>

#### exports.buildUrl(path, pathParams) ⇒ <code>String</code>
Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
NOTE: query parameters are not handled here.

**Kind**: instance method of <code>[exports](#exp_module_ApiClient--exports)</code>  
**Returns**: <code>String</code> - The encoded path with parameter values substituted.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | The path to append to the base URL. |
| pathParams | <code>Object</code> | The parameter values to append. |

<a name="module_ApiClient--exports+isJsonMime"></a>

#### exports.isJsonMime(contentType) ⇒ <code>Boolean</code>
Checks whether the given content type represents JSON.<br>
JSON content type examples:<br>
<ul>
<li>application/json</li>
<li>application/json; charset=UTF8</li>
<li>APPLICATION/JSON</li>
</ul>

**Kind**: instance method of <code>[exports](#exp_module_ApiClient--exports)</code>  
**Returns**: <code>Boolean</code> - <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.  

| Param | Type | Description |
| --- | --- | --- |
| contentType | <code>String</code> | The MIME content type to check. |

<a name="module_ApiClient--exports+jsonPreferredMime"></a>

#### exports.jsonPreferredMime(contentTypes) ⇒ <code>String</code>
Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.

**Kind**: instance method of <code>[exports](#exp_module_ApiClient--exports)</code>  
**Returns**: <code>String</code> - The chosen content type, preferring JSON.  

| Param | Type |
| --- | --- |
| contentTypes | <code>Array.&lt;String&gt;</code> | 

<a name="module_ApiClient--exports+isFileParam"></a>

#### exports.isFileParam(param) ⇒ <code>Boolean</code>
Checks whether the given parameter value represents file-like content.

**Kind**: instance method of <code>[exports](#exp_module_ApiClient--exports)</code>  
**Returns**: <code>Boolean</code> - <code>true</code> if <code>param</code> represents a file.  

| Param | Description |
| --- | --- |
| param | The parameter to check. |

<a name="module_ApiClient--exports+normalizeParams"></a>

#### exports.normalizeParams(params) ⇒ <code>Object.&lt;String, Object&gt;</code>
Normalizes parameter values:
<ul>
<li>remove nils</li>
<li>keep files and arrays</li>
<li>format to string with `paramToString` for other cases</li>
</ul>

**Kind**: instance method of <code>[exports](#exp_module_ApiClient--exports)</code>  
**Returns**: <code>Object.&lt;String, Object&gt;</code> - normalized parameters.  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object.&lt;String, Object&gt;</code> | The parameters as object properties. |

<a name="module_ApiClient--exports+buildCollectionParam"></a>

#### exports.buildCollectionParam(param, collectionFormat) ⇒ <code>String</code> &#124; <code>Array</code>
Builds a string representation of an array-type actual parameter, according to the given collection format.

**Kind**: instance method of <code>[exports](#exp_module_ApiClient--exports)</code>  
**Returns**: <code>String</code> &#124; <code>Array</code> - A string representation of the supplied collection, using the specified delimiter. Returns
<code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.  

| Param | Type | Description |
| --- | --- | --- |
| param | <code>Array</code> | An array parameter. |
| collectionFormat | <code>[CollectionFormatEnum](#module_ApiClient--exports.CollectionFormatEnum)</code> | The array element separator strategy. |

<a name="module_ApiClient--exports+applyAuthToRequest"></a>

#### exports.applyAuthToRequest(request, authNames)
Applies authentication headers to the request.

**Kind**: instance method of <code>[exports](#exp_module_ApiClient--exports)</code>  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>Object</code> | The request object created by a <code>superagent()</code> call. |
| authNames | <code>Array.&lt;String&gt;</code> | An array of authentication method names. |

<a name="module_ApiClient--exports+deserialize"></a>

#### exports.deserialize(response, returnType) ⇒
Deserializes an HTTP response body into a value of the specified type.

**Kind**: instance method of <code>[exports](#exp_module_ApiClient--exports)</code>  
**Returns**: A value of the specified type.  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>Object</code> | A SuperAgent response object. |
| returnType | <code>String</code> &#124; <code>Array.&lt;String&gt;</code> &#124; <code>Object.&lt;String, Object&gt;</code> &#124; <code>function</code> | The type to return. Pass a string for simple types or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type: all properties on <code>data<code> will be converted to this type. |

<a name="module_ApiClient--exports+callApi"></a>

#### exports.callApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts, returnType, callback) ⇒ <code>Object</code>
Invokes the REST service using the supplied settings and parameters.

**Kind**: instance method of <code>[exports](#exp_module_ApiClient--exports)</code>  
**Returns**: <code>Object</code> - The SuperAgent request object.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | The base URL to invoke. |
| httpMethod | <code>String</code> | The HTTP method to use. |
| pathParams | <code>Object.&lt;String, String&gt;</code> | A map of path parameters and their values. |
| queryParams | <code>Object.&lt;String, Object&gt;</code> | A map of query parameters and their values. |
| headerParams | <code>Object.&lt;String, Object&gt;</code> | A map of header parameters and their values. |
| formParams | <code>Object.&lt;String, Object&gt;</code> | A map of form parameters and their values. |
| bodyParam | <code>Object</code> | The value to pass as the request body. |
| authNames | <code>Array.&lt;String&gt;</code> | An array of authentication type names. |
| contentTypes | <code>Array.&lt;String&gt;</code> | An array of request MIME types. |
| accepts | <code>Array.&lt;String&gt;</code> | An array of acceptable response MIME types. |
| returnType | <code>String</code> &#124; <code>Array</code> &#124; <code>ObjectFunction</code> | The required type to return; can be a string for simple types or the constructor for a complex type. |
| callback | <code>[callApiCallback](#module_ApiClient--exports..callApiCallback)</code> | The callback function. |

<a name="module_ApiClient--exports.CollectionFormatEnum"></a>

#### exports.CollectionFormatEnum : <code>enum</code>
Enumeration of collection format separator strategies.

**Kind**: static enum property of <code>[exports](#exp_module_ApiClient--exports)</code>  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| CSV | <code>String</code> | <code>,</code> | Comma-separated values. Value: <code>csv</code> |
| SSV | <code>String</code> | <code> </code> | Space-separated values. Value: <code>ssv</code> |
| TSV | <code>String</code> | <code>	</code> | Tab-separated values. Value: <code>tsv</code> |
| PIPES | <code>String</code> | <code>|</code> | Pipe(|)-separated values. Value: <code>pipes</code> |
| MULTI | <code>String</code> | <code>multi</code> | Native array. Value: <code>multi</code> |

<a name="module_ApiClient--exports.instance"></a>

#### exports.instance : <code>[exports](#exp_module_ApiClient--exports)</code>
The default API client implementation.

**Kind**: static property of <code>[exports](#exp_module_ApiClient--exports)</code>  
<a name="module_ApiClient--exports.parseDate"></a>

#### exports.parseDate(str) ⇒ <code>Date</code>
Parses an ISO-8601 string representation of a date value.

**Kind**: static method of <code>[exports](#exp_module_ApiClient--exports)</code>  
**Returns**: <code>Date</code> - The parsed date object.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | The date value as a string. |

<a name="module_ApiClient--exports.convertToType"></a>

#### exports.convertToType(data, type) ⇒
Converts a value to the specified type.

**Kind**: static method of <code>[exports](#exp_module_ApiClient--exports)</code>  
**Returns**: An instance of the specified type.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>String</code> &#124; <code>Object</code> | The data to convert, as a string or object. |
| type | <code>String</code> &#124; <code>Array.&lt;String&gt;</code> &#124; <code>Object.&lt;String, Object&gt;</code> &#124; <code>function</code> | The type to return. Pass a string for simple types or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type: all properties on <code>data<code> will be converted to this type. |

<a name="module_ApiClient--exports.constructFromObject"></a>

#### exports.constructFromObject(data, obj)
Constructs a new map or array model from REST data.

**Kind**: static method of <code>[exports](#exp_module_ApiClient--exports)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> &#124; <code>Array</code> | The REST data. |
| obj | <code>Object</code> &#124; <code>Array</code> | The target object or array. |

<a name="module_ApiClient--exports..callApiCallback"></a>

#### exports~callApiCallback : <code>function</code>
Callback function to receive the result of the operation.

**Kind**: inner typedef of <code>[exports](#exp_module_ApiClient--exports)</code>  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>String</code> | Error message, if any. |
| data |  | The data returned by the service call. |
| response | <code>String</code> | The complete HTTP response. |

<a name="module_index"></a>

## index
Make_and_explore_beautiful_rapidly_refreshed_weather_maps_with_the_Cloudburst_API.<br>
The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
<p>
An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
<pre>
var WxTiles = require('index'); // See note below*.
var xxxSvc = new WxTiles.XxxApi(); // Allocate the API class we're going to use.
var yyyModel = new WxTiles.Yyy(); // Construct a model instance.
yyyModel.someProperty = 'someValue';
...
var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
...
</pre>
<em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
and put the application logic within the callback function.</em>
</p>
<p>
A non-AMD browser application (discouraged) might do something like this:
<pre>
var xxxSvc = new WxTiles.XxxApi(); // Allocate the API class we're going to use.
var yyy = new WxTiles.Yyy(); // Construct a model instance.
yyyModel.someProperty = 'someValue';
...
var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
...
</pre>
</p>

**Version**: 1.2.0  

* [index](#module_index)
    * [.ApiClient](#module_index.ApiClient)
    * [.Bounds](#module_index.Bounds)
    * [.Error](#module_index.Error)
    * [.Instance](#module_index.Instance)
    * [.Layer](#module_index.Layer)
    * [.Layers](#module_index.Layers)
    * [.Level](#module_index.Level)
    * [.Levels](#module_index.Levels)
    * [.MaxNativeZoom](#module_index.MaxNativeZoom)
    * [.Metadata](#module_index.Metadata)
    * [.MinNativeZoom](#module_index.MinNativeZoom)
    * [.PartialInstance](#module_index.PartialInstance)
    * [.Resources](#module_index.Resources)
    * [.Time](#module_index.Time)
    * [.Times](#module_index.Times)
    * [.TilesApi](#module_index.TilesApi)

<a name="module_index.ApiClient"></a>

### index.ApiClient
The ApiClient constructor.

**Kind**: static property of <code>[index](#module_index)</code>  
**Properties**

| Type |
| --- |
| <code>[ApiClient](#module_ApiClient)</code> | 

<a name="module_index.Bounds"></a>

### index.Bounds
The Bounds model constructor.

**Kind**: static property of <code>[index](#module_index)</code>  
**Properties**

| Type |
| --- |
| <code>[model/Bounds](#module_model/Bounds)</code> | 

<a name="module_index.Error"></a>

### index.Error
The Error model constructor.

**Kind**: static property of <code>[index](#module_index)</code>  
**Properties**

| Type |
| --- |
| <code>[model/Error](#module_model/Error)</code> | 

<a name="module_index.Instance"></a>

### index.Instance
The Instance model constructor.

**Kind**: static property of <code>[index](#module_index)</code>  
**Properties**

| Type |
| --- |
| <code>[model/Instance](#module_model/Instance)</code> | 

<a name="module_index.Layer"></a>

### index.Layer
The Layer model constructor.

**Kind**: static property of <code>[index](#module_index)</code>  
**Properties**

| Type |
| --- |
| <code>[model/Layer](#module_model/Layer)</code> | 

<a name="module_index.Layers"></a>

### index.Layers
The Layers model constructor.

**Kind**: static property of <code>[index](#module_index)</code>  
**Properties**

| Type |
| --- |
| <code>[model/Layers](#module_model/Layers)</code> | 

<a name="module_index.Level"></a>

### index.Level
The Level model constructor.

**Kind**: static property of <code>[index](#module_index)</code>  
**Properties**

| Type |
| --- |
| <code>[model/Level](#module_model/Level)</code> | 

<a name="module_index.Levels"></a>

### index.Levels
The Levels model constructor.

**Kind**: static property of <code>[index](#module_index)</code>  
**Properties**

| Type |
| --- |
| <code>[model/Levels](#module_model/Levels)</code> | 

<a name="module_index.MaxNativeZoom"></a>

### index.MaxNativeZoom
The MaxNativeZoom model constructor.

**Kind**: static property of <code>[index](#module_index)</code>  
**Properties**

| Type |
| --- |
| <code>[model/MaxNativeZoom](#module_model/MaxNativeZoom)</code> | 

<a name="module_index.Metadata"></a>

### index.Metadata
The Metadata model constructor.

**Kind**: static property of <code>[index](#module_index)</code>  
**Properties**

| Type |
| --- |
| <code>[model/Metadata](#module_model/Metadata)</code> | 

<a name="module_index.MinNativeZoom"></a>

### index.MinNativeZoom
The MinNativeZoom model constructor.

**Kind**: static property of <code>[index](#module_index)</code>  
**Properties**

| Type |
| --- |
| <code>[model/MinNativeZoom](#module_model/MinNativeZoom)</code> | 

<a name="module_index.PartialInstance"></a>

### index.PartialInstance
The PartialInstance model constructor.

**Kind**: static property of <code>[index](#module_index)</code>  
**Properties**

| Type |
| --- |
| <code>[model/PartialInstance](#module_model/PartialInstance)</code> | 

<a name="module_index.Resources"></a>

### index.Resources
The Resources model constructor.

**Kind**: static property of <code>[index](#module_index)</code>  
**Properties**

| Type |
| --- |
| <code>[model/Resources](#module_model/Resources)</code> | 

<a name="module_index.Time"></a>

### index.Time
The Time model constructor.

**Kind**: static property of <code>[index](#module_index)</code>  
**Properties**

| Type |
| --- |
| <code>[model/Time](#module_model/Time)</code> | 

<a name="module_index.Times"></a>

### index.Times
The Times model constructor.

**Kind**: static property of <code>[index](#module_index)</code>  
**Properties**

| Type |
| --- |
| <code>[model/Times](#module_model/Times)</code> | 

<a name="module_index.TilesApi"></a>

### index.TilesApi
The TilesApi service constructor.

**Kind**: static property of <code>[index](#module_index)</code>  
**Properties**

| Type |
| --- |
| <code>[api/TilesApi](#module_api/TilesApi)</code> | 

<a name="module_model/Bounds"></a>

## model/Bounds
The Bounds model module.

**Version**: 1.2.0  

* [model/Bounds](#module_model/Bounds)
    * [exports](#exp_module_model/Bounds--exports) ⏏
        * [new exports()](#new_module_model/Bounds--exports_new)
        * [exports.constructFromObject(data, obj)](#module_model/Bounds--exports.constructFromObject) ⇒ <code>[exports](#exp_module_model/Bounds--exports)</code>
        * [exports~west](#module_model/Bounds--exports..west) : <code>Number</code>
        * [exports~east](#module_model/Bounds--exports..east) : <code>Number</code>
        * [exports~north](#module_model/Bounds--exports..north) : <code>Number</code>
        * [exports~south](#module_model/Bounds--exports..south) : <code>Number</code>

<a name="exp_module_model/Bounds--exports"></a>

### exports ⏏
**Kind**: Exported class  
<a name="new_module_model/Bounds--exports_new"></a>

#### new exports()
Constructs a new <code>Bounds</code>.
An object representing the layer instance&#39;s bounding box (derived from the dataset)

<a name="module_model/Bounds--exports.constructFromObject"></a>

#### exports.constructFromObject(data, obj) ⇒ <code>[exports](#exp_module_model/Bounds--exports)</code>
Constructs a <code>Bounds</code> from a plain JavaScript object, optionally creating a new instance.
Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.

**Kind**: static method of <code>[exports](#exp_module_model/Bounds--exports)</code>  
**Returns**: <code>[exports](#exp_module_model/Bounds--exports)</code> - The populated <code>Bounds</code> instance.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The plain JavaScript object bearing properties of interest. |
| obj | <code>[model/Bounds](#module_model/Bounds)</code> | Optional instance to populate. |

<a name="module_model/Bounds--exports..west"></a>

#### exports~west : <code>Number</code>
The western extent of the instance's dataset (degrees longitude)

**Kind**: inner property of <code>[exports](#exp_module_model/Bounds--exports)</code>  
<a name="module_model/Bounds--exports..east"></a>

#### exports~east : <code>Number</code>
The eastern extent of the instance's dataset (degrees longitude)

**Kind**: inner property of <code>[exports](#exp_module_model/Bounds--exports)</code>  
<a name="module_model/Bounds--exports..north"></a>

#### exports~north : <code>Number</code>
The northern extent of the instance's dataset (degrees latitude)

**Kind**: inner property of <code>[exports](#exp_module_model/Bounds--exports)</code>  
<a name="module_model/Bounds--exports..south"></a>

#### exports~south : <code>Number</code>
The southern extent of the instance's dataset (degrees longitude)

**Kind**: inner property of <code>[exports](#exp_module_model/Bounds--exports)</code>  
<a name="module_model/Error"></a>

## model/Error
The Error model module.

**Version**: 1.2.0  

* [model/Error](#module_model/Error)
    * [exports](#exp_module_model/Error--exports) ⏏
        * [new exports()](#new_module_model/Error--exports_new)
        * [exports.constructFromObject(data, obj)](#module_model/Error--exports.constructFromObject) ⇒ <code>[exports](#exp_module_model/Error--exports)</code>
        * [exports~http-code](#module_model/Error--exports..http-code) : <code>Number</code>
        * [exports~incident-number](#module_model/Error--exports..incident-number) : <code>String</code>
        * [exports~message](#module_model/Error--exports..message) : <code>String</code>

<a name="exp_module_model/Error--exports"></a>

### exports ⏏
**Kind**: Exported class  
<a name="new_module_model/Error--exports_new"></a>

#### new exports()
Constructs a new <code>Error</code>.

<a name="module_model/Error--exports.constructFromObject"></a>

#### exports.constructFromObject(data, obj) ⇒ <code>[exports](#exp_module_model/Error--exports)</code>
Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.

**Kind**: static method of <code>[exports](#exp_module_model/Error--exports)</code>  
**Returns**: <code>[exports](#exp_module_model/Error--exports)</code> - The populated <code>Error</code> instance.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The plain JavaScript object bearing properties of interest. |
| obj | <code>[model/Error](#module_model/Error)</code> | Optional instance to populate. |

<a name="module_model/Error--exports..http-code"></a>

#### exports~http-code : <code>Number</code>
HTTP status code

**Kind**: inner property of <code>[exports](#exp_module_model/Error--exports)</code>  
<a name="module_model/Error--exports..incident-number"></a>

#### exports~incident-number : <code>String</code>
Incident number that has been recorded.

**Kind**: inner property of <code>[exports](#exp_module_model/Error--exports)</code>  
<a name="module_model/Error--exports..message"></a>

#### exports~message : <code>String</code>
Explanation why the request has caused an error

**Kind**: inner property of <code>[exports](#exp_module_model/Error--exports)</code>  
<a name="module_model/Instance"></a>

## model/Instance
The Instance model module.

**Version**: 1.2.0  

* [model/Instance](#module_model/Instance)
    * [exports](#exp_module_model/Instance--exports) ⏏
        * [new exports()](#new_module_model/Instance--exports_new)
        * [exports.constructFromObject(data, obj)](#module_model/Instance--exports.constructFromObject) ⇒ <code>[exports](#exp_module_model/Instance--exports)</code>
        * [exports~instance](#module_model/Instance--exports..instance) : <code>[exports](#exp_module_model/PartialInstance--exports)</code>
        * [exports~times](#module_model/Instance--exports..times) : <code>module:model/Time--exportss</code>
        * [exports~levels](#module_model/Instance--exports..levels) : <code>module:model/Level--exportss</code>

<a name="exp_module_model/Instance--exports"></a>

### exports ⏏
**Kind**: Exported class  
<a name="new_module_model/Instance--exports_new"></a>

#### new exports()
Constructs a new <code>Instance</code>.
A named instance of a dataset, typically used to represent a forecast model cycle. Includes information on available times and vertical levels (if any).

<a name="module_model/Instance--exports.constructFromObject"></a>

#### exports.constructFromObject(data, obj) ⇒ <code>[exports](#exp_module_model/Instance--exports)</code>
Constructs a <code>Instance</code> from a plain JavaScript object, optionally creating a new instance.
Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.

**Kind**: static method of <code>[exports](#exp_module_model/Instance--exports)</code>  
**Returns**: <code>[exports](#exp_module_model/Instance--exports)</code> - The populated <code>Instance</code> instance.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The plain JavaScript object bearing properties of interest. |
| obj | <code>[model/Instance](#module_model/Instance)</code> | Optional instance to populate. |

<a name="module_model/Instance--exports..instance"></a>

#### exports~instance : <code>[exports](#exp_module_model/PartialInstance--exports)</code>
**Kind**: inner property of <code>[exports](#exp_module_model/Instance--exports)</code>  
<a name="module_model/Instance--exports..times"></a>

#### exports~times : <code>module:model/Time--exportss</code>
**Kind**: inner property of <code>[exports](#exp_module_model/Instance--exports)</code>  
<a name="module_model/Instance--exports..levels"></a>

#### exports~levels : <code>module:model/Level--exportss</code>
**Kind**: inner property of <code>[exports](#exp_module_model/Instance--exports)</code>  
<a name="module_model/Layer"></a>

## model/Layer
The Layer model module.

**Version**: 1.2.0  

* [model/Layer](#module_model/Layer)
    * [exports](#exp_module_model/Layer--exports) ⏏
        * [new exports(minNativeZoom, maxNativeZoom)](#new_module_model/Layer--exports_new)
        * [exports.constructFromObject(data, obj)](#module_model/Layer--exports.constructFromObject) ⇒ <code>[exports](#exp_module_model/Layer--exports)</code>
        * [exports~id](#module_model/Layer--exports..id) : <code>String</code>
        * [exports~instances](#module_model/Layer--exports..instances) : <code>[Array.&lt;exports&gt;](#exp_module_model/PartialInstance--exports)</code>
        * [exports~bounds](#module_model/Layer--exports..bounds) : <code>[exports](#exp_module_model/Bounds--exports)</code>
        * [exports~instanceType](#module_model/Layer--exports..instanceType) : <code>String</code>
        * [exports~instanceDescription](#module_model/Layer--exports..instanceDescription) : <code>String</code>
        * [exports~minNativeZoom](#module_model/Layer--exports..minNativeZoom) : <code>[exports](#exp_module_model/MinNativeZoom--exports)</code>
        * [exports~maxNativeZoom](#module_model/Layer--exports..maxNativeZoom) : <code>[exports](#exp_module_model/MaxNativeZoom--exports)</code>
        * [exports~meta](#module_model/Layer--exports..meta) : <code>[exports](#exp_module_model/Metadata--exports)</code>
        * [exports~resources](#module_model/Layer--exports..resources) : <code>[exports](#exp_module_model/Resources--exports)</code>

<a name="exp_module_model/Layer--exports"></a>

### exports ⏏
**Kind**: Exported class  
<a name="new_module_model/Layer--exports_new"></a>

#### new exports(minNativeZoom, maxNativeZoom)
Constructs a new <code>Layer</code>.
A layer representing a spatial dataset that can be rendered by Cloudburst


| Param | Type |
| --- | --- |
| minNativeZoom | <code>[model/MinNativeZoom](#module_model/MinNativeZoom)</code> | 
| maxNativeZoom | <code>[model/MaxNativeZoom](#module_model/MaxNativeZoom)</code> | 

<a name="module_model/Layer--exports.constructFromObject"></a>

#### exports.constructFromObject(data, obj) ⇒ <code>[exports](#exp_module_model/Layer--exports)</code>
Constructs a <code>Layer</code> from a plain JavaScript object, optionally creating a new instance.
Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.

**Kind**: static method of <code>[exports](#exp_module_model/Layer--exports)</code>  
**Returns**: <code>[exports](#exp_module_model/Layer--exports)</code> - The populated <code>Layer</code> instance.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The plain JavaScript object bearing properties of interest. |
| obj | <code>[model/Layer](#module_model/Layer)</code> | Optional instance to populate. |

<a name="module_model/Layer--exports..id"></a>

#### exports~id : <code>String</code>
Layer ID

**Kind**: inner property of <code>[exports](#exp_module_model/Layer--exports)</code>  
<a name="module_model/Layer--exports..instances"></a>

#### exports~instances : <code>[Array.&lt;exports&gt;](#exp_module_model/PartialInstance--exports)</code>
A list of the instances of this layer.

**Kind**: inner property of <code>[exports](#exp_module_model/Layer--exports)</code>  
<a name="module_model/Layer--exports..bounds"></a>

#### exports~bounds : <code>[exports](#exp_module_model/Bounds--exports)</code>
**Kind**: inner property of <code>[exports](#exp_module_model/Layer--exports)</code>  
<a name="module_model/Layer--exports..instanceType"></a>

#### exports~instanceType : <code>String</code>
One of a typology of instance types. Currently these are \"cyclic\" (for model cycles), and \"observational\" (for observational timestamps).

**Kind**: inner property of <code>[exports](#exp_module_model/Layer--exports)</code>  
<a name="module_model/Layer--exports..instanceDescription"></a>

#### exports~instanceDescription : <code>String</code>
Free-form text explaining the role of instances for the associated layer

**Kind**: inner property of <code>[exports](#exp_module_model/Layer--exports)</code>  
<a name="module_model/Layer--exports..minNativeZoom"></a>

#### exports~minNativeZoom : <code>[exports](#exp_module_model/MinNativeZoom--exports)</code>
**Kind**: inner property of <code>[exports](#exp_module_model/Layer--exports)</code>  
<a name="module_model/Layer--exports..maxNativeZoom"></a>

#### exports~maxNativeZoom : <code>[exports](#exp_module_model/MaxNativeZoom--exports)</code>
**Kind**: inner property of <code>[exports](#exp_module_model/Layer--exports)</code>  
<a name="module_model/Layer--exports..meta"></a>

#### exports~meta : <code>[exports](#exp_module_model/Metadata--exports)</code>
**Kind**: inner property of <code>[exports](#exp_module_model/Layer--exports)</code>  
<a name="module_model/Layer--exports..resources"></a>

#### exports~resources : <code>[exports](#exp_module_model/Resources--exports)</code>
**Kind**: inner property of <code>[exports](#exp_module_model/Layer--exports)</code>  
<a name="module_model/Layers"></a>

## model/Layers
The Layers model module.

**Version**: 1.2.0  
<a name="exp_module_model/Layers--exports"></a>

### exports ⇐ <code>Array</code> ⏏
**Kind**: Exported class  
**Extends:** <code>Array</code>  
<a name="module_model/Level"></a>

## model/Level
The Level model module.

**Version**: 1.2.0  

* [model/Level](#module_model/Level)
    * [exports](#exp_module_model/Level--exports) ⏏
        * [new exports()](#new_module_model/Level--exports_new)
        * [exports.constructFromObject(data, obj)](#module_model/Level--exports.constructFromObject) ⇒ <code>[exports](#exp_module_model/Level--exports)</code>

<a name="exp_module_model/Level--exports"></a>

### exports ⏏
**Kind**: Exported class  
<a name="new_module_model/Level--exports_new"></a>

#### new exports()
Constructs a new <code>Level</code>.
A potential value of a vertical dimension of an instance. Values in this array is used to substitute {level} in a tile URL.

<a name="module_model/Level--exports.constructFromObject"></a>

#### exports.constructFromObject(data, obj) ⇒ <code>[exports](#exp_module_model/Level--exports)</code>
Constructs a <code>Level</code> from a plain JavaScript object, optionally creating a new instance.
Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.

**Kind**: static method of <code>[exports](#exp_module_model/Level--exports)</code>  
**Returns**: <code>[exports](#exp_module_model/Level--exports)</code> - The populated <code>Level</code> instance.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The plain JavaScript object bearing properties of interest. |
| obj | <code>[model/Level](#module_model/Level)</code> | Optional instance to populate. |

<a name="module_model/Levels"></a>

## model/Levels
The Levels model module.

**Version**: 1.2.0  
<a name="exp_module_model/Levels--exports"></a>

### exports ⇐ <code>Array</code> ⏏
**Kind**: Exported class  
**Extends:** <code>Array</code>  
<a name="module_model/MaxNativeZoom"></a>

## model/MaxNativeZoom
The MaxNativeZoom model module.

**Version**: 1.2.0  

* [model/MaxNativeZoom](#module_model/MaxNativeZoom)
    * [exports](#exp_module_model/MaxNativeZoom--exports) ⏏
        * [new exports()](#new_module_model/MaxNativeZoom--exports_new)
        * [exports.constructFromObject(data, obj)](#module_model/MaxNativeZoom--exports.constructFromObject) ⇒ <code>[exports](#exp_module_model/MaxNativeZoom--exports)</code>

<a name="exp_module_model/MaxNativeZoom--exports"></a>

### exports ⏏
**Kind**: Exported class  
<a name="new_module_model/MaxNativeZoom--exports_new"></a>

#### new exports()
Constructs a new <code>MaxNativeZoom</code>.
The largest scale supported natively by the layer.

<a name="module_model/MaxNativeZoom--exports.constructFromObject"></a>

#### exports.constructFromObject(data, obj) ⇒ <code>[exports](#exp_module_model/MaxNativeZoom--exports)</code>
Constructs a <code>MaxNativeZoom</code> from a plain JavaScript object, optionally creating a new instance.
Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.

**Kind**: static method of <code>[exports](#exp_module_model/MaxNativeZoom--exports)</code>  
**Returns**: <code>[exports](#exp_module_model/MaxNativeZoom--exports)</code> - The populated <code>MaxNativeZoom</code> instance.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The plain JavaScript object bearing properties of interest. |
| obj | <code>[model/MaxNativeZoom](#module_model/MaxNativeZoom)</code> | Optional instance to populate. |

<a name="module_model/Metadata"></a>

## model/Metadata
The Metadata model module.

**Version**: 1.2.0  

* [model/Metadata](#module_model/Metadata)
    * [exports](#exp_module_model/Metadata--exports) ⏏
        * [new exports()](#new_module_model/Metadata--exports_new)
        * [exports.constructFromObject(data, obj)](#module_model/Metadata--exports.constructFromObject) ⇒ <code>[exports](#exp_module_model/Metadata--exports)</code>
        * [exports~name](#module_model/Metadata--exports..name) : <code>String</code>
        * [exports~description](#module_model/Metadata--exports..description) : <code>String</code>
        * [exports~organisation](#module_model/Metadata--exports..organisation) : <code>String</code>
        * [exports~source](#module_model/Metadata--exports..source) : <code>String</code>
        * [exports~regions](#module_model/Metadata--exports..regions) : <code>Array.&lt;String&gt;</code>
        * [exports~unit_system](#module_model/Metadata--exports..unit_system) : <code>String</code>

<a name="exp_module_model/Metadata--exports"></a>

### exports ⏏
**Kind**: Exported class  
<a name="new_module_model/Metadata--exports_new"></a>

#### new exports()
Constructs a new <code>Metadata</code>.
Metadata for a layer. Cloudburst supports an arbitrary metadata document, but these specified keys are useful and will tend to exist, but none of them is mandatory, and a property may exist but have a null value.

<a name="module_model/Metadata--exports.constructFromObject"></a>

#### exports.constructFromObject(data, obj) ⇒ <code>[exports](#exp_module_model/Metadata--exports)</code>
Constructs a <code>Metadata</code> from a plain JavaScript object, optionally creating a new instance.
Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.

**Kind**: static method of <code>[exports](#exp_module_model/Metadata--exports)</code>  
**Returns**: <code>[exports](#exp_module_model/Metadata--exports)</code> - The populated <code>Metadata</code> instance.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The plain JavaScript object bearing properties of interest. |
| obj | <code>[model/Metadata](#module_model/Metadata)</code> | Optional instance to populate. |

<a name="module_model/Metadata--exports..name"></a>

#### exports~name : <code>String</code>
A short, human-readable description of a layer that is suitable for inclusion in a list of available layers.

**Kind**: inner property of <code>[exports](#exp_module_model/Metadata--exports)</code>  
<a name="module_model/Metadata--exports..description"></a>

#### exports~description : <code>String</code>
A long description of a layer, possibly including HTML tags to navigate users to glossaries or other sources of additional information.

**Kind**: inner property of <code>[exports](#exp_module_model/Metadata--exports)</code>  
<a name="module_model/Metadata--exports..organisation"></a>

#### exports~organisation : <code>String</code>
Organisation responsible for publishing the data used in the layer.

**Kind**: inner property of <code>[exports](#exp_module_model/Metadata--exports)</code>  
<a name="module_model/Metadata--exports..source"></a>

#### exports~source : <code>String</code>
The source of the data (such as a model).

**Kind**: inner property of <code>[exports](#exp_module_model/Metadata--exports)</code>  
<a name="module_model/Metadata--exports..regions"></a>

#### exports~regions : <code>Array.&lt;String&gt;</code>
**Kind**: inner property of <code>[exports](#exp_module_model/Metadata--exports)</code>  
<a name="module_model/Metadata--exports..unit_system"></a>

#### exports~unit_system : <code>String</code>
The system of units that the layer renders quantitative values in. Examples include \"metric\" and \"uscs\", for layers that render with metric and United States customary system (USCS) units, respectively. A null value indicates that the unit system is unspecified or does not fit into a category (e.g. knots). This does not indicate exactly which units a plot will render, only a broad classification. This can be used to filter duplicate layers that only differ in whether they render the same physical phenomenon as, for example, millimetres or inches. There is no restriction on what value this string may take.

**Kind**: inner property of <code>[exports](#exp_module_model/Metadata--exports)</code>  
<a name="module_model/MinNativeZoom"></a>

## model/MinNativeZoom
The MinNativeZoom model module.

**Version**: 1.2.0  

* [model/MinNativeZoom](#module_model/MinNativeZoom)
    * [exports](#exp_module_model/MinNativeZoom--exports) ⏏
        * [new exports()](#new_module_model/MinNativeZoom--exports_new)
        * [exports.constructFromObject(data, obj)](#module_model/MinNativeZoom--exports.constructFromObject) ⇒ <code>[exports](#exp_module_model/MinNativeZoom--exports)</code>

<a name="exp_module_model/MinNativeZoom--exports"></a>

### exports ⏏
**Kind**: Exported class  
<a name="new_module_model/MinNativeZoom--exports_new"></a>

#### new exports()
Constructs a new <code>MinNativeZoom</code>.
The smallest scale supported natively by the layer.

<a name="module_model/MinNativeZoom--exports.constructFromObject"></a>

#### exports.constructFromObject(data, obj) ⇒ <code>[exports](#exp_module_model/MinNativeZoom--exports)</code>
Constructs a <code>MinNativeZoom</code> from a plain JavaScript object, optionally creating a new instance.
Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.

**Kind**: static method of <code>[exports](#exp_module_model/MinNativeZoom--exports)</code>  
**Returns**: <code>[exports](#exp_module_model/MinNativeZoom--exports)</code> - The populated <code>MinNativeZoom</code> instance.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The plain JavaScript object bearing properties of interest. |
| obj | <code>[model/MinNativeZoom](#module_model/MinNativeZoom)</code> | Optional instance to populate. |

<a name="module_model/PartialInstance"></a>

## model/PartialInstance
The PartialInstance model module.

**Version**: 1.2.0  

* [model/PartialInstance](#module_model/PartialInstance)
    * [exports](#exp_module_model/PartialInstance--exports) ⏏
        * [new exports()](#new_module_model/PartialInstance--exports_new)
        * [exports.constructFromObject(data, obj)](#module_model/PartialInstance--exports.constructFromObject) ⇒ <code>[exports](#exp_module_model/PartialInstance--exports)</code>
        * [exports~id](#module_model/PartialInstance--exports..id) : <code>String</code>
        * [exports~displayName](#module_model/PartialInstance--exports..displayName) : <code>String</code>
        * [exports~created](#module_model/PartialInstance--exports..created) : <code>Date</code>
        * [exports~start](#module_model/PartialInstance--exports..start) : <code>Date</code>
        * [exports~end](#module_model/PartialInstance--exports..end) : <code>Date</code>

<a name="exp_module_model/PartialInstance--exports"></a>

### exports ⏏
**Kind**: Exported class  
<a name="new_module_model/PartialInstance--exports_new"></a>

#### new exports()
Constructs a new <code>PartialInstance</code>.
A named instance of a dataset, typically used to represent a forecast model cycle.

<a name="module_model/PartialInstance--exports.constructFromObject"></a>

#### exports.constructFromObject(data, obj) ⇒ <code>[exports](#exp_module_model/PartialInstance--exports)</code>
Constructs a <code>PartialInstance</code> from a plain JavaScript object, optionally creating a new instance.
Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.

**Kind**: static method of <code>[exports](#exp_module_model/PartialInstance--exports)</code>  
**Returns**: <code>[exports](#exp_module_model/PartialInstance--exports)</code> - The populated <code>PartialInstance</code> instance.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The plain JavaScript object bearing properties of interest. |
| obj | <code>[model/PartialInstance](#module_model/PartialInstance)</code> | Optional instance to populate. |

<a name="module_model/PartialInstance--exports..id"></a>

#### exports~id : <code>String</code>
Instance ID

**Kind**: inner property of <code>[exports](#exp_module_model/PartialInstance--exports)</code>  
<a name="module_model/PartialInstance--exports..displayName"></a>

#### exports~displayName : <code>String</code>
Instance name, intended for display to end users

**Kind**: inner property of <code>[exports](#exp_module_model/PartialInstance--exports)</code>  
<a name="module_model/PartialInstance--exports..created"></a>

#### exports~created : <code>Date</code>
ISO 8601 datetime string representing when the instance configuration was created

**Kind**: inner property of <code>[exports](#exp_module_model/PartialInstance--exports)</code>  
<a name="module_model/PartialInstance--exports..start"></a>

#### exports~start : <code>Date</code>
ISO 8601 datetime string representing the earliest retrievable time-step for an instance

**Kind**: inner property of <code>[exports](#exp_module_model/PartialInstance--exports)</code>  
<a name="module_model/PartialInstance--exports..end"></a>

#### exports~end : <code>Date</code>
ISO 8601 datetime string representing the latest retrievable time-step for an instance

**Kind**: inner property of <code>[exports](#exp_module_model/PartialInstance--exports)</code>  
<a name="module_model/Resources"></a>

## model/Resources
The Resources model module.

**Version**: 1.2.0  

* [model/Resources](#module_model/Resources)
    * [exports](#exp_module_model/Resources--exports) ⏏
        * [new exports()](#new_module_model/Resources--exports_new)
        * [exports.constructFromObject(data, obj)](#module_model/Resources--exports.constructFromObject) ⇒ <code>[exports](#exp_module_model/Resources--exports)</code>
        * [exports~tile](#module_model/Resources--exports..tile) : <code>String</code>
        * [exports~vtile](#module_model/Resources--exports..vtile) : <code>String</code>
        * [exports~gtile](#module_model/Resources--exports..gtile) : <code>String</code>
        * [exports~rtile](#module_model/Resources--exports..rtile) : <code>String</code>
        * [exports~legend](#module_model/Resources--exports..legend) : <code>String</code>
        * [exports~jsonlegend](#module_model/Resources--exports..jsonlegend) : <code>String</code>

<a name="exp_module_model/Resources--exports"></a>

### exports ⏏
**Kind**: Exported class  
<a name="new_module_model/Resources--exports_new"></a>

#### new exports()
Constructs a new <code>Resources</code>.
Template URLs for requesting tiles and other resources for this layer instance. Note that the tile coordinates (z, x, and y) must be given in OGC TMS, rather than the XYZ specification (see https://gist.github.com/tmcw/4954720 for the difference, which only affects the y coordinate). Not all given properties exist for all layers. The literal text \&quot;instance\&quot; (enclosed in angle brackets) must be substituted by a valid instance ID.

<a name="module_model/Resources--exports.constructFromObject"></a>

#### exports.constructFromObject(data, obj) ⇒ <code>[exports](#exp_module_model/Resources--exports)</code>
Constructs a <code>Resources</code> from a plain JavaScript object, optionally creating a new instance.
Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.

**Kind**: static method of <code>[exports](#exp_module_model/Resources--exports)</code>  
**Returns**: <code>[exports](#exp_module_model/Resources--exports)</code> - The populated <code>Resources</code> instance.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The plain JavaScript object bearing properties of interest. |
| obj | <code>[model/Resources](#module_model/Resources)</code> | Optional instance to populate. |

<a name="module_model/Resources--exports..tile"></a>

#### exports~tile : <code>String</code>
Template URL for requesting styled, PNG image tiles. Elements of the path enclosed in angle brackets need to be appropriately substituted when making requests.

**Kind**: inner property of <code>[exports](#exp_module_model/Resources--exports)</code>  
<a name="module_model/Resources--exports..vtile"></a>

#### exports~vtile : <code>String</code>
Template URL for requesting vector tiles in the Mapbox vector tile (MVT) specification, as protocol buffers. Elements of the path enclosed in angle brackets need to be appropriately substituted when making requests.

**Kind**: inner property of <code>[exports](#exp_module_model/Resources--exports)</code>  
<a name="module_model/Resources--exports..gtile"></a>

#### exports~gtile : <code>String</code>
Template URL for requesting UTFGrid tiles in the Mapbox UTFGrid specification, as JSON (a format for rasterised interaction data). Elements of the path enclosed in angle brackets need to be appropriately substituted when making requests.

**Kind**: inner property of <code>[exports](#exp_module_model/Resources--exports)</code>  
<a name="module_model/Resources--exports..rtile"></a>

#### exports~rtile : <code>String</code>
Template URL for requesting raw data tiles. Elements of the path enclosed in angle brackets need to be appropriately substituted when making requests.

**Kind**: inner property of <code>[exports](#exp_module_model/Resources--exports)</code>  
<a name="module_model/Resources--exports..legend"></a>

#### exports~legend : <code>String</code>
URL for requesting legends as PNG images that correspond to the PNG image tiles. The \"size\" and \"orientation\" elements in the path (enclosed in angle brackets) need to be substituted. Valid values for size are \"small\" and \"large\". Valid values for orientation are \"horizontal\" and \"vertical\".

**Kind**: inner property of <code>[exports](#exp_module_model/Resources--exports)</code>  
<a name="module_model/Resources--exports..jsonlegend"></a>

#### exports~jsonlegend : <code>String</code>
URL for requesting legends as JSON representations. These JSON representations are used internally to construct the image versions of the legend, and can be used to render custom legends client-side. The \"size\" and \"orientation\" elements in the path (enclosed in angle brackets) need to be substituted.

**Kind**: inner property of <code>[exports](#exp_module_model/Resources--exports)</code>  
<a name="module_model/Time"></a>

## model/Time
The Time model module.

**Version**: 1.2.0  

* [model/Time](#module_model/Time)
    * [exports](#exp_module_model/Time--exports) ⏏
        * [new exports()](#new_module_model/Time--exports_new)
        * [exports.constructFromObject(data, obj)](#module_model/Time--exports.constructFromObject) ⇒ <code>[exports](#exp_module_model/Time--exports)</code>

<a name="exp_module_model/Time--exports"></a>

### exports ⏏
**Kind**: Exported class  
<a name="new_module_model/Time--exports_new"></a>

#### new exports()
Constructs a new <code>Time</code>.
ISO 8601 string representing a datetime, a possible value of the temporal dimension of an instance. Values in this array is used to ubstitute \&quot;time\&quot; in a tile URL.

<a name="module_model/Time--exports.constructFromObject"></a>

#### exports.constructFromObject(data, obj) ⇒ <code>[exports](#exp_module_model/Time--exports)</code>
Constructs a <code>Time</code> from a plain JavaScript object, optionally creating a new instance.
Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.

**Kind**: static method of <code>[exports](#exp_module_model/Time--exports)</code>  
**Returns**: <code>[exports](#exp_module_model/Time--exports)</code> - The populated <code>Time</code> instance.  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | The plain JavaScript object bearing properties of interest. |
| obj | <code>[model/Time](#module_model/Time)</code> | Optional instance to populate. |

<a name="module_model/Times"></a>

## model/Times
The Times model module.

**Version**: 1.2.0  
<a name="exp_module_model/Times--exports"></a>

### exports ⇐ <code>Array</code> ⏏
**Kind**: Exported class  
**Extends:** <code>Array</code>  
<a name="module_wxTiles"></a>

## wxTiles
Tiles service.

**Version**: 1.2.0  
**Copyright**: MetOcean Solutions Ltd. 2016  

* [wxTiles](#module_wxTiles)
    * [.getLayers(ownerId, opts, callback)](#module_wxTiles+getLayers)
    * [.getLayer(ownerId, layerId, callback)](#module_wxTiles+getLayer)
    * [.getInstance(ownerId, layerId, instanceId, callback)](#module_wxTiles+getInstance)
    * [.getTimes(ownerId, layerId, instanceId, callback)](#module_wxTiles+getTimes)
    * [.getLevels(ownerId, layerId, instanceId, callback)](#module_wxTiles+getLevels)
    * [.getPNGLegend(ownerId, layerId, instanceId, size, orientation, callback)](#module_wxTiles+getPNGLegend)
    * [.getTile(ownerId, layerId, instanceId, time, level, z, x, y2, extension, callback)](#module_wxTiles+getTile)
    * [.getPNGTileURL(ownerId, layerId, instanceId, time, level, callback)](#module_wxTiles.getPNGTileURL)

<a name="module_wxTiles+getLayers"></a>

### wxTiles.getLayers(ownerId, opts, callback)
Information about available Cloudburst layers
This endpoint returns information about all current *Cloudburst* layers that can be requested, and metadata about map layers, including bounding boxes and the unit system (metric, USCS, etc.) that is used when rendering map tiles.

**Kind**: instance method of <code>[wxTiles](#module_wxTiles)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ownerId | <code>String</code> | The owner of the dataset. |
| opts | <code>Object</code> | Optional parameters |
| opts.tags | <code>String</code> | Filter layers by tags, separated by commas. Using multiple &#x60;tags&#x60; parameters is equivalent to an &#x60;AND&#x60; operation. For example, &#x60;tags&#x3D;x,y&#x60; is &#x60;x OR y&#x60;; &#x60;tags&#x3D;x&amp;tags&#x3D;y&#x60; is &#x60;x AND y&#x60;; and &#x60;tags&#x3D;x,y&amp;tags&#x3D;z&#x60; is &#x60;(x OR y) AND z&#x60; |
| callback | <code>[getLayersCallback](#module_api/TilesApi--exports..getLayersCallback)</code> | The callback function, accepting three arguments: error, data, response data is of type: [model/Layers](#module_model/Layers) |

<a name="module_wxTiles+getLayer"></a>

### wxTiles.getLayer(ownerId, layerId, callback)
Information about a specific layer
This endpoint provides information about a specific *Cloudburst* layer that can be requested as map tiles, and its metadata, including bounding boxes and the unit system (metric, USCS, etc.) that is used when rendering map tiles.

**Kind**: instance method of <code>[wxTiles](#module_wxTiles)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ownerId | <code>String</code> | The owner of the dataset. |
| layerId | <code>String</code> | The id of the layer. |
| callback | <code>[getLayerCallback](#module_api/TilesApi--exports..getLayerCallback)</code> | The callback function, accepting three arguments: error, data, response data is of type: [model/Layer](#module_model/Layer) |

<a name="module_wxTiles+getInstance"></a>

### wxTiles.getInstance(ownerId, layerId, instanceId, callback)
Information about a particular (potentially non-persistant) instance of a layer
This endpoint provides information about an instance of a specific *Cloudburst* layer that can be requested as map tiles. Instances are typically added and removed as the data underlying a dataset changes with time (e.g. forecasts expire, and forecast horizons continuously move forward). Therefore a particular instance of a layer may not be persistant.

**Kind**: instance method of <code>[wxTiles](#module_wxTiles)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ownerId | <code>String</code> | The owner of the dataset. |
| layerId | <code>String</code> | The id of the layer. |
| instanceId | <code>String</code> | The id of the instance. |
| callback | <code>[getInstanceCallback](#module_api/TilesApi--exports..getInstanceCallback)</code> | The callback function, accepting three arguments: error, data, response data is of type: [model/Instance](#module_model/Instance) |

<a name="module_wxTiles+getTimes"></a>

### wxTiles.getTimes(ownerId, layerId, instanceId, callback)
A collection of moments in time for which data exists and can be requested (as tiles) for an instance of a layer.
This endpoint exposes the array of moments that data exists for a particular instance. Each element can be used to substitute the &lt;time&gt; part of a tile URL. Not all layer instances have a temporal dimension (e.g. it may be static bathymetry, or an observational dataset with no forecast or hindcast). If a layer has no temporal dimension, the array will be empty. The times in the array may not be unique (this is almost always due to grouped datasets containing overlapping time steps).

**Kind**: instance method of <code>[wxTiles](#module_wxTiles)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ownerId | <code>String</code> | The owner of the dataset. |
| layerId | <code>String</code> | The id of the layer. |
| instanceId | <code>String</code> | The id of the instance. |
| callback | <code>[getTimesCallback](#module_api/TilesApi--exports..getTimesCallback)</code> | The callback function, accepting three arguments: error, data, response data is of type: [model/Times](#module_model/Times) |

<a name="module_wxTiles+getLevels"></a>

### wxTiles.getLevels(ownerId, layerId, instanceId, callback)
A collection of vertical levels for which data exists and can be requested (as tiles) for an instance of a layer.
This endpoint exposes the array of vertical positions that data exists for a particular instance. Each element can be used to substitute the {level} part of a tile URL. Not all layer instances have a vertical (e.g. it may be surface wave height and therefore only apply at sea level). If a layer has no vertical dimension, the array will be empty.

**Kind**: instance method of <code>[wxTiles](#module_wxTiles)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ownerId | <code>String</code> | The owner of the dataset. |
| layerId | <code>String</code> | The id of the layer. |
| instanceId | <code>String</code> | The id of the instance. |
| callback | <code>[getLevelsCallback](#module_api/TilesApi--exports..getLevelsCallback)</code> | The callback function, accepting three arguments: error, data, response data is of type: [model/Levels](#module_model/Levels) |

<a name="module_wxTiles+getPNGLegend"></a>

### wxTiles.getPNGLegend(ownerId, layerId, instanceId, size, orientation, callback)
A legend for PNG map tiles
Legends are inferred from plot configurations for each layer. When a legend is disabled on a per-layer basis (or if a legend cannot be rendered due to the plot type), then this endpoint will return a 204 No Content response. The size must be substituted by either &#x60;small&#x60; or &#x60;large&#x60;. The orientation must be substituted by either &#x60;horizontal&#x60; or &#x60;vertical&#x60;.

**Kind**: instance method of <code>[wxTiles](#module_wxTiles)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ownerId | <code>String</code> | The owner of the dataset. |
| layerId | <code>String</code> | The id of the layer. |
| instanceId | <code>String</code> | The id of the instance. |
| size | <code>module:model/String</code> | The size. |
| orientation | <code>module:model/String</code> | The orientation. |
| callback | <code>[getPNGLegendCallback](#module_api/TilesApi--exports..getPNGLegendCallback)</code> | The callback function, accepting three arguments: error, data, response |

<a name="module_wxTiles+getTile"></a>

### wxTiles.getTile(ownerId, layerId, instanceId, time, level, z, x, y2, extension, callback)
A tiled map image, for use by map clients capable of consuming PNG map images in OGC TMS coordinate notation.
Cloudburst produces map tiles, and PNG map tiles are the traditional format for representing these. Other possibilities include protocol-buffer vector tiles in the Mapbox vector tile specification, and others. This endpoint will most often be used by map clients (such as Leaflet, Mapbox GL JS, OpenLayers, and Google Maps), which know exactly which tiles to request for a given geographical map view and zoom level. **The Cloudburst Javascript API is responsible for completing the resource URI via these client libraries, based on what a user is authenticated to request, and what these layers support, via requests to other endpoints. Manual requests are possible but are not recommended.** The resources for a particular layer can be discovered through a &#x60;GET&#x60; request to &#x60;/layer/&lt;layerId&gt;/&#x60; and inspecting the response&#39;s &#x60;resources&#x60; property. The &#x60;/layer/&lt;layerId&gt;/&lt;instanceID&gt;/times/&#x60; endpoints can be used to request the times that are valid (many layer instances have only one time and/or vertical level).

**Kind**: instance method of <code>[wxTiles](#module_wxTiles)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ownerId | <code>String</code> | The owner of the dataset. |
| layerId | <code>String</code> | The id of the layer. |
| instanceId | <code>String</code> | The id of the instance. |
| time | <code>Date</code> | The time. |
| level | <code>String</code> | The level. |
| z | <code>Integer</code> | The z. |
| x | <code>Integer</code> | The x. |
| y2 | <code>Integer</code> | The y. |
| extension | <code>module:model/String</code> | The extension. |
| callback | <code>[getTileCallback](#module_api/TilesApi--exports..getTileCallback)</code> | The callback function, accepting three arguments: error, data, response data is of type: [File](File) |

<a name="module_wxTiles.getPNGTileURL"></a>

### wxTiles.getPNGTileURL(ownerId, layerId, instanceId, time, level, callback)
A PNG tile URL to pass to map librariesThis endpoint provides a tile url template to pass to map libraries like leaflet.

**Kind**: static method of <code>[wxTiles](#module_wxTiles)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ownerId | <code>String</code> | The owner of the dataset. |
| layerId | <code>String</code> | The id of the layer. |
| instanceId | <code>String</code> | The id of the instance. |
| time | <code>Date</code> | The time. |
| level | <code>String</code> | The level. |
| callback | <code>[getPNGTileURLCallback](#module_wrapper..getPNGTileURLCallback)</code> | The callback function, accepting three arguments: error, data, response |

