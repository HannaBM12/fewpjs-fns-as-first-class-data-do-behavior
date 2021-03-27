/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let clock = parseInt(time)
  if (clock < 12)
    return "Good Morning"
   if (clock > 12 && clock < 17)
      return "Good Afternoon"
  if (clock > 17)
    return "Good Evening"
  

}
/* Write your implementation of displayMessage() */

function displayMessage(greetings){
    document.querySelector('#greeting').innerText = greetings
}