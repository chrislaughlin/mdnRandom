# PerformanceElementTiming

The **Performance Element Timing** API reports timing information on any element on the DOM. It allows you to capture timing information like:

- Load Time 
- Render Time 


In our example we render an image and paragraph, adding the `elementtiming` attribute to both. We then use the `PerformanceObserver` to **observe** the elements and get the timing data from them. 