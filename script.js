const dices = document.querySelectorAll('.dice')

const food = document.querySelector('.food-text')
const wood = document.querySelector('.wood-text')
const clay = document.querySelector('.clay-text')
const stone = document.querySelector('.stone-text')
const gold = document.querySelector('.gold-text')

const dicePoints = document.querySelectorAll('.dice-point')

const inputScorePlayer1 = document.querySelector('.score-player1')
const inputScorePlayer2 = document.querySelector('.score-player2')
const inputScorePlayer3 = document.querySelector('.score-player3')
const inputScorePlayer4 = document.querySelector('.score-player4')

const score1 = document.querySelector('.score1')
const score2 = document.querySelector('.score2')
const score3 = document.querySelector('.score3')
const score4 = document.querySelector('.score4')

const total = document.querySelector('.dice-point-total')


const namePlayer1 = document.querySelector('#name-player1')
const namePlayer2 = document.querySelector('#name-player2')
const namePlayer3 = document.querySelector('#name-player3')
const namePlayer4 = document.querySelector('#name-player4')

const namePlayer = document.querySelectorAll('.name')
const textFormName = document.querySelectorAll('.text-form')
const playColors = document.querySelectorAll('.color-dropdown')

const startBtn = document.querySelector('.start-btn')
const formContainer = document.querySelector('.form')
const gameContainer = document.querySelector('.container')

const player = document.querySelectorAll('.score-container div')

let playersData = [
    { name: '', color: '' },
    { name: '', color: '' },
    { name: '', color: '' },
    { name: '', color: '' }
];

let totalPoints = 0
let scorePlayer1 = 0
let scorePlayer2 = 0
let scorePlayer3 = 0
let scorePlayer4 = 0

// formContainer.style.display = 'none'
// gameContainer.style.display = 'flex'


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
inputScorePlayer3.addEventListener('keydown', addScore)
inputScorePlayer4.addEventListener('keydown', addScore)

namePlayer.forEach(e => e.addEventListener('keydown', addName))

startBtn.addEventListener('click', start)

function start() {
    let activePlayer = playersData.filter(player => player.name !== '').length
    console.log(activePlayer)

    if (activePlayer < 2) {
        startBtn.innerText = 'Please Enter more than 1 Player!'
        return
    }
    else {
        
        for (let i=0; i<activePlayer; i++) {
            player[i].style.display = 'flex'
            player[i].querySelector('.text').innerText = playersData[i].name
            
            if (playersData[i].color === '') {
                startBtn.innerText = 'Please Select Player Color'
                return
            }
            player[i].querySelector('.text').classList.add(playersData[i].color)
            console.log('player' + i+1)
        }
        formContainer.style.display = 'none'
        gameContainer.style.display = 'flex'
    }
}

playColors.forEach(e => {
    e.addEventListener('change', (el) => {
        const idx = e.dataset.idx
        console.log(idx)
        console.log(el.target.value)
        playersData[idx].color = el.target.value
        el.target.style.backgroundColor = el.target.value
        textFormName[idx].classList.remove('red', 'green', 'blue', 'yellow')
        textFormName[idx].classList.add(el.target.value)
    })
})

function addName(el) {
    const targetInput = el.target
    if (el.key !== 'Enter' || targetInput.value === '') return;

    const idx = targetInput.dataset.idx
    playersData[idx].name = targetInput.value
    textFormName[idx].innerText = targetInput.value
    targetInput.value = ''
}

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
    else if (targetInput.classList.contains('score-player3')) {
        scorePlayer3 += Number(targetInput.value);
    }
    else {
        scorePlayer4 += Number(targetInput.value);
    }

    targetInput.value = '';
    score1.innerText = scorePlayer1;
    score2.innerText = scorePlayer2;
    score3.innerText = scorePlayer3;
    score4.innerText = scorePlayer4;
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


