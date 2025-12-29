const form = document.getElementById("contactForm")
const statusText = document.getElementById("formStatus")

form.addEventListener("submit", e => {
e.preventDefault()
statusText.textContent = "Message sent successfully"
form.reset()
})

document.querySelectorAll("nav a").forEach(link => {
link.addEventListener("click", e => {
e.preventDefault()
document.querySelector(link.getAttribute("href")).scrollIntoView({
behavior: "smooth"
})
})
})
