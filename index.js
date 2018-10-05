function handleSubmit(event) {
    var form = event.target;
    var elements = form.elements;

    var guess = elements.guess.value;
    console.log('guess', guess)

    var result = document.getElementById('result');
    
    //result.textContent = 'You made a guess of ' + guess;

    var correct = 1;
    if (guess == correct) {
        result.textContent = 'You are correct!' 
    } 
    else if (guess > correct) {
        result.textContent = 'Your guess is too high!'
    } 
    else {
        result.textContent = 'Your guess is too low!'
    }
   
   
}