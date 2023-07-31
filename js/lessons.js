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

// card switcher
const btnPrev = document.querySelector("#btn-prev")
const btnNext = document.querySelector("#btn-next")
const card = document.querySelector(".card")

function getData(cardID) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${cardID}`)
        .then(response => response.json())
        .then(json => {
            card.innerHTML = `
                <p>${json.title}</p>
                <span>${json.id}</span>
            `

            card.classList.remove("card_true", "card_false")
            if (json.completed) {
                card.classList.add("card_true")
            } else {
                card.classList.add("card_false")
            }
        })
}

// request
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => console.log(json))

let current = 1
btnPrev.onclick = () => {
    current --
    if (current < 1) {
        current = 200
    }

    getData(current)
}
btnNext.onclick = () => {
    current ++
    if (current > 200) {
        current = 1
    }

    getData(current)
}

getData(current)


// converter
const kgs = document.querySelector("#kgs")
const usd = document.querySelector("#usd")
const eur = document.querySelector("#eur")

function convert(from) {
    from.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "../data/exchange_rates.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.addEventListener("load", () => {
            const response = JSON.parse(request.response)

            switch (from) {
                case kgs:
                    usd.value = (kgs.value / response.usd).toFixed(1)
                    eur.value = (kgs.value / response.eur).toFixed(1)
                    break
                case usd:
                    kgs.value = (usd.value * response.usd).toFixed(1)
                    eur.value = (kgs.value / response.eur).toFixed(1)
                    break
                case eur:
                    kgs.value = (eur.value * response.eur).toFixed(1)
                    usd.value = (kgs.value / response.usd).toFixed(1)
                    break
            }
        })
    }
}

convert(kgs)
convert(usd)
convert(eur)
