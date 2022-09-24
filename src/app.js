const menuIcon = document.querySelector(".hamburger-menu");
 const navbar = document.querySelector(".navbar");
 const header = document.getElementById("header");
 const cartIcon = document.querySelector("#cart-icon");
 const viewCart = document.querySelector(".view-cart");
 const closeCart = document.querySelector("#cart-close");
 const label = document.getElementById("label");
 const shoppingCart = document.getElementById("shopping-cart");




 cartIcon.addEventListener("click", () => {
   viewCart.classList.add("active");
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

 let carts = document.querySelectorAll('.add-cart');

 let basket = JSON.parse(localStorage.getItem("data")) || [];




 let generateShop = () => {
   return (shop.innerHTML = shopItemsData.map((x) => {
       let {
         id,
         name,
         price,
         img,
       } = x;
       let search = basket.find((x) => x.id === id) || []
       return `
  <div id=product-id-${id} class="item">
    <img src="/src${img}" loading="lazy" decoding="async" alt="" class="product-img">
     <div class="details">
        <h3 class="product-title">${name}</h3>
        <span class="product-price">₦${price}.00</span>
        <div class="buttons">
          <button onclick="decrement(${id})" class="remove-cart">Remove item</button>
          <div id=${id} class="quantity">${search.item === undefined? 0 : search.item}</div>
          <button onclick="increment(${id})" class="add-cart">Add to cart</button>
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

   if (search === undefined) {
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
   cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
 };

 calculation();



 let generateCartItems = () => {
   if (basket.length !== 0) {
   } else {
     shoppingCart.innerHTML = ``
     label.innerHTML = `<h2>Cart is Empty</h2>`
   }
 }