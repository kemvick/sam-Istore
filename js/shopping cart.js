const cartIcon = document.querySelector('.cart-btn')
const cart = document.querySelector('.cart')
const closeCart = document.querySelector('.cart-close')
const quantityElement = document.querySelector('.totalQuantity')

cartIcon.addEventListener('click', () => {
  cart.classList.add('show-cart')
})
closeCart.addEventListener('click', () => {
  cart.classList.remove('show-cart')
})

// logout
profileIcon.forEach((btn) => {
  btn.addEventListener('click', () => {
    logoutModal.classList.remove('logout-hidden')
    logoutOverlay.classList.remove('logout-hidden')
    links.classList.remove('show-links')
  })
})

cancelLogout.addEventListener('click', () => {
  logoutModal.classList.add('logout-hidden')
  logoutOverlay.classList.add('logout-hidden')
})

// cartlist
var cartItems = []

function addToCart() {
  var item = {
    name: 'anchor bracelet',
    price: '150.00',
    img: '/images/product-accessory1.jpg',
  }
  cartItems.push(item)
  renderCart()
  IncreaseQuantity()
}

function removeFromCart(index) {
  cartItems.splice(index, 1)
  renderCart()
  decreaseQuantity()
}

function checkout() {
  var totalPrice = cartItems.reduce((total, item) => total + item.price, 0)
  alert('Total Price: $' + totalPrice.toFixed(2))
  cartItems = []
  renderCart()
}

function IncreaseQuantity() {
  var currentQuantity = parseInt(quantityElement.textContent)
  var newQuantity = currentQuantity + 1
  quantityElement.textContent = newQuantity
}

function decreaseQuantity() {
  var currentQuantity = parseInt(quantityElement.textContent)
  var newQuantity = currentQuantity - 1
  quantityElement.textContent = newQuantity
}

function renderCart() {
  var cartElement = document.querySelector('.cartlist')
  cartElement.innerHTML = ''
  cartItems.forEach(function (item, index) {
    var cartItem = document.createElement('div')
    cartItem.classList.add('cart-item')
    cartItem.innerHTML = `
       <img src="${item.img}" class="cart-img" alt="">
      <div class="content">
        <p class="product-title">
          ${item.name}
        </p>
        <p class="product-price">
          $${item.price} product
        </p>
      </div>
      <div class="quantity">
        <button onclick="removeFromCart(${index})">&times;</button>
        `
    cartElement.appendChild(cartItem)
  })
}
