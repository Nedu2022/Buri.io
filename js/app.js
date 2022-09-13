 const menuIcon = document.querySelector(".hamburger-menu");
 const navbar = document.querySelector(".navbar");
 const header = document.getElementById("header");
 const cartIcon = document.querySelector("#cart-icon");
 const viewCart = document.querySelector(".view-cart");
 const closeCart = document.querySelector("#cart-close");
// // const modal = document.querySelector(".existing");
// const spanClose = document.getElementById("exist-close");
// // const emptyCart = document.querySelector(".empty_cart");
// // const productList = document.querySelector('.product-list');
// // const cartContent = document.querySelector(".cart-content");
// // const cartTotalValue = document.querySelector(".total-title");
// // const cartCountInfo = document.getElementById("cart-count-info");

cartIcon.addEventListener("click", () => {
  viewCart.classList.add("active");
});

closeCart.addEventListener("click", () => {
  viewCart.classList.remove("active");
});

window.addEventListener("scroll", () => {
  let header = document.getElementById("header");
  header.classList.toggle("fixed", this.window.scrollY > 0);
});

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("change");
  navbar.classList.toggle("active");
});



let shop = document.getElementById("shop");


let shopItemsData = [
  {
      id : "first",
      name : "Tasty Burger",
      price : 12.20,
      img : "images/Hamburger.jpg"
  },
  {
      id : "second",
      name  : "Tasty cakes",
      price : 25.00,
      img : "images/cake.jpg"
  },
  {
      id : "third",
      name : "Tasty sweets",
      price : 6.25,
      img : "images/sweet-2.jpg"
  },
  { 
      id : "fourth",
      name : "Tasty cupcakes",
      price : 9.99,
      img : "images/cupcake.jpg"
  },
  {
      id : "fifth",
      name : "Cold drinks",
      price : 15.25,
      img : "images/chilled drink.jpg"
  },
  {
      id : "six",
      name : "Cold ice-cream",
      price : 8.00,
      img : "images/cone-cream.jpg"
  },
  {
      id : "seventh",
      name : "Cushion",
      price : 5.50,
      img : "/images/g-1.jpg"
  },
  {
      id : "eight",
      name : "Desk",
      price : 25.00,
      img : "/images/g-2.jpg"
  },
  {
      id : "nineth",
      name : "Drawer",
      price : 49.00,
      img : "/images/g-3.jpg"
  },
  {
      id : "tenth",
      name : "Office chair",
      price : 60.99,
      img : "/images/g-4.jpg"
  },
  {
      id : "eleven",
      name : "Scissors chair",
      price : 69.20,
      img : "/images/g-5.jpg"
  },
  {
      id : "twelve",
      name : "Sleeper sofa",
      price : 224.99,
      img : "/images/g-6.jpg"
  },
  {
      id : "thriteen",
      name : "Sleigh bed",
      price : 90.25,
      img : "/images/g-7.jpg"
  },
  {
      id : "fourteen",
      name : "Sofa bed",
      price : 99.99,
      img : "/images/g-8.jpg"
  },
  {
      id : "fifteen",
      name : "White armchair",
      price : 75.80,
      img : "/images/g-9.jpg"
  },
]

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData.map((x) => {
    let {id, name, price, img } = x;
    let search = basket.find ((x) => x.id === id) || []
    return `
    <div id=product-id-${id} class="item">
    <img src="${img}" alt="" class="product-img">
    <div class="details">
        <h3 class="product-title">${name}</h3>
        <span class="product-price">$${price}</span>
        <div class="buttons">
          <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
          <div id=${id} class="quantity">${search.item === undefined? 0 : search.item}</div>
          <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
        </div>
      </div>
  </div>
    `;
  })
  .join(""));
  };

  generateShop();

let increment = (id) => {
  let selectedItem = id;
  
  let search = basket.find((x) => x.id === selectedItem.id);

  if(search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
 
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};


let decrement = (id) => {
  let selectedItem = id;
  
  let search = basket.find((x) => x.id === selectedItem.id);
  
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);

  localStorage.setItem("data", JSON.stringify(basket));
};


let update = (id) => {
  let search = basket.find((x) => x.id === id)
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cart-count-info");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y,0);
};

calculation();

// spanClose.addEventListener("click", () => {
//   modal.style.display = "none";
// });


// // window.addEventListener('DOMContentLoaded', () => {
// //   loadJSON();
// //   loadCart();
// // });

// // productList.addEventListener('click', purchaseProduct); 



// // Start when the document is ready
// // if (document.readyState == "loading") {
// //   document.addEventListener("DOMContentLoaded", start);
// // } else {
// //   start();
// // }



// // PURCHASE PRODUCT
// // function purchaseProduct(e) {
// //   if(e.target.classList.contains('add-cart')){
// //     let product = e.target.parentElement;
// //     getProductInfo(product);
// //   };
// // }

// // function getProductInfo(product) {
// //   let productInfo = {
// //     id: cartItemID,
// //     imgSrc: product.querySelector(".product-img").src,
// //     name: product.querySelector(".product-title").textContent,
// //     price: product.querySelector(".product-price").textContent
// //   }
// //   cartItemID++;
// //   addToCartList(productInfo);
// //   saveProductInStorage(productInfo);
// // }

// // function addToCartList(product) {
// //   const cartItem = document.createElement('div');
// //   cartItem.classList.add('cart-items');
// //   cartItem.setAttribute('data-id', `${product.id}`);
// //   cartItem.innerHTML = `
// //   <img src="${product.imgSrc}" alt="">
// //   <div class="detail-box">
// //       <div class="cart-title">${product.name}</div>
// //       <div class="cart-price">${product.price}</div>
// //       <input type="number" value="1" class="cart-quantity">
// //   </div>
// //   <i class="bx bxs-trash-alt cart-remove"></i>
// //   `;
// //   cartContent.appendChild(cartItem);
// // }

// // SAVE PRODUCT IN LOCAL STORAGE
// // function saveProductInStorage(item) {
// //   let products = getProductFromStorage();
// //   products.push(item);
// //   localStorage.setItem('products', JSON.stringify(products))
// // }

// // GETTING PRODUCTS
// // function getProductFromStorage() {
// //   return localStorage.getItem('products') ? JSON.parse
// //   (localStorage.getItem('products')) : [];
// // }

// // LOAD CART PRODUCTS
// // function loadCart() {
// //   let products = getProductFromStorage();
// //   if(products.length < 1){
// //     cartItemID = 1;
// //   } else {
// //     cartItemID = products[products.length - 1].id;
// //     cartItemID++;
// //   }
// //   products.forEach(product => addToCartList(product));
// // }

// //CALCULATE TOTAL PRICE
// // function findCartInfo() {
// //   let products = getProductFromStorage();
// //   let total = products.reduce((acc, product) => {
// //     let price = parseFloat(product.price.substr(1));
// //     return acc += price;
// //   }, 0);
// //   console.log(total);
// // }

// // findCartInfo();

// // function start() {
// //   addEvents();
// // }

// // UPDATE & RERENDER
// // function update() {
// //   addEvents();
// //   updateTotal();
// // }

// // ADD EVENTS
// // function addEvents() {
//   // Remove items from cart
// //   let cartRemove_btns = document.querySelectorAll(".cart-remove");
// //   console.log(cartRemove_btns);
// //   cartRemove_btns.forEach((btn) => {
// //     btn.addEventListener("click", handle_removeCartItem);
// //   });
// // }

// // addEvents();

//   // CHANGE ITEM QUANTITY
//   // let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
//   // cartQuantity_inputs.forEach((input) => {
//   //   input.addEventListener("change", handle_changeItemQuantity);
//   // });

//   // ADD ITEM TO CART
//   // let addCart_btns = document.querySelectorAll(".add-cart");
//   // addCart_btns.forEach((btn) => {
//   //   btn.addEventListener("click", handle_addCartItem);
//   // });

//   // const buyBtn = document.getElementById(".btn-buy");
//   // buyBtn.addEventListener("click", handle_buyOrder); 
//  // }

// //HANDLE EVENTS FUNCTIONS
// // let itemsAdded = []

// // function handle_addCartItem() {
// //   let product = this.parentElement;
// //   let title = product.querySelector(".product-title").innerHTML;
// //   let price = product.querySelector(".product-price").innerHTML;
// //   let imgSrc = product.querySelector(".product-img").src;
// //   console.log(title, price, imgSrc);

// //   let newToAdd = {
// //     title,
// //     price,
// //     imgSrc
// //   };

// //   if (itemsAdded.find(el => el.title == newToAdd.title)) {
// //     modal.style.display = "flex";
// //     return;
// //   } else {
// //     itemsAdded.push(newToAdd)
// //   }



//   // ADD PRODUCT TO CART
// //   let cartBoxElement = CartBoxComponent(title, price, imgSrc);
// //   let newNode = document.createElement("div");
// //   newNode.innerHTML = cartBoxElement;
// //   const cartContent = viewCart.querySelector(".cart-content");
// //   cartContent.appendChild(newNode);

// //   update();
// // }

// // function handle_removeCartItem() {
// //   this.parentElement.remove();
// //   itemsAdded = itemsAdded.filter(
// //     (el) => 
// //     el.title !=
// //     this.parentElement.querySelector(".cart-title").innerHTML
// //   );

// //   console.log(handle_removeCartItem);
// // }

// // function handle_changeItemQuantity() {
// //   if (isNaN(this.value) || this.value < 1) {
// //     this.value = 1;
// //   }
// //   this.value = Math.floor(this.value);

// //   update();
// // }

// // function handle_buyOrder() {
// //   if(itemsAdded.length <= 0) {
// //    alert("Lol");
// //    return;
// //   }
// // }
