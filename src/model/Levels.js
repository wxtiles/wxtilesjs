(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Level'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Level'));
  } else {
    // Browser globals (root is window)
    if (!root.WxTiles) {
      root.WxTiles = {};
    }
    root.WxTiles.Levels = factory(root.WxTiles.ApiClient, root.WxTiles.Level);
  }
}(this, function(ApiClient, Level) {
  'use strict';




  /**
   * The Levels model module.
   * @module model/Levels
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Levels</code>.
   * @alias module:model/Levels
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
   * Constructs a <code>Levels</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Levels} obj Optional instance to populate.
   * @return {module:model/Levels} The populated <code>Levels</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, Level);

    }
    return obj;
  }





  return exports;
}));


