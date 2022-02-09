$(".button").click(function() {
    $('.value').toggleClass('value-animation','running');
});

$(".stop").click(function() {
    $('.value').toggleClass('value-animation','paused');
});

var animationID
function clicked(){
let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')
let won = document.getElementById('won')
won.innerText = ' '
let values = [
    '😂','😇','🥶'
]

function getRamdomValue(){
    return values[Math.floor(Math.random()*3)]
}

function updateAnimation(newSpeed){
    
    if (animationID) clearInterval(animationID)

    animationID = setInterval(() => {
        value1.innerText= getRamdomValue()
        value2.innerText= getRamdomValue()
        value3.innerText= getRamdomValue()
    }, 800/newSpeed)

    console.log('speed',newSpeed)
    console.log('animation',800/newSpeed)
}
updateAnimation(5)
ranges.onchange = function(ev){
    document.documentElement.style.setProperty('--speed',ev.target.value)
    updateAnimation(ev.target.value)
}
return animationID
}

function halt() {
    clearInterval(animationID);
    if((value1.innerText == value2.innerText) && (value2.innerText == value3.innerText)){
        console.log("you have won")
        won.innerText = 'You have won!!'
    }
    else{
        won.innerText = 'Try Again!!'
    }
 }

