// email validation
const input = document.querySelector("#gmail_input")
const btnValidate = document.querySelector("#gmail_button")
const textResult = document.querySelector("#gmail_result")

const regExp = /@gmail.com$/
btnValidate.addEventListener("click", () => {
    if (regExp.test(input.value)) {
        textResult.innerHTML = "valid"
    } else {
        textResult.innerHTML = "invalid"
    }
})

// recursion
const block = document.querySelector(".child_block")
let delay = 1

let left = 0
let topp = 0

async function moveBlock() {
    if (left <= 446 && topp === 0) {
        block.style.left = left + "px"
        left++

        await new Promise(r => setTimeout(r, delay))
    } else if (topp <= 446 && left === 447) {
        block.style.top = topp + "px"
        topp++

        await new Promise(r => setTimeout(r, delay))
    } else if (left <= 447 && left !== 0 && topp === 447) {
        block.style.left = left + "px"
        left--

        await new Promise(r => setTimeout(r, delay))
    } else {
        block.style.top = topp + "px"
        topp--

        await new Promise(r => setTimeout(r, delay))
    }

    moveBlock()
}

moveBlock()

// stopwatch
// digits
const min = document.querySelector("#minutes")
const sec = document.querySelector("#seconds")
const mlSeconds = document.querySelector("#ml-seconds")
// buttons
const btnStart = document.querySelector("#start")
const btnStop = document.querySelector("#stop")
const btnReset = document.querySelector("#reset")

let millis = 0
let runnableID = null;

btnStart.addEventListener("click", () => {
    if (runnableID === null) {
        runnableID = setInterval(() => {
            millis += 125
            updateScreen(millis)
        }, 125)
    } else {
        console.log("already running")
    }
})

btnStop.addEventListener("click", () => {
    clearInterval(runnableID)
    runnableID = null
})

btnReset.addEventListener("click", () =>  {
    if (runnableID !== null) {
        clearInterval(runnableID)
        runnableID = null;
    }

    clearScreen()
    millis = 0
})

function updateScreen(millis) {
    let ml = millis % 1000
    let seconds = millis / 1000
    let minutes = parseInt(seconds / 60)
    seconds = parseInt(seconds % 60)

    // console.log(`${minutes}:${seconds}:${ml}`)

    min.innerHTML = ((minutes.toString().length < 2) ? "0" : "") + minutes.toString()
    sec.innerHTML = ((seconds.toString().length < 2) ? "0" : "") + seconds.toString()
    mlSeconds.innerHTML = ml.toString()[0] + ((ml.toString().length > 1) ? ml.toString()[1] : "0")
}

function clearScreen() {
    min.innerHTML = "00"
    sec.innerHTML = "00"
    mlSeconds.innerHTML = "00"
}




