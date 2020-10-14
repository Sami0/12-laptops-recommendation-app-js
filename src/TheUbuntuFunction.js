import "./index.js";
import { UbuntuDELL1, UbuntuDELL2, UbuntuDELL3, UbuntuDELL4 } from "./Data.js";

window.TheUbuntuFunction = function TheUbuntuFunction() {
  var OSselectedU = document.getElementById("UBUNTU-OS");

  var RAMSelected64 = document.getElementById("64GB");
  var RAMSelected16 = document.getElementById("16_32GB");
  var RAMSelected4 = document.getElementById("4_8GB");

  // storgae memory vars
  var StorageSelected4TB = document.getElementById("4000GB");
  var StorageSelected1TB = document.getElementById("1000GB");
  var StorageSelected500 = document.getElementById("500GB");
  var StorageSelected100 = document.getElementById("100GB");

  // price range vars
  var PriceSelected1000 = document.getElementById("<1000");
  var PriceSelected1500 = document.getElementById("1000-1500");
  var PriceSelected2000 = document.getElementById("1500-2000");
  var PriceSelected2500 = document.getElementById("2000-3500");
  var PriceSelected3500 = document.getElementById("3500+");

  // ubuntu cases (4)

  //ubuntu + //1TB of storage + (64 gb RAM) +($2000-$3500)

  // case 7
  var user1SelectionCaseUbuntu =
    OSselectedU.checked === true &&
    PriceSelected2500.checked === true &&
    RAMSelected64.checked === true &&
    StorageSelected1TB.checked === true;

  //ubuntu + //500 gb of storage + (16 gb RAM) +($2000-$3500)
  // case 8
  var user2SelectionCaseUbuntu =
    OSselectedU.checked === true &&
    PriceSelected2500.checked === true &&
    RAMSelected16.checked === true &&
    StorageSelected500.checked === true;

  // case 9
  //ubuntu + 100 gb + 4gb + < 1000 ($851 4gb ubuntu )
  var user3SelectionCaseUbuntu =
    OSselectedU.checked === true &&
    PriceSelected1500.checked === true &&
    RAMSelected16.checked === true &&
    StorageSelected100.checked === true;

  // case 10
  // ubuntu + 100 gb + 16gb  , 1000 -1500
  var user4SelectionCaseUbuntu =
    OSselectedU.checked === true &&
    PriceSelected1000.checked === true &&
    RAMSelected4.checked === true &&
    StorageSelected100.checked === true;

  var ALList = document.getElementById("NO-Results-Box");
  var RLaptop;

  if (user1SelectionCaseUbuntu) {
    var RLaptop = UbuntuDELL1;
    console.log("the Ubuntu function is activated ");
    document.getElementById("RLaptopBox").innerHTML =
      "<p> the ubuntu - DELL laptop recommended for you is :  </p>";

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
  } else if (user2SelectionCaseUbuntu) {
    var RLaptop = UbuntuDELL2;

    console.log("the ubuntu function is activated ");
    document.getElementById("RLaptopBox").innerHTML =
      "<p> the ubuntu - DELL laptop recommended for you is :  </p>";

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
  } else if (user3SelectionCaseUbuntu) {
    var RLaptop = UbuntuDELL3;

    console.log("the ubuntu function is activated ");
    document.getElementById("RLaptopBox").innerHTML =
      "<p> the ubuntu - DELL laptop recommended for you is :  </p>";

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
  } else if (user4SelectionCaseUbuntu) {
    var RLaptop = UbuntuDELL4;

    console.log("the ubuntu function is activated ");
    document.getElementById("RLaptopBox").innerHTML =
      "<p> the ubuntu - DELL laptop recommended for you is :  </p>";

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
    //   console.log(laptopChosenDATA);
    console.log("fail to render!");
    //   console.log(RLaptop["laptopName"]);
    console.log("Fail");

    var ALList =
      " no results based on your selection, see our full list of laptops here ";
    var linking = ALList.link("https://dpjh9.csb.app/");
    document.getElementById("NO-Results-Box").innerHTML = linking;
  }
};
