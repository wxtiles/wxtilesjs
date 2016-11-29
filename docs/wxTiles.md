## wxTiles
Tiles service.

**Version**: 1.2.0  
**Copyright**: MetOcean Solutions Ltd. 2016  

* [wxTiles](#module_wxTiles)
    * [.getLayers(ownerId, callback)](#module_wxTiles+getLayers)
    * [.getLayer(ownerId, layerId, callback)](#module_wxTiles+getLayer)
    * [.getInstance(ownerId, layerId, instanceId, callback)](#module_wxTiles+getInstance)
    * [.getTimes(ownerId, layerId, instanceId, callback)](#module_wxTiles+getTimes)
    * [.getLevels(ownerId, layerId, instanceId, callback)](#module_wxTiles+getLevels)
    * [.getPNGLegend(ownerId, layerId, instanceId, size, orientation, callback)](#module_wxTiles+getPNGLegend)
    * [.getTile(ownerId, layerId, instanceId, time, level, z, x, y, extension, callback)](#module_wxTiles+getTile)
    * [.getPNGTileURL(ownerId, layerId, instanceId, time, level, callback)](#module_wxTiles.getPNGTileURL)

<a name="module_wxTiles+getLayers"></a>

### wxTiles.getLayers(ownerId, callback)
Information about available WXTiles layers
This endpoint returns information about all current *WXTiles* layers that can be requested, and metadata about map layers, including bounding boxes and the unit system (metric, USCS, etc.) that is used when rendering map tiles.

**Kind**: instance method of <code>[wxTiles](#module_wxTiles)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ownerId | <code>String</code> | The owner of the dataset. |
| callback | <code>[getLayersCallback](#module_api/TilesApi--exports..getLayersCallback)</code> | The callback function, accepting three arguments: error, data, response data is of type: [model/Layers](#module_model/Layers) |

<a name="module_wxTiles+getLayer"></a>

### wxTiles.getLayer(ownerId, layerId, callback)
Information about a specific layer
This endpoint provides information about a specific *WXTiles* layer that can be requested as map tiles, and its metadata, including bounding boxes and the unit system (metric, USCS, etc.) that is used when rendering map tiles.

**Kind**: instance method of <code>[wxTiles](#module_wxTiles)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ownerId | <code>String</code> | The owner of the dataset. |
| layerId | <code>String</code> | The id of the layer. |
| callback | <code>[getLayerCallback](#module_api/TilesApi--exports..getLayerCallback)</code> | The callback function, accepting three arguments: error, data, response data is of type: [model/Layer](#module_model/Layer) |

<a name="module_wxTiles+getInstance"></a>

### wxTiles.getInstance(ownerId, layerId, instanceId, callback)
Information about a particular (potentially non-persistant) instance of a layer
This endpoint provides information about an instance of a specific *WXTiles* layer that can be requested as map tiles. Instances are typically added and removed as the data underlying a dataset changes with time (e.g. forecasts expire, and forecast horizons continuously move forward). Therefore a particular instance of a layer may not be persistant.

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
| callback | <code>[getPNGLegendCallback](#module_api/LegendsApi--exports..getPNGLegendCallback)</code> | The callback function, accepting three arguments: error, data, response |

<a name="module_wxTiles+getTile"></a>

### wxTiles.getTile(ownerId, layerId, instanceId, time, level, z, x, y, extension, callback)
A tiled map image, for use by map clients capable of consuming PNG map images in OGC TMS coordinate notation.
WXTiles produces map tiles, and PNG map tiles are the traditional format for representing these. Other possibilities include protocol-buffer vector tiles in the Mapbox vector tile specification, and others. This endpoint will most often be used by map clients (such as Leaflet, Mapbox GL JS, OpenLayers, and Google Maps), which know exactly which tiles to request for a given geographical map view and zoom level. **The WXTiles Javascript API is responsible for completing the resource URI via these client libraries, based on what a user is authenticated to request, and what these layers support, via requests to other endpoints. Manual requests are possible but are not recommended.** The resources for a particular layer can be discovered through a &#x60;GET&#x60; request to &#x60;/layer/&lt;layerId&gt;/&#x60; and inspecting the response&#39;s &#x60;resources&#x60; property. The &#x60;/layer/&lt;layerId&gt;/&lt;instanceID&gt;/times/&#x60; endpoints can be used to request the times that are valid (many layer instances have only one time and/or vertical level).

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
| y | <code>Integer</code> | The y. |
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

