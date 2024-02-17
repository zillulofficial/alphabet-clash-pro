document.addEventListener('keyup', function (event) {
    const PlayerPressed = event.key

    // get the already created random alphabet 
    const randomAlphabet = this.getElementById('current-alphabet')
    const expected = randomAlphabet.innerText.toLowerCase()

    // exit the game
    if(PlayerPressed === 'Escape'){
        gameOver()
    }
    // check if the pressed key is right
    if (expected === PlayerPressed) {
        removeColorOfTheAlphabet(PlayerPressed)
        // get the score
        const currentScore = getTextElementValueById('current-score')

        // update it
        let newScore = currentScore + 1

        // show it
        setTextElementValueById('current-score', newScore)

        startGaming()
    }
    else {
        // get the life
        const currentLife = getTextElementValueById('current-life')
        // update it
        const newLife = currentLife - 1
        // show it
        setTextElementValueById('current-life', newLife)
        if (newLife === 0) {
            gameOver()
        }
    }
})

function startGaming() {
    // calling to generate a random alphabet
    const Num = getRandomAlphabet()

    const Current = document.getElementById('current-alphabet')
    Current.innerText = Num

    // set color 
    setColorOfTheAlphabet(Num)
}
function play() {
    // hiding section
    hideElementById('home-screen')
    hideElementById('score-card')
    showElementById('play-ground')

    // reset score and life
    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)

    startGaming()
}
function gameOver() {
    hideElementById('play-ground')
    showElementById('score-card')

    // showing the final result 
    // get the final result
    const getResult= document.getElementById('current-score')
    const result= getResult.innerText
    const lastResult= setTextElementValueById('last-score', result)

    // removing highlight
    const clearHighlight= document.getElementById('current-alphabet')
    const removeHighlight= clearHighlight.innerText
    removeColorOfTheAlphabet(removeHighlight)
}



