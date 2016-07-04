(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudburstApi) {
      root.CloudburstApi = {};
    }
    root.CloudburstApi.Level = factory(root.CloudburstApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Level model module.
   * @module model/Level
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Level</code>.
   * A potential value of a vertical dimension of an instance. Values in this array is used to substitute {level} in a tile URL.
   * @alias module:model/Level
   * @class
   */
  var exports = function() {

  };

  /**
   * Constructs a <code>Level</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Level} obj Optional instance to populate.
   * @return {module:model/Level} The populated <code>Level</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

    }
    return obj;
  }





  return exports;
}));
