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
  new Product("ip 6", 30000, ["./img/ip.jpg", "./img/test.jpg"]),
];

var list_product = document.getElementsByClassName("list-product")[0];
san_pham.forEach(function (element, index) {
  var product =
    `<div class="product">
<div class="img">
  <img
    src="` +
    element["img"][0] +
    `"
    alt=""
  />
</div>
<div class="info">
  <h3><a href="product_detail.html?index=` +
    index +
    `">` +
    element["name"] +
    `</a></h3>
  <i>Price: ` +
    element["price"] +
    `</i>
</div>
<div class="xxx">
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-regular fa-star"></i>
  <i class="fa-regular fa-star"></i>
  <b>Đã bán 15.6k</b>
</div>
</div>`;

  list_product.innerHTML += product;
});

// xu li ve trang chu

var back_home = document.getElementById("back_home");

back_home.onclick = function () {
  window.location.href = "index.html";
};

// xu li tim kiem

var form = document.getElementsByTagName("form")[0];

form.onsubmit = function (e) {
  e.preventDefault();
  var search = form.search.value;
  //   console.log(search);

  var item;
  var i;
  san_pham.forEach(function (element, index) {
    if (search == element["name"]) {
      item = element;
      i = index;
      return;
    }
  });
  var product =
    `<div class="product">
<div class="img">
  <img
    src="` +
    item["img"][0] +
    `"
    alt=""
  />
</div>
<div class="info">
  <h3><a href="product_detail.html?index=` +
    i +
    `">` +
    item["name"] +
    `</a></h3>
  <i>Price: ` +
    item["price"] +
    `</i>
</div>
<div class="xxx">
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-regular fa-star"></i>
  <i class="fa-regular fa-star"></i>
  <b>Đã bán 15.6k</b>
</div>
</div>`;

  list_product.innerHTML = product;
};

// slide show =============================================

var arr_img = ["./img/slide1.jpg", "./img/slide2.jpg", "./img/slide3.jpg"];

var img = document.getElementById("img_slide");
var first = document.getElementsByClassName("first")[0];
var prev = document.getElementsByClassName("prev")[0];
var stopp = document.getElementsByClassName("stop")[0];
var start = document.getElementsByClassName("start")[0];
var next = document.getElementsByClassName("next")[0];
var last = document.getElementsByClassName("last")[0];

var len = arr_img.length;

var index = 0;

//chay tu dong
function set() {
  return setInterval(() => {
    if (index == len - 1) {
      index = 0;
    } else {
      index++;
    }

    img.src = arr_img[index];
  }, 2000);
}

// luc nao cung chay
var intevalId = set();

first.onclick = function () {
  // huy chay tu dong
  clearInterval(intevalId);
  index = 0;
  img.src = arr_img[index];
  //khoi tao chay tu dong
  intevalId = set();
};

last.onclick = function () {
  // huy chay tu dong
  clearInterval(intevalId);
  index = len - 1;
  img.src = arr_img[index];
  //khoi tao chay tu dong
  intevalId = set();
};

stopp.onclick = function () {
  // huy chay tu dong
  clearInterval(intevalId);
  intevalId = 0;
};

start.onclick = function () {
  //khoi tao chay tu dong
  if (intevalId == 0) {
    intevalId = set();
  }
};

next.onclick = function () {
  //huy chay tu dong
  clearTimeout(intevalId);
  if (index == len - 1) {
    index = 0;
  } else {
    index++;
  }
  img.src = arr_img[index];
  //khoi tao chay tu dong
  intevalId = set();
};

prev.onclick = function () {
  //huy chay tu dong
  clearTimeout(intevalId);
  if (index == 0) {
    index = len - 1;
  } else {
    index--;
  }
  img.src = arr_img[index];
  //khoi tao chay tu dong
  intevalId = set();
};

