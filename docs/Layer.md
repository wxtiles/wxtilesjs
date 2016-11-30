# WxTiles.Layer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Layer ID | 
**description** | **String** | A long description of a layer, possibly including HTML tags to navigate users to glossaries or other sources of additional information. | [optional] 
**name** | **String** | A short, human-readable description of a layer that is suitable for inclusion in a list of available layers. | 
**laypersonDescription** | **String** | A long description of a layer, which is intended for display to a &#39;layperson&#39; who should not be confronted with technical, meteological or other jargon when browsing layer information. | [optional] 
**organisation** | **String** | Organisation responsible for publishing the data used in the layer. | [optional] 
**source** | **String** | The source of the data (such as a model). | [optional] 
**regions** | [**[Region]**](Region.md) | A list of the regions that the layer should be considered applicable. | [optional] 
**tags** | [**[Tag]**](Tag.md) | A list of tags that may be used to support free-text search. | [optional] 
**instances** | [**[PartialInstance]**](PartialInstance.md) | A list of the instances of this layer. | 
**styles** | [**[Style]**](Style.md) | A list of the styles the layer implements | 
**dimensions** | [**[Dimension]**](Dimension.md) | A list of dimensions used by the layer. Neither the names nor order of the dimensions are standardised, following the CF convention. Instead they reflect the declarations of underlying dataset metadata. | 
**bounds** | [**Bounds**](Bounds.md) |  | 
**instanceType** | **String** | One of a typology of instance types. In this version, &#39;cyclic&#39; (model cycles) and &#39;observational&#39; (for observations that will be repeated) are used.. Nullable (e.g. if instances are not applicable, or the type unspecified). | [optional] 
**instanceDescription** | **String** | Free-form text explaining the role of instances for the associated layer | [optional] 
**minNativeZoom** | [**MinNativeZoom**](MinNativeZoom.md) |  | 
**maxNativeZoom** | [**MaxNativeZoom**](MaxNativeZoom.md) |  | 
**resources** | [**Resources**](Resources.md) |  | 
**defaults** | [**LayerDefaults**](LayerDefaults.md) |  | [optional] 


<a name="InstanceTypeEnum"></a>
## Enum: InstanceTypeEnum


* `cyclic` (value: `"cyclic"`)

* `observational` (value: `"observational"`)




