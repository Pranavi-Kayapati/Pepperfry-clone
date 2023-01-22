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

signIn.addEventListener("click", () => {
  let inEmail = document.getElementById("signinemail").value;
  let inPassword = document.getElementById("signinpassword").value;
  let user = signUpData.find(
    (data) => data.email === inEmail && data.password === inPassword
  );
  if (user) {
    localStorage.setItem("user", JSON.stringify(user.name));
    alert("Loggedin Sucessfully");
    location.replace("index.html");
  } else {
    alert("incorrect email or password");
  }
});

window.addEventListener("load", () => {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    console.log(user);
    console.log(typeof user);
    let profile = document.querySelector(".body");
    let div = document.createElement("div");
    div.className = "box";
    let name = document.createElement("h3");
    name.textContent = "Hey!" + " " + user + " " + "Welcome.";
    let p = document.createElement("p");
    p.textContent = "Pleace Click The Link To Find Products";
    let furniture = document.createElement("p");
    furniture.setAttribute = ("href", "https://www.w3schools.com");
    furniture.style = "color:blue;font-size:18px";
    let link1 = document.createTextNode("Furniture");
    furniture.appendChild(link1);
    let favorites = document.createElement("p");
    favorites.setAttribute = ("href", "favurite.html");
    favorites.textContent = "Favorites";
    favorites.style = "color: blue;font-size:18px";
    profile.innerHTML = "";
    // profile.style.background = "none";
    let logout = document.createElement("button");
    logout.textContent = "log Out";
    logout.addEventListener("click", () => {
      localStorage.removeItem("user");
      location.replace("profile.html");
    });
    div.append(name, p, furniture, favorites, logout);
    profile.append(div);

    // profile.append(div);
  }
});
