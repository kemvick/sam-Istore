// User database (you can replace this with a database in a real application)
let users = []

// Prevent default form submission
const loginForm = document.querySelector('.loginForm')
const regForm = document.getElementById('registrationForm')

regForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('hey')
})
loginForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('hey')
})

// registration validation

function validateRegistration() {
  var name = document.getElementById('regName').value
  var email = document.getElementById('regEmail').value
  var password = document.getElementById('regPassword').value

  if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
    alert('Please fill in all fields for registration.')
    return false
  }

  // Check if the email is already registered
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      alert('This email is already registered.')
      return false
    }
  }

  // Generate a unique ID for the user
  let userId = generateUserID()

  // Create a new user object and push it to the users array
  let newUser = {
    id: userId,
    name: name,
    email: email,
    password: password,
  }
  users.push(newUser)

  alert('Registration successful! Your unique ID is: ' + userId)
  return openModal2
}

// login form validation
function validateLogin() {
  const email = document.getElementById('loginEmail').value
  const password = document.getElementById('loginPassword').value

  // Check if the email and password match any registered user
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      alert('Login successful! Welcome, ' + users[i].name)
      return true
    } else {
      alert('Invalid email or password. Please try again.')
      return false
    }
  }
}

// Function to generate a unique ID (for demonstration purposes only)
function generateUserID() {
  return '#' + Math.random().toString(36).substr(2, 9)
}
