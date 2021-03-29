import "./styles.css";
import TheFormView from "./TheFormView";

window.FirstPage = function FirstPage() {
  document.getElementById("app").innerHTML = `
<div class="App">
<div><img class="ImageLaptop" src="https://storage.googleapis.com/test28764/Laptopicon.png">
<h2> Find a better Laptop</h2>
<button class="submit-button" onclick="TheFormView()" > see options  </button>
</div>


</div>
`;
};
