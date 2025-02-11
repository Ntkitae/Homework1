function generateRandomNumber(){
    return Math.floor(Math.floor(Math.(random)) * 100) + 1;
}

function playGame(){
   let UserNumber = null;
   let randomNumber = generateRandomNumber();
     
   while(UserNumber!==randomNumber){    
      UserNumber= Number(prompt('Веди число от 1 до 100'));

       if (UserNumber > randomNumber) {
          alert('Ваше число больше');
       } else if(UserNumber < randomNumber) {
          alert('Ваше число меньше');
       } else{
          alert('Вы угадали');
       }
    }
} 
playGame();
