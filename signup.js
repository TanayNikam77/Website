const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

togglePassword.addEventListener('click', function () {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  this.classList.toggle('fa-eye-slash');
});

const form = document.getElementById('signup-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Check if passwords match
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
  }

  // **Signup logic (replace with your implementation):**
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Here you would typically send the data (name, email, password) to your server-side script for processing (e.g., using AJAX or fetch API). The server would then handle user creation and send a response (e.g., success message or error message).

  alert("**Signup successful!** ");
  window.location.href = "home.html";
});