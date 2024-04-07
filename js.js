// xu li phan quyen
var user = document.getElementById("user");
var action = document.getElementsByClassName("action")[0];

if (user) {
  user.onclick = function () {
    action.classList.toggle("hidden");
  };
}
document.addEventListener("DOMContentLoaded", function() {
  const cartIcon = document.getElementById("cartIcon");

  cartIcon.addEventListener("click", function(event) {
      event.preventDefault();
      alert("Giỏ hàng đang trong quá trình phát triển!");
    
  });
});



// form tìm kiếm
// var btn_add_product = document.getElementById("add_product");

// btn_add_product.onclick = function (event) {
//   event.preventDefault();
//   var form = document.getElementsByTagName("form")[0];
//   form.submit();
//   // console.log($_GET);

//   form.onsubmit = function (event) {
//     event.preventDefault();
//     console.log("ok");
//   };
// };

// var form = document.getElementsByTagName("form")[0];
// form.onsubmit = function (event) {
//   event.preventDefault();
//   console.log(form.search.value);
//   var search = form.search.value;
//   // gui search den server viet bang php de luu vao data base

//   var pro = document.getElementsByTagName("section")[0];
//   pro.innerHTML = "<h1>" + search + "</h1>";
// };
