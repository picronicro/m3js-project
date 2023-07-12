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
let left = 0

async function moveBlock() {
    block.style.left = left + "px"
    left++

    if (block.style.left !== "446px") {
        await new Promise(r => setTimeout(r, 15))
        console.log("fin")
        moveBlock()
    }
}

moveBlock()