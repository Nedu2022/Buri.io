const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const header = document.getElementById("header");
const cartIcon = document.querySelector("#cart-icon");
const viewCart = document.querySelector(".view-cart");
const closeCart = document.querySelector("#cart-close");
// const modal = document.querySelector(".existing");
const spanClose = document.getElementById("exist-close");
// const emptyCart = document.querySelector(".empty_cart");
// const productList = document.querySelector('.product-list');
// const cartContent = document.querySelector(".cart-content");
// const cartTotalValue = document.querySelector(".total-title");
// const cartCountInfo = document.getElementById("cart-count-info");

const productsEl = document.querySelector(".product");

let shopData = [
  {
      "title" : "Tasty Burger",
      "price" : "12.00",
      "imgSrc" : "images/Hamburger.jpg"
  },
  {
      "title" : "Tasty cakes",
      "price" : "25.00",
      "imgSrc" : "images/cake.jpg"
  },
  {
      "title" : "Tasty sweets",
      "price" : "6.25",
      "imgSrc" : "images/sweet-2.jpg"
  },
  {
      "title" : "Tasty cupcakes",
      "price" : "9.99",
      "imgSrc" : "images/cupcake.jpg"
  },
  {
      "title" : "Cold drinks",
      "price" : "15.00",
      "imgSrc" : "images/chilled drink.jpg"
  },
  {
      "title" : "Cold ice-cream",
      "price" : "8.00",
      "imgSrc" : "images/cone-cream.jpg"
  },
  {
      "title" : "Cushion",
      "price" : "5.50",
      "imgSrc" : "/images/g-1.jpg"
  },
  {
      "title" : "Desk",
      "price" : "25.00",
      "imgSrc" : "/images/g-2.jpg"
  },
  {
      "title" : "Drawer",
      "price" : "49.00",
      "imgSrc" : "/images/g-3.jpg"
  },
  {
      "title" : "Office chair",
      "price" : "60.99",
      "imgSrc" : "/images/g-4.jpg"
  },
  {
      "title" : "Scissors chair",
      "price" : "69.20",
      "imgSrc" : "/images/g-5.jpg"
  },
  {
      "title" : "Sleeper sofa",
      "price" : "224.99",
      "imgSrc" : "/images/g-6.jpg"
  },
  {
      "title" : "Sleigh bed",
      "price" : "90.25",
      "imgSrc" : "/images/g-7.jpg"
  },
  {
      "title" : "Sofa bed",
      "price" : "99.99",
      "imgSrc" : "/images/g-8.jpg"
  },
  {
      "title" : "White armchair",
      "price" : "75.80",
      "imgSrc" : "/images/g-9.jpg"
  }
]

let generateShop = () => {
  return (productsEl.innerHTML = `
  <div class="product-list">
  <div class="product-box">
  <img src="${product.imgSrc}" alt="" class="product-img">
  <h3 class="product-title">${product.title}</h3>
<span class="product-price"> ${product.price}</span>
  <div class="add-cart">In Cart</div>
  </div>
</div>
  `
  )};
renderProducts();

// let cartItemID = 1;


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

spanClose.addEventListener("click", () => {
  modal.style.display = "none";
});


// window.addEventListener('DOMContentLoaded', () => {
//   loadJSON();
//   loadCart();
// });

// productList.addEventListener('click', purchaseProduct); 



// Start when the document is ready
// if (document.readyState == "loading") {
//   document.addEventListener("DOMContentLoaded", start);
// } else {
//   start();
// }



// PURCHASE PRODUCT
// function purchaseProduct(e) {
//   if(e.target.classList.contains('add-cart')){
//     let product = e.target.parentElement;
//     getProductInfo(product);
//   };
// }

// function getProductInfo(product) {
//   let productInfo = {
//     id: cartItemID,
//     imgSrc: product.querySelector(".product-img").src,
//     name: product.querySelector(".product-title").textContent,
//     price: product.querySelector(".product-price").textContent
//   }
//   cartItemID++;
//   addToCartList(productInfo);
//   saveProductInStorage(productInfo);
// }

// function addToCartList(product) {
//   const cartItem = document.createElement('div');
//   cartItem.classList.add('cart-items');
//   cartItem.setAttribute('data-id', `${product.id}`);
//   cartItem.innerHTML = `
//   <img src="${product.imgSrc}" alt="">
//   <div class="detail-box">
//       <div class="cart-title">${product.name}</div>
//       <div class="cart-price">${product.price}</div>
//       <input type="number" value="1" class="cart-quantity">
//   </div>
//   <i class="bx bxs-trash-alt cart-remove"></i>
//   `;
//   cartContent.appendChild(cartItem);
// }

// SAVE PRODUCT IN LOCAL STORAGE
// function saveProductInStorage(item) {
//   let products = getProductFromStorage();
//   products.push(item);
//   localStorage.setItem('products', JSON.stringify(products))
// }

// GETTING PRODUCTS
// function getProductFromStorage() {
//   return localStorage.getItem('products') ? JSON.parse
//   (localStorage.getItem('products')) : [];
// }

// LOAD CART PRODUCTS
// function loadCart() {
//   let products = getProductFromStorage();
//   if(products.length < 1){
//     cartItemID = 1;
//   } else {
//     cartItemID = products[products.length - 1].id;
//     cartItemID++;
//   }
//   products.forEach(product => addToCartList(product));
// }

//CALCULATE TOTAL PRICE
// function findCartInfo() {
//   let products = getProductFromStorage();
//   let total = products.reduce((acc, product) => {
//     let price = parseFloat(product.price.substr(1));
//     return acc += price;
//   }, 0);
//   console.log(total);
// }

// findCartInfo();

// function start() {
//   addEvents();
// }

// UPDATE & RERENDER
// function update() {
//   addEvents();
//   updateTotal();
// }

// ADD EVENTS
// function addEvents() {
  // Remove items from cart
//   let cartRemove_btns = document.querySelectorAll(".cart-remove");
//   console.log(cartRemove_btns);
//   cartRemove_btns.forEach((btn) => {
//     btn.addEventListener("click", handle_removeCartItem);
//   });
// }

// addEvents();

  // CHANGE ITEM QUANTITY
  // let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
  // cartQuantity_inputs.forEach((input) => {
  //   input.addEventListener("change", handle_changeItemQuantity);
  // });

  // ADD ITEM TO CART
  // let addCart_btns = document.querySelectorAll(".add-cart");
  // addCart_btns.forEach((btn) => {
  //   btn.addEventListener("click", handle_addCartItem);
  // });

  // const buyBtn = document.getElementById(".btn-buy");
  // buyBtn.addEventListener("click", handle_buyOrder); 
 // }

//HANDLE EVENTS FUNCTIONS
// let itemsAdded = []

// function handle_addCartItem() {
//   let product = this.parentElement;
//   let title = product.querySelector(".product-title").innerHTML;
//   let price = product.querySelector(".product-price").innerHTML;
//   let imgSrc = product.querySelector(".product-img").src;
//   console.log(title, price, imgSrc);

//   let newToAdd = {
//     title,
//     price,
//     imgSrc
//   };

//   if (itemsAdded.find(el => el.title == newToAdd.title)) {
//     modal.style.display = "flex";
//     return;
//   } else {
//     itemsAdded.push(newToAdd)
//   }



  // ADD PRODUCT TO CART
//   let cartBoxElement = CartBoxComponent(title, price, imgSrc);
//   let newNode = document.createElement("div");
//   newNode.innerHTML = cartBoxElement;
//   const cartContent = viewCart.querySelector(".cart-content");
//   cartContent.appendChild(newNode);

//   update();
// }

// function handle_removeCartItem() {
//   this.parentElement.remove();
//   itemsAdded = itemsAdded.filter(
//     (el) => 
//     el.title !=
//     this.parentElement.querySelector(".cart-title").innerHTML
//   );

//   console.log(handle_removeCartItem);
// }

// function handle_changeItemQuantity() {
//   if (isNaN(this.value) || this.value < 1) {
//     this.value = 1;
//   }
//   this.value = Math.floor(this.value);

//   update();
// }

// function handle_buyOrder() {
//   if(itemsAdded.length <= 0) {
//    alert("Lol");
//    return;
//   }
// }

// UPDATE & RERENDER FUNCTIONS
//  function updateTotal() {
//   let cartBoxes = document.querySelectorAll(".cart-items");
//   const totalElement = viewCart.querySelector(".total-price");
//   let total = 0;
//   cartBoxes.forEach((cartBox) => {
//     let priceElement = cartBox.querySelector(".cart-price");
//     let price = parseFloat(priceElement.innerHTML.replace("$", ""));
//     let quantity = cartBox.querySelector(".cart-quantity").value;
//     total += price * quantity;
//   });

//   total = Math.round(total * 100) / 100;

//   totalElement.innerHTML = "$" + total;
// }

// HTML COMPONENTS
// function CartBoxComponent(title, price, imgSrc) {
//   return `
//     <div class="cart-items">
//     <img src="${imgSrc}" alt="">
//     <div class="detail-box">
//       <div class="cart-title">${title}</div>
//       <div class="cart-price">${price}</div>
//     <input type="number" value="1" class="cart-quantity">
//     </div>
//     <i class="bx bxs-trash-alt cart-remove"></i>
//   </div>`;
// }

// UPDATE CART INFO
// function updateCartInfo() {
//   let cartInfo = findCartInfo();
// }

// function loadJSON() {
//   fetch('products.json')
//   .then(response => response.json())
//   .then(data => {
//     let html = '';
//     data.forEach(product => {
//       html += `
//       <div class="product-box">
//       <img src="${product.imgSrc}" alt="" class="product-img">
//       <h3 class="product-title">${product.title}</h3>
//       <span class="product-price"> ${product.price}</span>
//       <div class="add-cart">In Cart</div>
//     </div>
//       `;
//     });
//     productList.innerHTML = html;
//   })
// }

