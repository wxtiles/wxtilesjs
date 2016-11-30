/**
 * WXTiles
 * Make and explore beautiful, rapidly-refreshed weather maps with the WXTiles API
 *
 * OpenAPI spec version: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/Layer', 'model/Layers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Layer'), require('../model/Layers'));
  } else {
    // Browser globals (root is window)
    if (!root.WxTiles) {
      root.WxTiles = {};
    }
    root.WxTiles.LayersApi = factory(root.WxTiles.ApiClient, root.WxTiles.Error, root.WxTiles.Layer, root.WxTiles.Layers);
  }
}(this, function(ApiClient, Error, Layer, Layers) {
  'use strict';

  /**
   * Layers service.
   * @module api/LayersApi
   * @version 3.0.0
   */

  /**
   * Constructs a new LayersApi. 
   * @alias module:api/LayersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getLayer operation.
     * @callback module:api/LayersApi~getLayerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Layer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Information about a specific layer
     * This endpoint provides information about a specific *WXTiles* layer that can be requested as map tiles, and its metadata, including bounding boxes and the unit system (metric, USCS, etc.) that is used when rendering map tiles.
     * @param {String} ownerId The owner of the dataset.
     * @param {String} layerId The id of the layer.
     * @param {module:api/LayersApi~getLayerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Layer}
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

      var authNames = ['apiKeyQuery', 'apiKeyHeader'];
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
     * @callback module:api/LayersApi~getLayersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Layers} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Information about available WXTiles layers
     * This endpoint returns information about all current *WXTiles* layers that can be requested, and metadata about map layers, including bounding boxes and the unit system (metric, USCS, etc.) that is used when rendering map tiles.
     * @param {String} ownerId The owner of the dataset.
     * @param {module:api/LayersApi~getLayersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Layers}
     */
    this.getLayers = function(ownerId, callback) {
      var postBody = null;

      // verify the required parameter 'ownerId' is set
      if (ownerId == undefined || ownerId == null) {
        throw "Missing the required parameter 'ownerId' when calling getLayers";
      }


      var pathParams = {
        'ownerId': ownerId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apiKeyQuery', 'apiKeyHeader'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Layers;

      return this.apiClient.callApi(
        '/{ownerId}/layer/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));