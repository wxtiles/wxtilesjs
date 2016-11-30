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
    root.WxTiles.LayerDefaults = factory(root.WxTiles.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LayerDefaults model module.
   * @module model/LayerDefaults
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>LayerDefaults</code>.
   * Default options for the layer.
   * @alias module:model/LayerDefaults
   * @class
   * @param style {String} ID of the default style implemented by a layer.
   */
  var exports = function(style) {
    var _this = this;

    _this['style'] = style;
  };

  /**
   * Constructs a <code>LayerDefaults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LayerDefaults} obj Optional instance to populate.
   * @return {module:model/LayerDefaults} The populated <code>LayerDefaults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('style')) {
        obj['style'] = ApiClient.convertToType(data['style'], 'String');
      }
    }
    return obj;
  }

  /**
   * ID of the default style implemented by a layer.
   * @member {String} style
   */
  exports.prototype['style'] = undefined;



  return exports;
}));


