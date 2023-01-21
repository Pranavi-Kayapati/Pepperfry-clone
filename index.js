// console.log(data)
// localStorage.setItem("data",JSON.stringify(data))

let data=[
  {id:1,
    image:"https://ii2.pepperfry.com/media/catalog/product/e/f/494x544/efflino-study-table-in-white-colour-by-bluewud-efflino-study-table-in-white-colour-by-bluewud-ne00xv.jpg",
    desc:"Efflino Study Table In White Finish",
    company:"bluewud",
    price: 2738,
    discount:"30% Off"
  },
  {id:2,
    image:"https://ii3.pepperfry.com/media/catalog/product/g/u/494x544/gustowe-study-table-in-white-finish-by-bluewud-gustowe-study-table-in-white-finish-by-bluewud-7prrwd.jpg",
    desc:"Gustowe Study TAble in White",
    company:"bluewud",
    price: 2831,
    discount:"30% Off"
  },
  {id:3,
    image:"https://ii2.pepperfry.com/media/catalog/product/c/l/494x544/clonard-study-table-in-wenge-finish-by-bluewud-clonard-study-table-in-wenge-finish-by-bluewud-2ocuda.jpg",
    desc:"Clonard Study Table in Wenge",
    company:"Woodbuzz",
    price: 2831,
    discount:"30% Off"
  },
  {id:4,
    image:"https://ii3.pepperfry.com/media/catalog/product/o/f/494x544/office-table-office-table-v2oabe.jpg",
    desc:"Study table in Walnut Finish",
    company:"Mintwud",
    price:2899,
    discount:"30% Off"
  },
  {id:5,
    image:"https://ii1.pepperfry.com/media/catalog/product/s/k/494x544/sky-wall-mounted-large-multipurpose-table-in-mangfall-beech-finish-by-woodware-sky-wall-mounted-larg-wmydlg.jpg",
    desc:"Sky Wall Mounted Large Table",
    company:"bluewud",
    price:3450,
    discount:"30% Off"
  },
  {id:6,
    image:"https://ii2.pepperfry.com/media/catalog/product/h/a/494x544/hayao-study-table-with-drawer-in-wenge-finish---mintwud-by-pepperfry-hayao-study-table-with-drawer-i-el4ino.jpg",
    desc:"Hayao Study Table",
    company:"Woodbuzz",
    price:3599,
    discount:"30% Off"
  },
  {id:7,
    image:"https://ii2.pepperfry.com/media/catalog/product/e/f/494x544/efflino-study-table-desk-in-wenge---white-finish-by-bluewud-efflino-study-table-desk-in-wenge---whit-rnykak.jpg",
    desc:"Efflino Study Table Desk",
    company:"bluewud",
    price: 4499,
    discount:"30% Off"
  },
  {id:8,
    image:"https://ii3.pepperfry.com/media/catalog/product/a/m/494x544/amica-compact-study-table-in-dark-brown-finish-by-woodware-amica-compact-study-table-in-dark-brown-f-z5o6oi.jpg",
    desc:"Amica Compact Study Table",
    company:"Mintwud",
    price: 5699,
    discount:"30% Off"
  },
  {id:9,
    image:"https://ii2.pepperfry.com/media/catalog/product/d/u/494x544/duke-writing-table-in-frosty-white-and-ocean-green-colour-by-woodbuzz-duke-writing-table-in-frosty-w-znkbdo.jpg",
    desc:"Duke Writing Table",
    company:"bluewud",
    price:6899,
    discount:"30% Off"
  },
  {id:10,
    image:"https://ii2.pepperfry.com/media/catalog/product/d/u/494x544/duke-study-table-in-frosty-white-and-pink-colour-by-woodbuzz-duke-study-table-in-frosty-white-and-pi-keugsm.jpg",
    desc:"Duke Study Table",
    company:"Woodbuzz",
    price:5699,
    discount:"30% Off"
  },
  {id:11,
    image:"https://ii3.pepperfry.com/media/catalog/product/t/a/494x544/takaya-study-table-in-walnut-brown-finish-by-mintwud-takaya-study-table-in-walnut-brown-finish-by-mi-4gsjlt.jpg",
    desc:"Takaya Study Table",
    company:"Mintwud",
    price:3499,
    discount:"30% Off"
  },
  {id:12,
    image:"https://ii1.pepperfry.com/media/catalog/product/v/e/494x544/verto-large-height-adjustable-writing-table-in-asian-dark-by-woodware-verto-large-height-adjustable--tueuop.jpg",
    desc:"Verto Large Study Table",
    company:"bluewud",
    price:5599,
    discount:"30% Off"
  },
  {id:13,
    image:"https://ii3.pepperfry.com/media/catalog/product/f/e/494x544/felipe-engineered-wood-study-table-frosty-white-finish-by-das-d-cor-felipe-engineered-wood-study-tab-qtb3ec.jpg",
    desc:"Felipe Study Table",
    company:"Woodbuzz",
    price:9999,
    discount:"30% Off"
  },
  {id:14,
    image:"https://ii2.pepperfry.com/media/catalog/product/n/y/494x544/nyoko-study-table-in-dark-oak-finish-by-mintwud-nyoko-study-table-in-dark-oak-finish-by-mintwud-fjscju.jpg",
    desc:"Nyoko Study Table",
    company:"Mintwud",
    price:6599,
    discount:"30% Off"
  },
  {id:15,
    image:"https://ii2.pepperfry.com/media/catalog/product/s/t/494x544/stefan-engineered-wood-study-table-flowery-wenge-finish-by-das-d-cor-stefan-engineered-wood-study-ta-eowqos.jpg",
    desc:"Stefan Study Table",
    company:"bluewud",
    price:4599,
    discount:"30% Off"
  },
  {id:16,
    image:"https://ii1.pepperfry.com/media/catalog/product/w/e/494x544/weston-writing-table-in-white-finish-by-anikaa-weston-writing-table-in-white-finish-by-anikaa-nedtvx.jpg",
    desc:"Weston Writing Table",
    company:"Woodbuzz",
    price:8599,
    discount:"30% Off"
  },
  {id:17,
    image:"https://ii2.pepperfry.com/media/catalog/product/l/u/494x544/lucent-study-table-in-wenge-colour-by-homeace-lucent-study-table-in-wenge-colour-by-homeace-ldoa6j.jpg",
    desc:"Lucent Study Table",
    company:"Mintwud",
    price:7599,
    discount:"30% Off"
  },
  {id:18,
    image:"https://ii2.pepperfry.com/media/catalog/product/e/f/494x544/efflino-study-table-in-white-colour-by-bluewud-efflino-study-table-in-white-colour-by-bluewud-ne00xv.jpg",
    desc:"Efflino Study Table In White Finish",
    company:"bluewud",
    price:2738,
    discount:"30% Off"
  },
  {id:19,
    image:"https://ii3.pepperfry.com/media/catalog/product/s/o/494x544/sos-liteoffice-cornerstar-office-table-in-urban-teak-colour-by-spacewood-sos-liteoffice-cornerstar-o-bazacz.jpg",
    desc:"SOS Lite Corner",
    company:"bluewud",
    price:4249,
    discount:"30% Off"
  },
  {id:20,
    image:"https://ii1.pepperfry.com/media/catalog/product/s/t/494x544/study-table-in-white---walnut-colour-by-furnifry-study-table-in-white---walnut-colour-by-furnifry-vx0ofr.jpg",
    desc:"Efflino Study Table In White Finish",
    company:"Mintwud",
    price:4319,
    discount:"30% Off"
  },
  {id:21,
    image:"https://ii2.pepperfry.com/media/wysiwyg/banners/Fur_Sofa_Cum_Beds_27.jpg",
    desc:"Niki 2 Seater Sofa",
    company:"Febonic",
    price:22738,
    discount:"10% Off"
  },
  {id:22,
    image:"https://ii1.pepperfry.com/media/catalog/product/m/i/494x544/miranda-2-seater-sofa-in-charcoal-grey-colour-by-woodsworth-miranda-2-seater-sofa-in-charcoal-grey-c-3mvajc.jpg",
    desc:"Miranda 2 Seater Sofa",
    company:"Woodsworth",
    price:27738,
    discount:"15% Off"
  },
  {id:23,
    image:"https://ii2.pepperfry.com/media/catalog/product/a/n/494x544/antalya-2-seater-sofa-in-grey-colour-by-urban-living-antalya-2-seater-sofa-in-grey-colour-by-urban-l-9vqsmv.jpg",
    desc:"Belem 2 Seater Sofa",
    company:"bluewud",
    price:28738,
    discount:"10% Off"
  },
  {id:24,
    image:"https://ii2.pepperfry.com/media/catalog/product/e/f/494x544/efflino-study-table-in-white-colour-by-bluewud-efflino-study-table-in-white-colour-by-bluewud-ne00xv.jpg",
    desc:"Antalya 2 Seater Sofa",
    company:"bluewud",
    price:32738,
    discount:"7% Off"
  },
  {id:25,
    image:"https://ii2.pepperfry.com/media/catalog/product/b/a/494x544/bali-1-seater-sofa-in-blue-colour-by-trevi-furniture-bali-1-seater-sofa-in-blue-colour-by-trevi-furn-9h46fb.jpg",
    desc:"Bali 1 Seater Sofa",
    company:"bluewud",
    price:10738,
    discount:"12% Off"
  },
  {id:26,
    image:"https://ii3.pepperfry.com/media/catalog/product/j/o/494x544/jordan-lhs-sectional-sofa-in-blue-colour-by-muebles-casa-jordan-lhs-sectional-sofa-in-blue-colour-by-anyyeu.jpg",
    desc:"Jordan LHS Sofa",
    company:"bluewud",
    price:52738,
    discount:"3% Off"
  },
  {id:27,
    image:"https://ii2.pepperfry.com/media/catalog/product/s/a/494x544/santiago-lhs-6-seater-sofa-set-with-ottoman-in-teal-green-colour-by-arra-santiago-lhs-6-seater-sofa--ew8ixt.jpg",
    desc:"Santiago LHS Sofa",
    company:"bluewud",
    price:82738,
    discount:"10% Off"
  },
  {id:28,
    image:"https://ii2.pepperfry.com/media/catalog/product/d/a/494x544/daroo-1-seater-sofa-in-camel-beige-by-febonic-daroo-1-seater-sofa-in-camel-beige-by-febonic-wpp71i.jpg",
    desc:"Daroo 1 Seater Sofa",
    company:"bluewud",
    price:12738,
    discount:"8% Off"
  },
  {id:29,
    image:"https://ii3.pepperfry.com/media/catalog/product/j/o/494x544/jordan-lhs-sectional-sofa-in-blue---grey-colour-by-muebles-casa-jordan-lhs-sectional-sofa-in-blue----ypd3kh.jpg",
    desc:"Jordan LHS Sofa",
    company:"Woodsworth",
    price:45738,
    discount:"6% Off"
  },
  {id:30,
    image:"https://ii2.pepperfry.com/media/catalog/product/l/a/494x544/ladybug-lhs-6-seater-sectional-sofa-in-grey-colour-by-febonic-ladybug-lhs-6-seater-sectional-sofa-in-hxcne5.jpg",
    desc:"Ladybug LHS Sofa",
    company:"Febonic",
    price:52738,
    discount:"30% Off"
  }
]
// let pData=JSON.parse(localStorage.getItem("data")) || []

// for(let i=0; i<data.length; i++){
//   pData.push(data[i])
// }
// console.log(pData)
localStorage.setItem("data",JSON.stringify(data))
let menu=document.querySelector(".menu");
// menu.addEventListener("mouseover",()=>{
// let div=document.createElement("div")
// let ul=document.createElement("ul");
// let li1=document.createElement("li")
// li1.textContent="Study Tables"
// let li2=document.createElement("li")
// li2.textContent="Sofas"
// let li3=document.createElement("li")
// li3.textContent="Home Decor"
// let li4=document.createElement("li")
// li4.textContent="Dining Area"
// ul.append(li1,li2,li3,li4)
// div.append(ul);
// })
let searchbtn=document.querySelector(".search-btn")
searchbtn.addEventListener("click",function (){
  let value=document.querySelector(".search-input").value;
  let filtered=data.filter(item=>item.desc.includes(value))
  // console.log(filtered)
  localStorage.setItem("flag",value)
  location.replace("furniture.html")
})

// window.addEventListener("load",()=>{
//   setTimeout(function(){
//     alert("Please Login")
//   },5000)
//   location.replace("profile.html")
// })

