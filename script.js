
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

function generateRandomNumbers(){
   const number1 = Math.floor(Math.random() * 10) + 1; 
   const number2 = Math.floor(Math.random() * 10) + 1; 
   return [number1, number2];
}
console.log(generateRandomNumbers())

    
function arifmetic(){

   const operators = ['+', '-', '*', '/'];
   let operator = operators[Math.floor(Math.random() * operators.length)];

   let a = Math.floor(Math.random() * 10) + 1; 
   let b  = Math.floor(Math.random() * 10) + 1;
 
   const task = `${a}, ${operator}, ${b}`;
   
   if (operator === '-') {
      prompt = `Вычтите ${a} из ${b}`;
   } else  if (operator === '+'){
      prompt = `Сложите ${a} и ${b}`; 
   } else if (operator === '*'){
      prompt = `Умножте ${a} на ${b}`;
   } else {
      prompt = `Разделите ${a} на ${b}`;
   }





}
