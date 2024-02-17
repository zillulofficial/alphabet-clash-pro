function hideElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function showElementById(anotherElement) {
    const element = document.getElementById(anotherElement)
    element.classList.remove('hidden')
}

// generate new alphabet
function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabet = alphabetString.split('')

    const randomNum = Math.random() * 25
    const index = Math.round(randomNum)

    const Random = alphabet[index]
    return Random

}

// sets color of the alphabet
function setColorOfTheAlphabet(elementId) {
    const element= document.getElementById(elementId);
    element.classList.add('bg-orange-300');
}
