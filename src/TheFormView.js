import "./styles.css";
import "./index.js";
import The4QView from "./The4Qdisplay.js";
import FirstPage from "./FirstPage.js";

window.TheFormView = function TheFormView() {
  document.getElementById("app").innerHTML = `
  <div class="App">
<div><img class="ImageLaptop" src="https://storage.googleapis.com/test28764/Laptopicon.png">
<h2> Find a better Laptop </h2>
</div>
<div class="App-header"> 
<p> Which OS do you prefer ?</p>
  <form name="OSChoice">
  <!--option 3 ----->
  <!---<input type="radio" id="Mac-checked" value="MAC-OS" onclick="showLaptopBox()"> --->
  
  <input type="radio" id="MAC-OS" name="OS-choice" value="MAC" > 
  <label> Mac </label>
  <div id="xsLabel">  the most popular </div>
  <br>
  <br>
  <!--option 2 ----->
  <input type="radio" id="UBUNTU-OS" name="OS-choice" value="Ubuntu"> 
  <label> Linux-Ubuntu  </label>
  <div id="xsLabel"> most popular option of back-end development </div>
  <br>
  <br>
  <!--option 3 ----->
  <input type="radio" id="PURE-OS" name="OS-choice"  value="PureOS"> 
  <label> Linux- Pure OS  </label>
  <div id="xsLabel"> <a href="https://pureos.net/ "> what is PureOS? </a> </div>
  <br>
  <br>
  <!--option 4 ----->
  <input type="radio" id="WINDOWS-OS" name="OS-choice" value="Windows"> 
  <label> Windows  </label>
  <div id="xsLabel">  directx graphics support/ better gaming  </div>
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
</div>
<br>
<div class="R-results-B" id="laptop-link"></div>


<div id="NO-Results-Box"> </div>

</div>
`;
};

