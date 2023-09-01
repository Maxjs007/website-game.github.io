/*let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count --;
        }else if(styles.contains("increase")){
            count += 1;
        }else {
            count = 0;
        }

        if(count < 0.1){
            value.style.color = "red";
        }
        if(count > 0.1){
            value.style.color = "blue";
        }

        value.textContent = count;
    });
});

value.addEventListener("mousemove", (e) =>{
    console.log(e.target);
});

value.addEventListener("keypress", (e) =>{
    console.log()
});*/


var randomNumber = Math.floor(Math.random() * 100) + 1;


function checkGuess() {
  var guessInput = document.getElementById("guessTheInput");
  var guess = parseInt(guessInput.value);

  var result = document.getElementById("result");

  if (guess < randomNumber) {
    result.innerHTML = "Trop petit.";
  } else if (guess > randomNumber) {
    result.innerHTML = "Trop grand.";
  } else {
    result.innerHTML = "Bien jouer vous avez trouver le nombre !";
    guessInput.disabled = true;
  }
}