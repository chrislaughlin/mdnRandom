import "./styles.css";

document.getElementById("app").innerHTML = `
<div class="main">
  This is an example of the ResizeObserver in action 
</div>
`;

const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const width = entry.contentRect.width;
    const height = entry.contentRect.height;

    console.log(`${height} x ${width}`);

    if (width < 100) {
      document.querySelector(".main").style.background = "grey";
    } else if (width > 100 && width < 149) {
      document.querySelector(".main").style.background = "green";
    } else if (width > 150 && width < 199) {
      document.querySelector(".main").style.background = "blue";
    }
  }
});

resizeObserver.observe(document.querySelector(".main"));
