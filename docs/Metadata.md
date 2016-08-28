# WxTiles.Metadata

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A short, human-readable description of a layer that is suitable for inclusion in a list of available layers. | [optional] 
**description** | **String** | A long description of a layer, possibly including HTML tags to navigate users to glossaries or other sources of additional information. | [optional] 
**organisation** | **String** | Organisation responsible for publishing the data used in the layer. | [optional] 
**source** | **String** | The source of the data (such as a model). | [optional] 
**regions** | **[String]** |  | [optional] 
**unitSystem** | **String** | The system of units that the layer renders quantitative values in. Examples include \&quot;metric\&quot; and \&quot;uscs\&quot;, for layers that render with metric and United States customary system (USCS) units, respectively. A null value indicates that the unit system is unspecified or does not fit into a category (e.g. knots). This does not indicate exactly which units a plot will render, only a broad classification. This can be used to filter duplicate layers that only differ in whether they render the same physical phenomenon as, for example, millimetres or inches. There is no restriction on what value this string may take. | [optional] 


