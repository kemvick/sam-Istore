const navBtn = document.querySelector('.nav-btn')
const links = document.querySelector('.nav-list')
const signup = document.querySelector('.signup')
const modal = document.querySelector('.modal')
const modalTwo = document.querySelector('.modal-two')
const overlay = document.querySelector('.overlay')
const overlayTwo = document.querySelector('.overlay-two')
const CloseModal = document.querySelector('.closemodal-btn')
const CloseModal2 = document.querySelector('.closemodal-btn-two')
const OpenModal = document.querySelectorAll('.signup-modal')
const LoginModal = document.querySelectorAll('.loginmodal')
const navCloseBtn = document.querySelector('.navclose-btn')
const heroBtns = document.querySelectorAll('.hero-btn')
const Tologin = document.querySelector('.signlog')
const navOverlay = document.querySelector('.nav-overlay')
const logoutModal = document.querySelector('.logout-modal')
const logoutOverlay = document.querySelector('.logout-overlay')
const cancelLogout = document.querySelector('.cancel-btn')
const profileIcon = document.querySelectorAll('.profile-icon')
//  logout

// nav
navBtn.addEventListener('click', () => {
  links.classList.toggle('show-links')
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
  logoutModal.classList.add('logout-hidden')
  logoutOverlay.classList.add('logout-hidden')
})
navCloseBtn.addEventListener('click', () => {
  links.classList.remove('show-links')
})
// funtion for sign up modal
const openModal = function (e) {
  e.preventDefault()
  links.classList.remove('show-links')
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
  modalTwo.classList.add('hidden-two')
  overlayTwo.classList.add('hidden-two')
}

const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}
// funtion for login modal

const openModal2 = function () {
  // e.preventDefault()
  links.classList.remove('show-links')
  modalTwo.classList.remove('hidden-two')
  overlayTwo.classList.remove('hidden-two')
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

const closeModal2 = function () {
  modalTwo.classList.add('hidden-two')
  overlayTwo.classList.add('hidden-two')
}

OpenModal.forEach((btn) => btn.addEventListener('click', openModal))
LoginModal.forEach((btn) => {
  btn.addEventListener('click', openModal2)
})

CloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)
CloseModal2.addEventListener('click', closeModal2)
overlayTwo.addEventListener('click', closeModal2)

// find more and shop more
heroBtns.forEach((herobtn) => {
  herobtn.addEventListener('click', openModal)
  //  to login page
})
Tologin.addEventListener('click', openModal2)
