document.addEventListener('DOMContentLoaded',() => {
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');
    const restartButton = document.getElementById('restartButton');

    let randomNumber;
    let attempts;

    function startGame(){
        randomNumber = Math.floor(Math.random()*100)+1;
        attempts = 0;
        attemptsDisplay.textContent = attempts;
        message.textContent = '';
        guessInput.value = '';
        guessInput.disabled = false;
        guessButton.disabled = false;
        restartButton.style.display = 'none';
    }

    guessButton.addEventListener('click',() => {
        const userGuess = Number(guessInput.value);
        attempts++;
        attemptsDisplay.textContent = attempts;

        if (userGuess === randomNumber){
            message.textContent = 'Parabéns ! Você adivinhou o número!';
            guessInput.disabled = true;
            guessButton.disabled = true;
            restartButton.style.display = 'block';
        }else if (userGuess < randomNumber){
            message.textContent = 'Muito baixo! Tente novamente.'
        }else {
            message.textContent = 'Muito alto! Tente novamente.'
        }
        guessInput.value = '';
    })

    startGame()
});