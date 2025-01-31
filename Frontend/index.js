async function login() {
  const login_email = document.getElementById("login-email");
  const login_password = document.getElementById("login-password");

  const login = {
    email: login_email.value,
    password: login_password.value,
  };
  var response = await fetch("http://localhost:5000/auth/signin", {
    method: "POST",
    body: JSON.stringify(login),
    headers: { "Content-Type": "application/json" },
  });
  response = await response.json();
  if (response.success) {
    setCookie("auth_token", response.auth_token, 10);
    update_DOM_auth_token();
  }
}

async function signup() {
  const signup_email = document.getElementById("signup-email");
  const signup_name = document.getElementById("signup-name");
  const signup_password = document.getElementById("signup-password");

  const signup = {
    name: signup_name.value,
    email: signup_email.value,
    password: signup_password.value,
  };
  var response = await fetch("http://localhost:5000/auth/signup", {
    method: "POST",
    body: JSON.stringify(signup),
    headers: { "Content-Type": "application/json" },
  });
  response = await response.json();
  if (response.success) {
    setCookie("auth_token", response.auth_token, 10);
    update_DOM_auth_token();
  }
}
