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

// xu li lay index

var url_search = window.location.search;

var params = new URLSearchParams(url_search);

var index = params.get("index");

var product = san_pham[index];
console.log(product);

var form = document.getElementsByTagName("form")[0];

var input_name = form.name;
var input_price = form.price;

input_name.value = product["name"];
input_price.value = product["price"];

var err = [];
form.onsubmit = function (e) {
  e.preventDefault();

  console.log("ok");

  var name = form.name.value.trim();
  var price = form.price.value.trim();
  var err_name = document.getElementsByClassName("err_name")[0];
  var err_price = document.getElementsByClassName("err_price")[0];

  if (name.length > 0) {
    err_name.setAttribute("style", "display:none");
    err_name.innerText = "";
  }

  if (price.length > 0) {
    err_price.setAttribute("style", "display:none");
    err_price.innerText = "";
  }

  if (name.length == 0) {
    err_name.setAttribute("style", "display:block;color:red");
    err_name.innerText = "ten khong duoc de trong";
    err["name_err"] = "ten khong duoc de trong";
  } else if (name.length < 3) {
    console.log(2);
    // console.log(err_name);
    err_name.setAttribute("style", "display:block;color:red");
    err_name.innerText = "ten khong duoc it hon 3 ki tu";
    err["name_err"] = "ten khong it hon 3 ki tu";
  } else if (price.length == 0) {
    err_price.setAttribute("style", "display:block;color:red");
    err_price.innerText = "gia khong duoc de trong";
  }
};



