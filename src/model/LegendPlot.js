(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './LegendItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LegendItem'));
  } else {
    // Browser globals (root is window)
    if (!root.WxTiles) {
      root.WxTiles = {};
    }
    root.WxTiles.LegendPlot = factory(root.WxTiles.ApiClient, root.WxTiles.LegendItem);
  }
}(this, function(ApiClient, LegendItem) {
  'use strict';

  /**
   * The LegendPlot model module.
   * @module model/LegendPlot
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>LegendPlot</code>.
   * A Matplotlib plot type (e.g. &#39;pcolormesh&#39;, &#39;contourf&#39;) as key, with the value representing the information for the legend for that particular sub-plot.
   * @alias module:model/LegendPlot
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>LegendPlot</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LegendPlot} obj Optional instance to populate.
   * @return {module:model/LegendPlot} The populated <code>LegendPlot</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('plotType')) {
        obj['plotType'] = LegendItem.constructFromObject(data['plotType']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/LegendItem} plotType
   */
  exports.prototype['plotType'] = undefined;




  return exports;
}));
