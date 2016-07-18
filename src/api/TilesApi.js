(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Instance', 'model/Error', 'model/Legend', 'model/Layer', 'model/Layers', 'model/Levels', 'model/Times'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Instance'), require('../model/Error'), require('../model/Legend'), require('../model/Layer'), require('../model/Layers'), require('../model/Levels'), require('../model/Times'));
  } else {
    // Browser globals (root is window)
    if (!root.WxTiles) {
      root.WxTiles = {};
    }
    root.WxTiles.TilesApi = factory(root.WxTiles.ApiClient, root.WxTiles.Instance, root.WxTiles.Error, root.WxTiles.Legend, root.WxTiles.Layer, root.WxTiles.Layers, root.WxTiles.Levels, root.WxTiles.Times);
  }
}(this, function(ApiClient, Instance, Error, Legend, Layer, Layers, Levels, Times) {
  'use strict';

  /**
   * Tiles service.
   * @module api/TilesApi
   * @version 1.2.0
   */

  /**
   * Constructs a new TilesApi. 
   * @alias module:api/TilesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getInstance operation.
     * @callback module:api/TilesApi~getInstanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Instance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Information about a particular (potentially non-persistant) instance of a layer
     * This endpoint provides information about an instance of a specific *Cloudburst* layer that can be requested as map tiles. Instances are typically added and removed as the data underlying a dataset changes with time (e.g. forecasts expire, and forecast horizons continuously move forward). Therefore a particular instance of a layer may not be persistant.
     * @param {String} ownerId The owner of the dataset.
     * @param {String} layerId The id of the layer.
     * @param {String} instanceId The id of the instance.
     * @param {module:api/TilesApi~getInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Instance}
     */
    this.getInstance = function(ownerId, layerId, instanceId, callback) {
      var postBody = null;

      // verify the required parameter 'ownerId' is set
      if (ownerId == undefined || ownerId == null) {
        throw "Missing the required parameter 'ownerId' when calling getInstance";
      }

      // verify the required parameter 'layerId' is set
      if (layerId == undefined || layerId == null) {
        throw "Missing the required parameter 'layerId' when calling getInstance";
      }

      // verify the required parameter 'instanceId' is set
      if (instanceId == undefined || instanceId == null) {
        throw "Missing the required parameter 'instanceId' when calling getInstance";
      }


      var pathParams = {
        'ownerId': ownerId,
        'layerId': layerId,
        'instanceId': instanceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Instance;

      return this.apiClient.callApi(
        '/{ownerId}/layer/{layerId}/instance/{instanceId}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getJSONLegend operation.
     * @callback module:api/TilesApi~getJSONLegendCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Legend} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * A JSON representation of the legend for PNG map tiles
     * Legends are inferred from plot configurations for each layer. When a legend is disabled on a per-layer basis (or if a legend cannot be rendered due to the plot type), then this endpoint will return a 204 No Content response. Cloudburst internally uses this JSON representation to render the PNG version of the legend, and this endpoint is exposed to support client-side legend rendering and the interaction that implies. The size must be substituted by either &#x60;small&#x60; or &#x60;large&#x60;. The orientation must be substituted by either &#x60;horizontal&#x60; or &#x60;vertical&#x60;.
     * @param {String} ownerId The owner of the dataset.
     * @param {String} layerId The id of the layer.
     * @param {String} instanceId The id of the instance.
     * @param {module:model/String} size The size.
     * @param {module:model/String} orientation The orientation.
     * @param {module:api/TilesApi~getJSONLegendCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Legend}
     */
    this.getJSONLegend = function(ownerId, layerId, instanceId, size, orientation, callback) {
      var postBody = null;

      // verify the required parameter 'ownerId' is set
      if (ownerId == undefined || ownerId == null) {
        throw "Missing the required parameter 'ownerId' when calling getJSONLegend";
      }

      // verify the required parameter 'layerId' is set
      if (layerId == undefined || layerId == null) {
        throw "Missing the required parameter 'layerId' when calling getJSONLegend";
      }

      // verify the required parameter 'instanceId' is set
      if (instanceId == undefined || instanceId == null) {
        throw "Missing the required parameter 'instanceId' when calling getJSONLegend";
      }

      // verify the required parameter 'size' is set
      if (size == undefined || size == null) {
        throw "Missing the required parameter 'size' when calling getJSONLegend";
      }

      // verify the required parameter 'orientation' is set
      if (orientation == undefined || orientation == null) {
        throw "Missing the required parameter 'orientation' when calling getJSONLegend";
      }


      var pathParams = {
        'ownerId': ownerId,
        'layerId': layerId,
        'instanceId': instanceId,
        'size': size,
        'orientation': orientation
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Legend;

      return this.apiClient.callApi(
        '/{ownerId}/legend/{layerId}/{instanceId}/{size}/{orientation}.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLayer operation.
     * @callback module:api/TilesApi~getLayerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Layer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Information about a specific layer
     * This endpoint provides information about a specific *Cloudburst* layer that can be requested as map tiles, and its metadata, including bounding boxes and the unit system (metric, USCS, etc.) that is used when rendering map tiles.
     * @param {String} ownerId The owner of the dataset.
     * @param {String} layerId The id of the layer.
     * @param {module:api/TilesApi~getLayerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Layer}
     */
    this.getLayer = function(ownerId, layerId, callback) {
      var postBody = null;

      // verify the required parameter 'ownerId' is set
      if (ownerId == undefined || ownerId == null) {
        throw "Missing the required parameter 'ownerId' when calling getLayer";
      }

      // verify the required parameter 'layerId' is set
      if (layerId == undefined || layerId == null) {
        throw "Missing the required parameter 'layerId' when calling getLayer";
      }


      var pathParams = {
        'ownerId': ownerId,
        'layerId': layerId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Layer;

      return this.apiClient.callApi(
        '/{ownerId}/layer/{layerId}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLayers operation.
     * @callback module:api/TilesApi~getLayersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Layers} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Information about available Cloudburst layers
     * This endpoint returns information about all current *Cloudburst* layers that can be requested, and metadata about map layers, including bounding boxes and the unit system (metric, USCS, etc.) that is used when rendering map tiles.
     * @param {String} ownerId The owner of the dataset.
     * @param {Object} opts Optional parameters
     * @param {String} opts.tags Filter layers by tags, separated by commas. Using multiple &#x60;tags&#x60; parameters is equivalent to an &#x60;AND&#x60; operation. For example, &#x60;tags&#x3D;x,y&#x60; is &#x60;x OR y&#x60;; &#x60;tags&#x3D;x&amp;tags&#x3D;y&#x60; is &#x60;x AND y&#x60;; and &#x60;tags&#x3D;x,y&amp;tags&#x3D;z&#x60; is &#x60;(x OR y) AND z&#x60;
     * @param {module:api/TilesApi~getLayersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Layers}
     */
    this.getLayers = function(ownerId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'ownerId' is set
      if (ownerId == undefined || ownerId == null) {
        throw "Missing the required parameter 'ownerId' when calling getLayers";
      }


      var pathParams = {
        'ownerId': ownerId
      };
      var queryParams = {
        'tags': opts['tags']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Layers;

      return this.apiClient.callApi(
        '/{ownerId}/layer/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLevels operation.
     * @callback module:api/TilesApi~getLevelsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Levels} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * A collection of vertical levels for which data exists and can be requested (as tiles) for an instance of a layer.
     * This endpoint exposes the array of vertical positions that data exists for a particular instance. Each element can be used to substitute the {level} part of a tile URL. Not all layer instances have a vertical (e.g. it may be surface wave height and therefore only apply at sea level). If a layer has no vertical dimension, the array will be empty.
     * @param {String} ownerId The owner of the dataset.
     * @param {String} layerId The id of the layer.
     * @param {String} instanceId The id of the instance.
     * @param {module:api/TilesApi~getLevelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Levels}
     */
    this.getLevels = function(ownerId, layerId, instanceId, callback) {
      var postBody = null;

      // verify the required parameter 'ownerId' is set
      if (ownerId == undefined || ownerId == null) {
        throw "Missing the required parameter 'ownerId' when calling getLevels";
      }

      // verify the required parameter 'layerId' is set
      if (layerId == undefined || layerId == null) {
        throw "Missing the required parameter 'layerId' when calling getLevels";
      }

      // verify the required parameter 'instanceId' is set
      if (instanceId == undefined || instanceId == null) {
        throw "Missing the required parameter 'instanceId' when calling getLevels";
      }


      var pathParams = {
        'ownerId': ownerId,
        'layerId': layerId,
        'instanceId': instanceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Levels;

      return this.apiClient.callApi(
        '/{ownerId}/layer/{layerId}/instance/{instanceId}/levels/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPNGLegend operation.
     * @callback module:api/TilesApi~getPNGLegendCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * A legend for PNG map tiles
     * Legends are inferred from plot configurations for each layer. When a legend is disabled on a per-layer basis (or if a legend cannot be rendered due to the plot type), then this endpoint will return a 204 No Content response. The size must be substituted by either &#x60;small&#x60; or &#x60;large&#x60;. The orientation must be substituted by either &#x60;horizontal&#x60; or &#x60;vertical&#x60;.
     * @param {String} ownerId The owner of the dataset.
     * @param {String} layerId The id of the layer.
     * @param {String} instanceId The id of the instance.
     * @param {module:model/String} size The size.
     * @param {module:model/String} orientation The orientation.
     * @param {module:api/TilesApi~getPNGLegendCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getPNGLegend = function(ownerId, layerId, instanceId, size, orientation, callback) {
      var postBody = null;

      // verify the required parameter 'ownerId' is set
      if (ownerId == undefined || ownerId == null) {
        throw "Missing the required parameter 'ownerId' when calling getPNGLegend";
      }

      // verify the required parameter 'layerId' is set
      if (layerId == undefined || layerId == null) {
        throw "Missing the required parameter 'layerId' when calling getPNGLegend";
      }

      // verify the required parameter 'instanceId' is set
      if (instanceId == undefined || instanceId == null) {
        throw "Missing the required parameter 'instanceId' when calling getPNGLegend";
      }

      // verify the required parameter 'size' is set
      if (size == undefined || size == null) {
        throw "Missing the required parameter 'size' when calling getPNGLegend";
      }

      // verify the required parameter 'orientation' is set
      if (orientation == undefined || orientation == null) {
        throw "Missing the required parameter 'orientation' when calling getPNGLegend";
      }


      var pathParams = {
        'ownerId': ownerId,
        'layerId': layerId,
        'instanceId': instanceId,
        'size': size,
        'orientation': orientation
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['image/png'];
      var returnType = null;

      return this.apiClient.callApi(
        '/{ownerId}/legend/{layerId}/{instanceId}/{size}/{orientation}.png', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTile operation.
     * @callback module:api/TilesApi~getTileCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * A tiled map image, for use by map clients capable of consuming PNG map images in OGC TMS coordinate notation.
     * Cloudburst produces map tiles, and PNG map tiles are the traditional format for representing these. Other possibilities include protocol-buffer vector tiles in the Mapbox vector tile specification, and others. This endpoint will most often be used by map clients (such as Leaflet, Mapbox GL JS, OpenLayers, and Google Maps), which know exactly which tiles to request for a given geographical map view and zoom level. **The Cloudburst Javascript API is responsible for completing the resource URI via these client libraries, based on what a user is authenticated to request, and what these layers support, via requests to other endpoints. Manual requests are possible but are not recommended.** The resources for a particular layer can be discovered through a &#x60;GET&#x60; request to &#x60;/layer/&lt;layerId&gt;/&#x60; and inspecting the response&#39;s &#x60;resources&#x60; property. The &#x60;/layer/&lt;layerId&gt;/&lt;instanceID&gt;/times/&#x60; endpoints can be used to request the times that are valid (many layer instances have only one time and/or vertical level).
     * @param {String} ownerId The owner of the dataset.
     * @param {String} layerId The id of the layer.
     * @param {String} instanceId The id of the instance.
     * @param {Date} time The time.
     * @param {String} level The level.
     * @param {Integer} z The z.
     * @param {Integer} x The x.
     * @param {Integer} y2 The y.
     * @param {module:model/String} extension The extension.
     * @param {module:api/TilesApi~getTileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {File}
     */
    this.getTile = function(ownerId, layerId, instanceId, time, level, z, x, y2, extension, callback) {
      var postBody = null;

      // verify the required parameter 'ownerId' is set
      if (ownerId == undefined || ownerId == null) {
        throw "Missing the required parameter 'ownerId' when calling getTile";
      }

      // verify the required parameter 'layerId' is set
      if (layerId == undefined || layerId == null) {
        throw "Missing the required parameter 'layerId' when calling getTile";
      }

      // verify the required parameter 'instanceId' is set
      if (instanceId == undefined || instanceId == null) {
        throw "Missing the required parameter 'instanceId' when calling getTile";
      }

      // verify the required parameter 'time' is set
      if (time == undefined || time == null) {
        throw "Missing the required parameter 'time' when calling getTile";
      }

      // verify the required parameter 'level' is set
      if (level == undefined || level == null) {
        throw "Missing the required parameter 'level' when calling getTile";
      }

      // verify the required parameter 'z' is set
      if (z == undefined || z == null) {
        throw "Missing the required parameter 'z' when calling getTile";
      }

      // verify the required parameter 'x' is set
      if (x == undefined || x == null) {
        throw "Missing the required parameter 'x' when calling getTile";
      }

      // verify the required parameter 'y2' is set
      if (y2 == undefined || y2 == null) {
        throw "Missing the required parameter 'y2' when calling getTile";
      }

      // verify the required parameter 'extension' is set
      if (extension == undefined || extension == null) {
        throw "Missing the required parameter 'extension' when calling getTile";
      }


      var pathParams = {
        'ownerId': ownerId,
        'layerId': layerId,
        'instanceId': instanceId,
        'time': time,
        'level': level,
        'z': z,
        'x': x,
        'y2': y2,
        'extension': extension
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['image/png'];
      var returnType = File;

      return this.apiClient.callApi(
        '/{ownerId}/tile/{layerId}/{instanceId}/{time}/{level}/{z}/{x}/{y2}.{extension}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTimes operation.
     * @callback module:api/TilesApi~getTimesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Times} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * A collection of moments in time for which data exists and can be requested (as tiles) for an instance of a layer.
     * This endpoint exposes the array of moments that data exists for a particular instance. Each element can be used to substitute the &lt;time&gt; part of a tile URL. Not all layer instances have a temporal dimension (e.g. it may be static bathymetry, or an observational dataset with no forecast or hindcast). If a layer has no temporal dimension, the array will be empty. The times in the array may not be unique (this is almost always due to grouped datasets containing overlapping time steps).
     * @param {String} ownerId The owner of the dataset.
     * @param {String} layerId The id of the layer.
     * @param {String} instanceId The id of the instance.
     * @param {module:api/TilesApi~getTimesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Times}
     */
    this.getTimes = function(ownerId, layerId, instanceId, callback) {
      var postBody = null;

      // verify the required parameter 'ownerId' is set
      if (ownerId == undefined || ownerId == null) {
        throw "Missing the required parameter 'ownerId' when calling getTimes";
      }

      // verify the required parameter 'layerId' is set
      if (layerId == undefined || layerId == null) {
        throw "Missing the required parameter 'layerId' when calling getTimes";
      }

      // verify the required parameter 'instanceId' is set
      if (instanceId == undefined || instanceId == null) {
        throw "Missing the required parameter 'instanceId' when calling getTimes";
      }


      var pathParams = {
        'ownerId': ownerId,
        'layerId': layerId,
        'instanceId': instanceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Times;

      return this.apiClient.callApi(
        '/{ownerId}/layer/{layerId}/instance/{instanceId}/times/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
