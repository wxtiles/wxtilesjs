(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Time'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Time'));
  } else {
    // Browser globals (root is window)
    if (!root.WxTiles) {
      root.WxTiles = {};
    }
    root.WxTiles.Times = factory(root.WxTiles.ApiClient, root.WxTiles.Time);
  }
}(this, function(ApiClient, Time) {
  'use strict';




  /**
   * The Times model module.
   * @module model/Times
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Times</code>.
   * @alias module:model/Times
   * @class
   * @extends Array
   */
  var exports = function() {
    var _this = this;
    _this = new Array();
    Object.setPrototypeOf(_this, exports);

    return _this;
  };

  /**
   * Constructs a <code>Times</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Times} obj Optional instance to populate.
   * @return {module:model/Times} The populated <code>Times</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, Time);

    }
    return obj;
  }





  return exports;
}));


