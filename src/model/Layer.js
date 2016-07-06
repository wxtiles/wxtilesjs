(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Bounds', './Instance', './Metadata', './Resources'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Bounds'), require('./Instance'), require('./Metadata'), require('./Resources'));
  } else {
    // Browser globals (root is window)
    if (!root.WxTiles) {
      root.WxTiles = {};
    }
    root.WxTiles.Layer = factory(root.WxTiles.ApiClient, root.WxTiles.Bounds, root.WxTiles.Instance, root.WxTiles.Metadata, root.WxTiles.Resources);
  }
}(this, function(ApiClient, Bounds, Instance, Metadata, Resources) {
  'use strict';

  /**
   * The Layer model module.
   * @module model/Layer
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Layer</code>.
   * A layer representing a spatial dataset that can be rendered by Cloudburst
   * @alias module:model/Layer
   * @class
   */
  var exports = function() {






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
      if (data.hasOwnProperty('instances')) {
        obj['instances'] = ApiClient.convertToType(data['instances'], [Instance]);
      }
      if (data.hasOwnProperty('bounds')) {
        obj['bounds'] = Bounds.constructFromObject(data['bounds']);
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = Metadata.constructFromObject(data['meta']);
      }
      if (data.hasOwnProperty('resources')) {
        obj['resources'] = Resources.constructFromObject(data['resources']);
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
   * A list of the instances of this layer.
   * @member {Array.<module:model/Instance>} instances
   */
  exports.prototype['instances'] = undefined;

  /**
   * @member {module:model/Bounds} bounds
   */
  exports.prototype['bounds'] = undefined;

  /**
   * @member {module:model/Metadata} meta
   */
  exports.prototype['meta'] = undefined;

  /**
   * @member {module:model/Resources} resources
   */
  exports.prototype['resources'] = undefined;




  return exports;
}));
