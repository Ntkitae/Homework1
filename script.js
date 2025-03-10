
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

    
function arithmetic(){

   const operators = ['+', '-', '*', '/'];
   let operator = operators[Math.floor(Math.random() * operators.length)];

   let a = Math.floor(Math.random() * 10) + 1; 
   let b  = Math.floor(Math.random() * 10) + 1;

   let promptMessage = "";

   if (operator === '-') {
      promptMessage = `Вычтите ${b} из ${a}`;
   } else  if (operator === '+'){
      promptMessage = `Сложите ${a} и ${b}`; 
   } else if (operator === '*'){
      promptMessage = `Умножте ${a} на ${b}`;
   } else {
      b = b === 0 ? 1 : b;
      promptMessage = `Разделите ${a} на ${b}`;
   }

   const userAnswer = Number(prompt(promptMessage));
   let correctAnswer; 

   switch(operator){
      case '+' :
         correctAnswer = a + b;
         break;
      case '-' :
         correctAnswer = a - b; 
         break;
      case '*' :
         correctAnswer = a * b;
         break;
      case '/' :
         correctAnswer = a / b;
         break;      
   }

   if (userAnswer === correctAnswer){
      alert('Правильно!');
   } else {
      alert(`Неправильно! Правильный ответ : ${correctAnswer}`);
   }

}
