// console.log(data)

let favorites=document.querySelector(".productsmenu")

let favData=JSON.parse(localStorage.getItem("favData")) || []
displayFav(favData)
function displayFav(data){
  favorites.innerHTML=""
  data.forEach((ele)=>{
    let card=document.createElement("div");
    card.className="products";
    let img=document.createElement("img");
    img.src=ele.image;
    let desc=document.createElement("p");
    desc.textContent=ele.desc;
    let company=document.createElement("p");
    company.className="grey";
    company.textContent=ele.company;
    let price=document.createElement("p");
    price.className="price";
    price.textContent=`₹${ele.price}`;
    let discount=document.createElement("p");
    discount.className="discount";
    discount.textContent=ele.discount;
    let buttondiv=document.createElement("div");
    buttondiv.className="button";
    let addToCart=document.createElement("button");
    addToCart.textContent="Add To Cart";
    addToCart.addEventListener("click",()=>{
      localStorage.removeItem("favData",JSON.stringify(ele))
    })
    let like=document.createElement("button");
    like.textContent="❤️"
    buttondiv.append(addToCart,like);
    card.append(img,desc,company,price,discount,buttondiv);
    favorites.append(card)
  })
}
