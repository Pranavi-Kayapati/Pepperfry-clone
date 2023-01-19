const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
let Pname = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let signUp = document.querySelector(".signupbtn");
let signIn = document.querySelector(".signinbtn");
let body = document.querySelector("body");

let signUpData = JSON.parse(localStorage.getItem("Pdata")) || [];

signUpButton.addEventListener("click", () =>
  container.classList.add("right-panel-active")
);
signInButton.addEventListener("click", () =>
  container.classList.remove("right-panel-active")
);

signUp.addEventListener("click", () => {
  if (Pname.value !== "" && email.value !== "" && password.value !== "") {
    location.replace("index.html");
    alert("😍SignUp successfully🥳 \n Thank You For Choosing Us");
    let obj = {
      name: Pname.value,
      email: email.value,
      password: password.value,
    };
    signUpData.push(obj);
    localStorage.setItem("Pdata", JSON.stringify(signUpData));
  } else {
    alert("Please Enter Details");
  }
});

let inEmail = document.getElementById("signinemail").value;
let inPassword = document.getElementById("signinpassword").value;

signIn.addEventListener("click", () => {
  let userloggedIn;
  let user = signUpData.find(
    (data) => data.email === inEmail && data.password === inPassword
  );
  location.replace("index.html");
  if (user) {
    alert("Loggedin Sucessfully");
    location.replace("index.html");
  } else {
    alert("incorrect email or password");
  }
});
