const snus = document.getElementById('snus');
const rock = document.getElementById('rock');
const score = document.getElementById('score');


//creates the jump animation//
function jump() {
    snus.classList.add('jump-animation');
    setTimeout(() => {
       snus.classList.remove('jump-animation');
    }, 500); 
}
// Attaches the jump function to space//
document.addEventListener('keypress', () => {
    if (!snus.classList.contains('jump-animation')) {
    jump();
    }
})

setInterval(() => {
    score.innerText++;
   const snusTop = parseInt(window.getComputedStyle(snus)
   .getPropertyValue('top'));
   const rockLeft = parseInt(window.getComputedStyle(rock)
   .getPropertyValue('left'));
   
   if (rockLeft < 0) {
    rock.style.display = "none";
} else {
    rock.style.display = '';

}

if (rockLeft < 50 && rockLeft > 0 && snusTop > 100) {
    alert("                                       You got a score of: " + score.innerText +
      "\n\n                                               Play again?");
location.reload();
}
}, 50);