import "./styles.css";

document.getElementById("app").innerHTML = `
<img src="https://www.thedyslexicdeveloper.com/static/965102566b5e96617672a01ee925febb/b315d/profile-pic.jpg" elementtiming="big-image" />
<p elementtiming="text" id="text-id">text here</p>
`;

const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});
observer.observe({ entryTypes: ["element"] });
