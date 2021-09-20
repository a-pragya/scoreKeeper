const p1 = {
    score: 0,
    display: document.querySelector('#p1Display'),
    button: document.querySelector('#p1Button')
}
const p2 = {
    score: 0,
    display: document.querySelector('#p2Display'),
    button: document.querySelector('#p2Button')
}

const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#winningScore')

let isGameOver = false
let winningScore = 5

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1
    }
    if (player.score === winningScore) {
        isGameOver = true
        player.display.classList.add('has-text-success')
        opponent.display.classList.add('has-text-danger')
        player.button.disabled = true
        opponent.button.disabled = true
    }
    player.display.innerHTML = player.score
}

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    //alert("change")
    reset()
})

p1Button.addEventListener('click', function () {
    updateScore(p1, p2)
})

p2Button.addEventListener('click', function () {
    updateScore(p2, p1)
})

resetButton.addEventListener('click', reset)



function reset() {
    isGameOver = false
    for (let player of [p1, p2]) {
        player.score = 0
        player.display.innerHTML = player.score
        player.display.classList.remove('has-text-success', 'has-text-danger')
        player.button.disabled = false
    }
    // p1Score = 0
    // p2Score = 0
    // p1Display.innerHTML = p1Score
    // p2Display.innerHTML = p2Score
    // p1Display.classList.remove('has-text-success', 'has-text-danger')
    // p2Display.classList.remove('has-text-success', 'has-text-danger')
    // p1Button.disabled = false
    // p2Button.disabled = false
}


