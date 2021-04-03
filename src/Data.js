var noLaptopFound = {
  laptopName: " no results are found based on your selection",
  RAM: "n/a",
  storage: "n/a",
  priceRange: "n/a",
  TotalPrice: "n/a",
  StoreLink: "n/a"
};
// case 1 match
var PUREOS1 = {
  laptopName: "Librem_14",
  RAM: "64GB",
  storage: "N/A",
  priceRange: "$1000-1500",
  TotalPrice: "$1299",
  StoreLink: 
  "<button><a href= 'https://shop.puri.sm/shop/librem-14/'> Purism store </a> </button>"
};

// case 2 match // previously librem_15 
var PUREOS2 = {
  laptopName: "Librem_14",
  RAM: "32GB",
  storage: "N/A",
  priceRange: "$1000-1500",
  TotalPrice: "$1399",
  StoreLink:  "<button><a href= 'https://shop.puri.sm/shop/librem-14/'> Purism store </a> </button>"
};

// case 3 macth
// mac //500 gb of storage + (8 gb RAM) +($1000-$1500)
var LaptopMAC1 = {
  laptopName: "MacBook Air -i5 Processor -8GB",
  RAM: "8GB",
  storage: "512GB",
  priceRange: "($1000-$1500)",
  TotalPrice: "$1,299",
  StoreLink:
 "<button><a href= 'https://www.apple.com/shop/buy-mac/macbook-air/space-gray-1.1ghz-quad-core-core-i5-processor-with-turbo-boost-up-to-3.5ghz-512gb'>Apple store </a> </button>"
    
};

//MAC + //500 gb of storage + (16-32 gb RAM) +($2000-$3500)
// case match 4
var LaptopMAC2 = {
  laptopName: "MacBook Air -i5 Processor -16gb",
  RAM: "16GB",
  storage: "512GB",
  priceRange: "($1000-$1500)",
  TotalPrice: "$1,499",
  StoreLink:
  "<button><a href= 'https://www.apple.com/shop/buy-mac/macbook-air/space-gray-1.1ghz-quad-core-core-i5-processor-with-turbo-boost-up-to-3.5ghz-512gb'>Apple store </a> </button>"
    
};

// case 5 macth
// mac +  4tb + 64gb + 3500+ ( $4,599 MAC)
var LaptopMAC3 = {
  laptopName: "MacBook pro -64gb",
  RAM: "64GB",
  storage: "4TB=4000GB",
  priceRange: "(3500+)",
  TotalPrice: "$4,599",
  StoreLink:
  "<button><a href= 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch-space-gray-2.3ghz-8-core-processor-1tb'>Apple store </a> </button>"
};

//mac + 100 gb + 8gb ram  + (1000 -1500)  (999 mac air )
// case 6 macth
var LaptopMAC4 = {
  laptopName: "MacBook air - i3 Processor  -8gb",
  RAM: "8GB",
  storage: "256GB",
  priceRange: "(>$1000)",
  TotalPrice: "$999",
  StoreLink:
  "<button><a href= 'https://www.apple.com/shop/buy-mac/macbook-air/space-gray-1.1ghz-dual-core-core-i3-processor-with-turbo-boost-up-to-3.2ghz-256gb'>Apple store </a> </button>"
};

// case 7 mactch
//ubuntu + //1 TB of storage + (64 gb RAM) +($2000-$3500)
var UbuntuDELL1 = {
  laptopName: "Dell Precision 7550 Mobile Workstation- 64GB",
  RAM: "64GB",
  storage: "1TB=1000GB",
  priceRange: "($2000-$3500)",
  TotalPrice: "$3,411.63",
  StoreLink:
  "<button><a href= 'https://www.dell.com/en-us/work/shop/workstations-isv-certified/new-precision-7550-mobile-workstation/spd/precision-15-7550-laptop/xctop755015us_vivp?configurationid=627a8af0-dadf-4e62-80ac-8ec4b5c6532b'> Dell store </a></button>"
};

// case 8 match
//ubuntu + //500gb of storage + (16-32 gb RAM) +($2000-$3500)
var UbuntuDELL2 = {
  laptopName: "Dell Precision 7550 Mobile Workstation- 16GB",
  RAM: "16GB",
  storage: "512GB",
  priceRange: "($2000-3500)",
  TotalPrice: "$2,019.81",
  StoreLink:
  "<button><a href= 'https://www.dell.com/en-us/work/shop/workstations-isv-certified/new-precision-7550-mobile-workstation/spd/precision-15-7550-laptop/xctop755015us_vivp?configurationid=542af896-786a-48b3-8a16-73c5d5fc1848'> Dell store </a></button>"
};

// case 9 mactch
// ubuntu + 100 gb + 16gb  , 1000 -1500

var UbuntuDELL3 = {
  laptopName: "DELL Precision 3550 Mobile Workstation -16GB",
  RAM: "16GB",
  storage: "128GB",
  priceRange: "$1000-1500",
  TotalPrice: "$1,059",
  StoreLink:
  "<button><a href= 'https://www.dell.com/en-us/work/shop/workstations-isv-certified/new-precision-3550-mobile-workstation/spd/precision-15-3550-laptop/xctop355015us_vivp?configurationid=6e1a6176-5acf-422f-918f-4afa84d3e59f'> Dell store </a></button>"
};

// case 10 macth
//ubuntu + 100 gb + 4gb + < 1000 ($851 4gb ubuntu )
var UbuntuDELL4 = {
  laptopName: "DELL Precision 3550 Mobile Workstation -4GB",
  RAM: "4GB",
  storage: "128GB",
  priceRange: "<$1000",
  TotalPrice: "$851",
  StoreLink:
  "<button><a href= 'https://www.dell.com/en-us/work/shop/workstations-isv-certified/new-precision-7550-mobile-workstation/spd/precision-15-7550-laptop/xctop755015us_vivp?configurationid=627a8af0-dadf-4e62-80ac-8ec4b5c6532b'> Dell store </a></button>"
};

// case 11 match
// windows , + 100 gb storage ,4-8gb ram  , less 1000
var WindowsHP1 = {
  laptopName: "2020 HP 14 inch HD Laptop",
  RAM: "4GB",
  storage: "128GB",
  priceRange: ">$1000",
  TotalPrice: "$439.99",
  StoreLink:
  "<button><a href= 'https://www.amazon.com/HP-pulgadas-estudiantes-Bluetooth-accesorios/dp/B087RH1D1K/ref=sr_1_17_sspa?dchild=1&keywords=laptop%2Bhp&qid=1599539623&sr=8-17-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFBNkY4Uk5XNDNTUiZlbmNyeXB0ZWRJZD1BMDY0NjI3Mk9TWEJKUjJNS1JHQiZlbmNyeXB0ZWRBZElkPUEwODY4MzM3MU5IVkpMSFVJSVg5MyZ3aWRnZXROYW1lPXNwX2F0Zl9uZXh0JmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1'> amazon</a></button>"
};
// case 12 macth
// windows + 500 gb + 16gb-32gb + less than 1000
var WindowsHP2 = {
  laptopName: "HP Pavilion 15-inch Laptop",
  RAM: "16GB",
  storage: "512GB",
  priceRange: ">$1000",
  TotalPrice: "$899.99",
  StoreLink:
  "<button><a href= 'https://www.amazon.com/gp/product/B085B63QYR/ref=s9_acss_bw_cg_PCLTMC_4b1_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-2&pf_rd_r=QNGGV88V213AQ3J4BNMC&pf_rd_t=101&pf_rd_p=66e5f3d1-3557-49df-bd60-0eab7dfdc0d3&pf_rd_i=565108%22,%22store-link%22%20:%20%22https://www.amazon.com/gp/product/B085B63QYR/ref=s9_acss_bw_cg_PCLTMC_4b1_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-2&pf_rd_r=QNGGV88V213AQ3J4BNMC&pf_rd_t=101&pf_rd_p=66e5f3d1-3557-49df-bd60-0eab7dfdc0d3&pf_rd_i=565108'> amazon</a></button>"
};

export {
  noLaptopFound,
  PUREOS1,
  PUREOS2,
  LaptopMAC1,
  LaptopMAC2,
  LaptopMAC3,
  LaptopMAC4,
  UbuntuDELL1,
  UbuntuDELL2,
  UbuntuDELL3,
  UbuntuDELL4,
  WindowsHP1,
  WindowsHP2
};
