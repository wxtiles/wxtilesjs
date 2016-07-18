(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WxTiles) {
      root.WxTiles = {};
    }
    root.WxTiles.Resources = factory(root.WxTiles.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Resources model module.
   * @module model/Resources
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>Resources</code>.
   * Template URLs for requesting tiles and other resources for this layer instance. Note that the tile coordinates (z, x, and y) must be given in OGC TMS, rather than the XYZ specification (see https://gist.github.com/tmcw/4954720 for the difference, which only affects the y coordinate). Not all given properties exist for all layers. The literal text \&quot;instance\&quot; (enclosed in angle brackets) must be substituted by a valid instance ID.
   * @alias module:model/Resources
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Resources</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Resources} obj Optional instance to populate.
   * @return {module:model/Resources} The populated <code>Resources</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tile')) {
        obj['tile'] = ApiClient.convertToType(data['tile'], 'String');
      }
      if (data.hasOwnProperty('vtile')) {
        obj['vtile'] = ApiClient.convertToType(data['vtile'], 'String');
      }
      if (data.hasOwnProperty('gtile')) {
        obj['gtile'] = ApiClient.convertToType(data['gtile'], 'String');
      }
      if (data.hasOwnProperty('rtile')) {
        obj['rtile'] = ApiClient.convertToType(data['rtile'], 'String');
      }
      if (data.hasOwnProperty('legend')) {
        obj['legend'] = ApiClient.convertToType(data['legend'], 'String');
      }
      if (data.hasOwnProperty('jsonlegend')) {
        obj['jsonlegend'] = ApiClient.convertToType(data['jsonlegend'], 'String');
      }
    }
    return obj;
  }

  /**
   * Template URL for requesting styled, PNG image tiles. Elements of the path enclosed in angle brackets need to be appropriately substituted when making requests.
   * @member {String} tile
   */
  exports.prototype['tile'] = undefined;
  /**
   * Template URL for requesting vector tiles in the Mapbox vector tile (MVT) specification, as protocol buffers. Elements of the path enclosed in angle brackets need to be appropriately substituted when making requests.
   * @member {String} vtile
   */
  exports.prototype['vtile'] = undefined;
  /**
   * Template URL for requesting UTFGrid tiles in the Mapbox UTFGrid specification, as JSON (a format for rasterised interaction data). Elements of the path enclosed in angle brackets need to be appropriately substituted when making requests.
   * @member {String} gtile
   */
  exports.prototype['gtile'] = undefined;
  /**
   * Template URL for requesting raw data tiles. Elements of the path enclosed in angle brackets need to be appropriately substituted when making requests.
   * @member {String} rtile
   */
  exports.prototype['rtile'] = undefined;
  /**
   * URL for requesting legends as PNG images that correspond to the PNG image tiles. The \"size\" and \"orientation\" elements in the path (enclosed in angle brackets) need to be substituted. Valid values for size are \"small\" and \"large\". Valid values for orientation are \"horizontal\" and \"vertical\".
   * @member {String} legend
   */
  exports.prototype['legend'] = undefined;
  /**
   * URL for requesting legends as JSON representations. These JSON representations are used internally to construct the image versions of the legend, and can be used to render custom legends client-side. The \"size\" and \"orientation\" elements in the path (enclosed in angle brackets) need to be substituted.
   * @member {String} jsonlegend
   */
  exports.prototype['jsonlegend'] = undefined;




  return exports;
}));


