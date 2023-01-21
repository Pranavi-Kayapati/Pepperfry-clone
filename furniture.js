let addToCart = document.querySelectorAll("#add");
let fav = document.querySelectorAll("#like");
let productContainer=document.getElementById("productsContainer")
// console.log(fav);
// let productData = JSON.parse(localStorage.getItem("data")) || [];
// console.log(productData);

//function to add products into cart
let cartData = JSON.parse(localStorage.getItem("cartData")) || [];

// cartProducts(data);
window.addEventListener("load",()=>cartProducts(data))

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

window.addEventListener("load",()=>{
 let flag=localStorage.getItem("flag")
 console.log(flag)
 if(flag){
  let filtered=data.filter(item=>item.desc.includes(flag))
console.log(filtered)
 }
 localStorage.removeItem("flag")
})