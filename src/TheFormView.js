import "./styles.css";
import "./index.js";
import The4QView from "./The4Qdisplay.js";
import FirstPage from "./FirstPage.js";

window.TheFormView = function TheFormView() {
  document.getElementById("app").innerHTML = `
  <div class="App">
<div><img class="ImageLaptop" src="https://storage.googleapis.com/test28764/Laptopicon.png">
<h2> Find the perfect laptop you've been looking for</h2>
<p> answering the form below will help us find the best option :</p>
</div>
<div class="App-header"> 
<p> Q1 : which OS do you prefer ?  ( you can select multiple options ) </p>
  <form name="OSChoice">
  <!--option 3 ----->
  <!---<input type="radio" id="Mac-checked" value="MAC-OS" onclick="showLaptopBox()"> --->
  
  <input type="radio" id="MAC-OS" name="OS-choice" value="MAC" > 
  <label> Mac </label>
  <br>
  <br>
  <!--option 2 ----->
  <input type="radio" id="UBUNTU-OS" name="OS-choice" value="Ubuntu"> 
  <label> Linux-Ubuntu  </label>
  <br>
  <br>
  <!--option 3 ----->
  <input type="radio" id="PURE-OS" name="OS-choice"  value="PureOS"> 
  <label> Linux- Pure OS  </label>
  <br>
  <br>
  <!--option 4 ----->
  <input type="radio" id="WINDOWS-OS" name="OS-choice" value="Windows"> 
  <label> Windows  </label>
  
  </form>

  <button class="submit-button" onclick="The4QView()">see Next questions </button>
  <button class="back-button" onclick="FirstPage()">go back to first page </button>


<div id="theMessage"></div>

<div id="buttons-collection" >
 
</div>

<div id="RLaptopBox"> </div>
<div class="R-results-B" id="laptop-name"></div>
<br>
<div class="R-results-B" id="laptop-performance"></div>
<br>
<div class="R-results-B" id="laptop-price">
<p>* please note that prices reflect data collected in (august - september 2020) </p>
</div>
<br>
<div class="R-results-B" id="laptop-link"></div>


<div id="NO-Results-Box"> </div>

</div>
`;
};
