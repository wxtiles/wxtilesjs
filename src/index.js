/**
 * WXTiles
 * Make and explore beautiful, rapidly-refreshed weather maps with the WXTiles API
 *
 * OpenAPI spec version: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Bounds', 'model/Dimension', 'model/Error', 'model/Instance', 'model/Layer', 'model/LayerDefaults', 'model/Layers', 'model/LegendResources', 'model/Level', 'model/Levels', 'model/MaxNativeZoom', 'model/MinNativeZoom', 'model/PartialInstance', 'model/Region', 'model/Resources', 'model/Style', 'model/Tag', 'model/Time', 'model/Times', 'api/InstancesApi', 'api/LayersApi', 'api/LegendsApi', 'api/LevelsApi', 'api/StylesApi', 'api/TilesApi', 'api/TimesApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Bounds'), require('./model/Dimension'), require('./model/Error'), require('./model/Instance'), require('./model/Layer'), require('./model/LayerDefaults'), require('./model/Layers'), require('./model/LegendResources'), require('./model/Level'), require('./model/Levels'), require('./model/MaxNativeZoom'), require('./model/MinNativeZoom'), require('./model/PartialInstance'), require('./model/Region'), require('./model/Resources'), require('./model/Style'), require('./model/Tag'), require('./model/Time'), require('./model/Times'), require('./api/InstancesApi'), require('./api/LayersApi'), require('./api/LegendsApi'), require('./api/LevelsApi'), require('./api/StylesApi'), require('./api/TilesApi'), require('./api/TimesApi'));
  }
}(function(ApiClient, Bounds, Dimension, Error, Instance, Layer, LayerDefaults, Layers, LegendResources, Level, Levels, MaxNativeZoom, MinNativeZoom, PartialInstance, Region, Resources, Style, Tag, Time, Times, InstancesApi, LayersApi, LegendsApi, LevelsApi, StylesApi, TilesApi, TimesApi) {
  'use strict';

  /**
   * Make_and_explore_beautiful_rapidly_refreshed_weather_maps_with_the_WXTiles_API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var WxTiles = require('index'); // See note below*.
   * var xxxSvc = new WxTiles.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new WxTiles.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
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
   * @version 3.0.0
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
     * The Dimension model constructor.
     * @property {module:model/Dimension}
     */
    Dimension: Dimension,
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
     * The LayerDefaults model constructor.
     * @property {module:model/LayerDefaults}
     */
    LayerDefaults: LayerDefaults,
    /**
     * The Layers model constructor.
     * @property {module:model/Layers}
     */
    Layers: Layers,
    /**
     * The LegendResources model constructor.
     * @property {module:model/LegendResources}
     */
    LegendResources: LegendResources,
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
     * The MaxNativeZoom model constructor.
     * @property {module:model/MaxNativeZoom}
     */
    MaxNativeZoom: MaxNativeZoom,
    /**
     * The MinNativeZoom model constructor.
     * @property {module:model/MinNativeZoom}
     */
    MinNativeZoom: MinNativeZoom,
    /**
     * The PartialInstance model constructor.
     * @property {module:model/PartialInstance}
     */
    PartialInstance: PartialInstance,
    /**
     * The Region model constructor.
     * @property {module:model/Region}
     */
    Region: Region,
    /**
     * The Resources model constructor.
     * @property {module:model/Resources}
     */
    Resources: Resources,
    /**
     * The Style model constructor.
     * @property {module:model/Style}
     */
    Style: Style,
    /**
     * The Tag model constructor.
     * @property {module:model/Tag}
     */
    Tag: Tag,
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
     * The InstancesApi service constructor.
     * @property {module:api/InstancesApi}
     */
    InstancesApi: InstancesApi,
    /**
     * The LayersApi service constructor.
     * @property {module:api/LayersApi}
     */
    LayersApi: LayersApi,
    /**
     * The LegendsApi service constructor.
     * @property {module:api/LegendsApi}
     */
    LegendsApi: LegendsApi,
    /**
     * The LevelsApi service constructor.
     * @property {module:api/LevelsApi}
     */
    LevelsApi: LevelsApi,
    /**
     * The StylesApi service constructor.
     * @property {module:api/StylesApi}
     */
    StylesApi: StylesApi,
    /**
     * The TilesApi service constructor.
     * @property {module:api/TilesApi}
     */
    TilesApi: TilesApi,
    /**
     * The TimesApi service constructor.
     * @property {module:api/TimesApi}
     */
    TimesApi: TimesApi
  };

  return exports;
}));
