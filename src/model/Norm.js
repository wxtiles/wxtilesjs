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
    root.WxTiles.Norm = factory(root.WxTiles.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Norm model module.
   * @module model/Norm
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Norm</code>.
   * Normalisation technique and parameters for mapping values to colours. Corresponds to valid Matplotlib colorbar normalisation methods. If not null, the only required property is \&quot;method\&quot;, with the rest depending on the normalisation technique.
   * @alias module:model/Norm
   * @class
   */
  var exports = function() {








  };

  /**
   * Constructs a <code>Norm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Norm} obj Optional instance to populate.
   * @return {module:model/Norm} The populated <code>Norm</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('method')) {
        obj['method'] = ApiClient.convertToType(data['method'], 'String');
      }
      if (data.hasOwnProperty('vmin')) {
        obj['vmin'] = ApiClient.convertToType(data['vmin'], 'Number');
      }
      if (data.hasOwnProperty('vmax')) {
        obj['vmax'] = ApiClient.convertToType(data['vmax'], 'Number');
      }
      if (data.hasOwnProperty('clip')) {
        obj['clip'] = ApiClient.convertToType(data['clip'], 'Boolean');
      }
      if (data.hasOwnProperty('gamma')) {
        obj['gamma'] = ApiClient.convertToType(data['gamma'], 'Number');
      }
      if (data.hasOwnProperty('linthresh')) {
        obj['linthresh'] = ApiClient.convertToType(data['linthresh'], 'Number');
      }
      if (data.hasOwnProperty('linscale')) {
        obj['linscale'] = ApiClient.convertToType(data['linscale'], 'Number');
      }
    }
    return obj;
  }


  /**
   * Normalisation technique, corresponding to one of the Matplotlib colorbar normalisation methods.
   * @member {module:model/Norm.MethodEnum} method
   */
  exports.prototype['method'] = undefined;

  /**
   * @member {Number} vmin
   */
  exports.prototype['vmin'] = undefined;

  /**
   * @member {Number} vmax
   */
  exports.prototype['vmax'] = undefined;

  /**
   * @member {Boolean} clip
   */
  exports.prototype['clip'] = undefined;

  /**
   * @member {Number} gamma
   */
  exports.prototype['gamma'] = undefined;

  /**
   * @member {Number} linthresh
   */
  exports.prototype['linthresh'] = undefined;

  /**
   * @member {Number} linscale
   */
  exports.prototype['linscale'] = undefined;


  /**
   * Allowed values for the <code>method</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MethodEnum = { 
    /**
     * value: LogNorm
     * @const
     */
    LOGNORM: "LogNorm",
    
    /**
     * value: SymLogNorm
     * @const
     */
    SYMLOGNORM: "SymLogNorm",
    
    /**
     * value: PowerNorm
     * @const
     */
    POWERNORM: "PowerNorm",
    
    /**
     * value: BoundaryNorm
     * @const
     */
    BOUNDARYNORM: "BoundaryNorm",
    
    /**
     * value: OffsetNorm
     * @const
     */
    OFFSETNORM: "OffsetNorm"
  };

  return exports;
}));
