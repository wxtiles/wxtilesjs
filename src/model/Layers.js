(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Layer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Layer'));
  } else {
    // Browser globals (root is window)
    if (!root.WxTiles) {
      root.WxTiles = {};
    }
    root.WxTiles.Layers = factory(root.WxTiles.ApiClient, root.WxTiles.Layer);
  }
}(this, function(ApiClient, Layer) {
  'use strict';

  /**
   * The Layers model module.
   * @module model/Layers
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Layers</code>.
   * All layers meeting your query, that that you are authenticated for, and which are currently available
   * @alias module:model/Layers
   * @class
   * @extends module:model/Array&lt;Layer&gt;
   */
  var exports = function() {

  };

  /**
   * Constructs a <code>Layers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Layers} obj Optional instance to populate.
   * @return {module:model/Layers} The populated <code>Layers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();
      Array&lt;Layer&gt;.constructFromObject(data, obj);
    }
    return obj;
  }

  exports.prototype = Object.create(Array&lt;Layer&gt;.prototype);
  exports.prototype.constructor = exports;





  return exports;
}));
