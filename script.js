function generateRandomNumber(){
    return Math.floor(Math.floor(Math.random) * 100) + 1;
}
let randomNumber = generateRandomNumber();
function playGame(){
let UserNumber = null;
while(UserNumber!==randomNumber){    
UserNumber= Namber(prompt('Веди число от 1 до 100'));
if (Number(UserNumber)>randomNumber) {
    alert('Ваше число больше');
} else if(Number(UserNumber)<randomNumber) {
    alert('Ваше число меньше');
} else{
    alert('Вы угадали');
}
}
} 
playGame();
