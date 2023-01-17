
  function openNav() {
    document.getElementById("mySidebar").style.width = "260px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }

  
  function openModalNav() {
    document.getElementById("mySidebar").style.width = "260px";
  }

  // $('.show-item-1').click(function(){
  //   $('.sidebar .show-list-1').css("display", "block");
  // })

  //#region Modal heder menu
  $(".show-item-1").click(function(){
    $(".sidebarModal .show-list-1").toggle();
  });
  
  $(".show-item-2").click(function(){
    $(".sidebarModal .show-list-2").toggle();
  });
  
  $(".show-item-3").click(function(){
    $(".sidebarModal .show-list-3").toggle();
  });
  
  $(".show-item-4").click(function(){
    $(".sidebarModal .show-list-4").toggle();
  });
  
  $(".show-item-5").click(function(){
    $(".sidebarModal .show-list-5").toggle();
  });
  
  $(".show-item-6").click(function(){
    $(".sidebarModal .show-list-6").toggle();
  });
  
  $(".show-item-7").click(function(){
    $(".sidebarModal .show-list-7").toggle();
  });
  //#endregion Modal heder menu


  $(".show-item-1").click(function(){
    $(".sidebar .show-list-1").toggle();
  });
  
  $(".show-item-2").click(function(){
    $(".sidebar .show-list-2").toggle();
  });
  
  $(".show-item-3").click(function(){
    $(".sidebar .show-list-3").toggle();
  });
  
  $(".show-item-4").click(function(){
    $(".sidebar .show-list-4").toggle();
  });
  
  $(".show-item-5").click(function(){
    $(".sidebar .show-list-5").toggle();
  });
  
  $(".show-item-6").click(function(){
    $(".sidebar .show-list-6").toggle();
  });
  
  $(".show-item-7").click(function(){
    $(".sidebar .show-list-7").toggle();
  });

  
function payment()
{
    window.location.href = '../html/payment-order.html';
}

const products = [
  {
    id: 1,
    name: "Sofa Square Hight 3 Chỗ 3333 Da L2Z",
    price: 146430000,
    img: "../images/sofa-osaka-3-cho.jpg",

    imgAlter: "../images/sofa-osaka-3-cho.jpg",
    type:"nonSofa"
  },
  {
    id: 2,
    name: "Sofa Square Hight 3 Chỗ 3333 Da L2Z1",
    price: 6430000,
    img: "../images/ghe-an-peak-mau-xanh-1.jpg",

    imgAlter: "../images/sofa-osaka-3-cho.jpg",
    type:"nonSofa"
  },
  {
    id: 3,
    name: "Sofa Square Hight 3 Chỗ 3333 Da L2Z2",
    price: 14420000,
    img: "../images/ban-an-peak-van-may-hien-dai-ceramic-1.jpg",

    imgAlter: "../images/sofa-osaka-3-cho.jpg",
    type:"nonSofa"
  },
  {
    id: 4,
    name: "Sofa Square Hight 3 Chỗ 3333 Da L2Z3",
    price: 5430000,
    img: "../images/armchair-osaka-1.jpg",

    imgAlter: "../images/sofa-osaka-3-cho.jpg",
    type:"nonSofa"
  },
  {
    id: 5,
    name: "Sofa Square Hight 3 Chỗ 3333 Da L2Z4",
    price: 12430000 ,
    img: "../images/CONSOLE-TABLE-1jpg.jpg",

    imgAlter: "../images/sofa-osaka-3-cho.jpg",
    type:"nonSofa"
  },
  {
    id: 6,
    name: "Sofa Square Hight 3 Chỗ 3333 Da L2Z5",
    price: 4430000,
    img: "../images/BAN-BEN-RENEE-EP-1.jpg",

    imgAlter: "../images/sofa-osaka-3-cho.jpg",
    type:"nonSofa"
  },
  {
    id: 7,
    name: "Sofa Square Hight 3 Chỗ 3333 Da L2Z6",
    price: 4430000,
    img: "../images/BAN-BEN-FLAMINGO-1.jpg",

    imgAlter: "../images/sofa-osaka-3-cho.jpg",
    type:"nonSofa"
  },
  {
    id: 8,
    name: "Sofa Square Hight 3 Chỗ 3333 Da L2Z7",
    price: 146430000,
    img: "../images/ARMCHAIR-PEONY-FLOWER-1.jpg",

    imgAlter: "../images/sofa-osaka-3-cho.jpg",
    type:"nonSofa"
  },

  // #region type Sofa 
  {
    id: 9,
    name: "Sofa Square Hight 3 Chỗ 3333 Da L2Z78",
    price: 146430000,
    img: "../images/sofa-osaka-3-cho.jpg",

    imgAlter: "../images/sofa-osaka-3-cho-2.jpg",
    type:"Sofa"
  },
  {
    id: 10,
    name: "Sofa Square Hight 3 Chỗ 3333 Da L2Z9",
    price: 6430000,
    img: "../images/sofa-3-cho-boc-da-penny-mau-be-1jpg.jpg",

    imgAlter: "../images/sofa-3-cho-boc-da-penny-mau-be-2.jpg",
    type:"Sofa"
  },

  {
    id: 11,
    name: "Sofa Square Hight 3 Chỗ 3333 Da L2Z10",
    price: 14420000,
    img: "../images/sofa-penny-3-cho-vai-xanh.jpg",

    imgAlter: "../images/sofa-square-1.jpg",
    type:"Sofa"
  },

  {
    id: 12,
    name: "Sofa Square Hight 3 Chỗ 3333 Da L2Z11",
    price: 5430000,
    img: "../images/sofa-penny-3-cho-vai-cam.jpg",

    imgAlter: "../images/sofa-penny-vai-cam-2.jpg",
    type:"Sofa"
  },

  {
    id: 13,
    name: "Sofa Square Hight 3 Chỗ 3333 Da L2Z12",
    price: 146430000,
    img: "../images/sofa-penny-vai-tim-1.jpg",

    imgAlter: "../images/sofa-poppy-3-cho-vai-vang-5-600x400.jpg",
    type:"Sofa"
  },

  {
    id: 14,
    name: "Sofa Square Hight 3 Chỗ 3333 Da L2Z13",
    price: 6430000,
    img: "../images/sofa-penny-3-cho-dacognac-1.jpg",

    imgAlter: "../images/sofa-penny-3-cho-dacognac-2.jpg",
    type:"Sofa"
  },

  {
    id: 15,
    name: "Sofa Square Hight 3 Chỗ 3333 Da L2Z14",
    price: 14420000,
    img: "../images/sofa-penny-3-cho-vai-xanh-xam.jpg",

    imgAlter: "../images/sofa-osaka-3-cho-2.jpg",
    type:"Sofa"
  },

  {
    id: 16,
    name: "Sofa Square Hight 3 Chỗ 3333 Da L2Z15",
    price: 5430000,
    img: "../images/sofa-penny-3-cho-xanh-1.jpg",

    imgAlter: "../images/sofa-penny-3-cho-vai-xanh-xam-2.jpg",
    type:"Sofa"
  },

  {
    id: 17,
    name: "Sofa Square Hight 3 Chỗ 3333 Da L2Z16",
    price: 146430000,
    img: "../images/sofa-osaka-3-cho.jpg",

    imgAlter: "../images/sofa-osaka-3-cho-2.jpg",
    type:"Sofa"
  },

  {
    id: 18,
    name: "Sofa Square Hight 3 Chỗ 3333 Da L2Z17",
    price: 6430000,
    img: "../images/sofa-3-cho-boc-da-penny-mau-be-1jpg.jpg",

    imgAlter: "../images/sofa-3-cho-boc-da-penny-mau-be-2.jpg",
    type:"Sofa"
  },

  {
    id: 19,
    name: "Sofa Square Hight 3 Chỗ 3333 Da L2Z18",
    price: 14420000,
    img: "../images/sofa-penny-3-cho-vai-xanh.jpg",

    imgAlter: "../images/sofa-square-1.jpg",
    type:"Sofa"
  },

  {
    id: 20,
    name: "Sofa Square Hight 3 Chỗ 3333 Da L2Z19",
    price: 5430000,
    img: "../images/sofa-penny-3-cho-vai-cam.jpg",

    imgAlter: "../images/sofa-penny-vai-cam-2.jpg",
    type:"Sofa"
  },

  {
    id: 21,
    name: "Sofa Square Hight 3 Chỗ 3333 Da L2Z20",
    price: 146430000,
    img: "../images/sofa-penny-vai-tim-1.jpg",

    imgAlter: "../images/sofa-poppy-3-cho-vai-vang-5-600x400.jpg",
    type:"Sofa"
  },

  {
    id: 22,
    name: "Sofa Square Hight 3 Chỗ 3333 Da L2Z21",
    price: 6430000,
    img: "../images/sofa-penny-3-cho-dacognac-1.jpg",

    imgAlter: "../images/sofa-penny-3-cho-dacognac-2.jpg",
    type:"Sofa"
  },

  {
    id: 23,
    name: "Sofa Square Hight 3 Chỗ 3333 Da L2Z22",
    price: 14420000,
    img: "../images/sofa-penny-3-cho-vai-xanh-xam.jpg",

    imgAlter: "../images/sofa-osaka-3-cho-2.jpg",
    type:"Sofa"
  },

  {
    id: 24,
    name: "Sofa Square Hight 3 Chỗ 3333 Da L2Z23",
    price: 5430000,
    img: "../images/sofa-penny-3-cho-xanh-1.jpg",

    imgAlter: "../images/sofa-penny-3-cho-vai-xanh-xam-2.jpg",
    type:"Sofa"
  },
  // #endregion type Sofa 

  
  // #region name

  // #endregion
]

function goToCart(){
  location.href = "../html/cart.html";
}

function goToCartIndex(){
  location.href = "assets/html/cart.html";
}

function goToPayment(){
  location.href = "../html/payment-order.html";
}

function goToPaymentIndex(){
  location.href = "assets/html/payment-order.html";
}

function goToCate(){
  location.href = "../../index.html";
}


function goToHome(){
  location.href = "../../index.html";
}

function payment(){
  location.href = "../html/payment-order.html";
}


  
