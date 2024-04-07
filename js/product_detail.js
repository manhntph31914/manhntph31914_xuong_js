function Product(name, price, img) {
  this.name = name;
  this.price = price;
  this.img = img;
}

var san_pham = [
  new Product("ip 1", 30000, ["./img/ip.jpg", "./img/test.jpg"]),
  new Product("ip 2", 30000, ["./img/ip.jpg", "./img/test.jpg"]),
  new Product("ip 3", 30000, ["./img/ip.jpg", "./img/test.jpg"]),
  new Product("ip 4", 30000, ["./img/ip.jpg", "./img/test.jpg"]),
  new Product("ip 5", 30000, ["./img/ip.jpg", "./img/test.jpg"]),
];

var url = window.location.search;
console.log(url);

var param = new URLSearchParams(url);

// console.log(param.get("index"));
// console.log(param.get("name"));
var index = param.get("index");

var product = san_pham[index];

var title = document.getElementById("title");

title.innerText = product["name"];

var price = document.getElementById("price");

price.innerText = product["price"];

var img = document.getElementById("img");

img.setAttribute("src", product["img"][0]);

// xu li click chon so luong

var minus = document.getElementsByClassName("minus")[0];
var num = document.getElementById("num");
var plus = document.getElementsByClassName("plus")[0];

minus.onclick = function () {
  var number = num.value;
  console.log(number);
  if (number > 1) {
    number--;
  }
  num.value = number;
};

plus.onclick = function () {
  var number = num.value;
  number++;
  num.value = number;
};

