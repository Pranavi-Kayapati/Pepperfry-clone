let addToCart = document.querySelectorAll("#add");
let fav = document.querySelectorAll("#like");
let productContainer = document.getElementById("productContainer");
// console.log(fav);
// let productData = JSON.parse(localStorage.getItem("data")) || [];
// console.log(productData);

//function to add products into cart
let cartData = JSON.parse(localStorage.getItem("cartData")) || [];

// cartProducts(data);
window.addEventListener("load", () => cartProducts(data));

function cartProducts(data) {
  data.forEach((product) => {
    for (let i = 0; i < addToCart.length; i++) {
      addToCart[i].addEventListener("click", () => {
        if (i + 1 == product.id) {
          if (checkDuplicate(product)) {
            alert("Product Already in Cart");
          } else {
            cartData.push({ ...product, quantity: 1 });
            localStorage.setItem("cartData", JSON.stringify(cartData));
            alert("Product Added To Cart");
          }
        }
      });
    }
  });
}

//function to add products into favorite page
let favData = JSON.parse(localStorage.getItem("favData")) || [];
favProducts(data);

function favProducts(data) {
  data.forEach((product) => {
    for (let i = 0; i < fav.length; i++) {
      fav[i].addEventListener("click", () => {
        if (i + 1 == product.id) {
          if (checkDuplicate(product)) {
            alert("Product Already Your Favorite");
          } else {
            favData.push({ ...product });
            localStorage.setItem("favData", JSON.stringify(favData));
            alert("Product Added to Favorites");
          }
        }
      });
    }
  });
}

//fuction to check duplicates in cart or favorite
function checkDuplicate(pruoduct) {
  for (let i = 0; i < cartData.length; i++) {
    if (cartData[i].id === pruoduct.id) {
      return true;
    }
  }
  return false;
}
let furniture = document.querySelector(".furniture");

window.addEventListener("load", () => {
  let flag = localStorage.getItem("flag");
  console.log(flag);
  if (flag) {
    furniture.style = "display:none";
    let filtered = data.filter((item) => item.desc.includes(flag));
    console.log(filtered);
    displayFiltered(filtered);
  }
  localStorage.removeItem("flag");
});
let body = document.querySelector("body");

function displayFiltered(data) {
  let searchProducts = document.createElement("div");
  searchProducts.className = "productsmenu";
  data.forEach((ele) => {
    let card = document.createElement("div");
    card.className = "products";
    let img = document.createElement("img");
    img.src = ele.image;
    let desc = document.createElement("p");
    desc.textContent = ele.desc;
    let brand = document.createElement("p");
    brand.className = "grey";
    brand.textContent = ele.company;
    let price = document.createElement("p");
    price.className = "price";
    price.textContent = `₹${ele.price}`;
    let discount = document.createElement("p");
    discount.className = "discount";
    discount.textContent = ele.discount;
    let buttondiv = document.createElement("div");
    buttondiv.className = "button";
    let add = document.createElement("button");
    add.id = ele.id;
    add.textContent = "Add To Cart";
    add.addEventListener("click", () => searchAddCart(ele.id));
    let like = document.createElement("button");
    like.textContent = "❤️";
    buttondiv.append(add, like);
    card.append(img, desc, brand, price, discount, buttondiv);
    searchProducts.append(card);
    productContainer.append(searchProducts);
  });
}

function searchAddCart(id) {
  let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
  let product = data.find((product) => product.id == id);
  let isproduct = cartData.findIndex((product) => product.id == id);
  if (isproduct >= 0) {
    alert("item already in cart");
  } else {
    cartData.push({ ...product, quantity: 1 });
    localStorage.setItem("cartData", JSON.stringify(cartData));
    alert("item is added to cart");
  }
}
