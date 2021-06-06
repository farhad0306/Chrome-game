const snus = document.getElementById('snus'); // Returns a reference to the first object with the specified value of the ID attribute.
const rock = document.getElementById('rock');
const score = document.getElementById('score');


//creates the jump animation//
function jump() {
    snus.classList.add('jump-animation'); // Attaches the jump animation to the class every time we jump
    setTimeout(() => { 
       snus.classList.remove('jump-animation'); // here it removes the jump animation after a specific time
    }, 500); // the time is 500 ms
}
// Attaches the jump function to space//
document.addEventListener('keypress', () => {  //adds the event below
    if (!snus.classList.contains('jump-animation')) { // Creates so you cant jump until the animation is completed
    jump();
    }
})

setInterval(() => {
    score.innerText++;
   const snusTop = parseInt(window.getComputedStyle(snus) // Gets the information out of the snus element which we attached to the css document.
   .getPropertyValue('top')); // Gets the "top" property out of the CSS file
   const rockLeft = parseInt(window.getComputedStyle(rock) // Gets the information out of the rock element which we attached to the css document.
   .getPropertyValue('left')); // Gets the "left" property out of the CSS file
   
   if (rockLeft < 0) { // if the rock passes a negative value the becomes invisible
    rock.style.display = "none"; // makes it not showing
} else { // when it has dissapeared
    rock.style.display = '';  // it makes it reappear again

}

if (rockLeft < 50 && rockLeft > 0 && snusTop > 100) { // if the character is close to those cordinates which is where it would meet the stone
    alert("                                       You got a score of: " + score.innerText +
      "\n\n                                               Play again?"); // we would alert the user with the message that the game is over.
location.reload(); // and refreshes the page when you click ok on the alert.
}
}, 50); // all this gets updated every 50 ms.
