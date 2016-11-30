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
    define(['ApiClient', 'model/Bounds', 'model/Dimension', 'model/LayerDefaults', 'model/MaxNativeZoom', 'model/MinNativeZoom', 'model/PartialInstance', 'model/Region', 'model/Resources', 'model/Style', 'model/Tag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Bounds'), require('./Dimension'), require('./LayerDefaults'), require('./MaxNativeZoom'), require('./MinNativeZoom'), require('./PartialInstance'), require('./Region'), require('./Resources'), require('./Style'), require('./Tag'));
  } else {
    // Browser globals (root is window)
    if (!root.WxTiles) {
      root.WxTiles = {};
    }
    root.WxTiles.Layer = factory(root.WxTiles.ApiClient, root.WxTiles.Bounds, root.WxTiles.Dimension, root.WxTiles.LayerDefaults, root.WxTiles.MaxNativeZoom, root.WxTiles.MinNativeZoom, root.WxTiles.PartialInstance, root.WxTiles.Region, root.WxTiles.Resources, root.WxTiles.Style, root.WxTiles.Tag);
  }
}(this, function(ApiClient, Bounds, Dimension, LayerDefaults, MaxNativeZoom, MinNativeZoom, PartialInstance, Region, Resources, Style, Tag) {
  'use strict';




  /**
   * The Layer model module.
   * @module model/Layer
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Layer</code>.
   * A layer representing a spatial dataset that can be rendered by WXTiles
   * @alias module:model/Layer
   * @class
   * @param id {String} Layer ID
   * @param name {String} A short, human-readable description of a layer that is suitable for inclusion in a list of available layers.
   * @param instances {Array.<module:model/PartialInstance>} A list of the instances of this layer.
   * @param styles {Array.<module:model/Style>} A list of the styles the layer implements
   * @param dimensions {Array.<module:model/Dimension>} A list of dimensions used by the layer. Neither the names nor order of the dimensions are standardised, following the CF convention. Instead they reflect the declarations of underlying dataset metadata.
   * @param bounds {module:model/Bounds} 
   * @param minNativeZoom {module:model/MinNativeZoom} 
   * @param maxNativeZoom {module:model/MaxNativeZoom} 
   * @param resources {module:model/Resources} 
   */
  var exports = function(id, name, instances, styles, dimensions, bounds, minNativeZoom, maxNativeZoom, resources) {
    var _this = this;

    _this['id'] = id;

    _this['name'] = name;





    _this['instances'] = instances;
    _this['styles'] = styles;
    _this['dimensions'] = dimensions;
    _this['bounds'] = bounds;


    _this['minNativeZoom'] = minNativeZoom;
    _this['maxNativeZoom'] = maxNativeZoom;
    _this['resources'] = resources;

  };

  /**
   * Constructs a <code>Layer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Layer} obj Optional instance to populate.
   * @return {module:model/Layer} The populated <code>Layer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('laypersonDescription')) {
        obj['laypersonDescription'] = ApiClient.convertToType(data['laypersonDescription'], 'String');
      }
      if (data.hasOwnProperty('organisation')) {
        obj['organisation'] = ApiClient.convertToType(data['organisation'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('regions')) {
        obj['regions'] = ApiClient.convertToType(data['regions'], [Region]);
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], [Tag]);
      }
      if (data.hasOwnProperty('instances')) {
        obj['instances'] = ApiClient.convertToType(data['instances'], [PartialInstance]);
      }
      if (data.hasOwnProperty('styles')) {
        obj['styles'] = ApiClient.convertToType(data['styles'], [Style]);
      }
      if (data.hasOwnProperty('dimensions')) {
        obj['dimensions'] = ApiClient.convertToType(data['dimensions'], [Dimension]);
      }
      if (data.hasOwnProperty('bounds')) {
        obj['bounds'] = Bounds.constructFromObject(data['bounds']);
      }
      if (data.hasOwnProperty('instanceType')) {
        obj['instanceType'] = ApiClient.convertToType(data['instanceType'], 'String');
      }
      if (data.hasOwnProperty('instanceDescription')) {
        obj['instanceDescription'] = ApiClient.convertToType(data['instanceDescription'], 'String');
      }
      if (data.hasOwnProperty('minNativeZoom')) {
        obj['minNativeZoom'] = MinNativeZoom.constructFromObject(data['minNativeZoom']);
      }
      if (data.hasOwnProperty('maxNativeZoom')) {
        obj['maxNativeZoom'] = MaxNativeZoom.constructFromObject(data['maxNativeZoom']);
      }
      if (data.hasOwnProperty('resources')) {
        obj['resources'] = Resources.constructFromObject(data['resources']);
      }
      if (data.hasOwnProperty('defaults')) {
        obj['defaults'] = LayerDefaults.constructFromObject(data['defaults']);
      }
    }
    return obj;
  }

  /**
   * Layer ID
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * A long description of a layer, possibly including HTML tags to navigate users to glossaries or other sources of additional information.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * A short, human-readable description of a layer that is suitable for inclusion in a list of available layers.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A long description of a layer, which is intended for display to a 'layperson' who should not be confronted with technical, meteological or other jargon when browsing layer information.
   * @member {String} laypersonDescription
   */
  exports.prototype['laypersonDescription'] = undefined;
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
   * A list of the regions that the layer should be considered applicable.
   * @member {Array.<module:model/Region>} regions
   */
  exports.prototype['regions'] = undefined;
  /**
   * A list of tags that may be used to support free-text search.
   * @member {Array.<module:model/Tag>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * A list of the instances of this layer.
   * @member {Array.<module:model/PartialInstance>} instances
   */
  exports.prototype['instances'] = undefined;
  /**
   * A list of the styles the layer implements
   * @member {Array.<module:model/Style>} styles
   */
  exports.prototype['styles'] = undefined;
  /**
   * A list of dimensions used by the layer. Neither the names nor order of the dimensions are standardised, following the CF convention. Instead they reflect the declarations of underlying dataset metadata.
   * @member {Array.<module:model/Dimension>} dimensions
   */
  exports.prototype['dimensions'] = undefined;
  /**
   * @member {module:model/Bounds} bounds
   */
  exports.prototype['bounds'] = undefined;
  /**
   * One of a typology of instance types. In this version, 'cyclic' (model cycles) and 'observational' (for observations that will be repeated) are used.. Nullable (e.g. if instances are not applicable, or the type unspecified).
   * @member {module:model/Layer.InstanceTypeEnum} instanceType
   */
  exports.prototype['instanceType'] = undefined;
  /**
   * Free-form text explaining the role of instances for the associated layer
   * @member {String} instanceDescription
   */
  exports.prototype['instanceDescription'] = undefined;
  /**
   * @member {module:model/MinNativeZoom} minNativeZoom
   */
  exports.prototype['minNativeZoom'] = undefined;
  /**
   * @member {module:model/MaxNativeZoom} maxNativeZoom
   */
  exports.prototype['maxNativeZoom'] = undefined;
  /**
   * @member {module:model/Resources} resources
   */
  exports.prototype['resources'] = undefined;
  /**
   * @member {module:model/LayerDefaults} defaults
   */
  exports.prototype['defaults'] = undefined;


  /**
   * Allowed values for the <code>instanceType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.InstanceTypeEnum = {
    /**
     * value: "cyclic"
     * @const
     */
    "cyclic": "cyclic",
    /**
     * value: "observational"
     * @const
     */
    "observational": "observational"  };


  return exports;
}));


