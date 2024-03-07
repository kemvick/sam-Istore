const menu = [
  {
    id: 1,
    img: '/images/product.jpg',
    title: 'Anchor Bracelet',
    category: 'Women',
    price: '150',
  },
  {
    id: 2,
    img: '/images/product-accessory1.jpg',
    title: 'G-bag',
    category: 'men',
    price: '260',
  },
  {
    id: 3,
    img: '/images/product-bag2.jpg',
    title: 'Fashion Bag',
    category: 'Women',
    price: '150',
  },
  {
    id: 4,
    img: '/images/product-bag4.jpg',
    title: 'Tot Bag',
    category: 'Women',
    price: '150',
  },
  {
    id: 5,
    img: '/images/product-hoodie1.jpg',
    title: 'OTF hoodie',
    category: 'Women',
    price: '150',
  },
  {
    id: 6,
    img: '/images/product-hoodie2.jpg',
    title: 'Unisex Hoodie',
    category: 'Women',
    price: '150',
  },
  {
    id: 7,
    img: '/images/product-w-jeans1.jpg',
    title: 'Boy Friend Jeans',
    category: 'Women',
    price: '150',
  },
  {
    id: 8,
    img: '/images/product-w-jeans2.jpg',
    title: 'Crazy Jeans',
    category: 'Women',
    price: '150',
  },
  {
    id: 9,
    img: '/images/product-w-jeans4.jpg',
    title: 'Jeans',
    category: 'Women',
    price: '150',
  },
  {
    id: 10,
    img: '/images/tshirt2.jpg',
    title: 'T shirt',
    category: 'Women',
    price: '150',
  },
]
const productList = document.querySelector('.product-list')

// laod item
window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu)
})
// display items
function displayMenuItems(menuItems) {
  const displayItems = menuItems
    .map(function (item) {
      return ` <div class="product-list">
            <!-- single product -->
            <div class="product">
              <img src="${item.img}" class="product-img" alt=""> 
              <p class="product-title">${item.title}</p>
              <p class="product-category">${item.category}</p>
              <p class="product-price">$${item.price}</p>
              <button class="tocart-btn">Add to cart</button>
            </div>`
    })
    .join('')
  productList.innerHTML = displayItems
}
