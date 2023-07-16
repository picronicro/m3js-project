// modal
const modal = document.querySelector(".modal")
const modalTrigger = document.querySelector("#btn-get")
const modalClose = document.querySelector(".modal_close")

function openModal() {
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
}

function closeModal()  {
    modal.style.display = "none"
    document.body.style.overflow = ""

}

modalTrigger.onclick = () => openModal()
modalClose.onclick = () => closeModal()
modal.onclick = event => event.target === modal && closeModal()
setTimeout(openModal, 10000)

function annoyUser() {
    if ((Math.round(window.scrollY) + window.innerHeight) === document.body.offsetHeight) {
        removeEventListener("scroll", annoyUser)
        openModal()
    }
}

// scrollend trigger
addEventListener("scroll", annoyUser)
