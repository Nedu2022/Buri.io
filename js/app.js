const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const header = document.getElementById("header");
const cartIcon = document.querySelector("#cart-icon");
const viewCart = document.querySelector(".view-cart");
const closeCart = document.querySelector("#cart-close");
const modal = document.querySelector(".existing");
const spanClose = document.getElementById("exist-close");
const emptyCart = document.querySelector(".empty_cart")


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




// Start when the document is ready
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}

function start() {
  addEvents();
}

// UPDATE & RERENDER
function update() {
  addEvents();
  updateTotal();
}

// ADD EVENTS
function addEvents() {
  // Remove items from cart
  let cartRemove_btns = document.querySelectorAll(".cart-remove");
  console.log(cartRemove_btns);
  cartRemove_btns.forEach((btn) => {
    btn.addEventListener("click", handle_removeCartItem);
  });

  // CHANGE ITEM QUANTITY
  let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
  cartQuantity_inputs.forEach((input) => {
    input.addEventListener("change", handle_changeItemQuantity);
  });

  // ADD ITEM TO CART
  let addCart_btns = document.querySelectorAll(".add-cart");
  addCart_btns.forEach((btn) => {
    btn.addEventListener("click", handle_addCartItem);
  });

  const buyBtn = document.getElementById(".btn-buy");
  buyBtn.addEventListener("click", handle_buyOrder); 
}

//HANDLE EVENTS FUNCTIONS
let itemsAdded = []

function handle_addCartItem() {
  let product = this.parentElement;
  let title = product.querySelector(".product-title").innerHTML;
  let price = product.querySelector(".product-price").innerHTML;
  let imgSrc = product.querySelector(".product-img").src;
  console.log(title, price, imgSrc);

  let newToAdd = {
    title,
    price,
    imgSrc
  };

  if (itemsAdded.find(el => el.title == newToAdd.title)) {
    modal.style.display = "flex";
    return;
  } else {
    itemsAdded.push(newToAdd)
  }



  // ADD PRODUCT TO CART
  let cartBoxElement = CartBoxComponent(title, price, imgSrc);
  let newNode = document.createElement("div");
  newNode.innerHTML = cartBoxElement;
  const cartContent = viewCart.querySelector(".cart-content");
  cartContent.appendChild(newNode);

  update();
}

function handle_removeCartItem() {
  this.parentElement.remove();
  itemsAdded = itemsAdded.filter(
    (el) => 
    el.title !=
    this.parentElement.querySelector(".cart-title").innerHTML
  );

  update();
}

function handle_changeItemQuantity() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  this.value = Math.floor(this.value);

  update();
}

function handle_buyOrder() {
  if(itemsAdded.length <= 0) {
   alert("Lol");
   return;
  }
}

// UPDATE & RERENDER FUNCTIONS
 function updateTotal() {
  let cartBoxes = document.querySelectorAll(".cart-items");
  const totalElement = viewCart.querySelector(".total-price");
  let total = 0;
  cartBoxes.forEach((cartBox) => {
    let priceElement = cartBox.querySelector(".cart-price");
    let price = parseFloat(priceElement.innerHTML.replace("$", ""));
    let quantity = cartBox.querySelector(".cart-quantity").value;
    total += price * quantity;
  });

  total = Math.round(total * 100) / 100;

  totalElement.innerHTML = "$" + total;
}

// HTML COMPONENTS
function CartBoxComponent(title, price, imgSrc) {
  return `
    <div class="cart-items">
    <img src="${imgSrc}" alt="">
    <div class="detail-box">
      <div class="cart-title">${title}</div>
      <div class="cart-price">${price}</div>
    <input type="number" value="1" class="cart-quantity">
    </div>
    <i class="bx bxs-trash-alt cart-remove"></i>
  </div>`;
}
