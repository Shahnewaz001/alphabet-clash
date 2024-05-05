// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGroundSection = documet.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }
function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log(playerPressed);
    if(playerPressed==='Escape'){
        gameOver();
    }
    
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet= currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);


    if(playerPressed===expectedAlphabet){
        console.log('you get a point');
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1; 
        setTextElementValueById('current-score', updatedScore);
    
        // 1.get the cuurent score
        //const currentScoreElement=document.getElementById('current-score');
        //const currentScoreText=currentScoreElement.innerText;
        //const currentScore= parseInt(currentScoreText);
        //console.log(currentScore);
        ////2.increase the score by1
        //const newScore =     currentScore + 1;
        ////3.show the update score
        //currentScoreElement.innerText = newScore;

        //console.log('you have pressed correctly',expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you made a mistake');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);
        if(updatedLife===0){
            gameOver();
        }
        //const currentLifeElement=document.getElementById('current-life');
        //const currentLifeText = currentLifeElement.innerText;
        //const currentLife=parseInt(currentLifeText);
        //const newLife = currentLife-1;
        //currentLifeElement.innerText=newLife;
    }
}
document.addEventListener('keyup',handleKeyboardKeyUpEvent);

function continueGame(){
    const alphabet = getARandomAlphabet();
    //console.log(alphabet);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}
function play(){
    hideElelmet('home-screen');
    hideElelmet('final-score');
    showElelmet('play-ground');
    continueGame();
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0)
}
function gameOver(){
    hideElelmet('play-ground');
    showElelmet('final-score');
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score',lastScore);
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}