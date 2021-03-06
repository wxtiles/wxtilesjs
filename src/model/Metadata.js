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
    root.WxTiles.Metadata = factory(root.WxTiles.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Metadata model module.
   * @module model/Metadata
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Metadata</code>.
   * Metadata for a layer. WXTiles supports an arbitrary metadata document, but these specified keys are useful and will tend to exist, but none of them is mandatory, and a property may exist but have a null value.
   * @alias module:model/Metadata
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Metadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Metadata} obj Optional instance to populate.
   * @return {module:model/Metadata} The populated <code>Metadata</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('layperson_description')) {
        obj['layperson_description'] = ApiClient.convertToType(data['layperson_description'], 'String');
      }
      if (data.hasOwnProperty('organisation')) {
        obj['organisation'] = ApiClient.convertToType(data['organisation'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('regions')) {
        obj['regions'] = ApiClient.convertToType(data['regions'], ['String']);
      }
      if (data.hasOwnProperty('unit_system')) {
        obj['unit_system'] = ApiClient.convertToType(data['unit_system'], 'String');
      }
    }
    return obj;
  }

  /**
   * A short, human-readable description of a layer that is suitable for inclusion in a list of available layers.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A long description of a layer, possibly including HTML tags to navigate users to glossaries or other sources of additional information.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * A long description of a layer, which is intended for display to a \"layperson\" who should not be confronted with technical, meteorological or other jargon when browsing layer information.
   * @member {String} layperson_description
   */
  exports.prototype['layperson_description'] = undefined;
  /**
   * Organisation responsible for publishing the data used in the layer.
   * @member {String} organisation
   */
  exports.prototype['organisation'] = undefined;
  /**
   * The source of the data (such as a model).
   * @member {String} source
   */
  exports.prototype['source'] = undefined;
  /**
   * @member {Array.<String>} regions
   */
  exports.prototype['regions'] = undefined;
  /**
   * The system of units that the layer renders quantitative values in. Examples include \"metric\" and \"uscs\", for layers that render with metric and United States customary system (USCS) units, respectively. A null value indicates that the unit system is unspecified or does not fit into a category (e.g. knots). This does not indicate exactly which units a plot will render, only a broad classification. This can be used to filter duplicate layers that only differ in whether they render the same physical phenomenon as, for example, millimetres or inches. There is no restriction on what value this string may take.
   * @member {String} unit_system
   */
  exports.prototype['unit_system'] = undefined;



  return exports;
}));


