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
const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')

let totalPoints = 0
let scorePlayer1 = 0
let scorePlayer2 = 0

dices.forEach(e => e.addEventListener('click', () => {
    const index = e.innerText
        if (index === '+1') {
        rollDice('+1')
        return
    }
    const a = rollDice(Number(index))
    console.log(`total : ${a}`)
}))

inputScorePlayer1.addEventListener('keydown', addScore)
inputScorePlayer2.addEventListener('keydown', addScore)

btn1.addEventListener('click', () => {
    addScore(inputScorePlayer1)
})
btn2.addEventListener('click', () => {
    addScore(inputScorePlayer2)
})

function addScore(el) {
    const targetInput = el.target ? el.target : el;

    if (el.target && el.key !== 'Enter') return;

    if (isNaN(targetInput.value) || targetInput.value === '') return;

    if (targetInput.classList.contains('score-player1')) {
        scorePlayer1 += Number(targetInput.value);
    } 
    else if (targetInput.classList.contains('score-player2')) {
        scorePlayer2 += Number(targetInput.value);
    }

    targetInput.value = '';
    score1.innerText = scorePlayer1;
    score2.innerText = scorePlayer2;
}

function rollDice(n) {
    
    if (n === '+1') {
        totalPoints += 1
    }
    else {    
        totalPoints = 0
        dicePoints.forEach(e => e.innerText = '')
        for (let i = 0; i < n; i++) {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            totalPoints += randomNumber
            console.log(randomNumber)
            dicePoints[i].innerText = randomNumber;
        }
    }
    const calculate = (totalPoints) => {
        // fix divider
        food.innerText = Math.floor(totalPoints / 2)
        wood.innerText = Math.floor(totalPoints / 3)
        clay.innerText = Math.floor(totalPoints / 4)
        stone.innerText = Math.floor(totalPoints / 5)
        gold.innerText = Math.floor(totalPoints / 6)
    }
    calculate(totalPoints);
    total.innerText = totalPoints

}


