// console.log(data)

let cartitems = document.querySelector(".productsmenu");

// console.log(cartData);

window.addEventListener("load", () => {
  displayCart();
  let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
  if (cartData.length) {
    totalPrice();
  }
});

function displayCart() {
  let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
  cartitems.innerHTML = "";
  cartData.forEach((ele) => {
    let card = document.createElement("div");
    card.className = "products";
    let img = document.createElement("img");
    img.src = ele.image;
    let desc = document.createElement("p");
    desc.textContent = ele.desc;
    let company = document.createElement("p");
    company.className = "grey";
    company.textContent = ele.company;
    let price = document.createElement("p");
    price.className = "price";
    price.textContent = `₹${ele.price}`;
    let discount = document.createElement("p");
    discount.className = "discount";
    discount.textContent = ele.discount;
    let buttondiv = document.createElement("div");
    buttondiv.className = "button";
    let remove = document.createElement("button");
    remove.textContent = "Remove";

    remove.addEventListener("click", () => {
      removeItem(ele.id);
    });
    let like = document.createElement("button");
    like.textContent = "❤️";
    let quantity = document.createElement("div");
    let tot = document.createElement("p");
    tot.textContent = ele.quantity;
    let inc = document.createElement("p");
    inc.textContent = "+";
    inc.addEventListener("click", () => {
      // tot.textContent = ele.quantity + 1;
      // console.log(ele);
      // console.log(tot.textContent);
      incDec("+", ele.id);
    });
    let dec = document.createElement("p");
    dec.textContent = "-";
    dec.addEventListener("click", () => {
      if (ele.quantity > 1) {
        // tot.textContent = ele.quantity--;
        incDec("-", ele.id);
      }
    });
    // let checkout = document.createElement("div");
    // let orderDetails = document.createElement("h4");
    // orderDetails.textContent = "Your Order Details";
    // let totalProducts = document.createElement("h5");
    // totalProducts.textContent = cartData.length;
    // let placeOrder = document.createElement("button");
    // placeOrder.textContent = "place Order";
    // let totalCart=document.createElement("h1");
    // totalCart.textContent=`₹${ele.price*ele.quantity}`
    // let totalPrice=document.createElement("p");
    // totalPrice.textContent=`₹${ele.price*ele.quantity}`
    // totalCart.append(totalPrice)
    quantity.append(inc, tot, dec);
    buttondiv.append(remove, like);
    card.append(img, desc, company, price, discount, buttondiv, quantity);
    cartitems.append(card);
  });
}

function incDec(type, id) {
  let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
  let index = cartData.findIndex((item) => item.id == id);
  let product = cartData[index];

  if (type == "+") {
    product.quantity = product.quantity + 1;
  } else {
    console.log(product.quantity);
    product.quantity = product.quantity - 1;
  }
  cartData[index] = product;
  localStorage.setItem("cartData", JSON.stringify(cartData));
  displayCart();
  totalPrice();
}

function removeItem(id) {
  let cartData = JSON.parse(localStorage.getItem("cartData")) || [];

  let filterData = cartData.filter((data) => id !== data.id);
  localStorage.setItem("cartData", JSON.stringify(filterData));
  displayCart();
  totalPrice();
}

function totalPrice() {
  let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
  let totalCartPrice = 0;
  let checkout = document.createElement("div");
  checkout.className = "checkout";
  let orderDetails = document.createElement("h4");
  orderDetails.textContent = "Your Order Details";
  let totalProducts = document.createElement("h5");
  totalProducts.textContent = "Total Products" + "-" + cartData.length;
  let placeOrder = document.createElement("button");
  placeOrder.id = "placeOrder";
  placeOrder.setAttribute("data-bs-toggle", "modal");
  placeOrder.setAttribute("data-bs-target", "#placeOrder");
  placeOrder.textContent = "place Order";
  placeOrder.style =
    "border:none;padding:5px;border-radius:5px;background-color:orange;font-size:18px";
  placeOrder.addEventListener("click", () => {
    const flag = localStorage.getItem("flag");
    if (flag == "true") {
      placeOrder.textContent = "Ordered";
      placeOrder.style = "background-color:green";
      localStorage.removeItem("flag");
    }
  });
  let h1 = document.createElement("h5");
  for (let i = 0; i < cartData.length; i++) {
    totalCartPrice += cartData[i].price * cartData[i].quantity;
  }
  h1.textContent = "Your Total Cart Price" + "-" + `₹ ${totalCartPrice}`;
  checkout.append(orderDetails, totalProducts, h1, placeOrder);
  cartitems.append(checkout);
  // checkout.insertBefore(cartitems);
}

function placeOrder() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let address = document.getElementById("address").value;
  let location = document.getElementById("location").value;
  if (
    name == "" ||
    email == "" ||
    number == "" ||
    address == "" ||
    location == ""
  ) {
    alert("Please Enter Required Details");
  } else {
    localStorage.setItem("flag", true);
    alert("Ordered Sucessfully");
  }
}
