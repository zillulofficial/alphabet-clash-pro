function startGaming(){
    // calling to generate a random alphabet
    const Num=getRandomAlphabet()
    console.log(Num)

    const Current= document.getElementById('current-alphabet')
    Current.innerText= Num

    // set color 
    setColorOfTheAlphabet(Num)
}
function play(){
    // hiding home screen
    hideElementById('home-screen')
    // showing play screen
    showElementById('play-ground')
    // calling to start random alphabet function
    startGaming()
}

