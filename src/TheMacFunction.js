import "./index.js";
import { LaptopMAC1, LaptopMAC2, LaptopMAC3, LaptopMAC4 , noLaptopFound} from "./Data.js";

window.TheMacFunction = function TheMacFunction() {
  var OSselectedM = document.getElementById("MAC-OS");
  // RAM selection vars
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
  // MAC CASES (4)

  // mac //500 gb of storage + (8 gb RAM) +($1000-$1500)
  // case 3
  var user1SelectionCaseMac =
    OSselectedM.checked === true &&
    PriceSelected1500.checked === true &&
    RAMSelected4.checked === true &&
    StorageSelected500.checked === true;

  //MAC + //500 gb of storage + (16-32 gb RAM) +($2000-$3500)
  // case 4
  var user2SelectionCaseMac =
    OSselectedM.checked === true &&
    PriceSelected1500.checked === true &&
    RAMSelected16.checked === true &&
    StorageSelected500.checked === true;

  // mac +  4tb + 64gb + 3500+ ( $4,599 MAC)
  // case 5
  var user3SelectionCaseMac =
    OSselectedM.checked === true &&
    PriceSelected3500.checked === true &&
    RAMSelected64.checked === true &&
    StorageSelected4TB.checked === true;

  //mac + 100 gb + 8gb ram  + (1000 -1500)  (999 mac air )
  // case 6
  var user4SelectionCaseMac =
    OSselectedM.checked === true &&
    PriceSelected1000.checked === true &&
    RAMSelected4.checked === true &&
    StorageSelected100.checked === true;

  var ALList = document.getElementById("NO-Results-Box");
  var RLaptop;

  if (user1SelectionCaseMac) {
    var RLaptop = LaptopMAC1;
    console.log("the mac function is activated ");
    document.getElementById("RLaptopBox").innerHTML =
      "<p> the mac laptop recommended for you is :  </p>";

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
      "<p ><a href='https://www.apple.com/shop/buy-mac/macbook-air/space-gray-1.1ghz-quad-core-core-i5-processor-with-turbo-boost-up-to-3.5ghz-512gb'> Apple Store link to macbook air I5 </a>: </p>";
  } else if (user2SelectionCaseMac) {
    var RLaptop = LaptopMAC2;

    console.log("the mac function is activated ");
    document.getElementById("RLaptopBox").innerHTML =
      "<p> the mac laptop recommended for you is :  </p>";

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
  } else if (user3SelectionCaseMac) {
    var RLaptop = LaptopMAC3;

    console.log("the mac function is activated ");
    document.getElementById("RLaptopBox").innerHTML =
      "<p> the mac laptop recommended for you is :  </p>";

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
  } else if (user4SelectionCaseMac) {
    var RLaptop = LaptopMAC4;

    console.log("the mac function is activated ");
    document.getElementById("RLaptopBox").innerHTML =
      "<p> the mac laptop recommended for you is :  </p>";

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
      var RLaptop = noLaptopFound ;
      document.getElementById("RLaptopBox").innerHTML =
        "<p> the  laptop recommended for you is :  </p>";
  
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
