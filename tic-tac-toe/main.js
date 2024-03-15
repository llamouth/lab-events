const board = document.getElementsByClassName("tic-tac-toe")
const button = document.querySelector("button")
const winningNums = ["123", "456", "789", "147", "159", "258", "369", "357"]
const countObj = {}
let moveX = true

const makeMove = (event) => {
    if (!event.target.textContent) {
        if(moveX) {
            event.target.textContent = "x"
            countObj[event.target.id] = 1
        }else {
            event.target.textContent = "o"
            countObj[event.target.id] = 2
        }
        moveX = !moveX;
    }
}

const makeBoard = () => {
    for(let i = 1; i < 10; i++) {
        const divElement = document.createElement("div")
        divElement.classList.add("empty")
        divElement.classList.add("square")
        divElement.setAttribute("id", i)
        board[0].append(divElement)
        divElement.addEventListener("click", makeMove)
    }
}


const reset = (event) => {
    const squares = document.querySelectorAll(".square")
    for(let sqaure of squares){
        sqaure.textContent = ""
    }
    moveX = true
}

button.addEventListener("click", reset)

makeBoard()

