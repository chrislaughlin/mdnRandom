# PerformanceElementTiming

The **Performance Element Timing** API reports timing information on elements on the DOM. 

It supports elements like:
- images 
- imagines inside SVGs
- Poster 
- elements wityh background images 
- and text elements 

It allows you to capture timing information like:

- Load Time 
- Render Time 





In our example we render an image and paragraph, adding the `elementtiming` attribute to both. We then use the `PerformanceObserver` to **observe** the elements and get the timing data from them. 
