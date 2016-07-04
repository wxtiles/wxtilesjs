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
    root.WxTiles.Time = factory(root.WxTiles.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Time model module.
   * @module model/Time
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>Time</code>.
   * ISO 8601 string representing a datetime, a possible value of the temporal dimension of an instance. Values in this array is used to ubstitute \&quot;time\&quot; in a tile URL.
   * @alias module:model/Time
   * @class
   */
  var exports = function() {

  };

  /**
   * Constructs a <code>Time</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Time} obj Optional instance to populate.
   * @return {module:model/Time} The populated <code>Time</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

    }
    return obj;
  }





  return exports;
}));
