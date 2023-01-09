import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>SpeechRecognition API</h1>
<p>
  <button>Record</button>
</p>
<p class="result">

</p>
`;

const API = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new API();


document.querySelector("button").onclick = () => {
  recognition.start();
};

recognition.onresult = (event) => {
  const result = event.results[0][0].transcript;
  console.log(result);
  document.querySelector(".result").innerHTML = result;
};
