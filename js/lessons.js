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

// tab slider
const tabContent = document.querySelectorAll(".tab_content_block")

const tabsParent = document.querySelector(".tab_content_items")
const tabs = document.querySelectorAll(".tab_content_item")

let runnableID = null
let currentIndex = 0

function hideTabContent() {
    tabContent.forEach(item => {
        item.style.display = "none"
    })

    tabs.forEach(item => {
        item.classList.remove("tab_content_item_active")
    })
}

function showTabContent(index = 0) {
    hideTabContent()

    tabContent[index].style.display = "block"
    tabs[index].classList.add("tab_content_item_active")
}

// starts/resets interval
function resetInterval() {
    // check for null and reset interval
    if (runnableID !== null) {
        clearInterval(runnableID)
    }

    runnableID = setInterval(() => {
        // cycle thru
        if (currentIndex < 4) {
            currentIndex ++
            showTabContent(currentIndex)
        } else {
            currentIndex = 0
            showTabContent(currentIndex)
        }
    }, 3000)
}

hideTabContent()
showTabContent(0)
resetInterval()

tabsParent.onclick = event => {
    const targetElement = event.target
    if (targetElement.classList.contains("tab_content_item")) {
        tabs.forEach((tab, index) => {
            if (targetElement === tab) {
                currentIndex = index
                showTabContent(currentIndex)
                resetInterval()
                console.log(index)
            }
        })
    }
}