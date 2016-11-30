# WxTiles.Resources

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tile** | **String** | Template URL for requesting styled, PNG image tiles. Elements of the path enclosed in angle brackets need to be appropriately substituted when making requests. If not present, the layer does not support rendering as an image. | [optional] 
**vtile** | **String** | Template URL for requesting vector tiles in the Mapbox vector tile (MVT) specification, as protocol buffers. Elements of the path enclosed in angle brackets need to be appropriately substituted when making requests. If not present, the layer does not support rendering as a vector tile. | [optional] 
**times** | **String** | Tempalte URL for requesting available times for a layer instance. Elements of the path enclosed in angle brackets need to be appropriately substituted when making requests. If not present, the layer does not support a time dimension. | [optional] 
**levels** | **String** | Tempalte URL for requesting available levels for a layer instance. Elements of the path enclosed in angle brackets need to be appropriately substituted when making requests. If not present, the layer does not support a a vertical dimension. | [optional] 


