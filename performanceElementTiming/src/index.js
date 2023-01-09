import "./styles.css";

document.getElementById("app").innerHTML = `
<img 
  src="https://cdn-images-1.medium.com/max/725/0*R2CETMgg1344gf0V.jpg" 
  elementtiming="big-image" 
  width="300" 
/>

<p 
  elementtiming="text" 
  id="text-id"
>
    text here
</p>
`;

const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

observer.observe({ entryTypes: ["element"] });
