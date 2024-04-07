document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    localStorage.setItem("isLoggedIn", "true");


    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    if (!email || !password) {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      alert("Đăng nhập thành công!");
      setTimeout(() => {
        location.href = "index.html";
      }, 1000);
      
    } else {
      alert("Thông tin đăng nhập không chính xác!");
    }
    form.reset();
  });
});

