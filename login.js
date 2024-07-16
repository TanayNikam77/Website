const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

togglePassword.addEventListener('click', function () {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  this.classList.toggle('fa-eye-slash');
});

const form = document.getElementById('login-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  // Replace this with your login logic (e.g., send data to server)
  alert("Login successful!");
  window.location.href = "home.html";
});
