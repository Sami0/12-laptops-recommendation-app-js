import "./index.js";
import { PUREOS1, PUREOS2 } from "./Data.js";

window.ThePureFunction = function ThePureFunction() {
  var OSselectedP = document.getElementById("PURE-OS");

  var RAMSelected64 = document.getElementById("64GB");
  var RAMSelected16 = document.getElementById("16_32GB");

  // price range vars

  var PriceSelected1500 = document.getElementById("1000-1500");

  // pure cases 2 only

  var user1SelectionCasePure =
    OSselectedP.checked === true &&
    PriceSelected1500.checked === true &&
    RAMSelected64.checked === true;

  var user2SelectionCasePure =
    OSselectedP.checked === true &&
    PriceSelected1500.checked === true &&
    RAMSelected16.checked === true;

  var ALList = document.getElementById("NO-Results-Box");
  var RLaptop;

  if (user1SelectionCasePure) {
    var RLaptop = PUREOS1;
    console.log("the PureOS function is activated ");
    document.getElementById("RLaptopBox").innerHTML =
      "<p> the PureOS laptop recommended for you is :  </p>";

    console.log(RLaptop["laptopName"] + "  is recommended");
    document.getElementById("laptop-name").innerHTML =
      "<p> Laptop name : </p>" + RLaptop["laptopName"];

    document.getElementById("laptop-performance").innerHTML =
      "<p >RAM : </p>" +
      RLaptop["RAM"] +
      "<p >storage memory : </p>" +
      RLaptop["storage"];

    document.getElementById("laptop-price").innerHTML =
      "<p >price Range : </p>" +
      RLaptop["priceRange"] +
      "<p >price : </p>" +
      RLaptop["TotalPrice"];

    document.getElementById("laptop-link").innerHTML =
      "<p >store link  : </p>" + RLaptop["StoreLink"];
  } else if (user2SelectionCasePure) {
    var RLaptop = PUREOS2;
    console.log("the PureOS function is activated ");
    document.getElementById("RLaptopBox").innerHTML =
      "<p> the PureOS laptop recommended for you is :  </p>";

    console.log(RLaptop["laptopName"] + "  is recommended");
    document.getElementById("laptop-name").innerHTML =
      "<p> Laptop name : </p>" + RLaptop["laptopName"];

    document.getElementById("laptop-performance").innerHTML =
      "<p >RAM : </p>" +
      RLaptop["RAM"] +
      "<p >storage memory : </p>" +
      RLaptop["storage"];

    document.getElementById("laptop-price").innerHTML =
      "<p >price Range : </p>" +
      RLaptop["priceRange"] +
      "<p >price : </p>" +
      RLaptop["TotalPrice"];

    document.getElementById("laptop-link").innerHTML =
      "<p >store link  : </p>" + RLaptop["StoreLink"];
  } else {
    console.log("fail to render!");
    console.log("Fail");

    var ALList =
      " no results based on your selection, see our full list of laptops here ";
    var linking = ALList.link("https://dpjh9.csb.app/");
    document.getElementById("NO-Results-Box").innerHTML = linking;
  }
};
