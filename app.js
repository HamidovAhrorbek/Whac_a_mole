const squares = documnet.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const tileLeft = documnet.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomPosition = squares[0]
}
