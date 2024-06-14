function checkAnswer(option){
    let answer =option.textContent;
    let result = document.getElementById('result');

    if (answer === 'Berto'){
        result.textContent ='Correct Answer!';
        result.style.color ='green';
        option.classList.add('correct');
    }
    else{
        result.textContent ='Wrong Answer!';
        result.style.color ='red';
        option.classList.add('incorrect');
        1
    }
    document.querySelectorAll('.option').forEach(item => {
    if (item.textContent!== answer){
        item.classList.add('incorrect');
    }
    item.ariaDisabled ='true';
    })

    
}