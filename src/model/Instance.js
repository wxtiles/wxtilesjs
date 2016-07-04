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
    root.WxTiles.Instance = factory(root.WxTiles.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Instance model module.
   * @module model/Instance
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>Instance</code>.
   * A named instance of a dataset, typically used to represent a forecast model cycle
   * @alias module:model/Instance
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>Instance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Instance} obj Optional instance to populate.
   * @return {module:model/Instance} The populated <code>Instance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'String');
      }
      if (data.hasOwnProperty('start_time')) {
        obj['start_time'] = ApiClient.convertToType(data['start_time'], 'Date');
      }
      if (data.hasOwnProperty('end_time')) {
        obj['end_time'] = ApiClient.convertToType(data['end_time'], 'String');
      }
    }
    return obj;
  }


  /**
   * Instance ID
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * ISO 8601 datetime string representing when the instance configuration was created
   * @member {String} created
   */
  exports.prototype['created'] = undefined;

  /**
   * ISO 8601 datetime string representing the earliest retrievable time-step for an instance
   * @member {Date} start_time
   */
  exports.prototype['start_time'] = undefined;

  /**
   * ISO 8601 datetime string representing the latest retrievable time-step for an instance
   * @member {String} end_time
   */
  exports.prototype['end_time'] = undefined;




  return exports;
}));
