import "./index.js";
import { WindowsHP1, WindowsHP2, noLaptopFound } from "./Data.js";

window.TheWFunction = function TheWFunction() {
  var OSselectedW = document.getElementById("WINDOWS-OS");

  var RAMSelected16 = document.getElementById("16_32GB");
  var RAMSelected4 = document.getElementById("4_8GB");

  // storgae memory vars;
  var StorageSelected500 = document.getElementById("500GB");
  var StorageSelected100 = document.getElementById("100GB");

  // price range vars
  var PriceSelected1000 = document.getElementById("<1000");

  // windows  only 2 laptops from hp

  // windows , + 100 gb storage ,4-8gb ram  , less 1000
  var user1SelectionCaseW =
    OSselectedW.checked === true &&
    PriceSelected1000.checked === true &&
    RAMSelected4.checked === true &&
    StorageSelected100.checked === true;
  // windows + 500 gb + 16gb-32gb + less than 1000
  var user2SelectionCaseW =
    OSselectedW.checked === true &&
    PriceSelected1000.checked === true &&
    RAMSelected16.checked === true &&
    StorageSelected500.checked === true;

  var ALList = document.getElementById("NO-Results-Box");
  var RLaptop;

  if (user1SelectionCaseW) {
    var RLaptop = WindowsHP1;
    console.log("the windows function is activated ");
    document.getElementById("RLaptopBox").innerHTML =
      "<p> the windows - HP laptop recommended for you is :  </p>";

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
  } else if (user2SelectionCaseW) {
    var RLaptop = WindowsHP2;
    console.log("the Windows function is activated ");
    document.getElementById("RLaptopBox").innerHTML =
      "<p> the windows - HP laptop recommended for you is :  </p>";

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
  }  else {
    console.log("fail to render!");
    console.log("Fail");
    var RLaptop = noLaptopFound ;
    document.getElementById("RLaptopBox").innerHTML =
      "<p> the laptop recommended for you is :  </p>";

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

    var ALList =
      "  see our full list of laptops here ";
    var linking = ALList.link("https://dpjh9.csb.app/");
    document.getElementById("NO-Results-Box").innerHTML = linking;
  }
};
