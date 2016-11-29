# WxTiles.Resources

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tile** | **String** | Template URL for requesting styled, PNG image tiles. Elements of the path enclosed in angle brackets need to be appropriately substituted when making requests. | [optional] 
**vtile** | **String** | Template URL for requesting vector tiles in the Mapbox vector tile (MVT) specification, as protocol buffers. Elements of the path enclosed in angle brackets need to be appropriately substituted when making requests. | [optional] 
**legend** | **String** | URL for requesting legends as PNG images that correspond to the PNG image tiles. The \&quot;size\&quot; and \&quot;orientation\&quot; elements in the path (enclosed in angle brackets) need to be substituted. Valid values for size are \&quot;small\&quot; and \&quot;large\&quot;. Valid values for orientation are \&quot;horizontal\&quot; and \&quot;vertical\&quot;. | [optional] 
**jsonlegend** | **String** | URL for requesting legends as JSON representations. These JSON representations are used internally to construct the image versions of the legend, and can be used to render custom legends client-side. The \&quot;size\&quot; and \&quot;orientation\&quot; elements in the path (enclosed in angle brackets) need to be substituted. | [optional] 


