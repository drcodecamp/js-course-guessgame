const renderGameTitle = () => {
    const startGameButton = document.querySelector('#start-game')
    startGameButton.style.display = 'none'
}

const renderElement = (id, content) => {
    const element = document.querySelector(`#${id}`)
    if (element) {
        element.innerHTML = content
    }
}

const renderQuestions = (questions) => {
    let randomIdx = getRandomInt(0, questions.length)
    document.querySelector('#question').innerHTML = questions[randomIdx]
    questions.splice(randomIdx, 1)
}

const generateQuestions = (heroes, questions) => {
    heroes.forEach((hero, i) => {
        questions[i] = `<div class="quote">${heroes[i].quote}</div>
        <div class="character">
        <img src="assets/0${i}.gif" alt="" height="400" width="450">
        </div>
        <button onclick="onAnswerClick(this)" id="${i}" data-answer="${0}" class="answer-button">${
            heroes[i].opts[0]
        }</button>
        <button onclick="onAnswerClick(this)" id="${i}" data-answer="${1}" class="answer-button">${
            heroes[i].opts[1]
        }</button>`
    })
}
