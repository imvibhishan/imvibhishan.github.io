let number1 = document.querySelector('#number1')
let number2 = document.querySelector('#number2')
let input = document.querySelector('#input')
let scoreOutput = document.querySelector('#score')

let score=0
let answer

function renderRandomNumber(){
    input.value=null
    input.focus()

    let rand1 = Math.floor(Math.random()*100)
    let rand2 = Math.floor(Math.random()*100)

    answer = rand1 + rand2;

    number1.textContent = rand1
    number2.textContent = rand2
}

function checkAnswer(){
    if(answer == input.value){
        score++
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        });
    }else{
    score--
    if(score<0) {
        score=0
    }
    }
    showScore(score)
    renderRandomNumber()
}
function showScore(score){
    scoreOutput.textContent = score
}
renderRandomNumber()
