(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/LegendPlot'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LegendPlot'));
  } else {
    // Browser globals (root is window)
    if (!root.WxTiles) {
      root.WxTiles = {};
    }
    root.WxTiles.Legend = factory(root.WxTiles.ApiClient, root.WxTiles.LegendPlot);
  }
}(this, function(ApiClient, LegendPlot) {
  'use strict';




  /**
   * The Legend model module.
   * @module model/Legend
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Legend</code>.
   * Legend configuration for the given &#x60;plotID&#x60; (a unique identifier for a plot), derived from the respective plot configuration. A plot can consist of multiple sub-plots (e.g. a map of precipitation with a pressure overlay), only one of which will have a value associated with its key.
   * @alias module:model/Legend
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Legend</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Legend} obj Optional instance to populate.
   * @return {module:model/Legend} The populated <code>Legend</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('plotID')) {
        obj['plotID'] = LegendPlot.constructFromObject(data['plotID']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/LegendPlot} plotID
   */
  exports.prototype['plotID'] = undefined;




  return exports;
}));


