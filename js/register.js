document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if (!email || !password) {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }

    const user = { email, password };

    let users = localStorage.getItem('users');
    users = users ? JSON.parse(users) : [];

    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));

    alert("Đăng ký thành công!");

    setTimeout(function() {
      window.location.href = "login.html";
    }, 1000);

    form.reset();
  });
});
