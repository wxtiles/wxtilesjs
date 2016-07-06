(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WxTiles) {
      root.WxTiles = {};
    }
    root.WxTiles.Bounds = factory(root.WxTiles.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Bounds model module.
   * @module model/Bounds
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Bounds</code>.
   * An object representing the layer instance&#39;s bounding box (derived from the dataset)
   * @alias module:model/Bounds
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>Bounds</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Bounds} obj Optional instance to populate.
   * @return {module:model/Bounds} The populated <code>Bounds</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('west')) {
        obj['west'] = ApiClient.convertToType(data['west'], 'Number');
      }
      if (data.hasOwnProperty('east')) {
        obj['east'] = ApiClient.convertToType(data['east'], 'Number');
      }
      if (data.hasOwnProperty('north')) {
        obj['north'] = ApiClient.convertToType(data['north'], 'Number');
      }
      if (data.hasOwnProperty('south')) {
        obj['south'] = ApiClient.convertToType(data['south'], 'Number');
      }
    }
    return obj;
  }


  /**
   * The western extent of the instance's dataset (degrees longitude)
   * @member {Number} west
   */
  exports.prototype['west'] = undefined;

  /**
   * The eastern extent of the instance's dataset (degrees longitude)
   * @member {Number} east
   */
  exports.prototype['east'] = undefined;

  /**
   * The northern extent of the instance's dataset (degrees latitude)
   * @member {Number} north
   */
  exports.prototype['north'] = undefined;

  /**
   * The southern extent of the instance's dataset (degrees longitude)
   * @member {Number} south
   */
  exports.prototype['south'] = undefined;




  return exports;
}));
