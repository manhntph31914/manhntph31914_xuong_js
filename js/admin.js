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

var table = document.getElementsByTagName("table")[0];
var i = 1;
san_pham.forEach((element, index) => {
  var row =
    `<tr>
    <td>` +
    i++ +
    `</td>
    <td>` +
    element["name"] +
    `</td>
    <td>` +
    element["price"] +
    `</td>
    <td><img width="50px" height="50px" src="` +
    element["img"][0] +
    `" /></td>
    <td><a class="btn btn-warning " href="update_product.html?index=` +
    index +
    `">Sua</a></td>
    <td><a class="btn btn-danger  " href="#">Xoa</a></td>
  </tr>`;

  table.innerHTML += row;
});
//
function displayProducts() {
  var products = JSON.parse(localStorage.getItem("products")) || [];

  var tbody = document.getElementById("productTableBody");

  tbody.innerHTML = "";

  products.forEach(function (product, index) {
    var row = tbody.insertRow();
    var cellIndex = row.insertCell(0);
    var cellName = row.insertCell(1);
    var cellPrice = row.insertCell(2);
    var cellImg = row.insertCell(3);
    var cellEdit = row.insertCell(4);
    var cellDelete = row.insertCell(5);

    cellIndex.textContent = index + 1;
    cellName.textContent = product.name;
    cellPrice.textContent = product.price;
    cellImg.innerHTML = `<img src="${product.img}" alt="${product.name}" style="width: 100px; height: 100px;" />`;
    cellEdit.innerHTML = `<a class="btn btn-warning " href="./update_product.html">Sửa</a>`;
    cellDelete.innerHTML = `<button class="btn btn-danger " onclick="deleteProduct(${index})">Xóa</button>`;
  });
}
function deleteProduct(index) {
  var products = JSON.parse(localStorage.getItem("products")) || [];

  products.splice(index, 1);

  localStorage.setItem("products", JSON.stringify(products));

  displayProducts();
}
window.onload = function () {
  displayProducts();
};
