import "./styles.css";

document.getElementById("app").innerHTML = `
<div class="container">
  <div class="notification">
  This is the remove child function in action
  </div>
  <h1>Web API Shots!</h1>
  <h2>Node.removeChild</h2>
</div>

`;

setTimeout(() => {
  const container = document.querySelector(".container");
  const notification = document.querySelector(".notification");
  container.removeChild(notification);
}, 3000);
