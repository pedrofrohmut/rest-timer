const audio = new Audio("sounds/audio3.wav")

const minSpan = document.querySelector("#minutes")
const secSpan = document.querySelector("#seconds")
const clockDiv = document.querySelector("#clock")

const SECOND = 1000
const MINUTE = 60 * SECOND

let timerValue = 0
let timerInterval = null

const formatNumber = num => (num < 10 ? "0" + num : num)

const getFormatedTime = time => {
  let minutes = Math.floor(time / MINUTE)
  let seconds = (time - minutes * MINUTE) / 1000
  return {
    seconds: formatNumber(seconds),
    minutes: formatNumber(minutes)
  }
}

const setClock = formatedTime => {
  secSpan.innerText = formatedTime.seconds
  minSpan.innerText = formatedTime.minutes
}

const startTimer = () => {
  clearInterval(timerInterval)

  timerInterval = setInterval(() => {
    const seconds = parseInt(secSpan.innerText)
    const minutes = parseInt(minSpan.innerText)
    if (seconds == 0 && minutes == 0) {
      audio.play()
      clearInterval(timerInterval)
      clockDiv.classList.add("blink")
      setInterval(() => {
        clockDiv.classList.remove("blink")
      }, 10000)
      return
    }
    if (seconds > 0) {
      secSpan.innerText = formatNumber(seconds - 1)
    } else {
      secSpan.innerText = 59
      minSpan.innerText = formatNumber(minutes - 1)
    }
  }, 1000)
}

const setTimer = time => {
  const formatedTime = getFormatedTime(time)
  setClock(formatedTime)
  startTimer()
}

document.querySelector("#btn-1").addEventListener("click", () => {
  setTimer(1 * MINUTE)
})

document.querySelector("#btn-2").addEventListener("click", () => {
  setTimer(1.5 * MINUTE)
})

document.querySelector("#btn-3").addEventListener("click", () => {
  setTimer(2 * MINUTE)
})

document.querySelector("#btn-4").addEventListener("click", () => {
  setTimer(2.5 * MINUTE)
})

document.querySelector("#btn-5").addEventListener("click", () => {
  setTimer(3 * MINUTE)
})

document.querySelector("#btn-6").addEventListener("click", () => {
  setTimer(5 * MINUTE)
})
