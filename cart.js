// console.log(data)

let cartitems = document.querySelector(".productsmenu");

// console.log(cartData);

window.addEventListener("load", () => displayCart());

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
}

function removeItem(id) {
  let cartData = JSON.parse(localStorage.getItem("cartData")) || [];

  let filterData = cartData.filter((data) => id !== data.id);
  localStorage.setItem("cartData", JSON.stringify(filterData));
  displayCart();
}

function totalPrice(){
  let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
for(let i=0; i<cartData.length;i++){
  let h1=document.createElement("h1");
  h1.textContent=cartData[i].price*cartData[i].quantity;
}
}
