const correctUser = "admin";
const correctPass = "1234";

window.onload = () => {
  if (localStorage.getItem("savedUser")) {
    document.getElementById("username").value = localStorage.getItem("savedUser");
    document.getElementById("remember").checked = true;
  }
};

function togglePassword() {
  const pass = document.getElementById("password");
  pass.type = pass.type === "password" ? "text" : "password";
}

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("msg");
  const remember = document.getElementById("remember").checked;

  if (user === "" || pass === "") {
    msg.style.color = "red";
    msg.innerText = "All fields are required";
    return;
  }

  if (user === correctUser && pass === correctPass) {
    msg.style.color = "green";
    msg.innerText = "Login Successful";

    if (remember) {
      localStorage.setItem("savedUser", user);
    } else {
      localStorage.removeItem("savedUser");
    }

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1500);
  } else {
    msg.style.color = "red";
    msg.innerText = "Invalid Login Details";
  }
}
