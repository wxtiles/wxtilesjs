(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/Bounds', './model/Error', './model/Instance', './model/Layer', './model/Layers', './model/Legend', './model/LegendItem', './model/LegendPlot', './model/Level', './model/Levels', './model/Metadata', './model/MplKwargs', './model/Norm', './model/Resources', './model/Time', './model/Times', './api/TilesApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Bounds'), require('./model/Error'), require('./model/Instance'), require('./model/Layer'), require('./model/Layers'), require('./model/Legend'), require('./model/LegendItem'), require('./model/LegendPlot'), require('./model/Level'), require('./model/Levels'), require('./model/Metadata'), require('./model/MplKwargs'), require('./model/Norm'), require('./model/Resources'), require('./model/Time'), require('./model/Times'), require('./api/TilesApi'));
  }
}(function(ApiClient, Bounds, Error, Instance, Layer, Layers, Legend, LegendItem, LegendPlot, Level, Levels, Metadata, MplKwargs, Norm, Resources, Time, Times, TilesApi) {
  'use strict';

  /**
   * Make and explore beautiful, rapidly-refreshed weather maps with the Cloudburst API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var WxTiles = require('./index'); // See note below*.
   * var xxxSvc = new WxTiles.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new WxTiles.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['./index'], function(){...}) and put the application logic within the
   * callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new WxTiles.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new WxTiles.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.2.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Bounds model constructor.
     * @property {module:model/Bounds}
     */
    Bounds: Bounds,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The Instance model constructor.
     * @property {module:model/Instance}
     */
    Instance: Instance,
    /**
     * The Layer model constructor.
     * @property {module:model/Layer}
     */
    Layer: Layer,
    /**
     * The Layers model constructor.
     * @property {module:model/Layers}
     */
    Layers: Layers,
    /**
     * The Legend model constructor.
     * @property {module:model/Legend}
     */
    Legend: Legend,
    /**
     * The LegendItem model constructor.
     * @property {module:model/LegendItem}
     */
    LegendItem: LegendItem,
    /**
     * The LegendPlot model constructor.
     * @property {module:model/LegendPlot}
     */
    LegendPlot: LegendPlot,
    /**
     * The Level model constructor.
     * @property {module:model/Level}
     */
    Level: Level,
    /**
     * The Levels model constructor.
     * @property {module:model/Levels}
     */
    Levels: Levels,
    /**
     * The Metadata model constructor.
     * @property {module:model/Metadata}
     */
    Metadata: Metadata,
    /**
     * The MplKwargs model constructor.
     * @property {module:model/MplKwargs}
     */
    MplKwargs: MplKwargs,
    /**
     * The Norm model constructor.
     * @property {module:model/Norm}
     */
    Norm: Norm,
    /**
     * The Resources model constructor.
     * @property {module:model/Resources}
     */
    Resources: Resources,
    /**
     * The Time model constructor.
     * @property {module:model/Time}
     */
    Time: Time,
    /**
     * The Times model constructor.
     * @property {module:model/Times}
     */
    Times: Times,
    /**
     * The TilesApi service constructor.
     * @property {module:api/TilesApi}
     */
    TilesApi: TilesApi
  };

  return exports;
}));
