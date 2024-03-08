const checkoutModal = document.querySelector('.checkout-modal')
const checkoutOverlay = document.querySelector('.checkout-overlay')
const checkcloseBtn = document.querySelector('.checkout-close')
const checkoutBTn = document.querySelector('.checkout')
const checkForm = document.querySelector('.checkoutForm')

const openCheckOut = function () {
  checkoutModal.classList.remove('checkout-hidden')
  checkoutOverlay.classList.remove('checkout-hidden')
}
const closeCheckout = function () {
  checkoutModal.classList.add('checkout-hidden')
  checkoutOverlay.classList.add('checkout-hidden')
}

checkcloseBtn.addEventListener('click', closeCheckout)

// checkout form validation

checkForm.addEventListener('submit', (e) => {
  e.preventDefault()
  if (validateCheckOut()) {
    // Simulate payment processing
    setTimeout(function () {
      alert('Payment successful! Thank you for your purchase.')
      checkForm.reset()
    }, 2000)
  }
  clear
})

function validateCheckOut() {
  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var cardNumber = document.getElementById('cardNumber').value
  var expiryDate = document.getElementById('expiryDate').value
  var cvv = document.getElementById('cvv').value

  if (
    name.trim() === '' ||
    email.trim() === '' ||
    cardNumber.trim() === '' ||
    expiryDate.trim() === '' ||
    cvv.trim() === ''
  ) {
    alert('All fields are required!')
    return false
  }

  // You can add more specific validation rules for each field if needed

  return true
}
