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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WxTiles) {
      root.WxTiles = {};
    }
    root.WxTiles.LegendResources = factory(root.WxTiles.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LegendResources model module.
   * @module model/LegendResources
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>LegendResources</code>.
   * Template URLS for requesting additional resources for the layer&#39;s implementation of a style (e.g. a PNG legend).
   * @alias module:model/LegendResources
   * @class
   * @param jsonLegend {String} URL for requesting legends as JSON representations. These JSON representations are used internally to construct the image versions of the legend, and can be used to render custom legends client-side. No component of this URL requires substitution.
   */
  var exports = function(jsonLegend) {
    var _this = this;


    _this['jsonLegend'] = jsonLegend;
  };

  /**
   * Constructs a <code>LegendResources</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LegendResources} obj Optional instance to populate.
   * @return {module:model/LegendResources} The populated <code>LegendResources</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('legend')) {
        obj['legend'] = ApiClient.convertToType(data['legend'], 'String');
      }
      if (data.hasOwnProperty('jsonLegend')) {
        obj['jsonLegend'] = ApiClient.convertToType(data['jsonLegend'], 'String');
      }
    }
    return obj;
  }

  /**
   * URL for requesting legends as PNG images that correspond to the PNG image tiles. The 'size' and 'orientation' elements in the path (enclosed in angle brackets) need to be substituted. Valid values for size are 'small' and 'large'. Valid values for orientation are 'horizontal' and 'vertical'.
   * @member {String} legend
   */
  exports.prototype['legend'] = undefined;
  /**
   * URL for requesting legends as JSON representations. These JSON representations are used internally to construct the image versions of the legend, and can be used to render custom legends client-side. No component of this URL requires substitution.
   * @member {String} jsonLegend
   */
  exports.prototype['jsonLegend'] = undefined;



  return exports;
}));


