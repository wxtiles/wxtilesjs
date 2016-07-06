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
    root.WxTiles.Error = factory(root.WxTiles.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Error model module.
   * @module model/Error
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Error</code>.
   * @alias module:model/Error
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Error} obj Optional instance to populate.
   * @return {module:model/Error} The populated <code>Error</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('http-code')) {
        obj['http-code'] = ApiClient.convertToType(data['http-code'], 'Number');
      }
      if (data.hasOwnProperty('incident-number')) {
        obj['incident-number'] = ApiClient.convertToType(data['incident-number'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }


  /**
   * HTTP status code
   * @member {Number} http-code
   */
  exports.prototype['http-code'] = undefined;

  /**
   * Incident number that has been recorded.
   * @member {String} incident-number
   */
  exports.prototype['incident-number'] = undefined;

  /**
   * Explanation why the request has caused an error
   * @member {String} message
   */
  exports.prototype['message'] = undefined;




  return exports;
}));
