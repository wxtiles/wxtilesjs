(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/MplKwargs', 'model/Norm'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MplKwargs'), require('./Norm'));
  } else {
    // Browser globals (root is window)
    if (!root.WxTiles) {
      root.WxTiles = {};
    }
    root.WxTiles.LegendItem = factory(root.WxTiles.ApiClient, root.WxTiles.MplKwargs, root.WxTiles.Norm);
  }
}(this, function(ApiClient, MplKwargs, Norm) {
  'use strict';




  /**
   * The LegendItem model module.
   * @module model/LegendItem
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>LegendItem</code>.
   * @alias module:model/LegendItem
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>LegendItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LegendItem} obj Optional instance to populate.
   * @return {module:model/LegendItem} The populated <code>LegendItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cmap')) {
        obj['cmap'] = ApiClient.convertToType(data['cmap'], 'String');
      }
      if (data.hasOwnProperty('cmap_discrete')) {
        obj['cmap_discrete'] = ApiClient.convertToType(data['cmap_discrete'], ['String']);
      }
      if (data.hasOwnProperty('colors')) {
        obj['colors'] = ApiClient.convertToType(data['colors'], ['String']);
      }
      if (data.hasOwnProperty('extend')) {
        obj['extend'] = ApiClient.convertToType(data['extend'], 'String');
      }
      if (data.hasOwnProperty('hatches')) {
        obj['hatches'] = ApiClient.convertToType(data['hatches'], ['String']);
      }
      if (data.hasOwnProperty('levels')) {
        obj['levels'] = ApiClient.convertToType(data['levels'], ['Number']);
      }
      if (data.hasOwnProperty('ticks')) {
        obj['ticks'] = ApiClient.convertToType(data['ticks'], ['Number']);
      }
      if (data.hasOwnProperty('tick_labels')) {
        obj['tick_labels'] = ApiClient.convertToType(data['tick_labels'], ['String']);
      }
      if (data.hasOwnProperty('linestyles')) {
        obj['linestyles'] = ApiClient.convertToType(data['linestyles'], ['String']);
      }
      if (data.hasOwnProperty('linewidths')) {
        obj['linewidths'] = ApiClient.convertToType(data['linewidths'], ['Number']);
      }
      if (data.hasOwnProperty('norm')) {
        obj['norm'] = Norm.constructFromObject(data['norm']);
      }
      if (data.hasOwnProperty('unit')) {
        obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
      }
      if (data.hasOwnProperty('vmax')) {
        obj['vmax'] = ApiClient.convertToType(data['vmax'], 'Number');
      }
      if (data.hasOwnProperty('vmin')) {
        obj['vmin'] = ApiClient.convertToType(data['vmin'], 'Number');
      }
      if (data.hasOwnProperty('mplkwargs')) {
        obj['mplkwargs'] = MplKwargs.constructFromObject(data['mplkwargs']);
      }
    }
    return obj;
  }

  /**
   * The named colourmap used by the plot. Possibly represents one of the default Matplotlib colourmaps, a cmocean Matplotlib colourmap, or a user-defined colourmap.
   * @member {String} cmap
   */
  exports.prototype['cmap'] = undefined;
  /**
   * A sorted array of discrete values in the colourmap. If the plot uses levels (e.g. contours), then the array will include the actual class colour. Otherwise, if the plot uses a continuous colour ramp (e.g. a pcolormesh), the array includes ten values sampled evenly between the low and the high value.
   * @member {Array.<String>} cmap_discrete
   */
  exports.prototype['cmap_discrete'] = undefined;
  /**
   * A sorted array of values referencing named colours for the lines in the plot (contour-style plots only). If the value is a string (rather than an array), that value applies to all lines.
   * @member {Array.<String>} colors
   */
  exports.prototype['colors'] = undefined;
  /**
   * Indicates whether the upper- or lower-boundary of the colourmap should be extended. Unless this is 'neither' or null, contour levels are automatically added to one or both ends of the range so that all data are included. These added ranges are then mapped to the special colormap values which default to the ends of the colormap range.
   * @member {module:model/LegendItem.ExtendEnum} extend
   */
  exports.prototype['extend'] = undefined;
  /**
   * Sorted array of hatch styles for the plot's levels
   * @member {Array.<module:model/LegendItem.HatchesEnum>} hatches
   */
  exports.prototype['hatches'] = undefined;
  /**
   * A sorted array of values in the dataset where breaks are to be drawn (e.g. contour lines)
   * @member {Array.<Number>} levels
   */
  exports.prototype['levels'] = undefined;
  /**
   * A sorted array of values where \"ticks\" (small leader lines) are to be drawn on the legend. With this property, some levels can be left without a tick, or ticks added between class breaks.
   * @member {Array.<Number>} ticks
   */
  exports.prototype['ticks'] = undefined;
  /**
   * A sorted array of values for the legend's ticks. With this property, ticks can be given non-default labels (such as human interpretations of critical numerical values).
   * @member {Array.<String>} tick_labels
   */
  exports.prototype['tick_labels'] = undefined;
  /**
   * A sorted array of linestyles for the plot levels
   * @member {Array.<module:model/LegendItem.LinestylesEnum>} linestyles
   */
  exports.prototype['linestyles'] = undefined;
  /**
   * A sorted array of linewidths for the plot levels
   * @member {Array.<Number>} linewidths
   */
  exports.prototype['linewidths'] = undefined;
  /**
   * @member {module:model/Norm} norm
   */
  exports.prototype['norm'] = undefined;
  /**
   * Text that is used to indicate the units on the scale; may include additional text beyond a representation of a unit (e.g. \"Low-level azimuthal shear (0.001/s)\")
   * @member {String} unit
   */
  exports.prototype['unit'] = undefined;
  /**
   * If present, indicates the upper colour boundary of a continuous plot (such as a pcolormesh).
   * @member {Number} vmax
   */
  exports.prototype['vmax'] = undefined;
  /**
   * If present, indicates the lower colour boundary of a continuous plot (such as a pcolormesh).
   * @member {Number} vmin
   */
  exports.prototype['vmin'] = undefined;
  /**
   * @member {module:model/MplKwargs} mplkwargs
   */
  exports.prototype['mplkwargs'] = undefined;


  /**
   * Allowed values for the <code>extend</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ExtendEnum = {
    /**
     * value: "neither"
     * @const
     */
    "neither": "neither",
    /**
     * value: "both"
     * @const
     */
    "both": "both",
    /**
     * value: "min"
     * @const
     */
    "min": "min",
    /**
     * value: "max"
     * @const
     */
    "max": "max",
    /**
     * value: "null"
     * @const
     */
    "null": "null"  };

  /**
   * Allowed values for the <code>hatches</code> property.
   * @enum {String}
   * @readonly
   */
  exports.HatchesEnum = {
    /**
     * value: "/"
     * @const
     */
    "/": "/",
    /**
     * value: "//"
     * @const
     */
    "//": "//",
    /**
     * value: "///"
     * @const
     */
    "///": "///",
    /**
     * value: "\\"
     * @const
     */
    "\": "\\",
    /**
     * value: "\\\\"
     * @const
     */
    "\\": "\\\\",
    /**
     * value: "\\\\\\"
     * @const
     */
    "\\\": "\\\\\\",
    /**
     * value: "|"
     * @const
     */
    "|": "|",
    /**
     * value: "||"
     * @const
     */
    "||": "||",
    /**
     * value: "|||"
     * @const
     */
    "|||": "|||",
    /**
     * value: "-"
     * @const
     */
    "-": "-",
    /**
     * value: "--"
     * @const
     */
    "--": "--",
    /**
     * value: "---"
     * @const
     */
    "---": "---",
    /**
     * value: "+"
     * @const
     */
    "+": "+",
    /**
     * value: "++"
     * @const
     */
    "++": "++",
    /**
     * value: "+++"
     * @const
     */
    "+++": "+++",
    /**
     * value: "x"
     * @const
     */
    "x": "x",
    /**
     * value: "xx"
     * @const
     */
    "xx": "xx",
    /**
     * value: "xxx"
     * @const
     */
    "xxx": "xxx",
    /**
     * value: "o"
     * @const
     */
    "o": "o",
    /**
     * value: "oo"
     * @const
     */
    "oo": "oo",
    /**
     * value: "ooo"
     * @const
     */
    "ooo": "ooo",
    /**
     * value: "O"
     * @const
     */
    "O": "O",
    /**
     * value: "OO"
     * @const
     */
    "OO": "OO",
    /**
     * value: "OOO"
     * @const
     */
    "OOO": "OOO",
    /**
     * value: "."
     * @const
     */
    ".": ".",
    /**
     * value: ".."
     * @const
     */
    "..": "..",
    /**
     * value: "..."
     * @const
     */
    "...": "...",
    /**
     * value: "*"
     * @const
     */
    "*": "*",
    /**
     * value: "**"
     * @const
     */
    "**": "**",
    /**
     * value: "***"
     * @const
     */
    "***": "***"  };
*/
  /**
   * Allowed values for the <code>linestyles</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LinestylesEnum = {
    /**
     * value: "solid"
     * @const
     */
    "solid": "solid",
    /**
     * value: "dashed"
     * @const
     */
    "dashed": "dashed",
    /**
     * value: "dashdot"
     * @const
     */
    "dashdot": "dashdot",
    /**
     * value: "dotted"
     * @const
     */
    "dotted": "dotted",
    /**
     * value: "-"
     * @const
     */
    "-": "-",
    /**
     * value: "--"
     * @const
     */
    "--": "--",
    /**
     * value: "-."
     * @const
     */
    "-.": "-.",
    /**
     * value: ":"
     * @const
     */
    ":": ":",
    /**
     * value: " "
     * @const
     */
    " ": " ",
    /**
     * value: ""
     * @const
     */
    "": "",
    /**
     * value: "null"
     * @const
     */
    "null": "null"  };
*/

  return exports;
}));


