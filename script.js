
function generateRandomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}

function playGame(){
   let userNumber = null;
   let randomNumber = generateRandomNumber(); 
   while(userNumber!==randomNumber){    
      userNumber = Number(prompt('Веди число от 1 до 100'));

       if (userNumber > randomNumber) {
          alert('Ваше число больше');
       } else if(userNumber < randomNumber) {
          alert('Ваше число меньше');
       } else{
          alert('Вы угадали');
       }
    }
} 

