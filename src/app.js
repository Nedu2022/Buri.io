let shopItemsData = [{
  id: "first",
  name: "Tasty Burger",
  price: 2500,
  img: "/images/Hamburger.jpg"
},
{
  id: "second",
  name: "Tasty cakes",
  price: 10000,
  img: "/images/cake.jpg"
},
{
  id: "third",
  name: "Tasty sweets",
  price: 1000,
  img: "/images/sweet-2.jpg"
},
{
  id: "fourth",
  name: "Tasty cupcakes",
  price: 3000,
  img: "/images/cupcake.jpg"
},
{
  id: "fifth",
  name: "Cold drinks",
  price: 5000,
  img: "/images/chilled drink.jpg"
},
{
  id: "six",
  name: "Ice-cream",
  price: 3500,
  img: "/images/cone-cream.jpg"
},
{
  id: "seventh",
  name: "Omelette",
  price: 4800,
  img: "/images/g-1.jpg"
},
{
  id: "eight",
  name: "Cookies",
  price: 6500,
  img: "/images/g-2.jpg"
},
{
  id: "nineth",
  name: "Chicken and Fries",
  price: 7500,
  img: "/images/g-3.jpg"
},
{
  id: "tenth",
  name: "Spaghetti",
  price: 5000,
  img: "/images/g-4.jpg"
},
{
  id: "eleven",
  name: "Chocolate Cake",
  price: 8600,
  img: "/images/g-5.jpg"
},
{
  id: "twelve",
  name: "Shawarma",
  price: 2000,
  img: "/images/g-6.jpg"
},
{
  id: "thriteen",
  name: "Biscuit ice-cream",
  price: 9200,
  img: "/images/g-7.jpg"
},
{
  id: "fourteen",
  name: "Sandwinch",
  price: 7700,
  img: "/images/g-8.jpg"
},
{
  id: "fifteen",
  name: "Burger",
  price: 4800,
  img: "/images/g-9.jpg"
},
]


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
    <img src="${img}" alt="" class="product-img">
     <div class="details">
        <h3 class="product-title">${name}</h3>
        <span class="product-price">₦${price}</span>
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
     console.log("b is not e");
   } else {
     shoppingCart.innerHTML = ``
     label.innerHTML = `<h2>Cart is Empty</h2>`
   }
 }