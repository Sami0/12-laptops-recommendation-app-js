import "./index.js";
import TheMacFunction from "./TheMacFunction.js";
import TheUbuntuFunction from "./TheUbuntuFunction.js";
import ThePureFunction from "./ThePureFunction.js";
import TheWFunction from "./TheWindowsFunction.js";

window.The4QView = function The4QView() {
  var OSselectedM = document.getElementById("MAC-OS");
  var OSselectedU = document.getElementById("UBUNTU-OS");
  var OSselectedP = document.getElementById("PURE-OS");
  var OSselectedW = document.getElementById("WINDOWS-OS");

 
  var QuestionTwo =
    "<div class='choiceStyle'>"+
    " <p>  do you need more than 1000 GB of storage ?<p>" +
    ' <form>  <input type="radio" id="4000GB" name="storage-choice"  value="4000GB">  <label> 4TB (4000 GB) or more </label> <div id="xsLabel">  I need the Most storage possible</div> <br> <br>' +
    ' <input type="radio"  id="1000GB" name="storage-choice"  value="1000GB"> <label> at least 1 TB = 1000 GB   </label> <div id="xsLabel">  1000 gb is necessary</div><br> <br>' +
    '<input type="radio"  id="500GB" name="storage-choice"  value="500GB"> <label> 500 GB <div id="xsLabel">  500 GB is good enough </div> </label> <br> <br>' +
    '  <input type="radio"  id="100GB" name="storage-choice"  value="100GB"> <label> 100 gb or less   </label><div id="xsLabel">  even less than 100 GB is fine.</div> </label> <br> <br></form>' +
    "</div>";

  var QuestionThree =
    "<div class='choiceStyle'>" +
    " <p>  What is your RAM Memory / speed preference </p>" +
    '<form> <input type="radio"   id="64GB" name="RAM-choice"  value="64GB">  <label> (64 GB)</label> <div id="xsLabel"> fastest speed available is top priority </div>   <br><br>' +
    '<input type="radio"   id="16_32GB" name="RAM-choice"  value="16_32GB">   <label> (16GB - 32 GB)</label> <div id="xsLabel"> moderate speed  </div>'  +
    '<br><br><input type="radio"   id="4_8GB" name="RAM-choice"  value="4_8GB"> <label>(4GB-8GB )</label> <div id="xsLabel"> most basic speed is okay   </div></form>' +
    "</div>";

  var QuestionFour =
    "<div class='price-choice'>" +
    " <p> What is your Price range for total value </p>" +
    '<form> <input type="radio"  id="<1000" name="PriceR-choice"  value="<1000"><label>less than $1000  </label><br><br>' +
    ' <input type="radio"  id="1000-1500" name="PriceR-choice"  value="app1500"> <label>-$1000-1500 </label> <br><br>' +
    '<input type="radio"  id="1500-2000" name="PriceR-choice"  value="app2000"> <label>-1500-$2000 </label> <br><br>' +
    '<input type="radio"  id="2000-3500" name="PriceR-choice"  value="app3500"><label>-2000-3500 </label> <br><br>' +
    '<input type="radio"  id="3500+" name="PriceR-choice"  value="3500+"><label>- more than $3500 </label> <br> <br> </form>' +
    "</div>";

  var QuestionsList = QuestionTwo + QuestionThree + QuestionFour;

  if (OSselectedM.checked === true) {
    console.log("yes I recived mac ");
    document.getElementById("buttons-collection").innerHTML =
      QuestionsList +
      '<button class="submit-button" id="TheMacFunction" onclick="TheMacFunction()"> recommend me a Mac laptop </button>  ';
  } else if (OSselectedU.checked === true) {
    document.getElementById("buttons-collection").innerHTML =
      QuestionsList +
      '<button class="submit-button" id="TheUbuntuFunction" onclick="TheUbuntuFunction()"> recommend me ubuntu laptop </button>  ';
  } else if (OSselectedP.checked === true) {
    document.getElementById("buttons-collection").innerHTML =
      QuestionsList +
      '<button class="submit-button" id="ThPureFunction" onclick="ThePureFunction()"> recommend me a Pure OS laptop </button>  ';
  } else if (OSselectedW.checked === true) {
    document.getElementById("buttons-collection").innerHTML =
      QuestionsList +
      '<button class="submit-button" id="TheWFunction" onclick="TheWFunction()" > recommend me a Windows laptop </button>  ';
  } else {
    document.getElementById("theMessage").innerHTML =
      "<p> you must select an option </p>";
  }
};
