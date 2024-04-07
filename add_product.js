function addProductForm() {
    event.preventDefault();
    var productName = document.getElementById("name").value;
    var productPrice = document.getElementById("price").value;
    var productImg = document.getElementById("img").value;
  
    var product = {
      name: productName,
      price: productPrice,
      img: productImg
    };
  
    var products = JSON.parse(localStorage.getItem("products")) || [];
  
    products.push(product);
  
    localStorage.setItem("products", JSON.stringify(products));
  
    alert("Thêm sản phẩm thành công!");
  
    setTimeout(function() {
      window.location.href = "admin.html";
    }, 1000);
  
  }
  