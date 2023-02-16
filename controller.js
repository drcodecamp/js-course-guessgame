const onGameStart = () => {
    startGame()
}

const onAnswerClick = (clickedElement) => {
    const userAnswer = +clickedElement.getAttribute('data-answer')
    const heroIdx = clickedElement.getAttribute('id')
    checkAnswer(heroIdx, userAnswer)
}
