// hide section
function hideElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}
// show section
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

// getTextElementValueById
function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId)
    const elementText = element.innerText
    const value = parseInt(elementText)
    return value
}
function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId)
    element.innerText= value
}

// sets color of the alphabet
function setColorOfTheAlphabet(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-300');
}
function removeColorOfTheAlphabet(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-300');
}
