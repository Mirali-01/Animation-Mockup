// find a way to connect surprise button to show an image on-click and to perform key frames


const roundRound = () => {
    let spinRight = document.querySelector(".elementRight")
    spinRight.classList.toggle("spin")

    let spinLeft = document.querySelector(".elementLeft")
    spinLeft.classList.toggle("revspin")
}

const bounce = () => {
    let bunnies = document.querySelector(".ball")
    bunnies.classList.toggle("jump")
}

const right = () => {
    let toRight = document.querySelector(".rectangle")
    toRight.classList.toggle("right")
}
const diagonal = () => {
    let toDiagonal = document.querySelector(".square")
    toDiagonal.classList.toggle("diagonal")
}

const zoomer = () => {
    let timeWaster = document.querySelector(".tada")
    timeWaster.classList.toggle("tada2")   
}

