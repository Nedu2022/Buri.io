// const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const label = document.getElementById("label");
const shoppingCart = document.getElementById("shopper");

let basket = JSON.parse(localStorage.getItem("data")) || [];

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  header.classList.toggle("fixed", this.window.scrollY > 0);
});


let calculation = () => {
  let cartIcon = document.getElementById("cart-count-info");
  cartIcon.innerHTML = basket.map(x => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket
      .map(x => {
        let {
          id,
          item
        } = x;
        let search = shopItemsData.find(y => y.id === id) || [];
        let {
          img,
          name,
          price
        } = search;

        return `
      
    <div class="title">
      Shopping Item
    </div>

   
    <div class="item">
    <i onclick="removeItem(${id})" class="bi bi-trash"></i>

     <img src="${img}" alt="image" />

   
      <div class="title-price-x">
        <h4>${name}</h4>
      </div>
   
      <div class="ons">
        <button class="plus-btn" type="button" name="button">
        <i onclick="decrement(${id})"  class="bi bi-dash-lg"></i>
        </button>
        <div id=${id} class="quantity"> ${item} </div>
        <button class="minus-btn" type="button" name="button">
        <i onclick="increment(${id})"  class="bi bi-plus-lg"></i>
        </button>
      </div>

   
      <h3 class="total-price">₦${price}</h3>
      <h3 class="update-price">₦${item * price}</h3>
    </div>
   
      `;
      })
      .join(""));
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
    <img src="/images/cart.668e6453.svg" class="label-img" alt="">
    <div>
      <h2>Your cart is empty</h2>
      <a href="index.html">
      <button class="HomeBtn">Back to Home</button>
      </a>
    </div>
    `;
  }
};

generateCartItems();

let increment = id => {
  let selectedItem = id;
  let search = basket.find(x => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1
    });
  } else {
    search.item += 1;
  }
  generateCartItems();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = id => {
  let selectedItem = id;
  let search = basket.find(x => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  update(selectedItem.id);
  basket = basket.filter(x => x.item !== 0);
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = id => {
  let search = basket.find(x => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

let removeItem = id => {
  let selectedItem = id;
  basket = basket.filter(x => x.id !== selectedItem.id);
  generateCartItems();
  TotalAmount();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};

let clearCart = () => {
  basket = [];
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
  calculation();
};

let checkIn = () => {};

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map(x => {
        let {
          item,
          id
        } = x;
        let search = shopItemsData.find(y => y.id === id) || [];
        return parseFloat((item * search.price).toFixed(2));
      })
      .reduce((x, y) => x + y, 0);
    // console.log(amount);
    label.innerHTML = `
    <div class="bill">
    <h2>Total Bill :</h2>
    <span> ₦${amount}</span>
    </div>
    <div class="bottom-btn">
    

    <button onclick="successModal()" class="checkout">Checkout</button> 
    <button onclick="clearCart()" class="removeAll">Clear Cart</button>
    </div>
    `;
  } else return;
};

TotalAmount();

function successModal() {
  const Toast = Swal.mixin({
    toast: false,
    position: "center",
    showConfirmButton: true
  });

  Toast.fire({
    title: "Successful!",
    text: "Your order is on the way",
    icon: "success"
  });
  clearCart();
}