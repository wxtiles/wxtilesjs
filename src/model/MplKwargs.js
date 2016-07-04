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
    root.WxTiles.MplKwargs = factory(root.WxTiles.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MplKwargs model module.
   * @module model/MplKwargs
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>MplKwargs</code>.
   * Additional, arbitrary Matplotlib keyword arguments. All are optional. Additional properties are possible.
   * @alias module:model/MplKwargs
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>MplKwargs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MplKwargs} obj Optional instance to populate.
   * @return {module:model/MplKwargs} The populated <code>MplKwargs</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('extend')) {
        obj['extend'] = ApiClient.convertToType(data['extend'], 'String');
      }
      if (data.hasOwnProperty('spacing')) {
        obj['spacing'] = ApiClient.convertToType(data['spacing'], 'String');
      }
      if (data.hasOwnProperty('alpha')) {
        obj['alpha'] = ApiClient.convertToType(data['alpha'], 'Number');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('drawedges')) {
        obj['drawedges'] = ApiClient.convertToType(data['drawedges'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * See \"extend\" for the LegendItem; indicates if the extend method of the legend has been set independently to the plot.
   * @member {module:model/MplKwargs.ExtendEnum} extend
   */
  exports.prototype['extend'] = undefined;

  /**
   * Indicates whether class breaks are separated uniformly, or in proportion to their actual value between the highest and the lowest breaks.
   * @member {module:model/MplKwargs.SpacingEnum} spacing
   */
  exports.prototype['spacing'] = undefined;

  /**
   * Transparency of the legend, from 0 (opaque) to 1 (transparent). Absence of this property implies full opacity.
   * @member {Number} alpha
   */
  exports.prototype['alpha'] = undefined;

  /**
   * Python string formatter (e.g. \"%.3f\") indicating how values in the levels should be translated into ticks. This can be used to round values for display on a legend.
   * @member {String} format
   */
  exports.prototype['format'] = undefined;

  /**
   * Whether edges should be drawn at colour boundaries within the legend.
   * @member {Boolean} drawedges
   */
  exports.prototype['drawedges'] = undefined;


  /**
   * Allowed values for the <code>extend</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ExtendEnum = { 
    /**
     * value: neither
     * @const
     */
    NEITHER: "neither",
    
    /**
     * value: both
     * @const
     */
    BOTH: "both",
    
    /**
     * value: min
     * @const
     */
    MIN: "min",
    
    /**
     * value: max
     * @const
     */
    MAX: "max",
    
    /**
     * value: null
     * @const
     */
    NULL: "null"
  };  /**
   * Allowed values for the <code>spacing</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SpacingEnum = { 
    /**
     * value: proportional
     * @const
     */
    PROPORTIONAL: "proportional",
    
    /**
     * value: uniform
     * @const
     */
    UNIFORM: "uniform",
    
    /**
     * value: null
     * @const
     */
    NULL: "null"
  };

  return exports;
}));
