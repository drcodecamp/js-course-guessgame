let heroes = [
    {
        id: 0,
        opts: ['DOCTOR', 'TRAX'],
        correctOptIndex: 0,
        quote: '"To the Nothl Realm, I give my all."',
    },
    {
        id: 1,
        opts: ['TINY', 'COURIER'],
        correctOptIndex: 1,
        quote: '"Tiny, your name is still too big for you."',
    },
    {
        id: 2,
        opts: ['HUSKAR', 'TINKER'],
        correctOptIndex: 0,
        quote: '"All those eyes and you didnt see me coming."',
    },
    {
        id: 3,
        opts: ['HUNTER', 'LUNA'],
        correctOptIndex: 0,
        quote: '"I would trample your bones to dust, if you had any."',
    },
    {
        id: 4,
        opts: ['PROPHET', 'LUNA'],
        correctOptIndex: 0,
        quote: '"I summon the forces of nature"',
    },
    {
        id: 5,
        opts: ['HUSKAR', 'LUNA'],
        correctOptIndex: 1,
        quote: '"Hey ya here we go"',
    },
]
let interval = null
let timer = 0
let hp = 3
let isPlaying = false
let questions = []

const resetGame = () => {
    renderElement('timer', 0)
    clearInterval(interval)
    timer = 0
    hp = 3
    isPlaying = false
    startGame()
}

const startGame = () => {
    renderGameTitle()
    timer = 0
    isPlaying = true
    interval = setInterval(() => {
        timer += 1
        renderElement('timer', timer)
    }, 1000)
    generateQuestions(heroes, questions)
    renderQuestions(questions)
}

const checkAnswer = (heroIdx, userAnswer) => {
    const correctAnswer = heroes[heroIdx].correctOptIndex
    checkForWin(userAnswer, correctAnswer)
}

const checkForWin = (userAnswer, correctAnswer) => {
    if (userAnswer === correctAnswer) {
        const correctFx = new Audio('assets/winner.mp3')
        correctFx.play()
        if (questions.length > 0) {
            setTimeout(() => {
                renderQuestions(questions)
            }, 500)
        } else {
            gameOver()
        }
    } else {
        const wrongFx = new Audio('assets/wrong.mp3')
        wrongFx.play()
        if (hp <= 1) {
            return gameOver('lost')
        }
        reduceHp()
    }
}

const reduceHp = () => {
    hp -= 1
}

const gameOver = (status) => {
    clearInterval(interval)
    interval = null
    if (status === 'lost') {
        return renderElement(
            'question',
            `<div class="winner">You Lost!</div><button onclick="resetGame()" class="answer-button">reset</button>`
        )
    }
    renderElement(
        'question',
        `<div class="winner">You Are The BEST!</div><button onclick="resetGame()" class="answer-button">reset</button>`
    )
}
