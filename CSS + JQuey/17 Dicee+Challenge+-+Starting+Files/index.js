const randomOne = Math.ceil(Math.random() * 6)
const randomTwo = Math.ceil(Math.random() * 6)



const getImages = document.querySelectorAll("img")

getImages[0].setAttribute("src", `./images/dice${randomOne}.png`)
getImages[1].setAttribute("src", `./images/dice${randomTwo}.png`)

if (randomOne > randomTwo) {
    document.querySelector("h1").textContent = "Player 1 wins"
}

if (randomOne < randomTwo) {
    document.querySelector("h1").textContent = "Player 2 wins"
}

if (randomOne == randomTwo) {
    document.querySelector("h1").textContent = "Draw"
}
