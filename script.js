const dices = document.querySelectorAll('.dice')
const food = document.querySelector('.food-text')
const wood = document.querySelector('.wood-text')
const clay = document.querySelector('.clay-text')
const stone = document.querySelector('.stone-text')
const gold = document.querySelector('.gold-text')
const dicePoints = document.querySelectorAll('.dice-point')
const inputScorePlayer1 = document.querySelector('.score-player1')
const inputScorePlayer2 = document.querySelector('.score-player2')
const score1 = document.querySelector('.score1')
const score2 = document.querySelector('.score2')
const total = document.querySelector('.dice-point-total')

let totalPoints = 0
let scorePlayer1 = 0
let scorePlayer2 = 0

dices.forEach(e => e.addEventListener('click', () => {
    const index = e.innerText
    const a = rollDice(Number(index))
    console.log(`total : ${a}`)
}))

inputScorePlayer1.addEventListener('keydown', addScore)
inputScorePlayer2.addEventListener('keydown', addScore)

function addScore(e) {
    if (e.key === 'Enter') {
        if (this.classList.contains('score-player1')) {
            scorePlayer1 += Number(this.value)
        }
        else if (this.classList.contains('score-player2')) {
            scorePlayer2 += Number(this.value)
        }
        this.value = '';
        
        console.log("บันทึกคะแนนเรียบร้อย!");
    }
    score1.innerText = scorePlayer1
    score2.innerText = scorePlayer2
}

function rollDice(n) {
    totalPoints = 0
    dicePoints.forEach(e => e.innerText = '')
    for (let i = 0; i < n; i++) {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        totalPoints += randomNumber
        console.log(randomNumber)
        dicePoints[i].innerText = randomNumber;
    }
    const calculate = (totalPoints) => {
        food.innerText = Math.floor(totalPoints / 3)
        wood.innerText = Math.floor(totalPoints / 4)
        clay.innerText = Math.floor(totalPoints / 5)
        stone.innerText = Math.floor(totalPoints / 6)
        gold.innerText = Math.floor(totalPoints / 7)
    }
    calculate(totalPoints);
    total.innerText = totalPoints

}


