# CloudburstApi.LegendItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cmap** | **String** | The named colourmap used by the plot. Possibly represents one of the default Matplotlib colourmaps, a cmocean Matplotlib colourmap, or a user-defined colourmap. | [optional] 
**cmapDiscrete** | **[String]** | A sorted array of discrete values in the colourmap. If the plot uses levels (e.g. contours), then the array will include the actual class colour. Otherwise, if the plot uses a continuous colour ramp (e.g. a pcolormesh), the array includes ten values sampled evenly between the low and the high value. | [optional] 
**colors** | **[String]** | A sorted array of values referencing named colours for the lines in the plot (contour-style plots only). If the value is a string (rather than an array), that value applies to all lines. | [optional] 
**extend** | **String** | Indicates whether the upper- or lower-boundary of the colourmap should be extended. Unless this is &#39;neither&#39; or null, contour levels are automatically added to one or both ends of the range so that all data are included. These added ranges are then mapped to the special colormap values which default to the ends of the colormap range. | [optional] 
**hatches** | **[String]** | Sorted array of hatch styles for the plot&#39;s levels | [optional] 
**levels** | **[Number]** | A sorted array of values in the dataset where breaks are to be drawn (e.g. contour lines) | [optional] 
**ticks** | **[Number]** | A sorted array of values where \&quot;ticks\&quot; (small leader lines) are to be drawn on the legend. With this property, some levels can be left without a tick, or ticks added between class breaks. | [optional] 
**tickLabels** | **[String]** | A sorted array of values for the legend&#39;s ticks. With this property, ticks can be given non-default labels (such as human interpretations of critical numerical values). | [optional] 
**linestyles** | **[String]** | A sorted array of linestyles for the plot levels | [optional] 
**linewidths** | **[Number]** | A sorted array of linewidths for the plot levels | [optional] 
**norm** | [**Norm**](Norm.md) |  | [optional] 
**unit** | **String** | Text that is used to indicate the units on the scale; may include additional text beyond a representation of a unit (e.g. \&quot;Low-level azimuthal shear (0.001/s)\&quot;) | [optional] 
**vmax** | **Number** | If present, indicates the upper colour boundary of a continuous plot (such as a pcolormesh). | [optional] 
**vmin** | **Number** | If present, indicates the lower colour boundary of a continuous plot (such as a pcolormesh). | [optional] 
**mplkwargs** | [**MplKwargs**](MplKwargs.md) |  | [optional] 


