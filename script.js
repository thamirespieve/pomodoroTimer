//Get buttons
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonAddition = document.querySelector('.addition')
const buttonSubtraction = document.querySelector('.subtraction')
const buttonFlorestSound = document.querySelector('.florest')
const buttonRainSound = document.querySelector('.rain')
const buttonCoffeSound = document.querySelector('.coffe')
const buttonFireSound = document.querySelector('.fire')
const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')
const florestSound = new Audio('./assests/sound/Floresta.wav')
const rainSound = new Audio('./assests/sound/Chuva.wav')
const coffeSound = new Audio('./assests/sound/Cafeteria.wav')
const fireSound = new Audio('./assests/sound/Lareira.wav')

buttonFlorestSound.addEventListener('click', () => {
  buttonFlorestSound.classList.add('soundSelect')
  buttonRainSound.classList.remove('soundSelect')
  buttonCoffeSound.classList.remove('soundSelect')
  buttonFireSound.classList.remove('soundSelect')

  florestSound.play()
  rainSound.pause()
  coffeSound.pause()
  fireSound.pause()
})

buttonRainSound.addEventListener('click', () => {
  buttonRainSound.classList.add('soundSelect')
  buttonFlorestSound.classList.remove('soundSelect')
  buttonCoffeSound.classList.remove('soundSelect')
  buttonFireSound.classList.remove('soundSelect')

  rainSound.play()
  florestSound.pause()
  coffeSound.pause()
  fireSound.pause()
})

buttonCoffeSound.addEventListener('click', () => {
  buttonCoffeSound.classList.add('soundSelect')
  buttonFlorestSound.classList.remove('soundSelect')
  buttonRainSound.classList.remove('soundSelect')
  buttonFireSound.classList.remove('soundSelect')

  coffeSound.play()
  florestSound.pause()
  rainSound.pause()
  fireSound.pause()
})

buttonFireSound.addEventListener('click', () => {
  buttonFireSound.classList.add('soundSelect')
  buttonFlorestSound.classList.remove('soundSelect')
  buttonRainSound.classList.remove('soundSelect')
  buttonCoffeSound.classList.remove('soundSelect')

  fireSound.play()
  florestSound.pause()
  rainSound.pause()
  coffeSound.pause()
})

buttonAddition.addEventListener('click', () => {
  let minutes = Number(displayMinutes.textContent)
  minutes = minutes + 5

  displayMinutes.textContent = String(minutes).padStart(2, '0')
})

buttonSubtraction.addEventListener('click', () => {
  let minutes = Number(displayMinutes.textContent)
  minutes = minutes - 5

  if (minutes <= 0) {
    displayMinutes.textContent = '00'
  } else {
    displayMinutes.textContent = String(minutes).padStart(2, '0')
  }
})
