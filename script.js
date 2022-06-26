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
let idTimer
let isSoundSelected = false
/* Event Timer */
function stopTimer(id) {
  clearTimeout(id)
}

buttonPlay.addEventListener('click', function timerCount() {
  idTimer = setTimeout(function () {
    let minutes = Number(displayMinutes.textContent)
    let seconds = Number(displaySeconds.textContent)

    seconds = --seconds
    displaySeconds.textContent = String(seconds).padStart(2, '0')

    if (minutes <= 0 && seconds <= 0) {
      minutes = 25
      seconds = 0
      displayMinutes.textContent = String(minutes).padStart(2, '0')
      displaySeconds.textContent = String(seconds).padStart(2, '0')
      stopTimer(idTimer)
      return
    }

    if (seconds <= 0) {
      displayMinutes.textContent = String(--minutes).padStart(2, '0')
      seconds = 59
    }

    displaySeconds.textContent = String(seconds).padStart(2, '0')

    timerCount()
  }, 1000)
})

buttonStop.addEventListener('click', () => {
  stopTimer(idTimer)
})

/* Event addition or subtraction minutes */
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

/* Event Sound */
buttonFlorestSound.addEventListener('click', () => {
  buttonFlorestSound.classList.toggle('soundSelect')
  buttonRainSound.classList.remove('soundSelect')
  buttonCoffeSound.classList.remove('soundSelect')
  buttonFireSound.classList.remove('soundSelect')

  isSoundSelected = buttonFlorestSound.classList.contains('soundSelect')

  isSoundSelected ? florestSound.play() : florestSound.pause()
  rainSound.pause()
  coffeSound.pause()
  fireSound.pause()
})

buttonRainSound.addEventListener('click', () => {
  buttonRainSound.classList.toggle('soundSelect')
  buttonFlorestSound.classList.remove('soundSelect')
  buttonCoffeSound.classList.remove('soundSelect')
  buttonFireSound.classList.remove('soundSelect')

  isSoundSelected = buttonRainSound.classList.contains('soundSelect')

  isSoundSelected ? rainSound.play() : rainSound.pause()

  florestSound.pause()
  coffeSound.pause()
  fireSound.pause()
})

buttonCoffeSound.addEventListener('click', () => {
  buttonCoffeSound.classList.toggle('soundSelect')
  buttonFlorestSound.classList.remove('soundSelect')
  buttonRainSound.classList.remove('soundSelect')
  buttonFireSound.classList.remove('soundSelect')

  isSoundSelected = buttonCoffeSound.classList.contains('soundSelect')

  isSoundSelected ? coffeSound.play() : coffeSound.pause()
  florestSound.pause()
  rainSound.pause()
  fireSound.pause()
})

buttonFireSound.addEventListener('click', () => {
  buttonFireSound.classList.toggle('soundSelect')
  buttonFlorestSound.classList.remove('soundSelect')
  buttonRainSound.classList.remove('soundSelect')
  buttonCoffeSound.classList.remove('soundSelect')

  isSoundSelected = buttonFireSound.classList.contains('soundSelect')

  isSoundSelected ? fireSound.play() : fireSound.pause()
  florestSound.pause()
  rainSound.pause()
  coffeSound.pause()
})
