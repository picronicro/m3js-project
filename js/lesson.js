const input = document.querySelector("#phone_input")
const btnValidate = document.querySelector("#phone_button")
const result = document.querySelector("#phone_result")

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

btnValidate.addEventListener("click", () => {
    if (regExp.test(input.value)) {
        result.innerHTML = "valid"
    } else {
        result.innerHTML = "invalid"
    }
})
