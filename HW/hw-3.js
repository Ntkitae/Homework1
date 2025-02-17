
task1 
const password = '12345'
let guestPassword=prompt('Введите пароль')
if(guestPassword==password){
   alert('Пароль введеён верно');
}
else{
    alert('Пароль введён неверно');
}
 
task2 
let c=9
if (c>0 && c<10) {
    alert('верно');
} else {
    alert('не верно');
}

task3
let e=120
let d=8
if(d>100 || e>100){
    alert('верно') }
    else  { alert('Неверно')}
 
task4
let a = '2';
let b = '3';
 

task5 
let montNamber = 12
switch (montNamber) {
    case 1:
    case 2:
    case 12:
        alert('Зима');  
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна') ; 
        break;  
    case 6:
    case 7:
    case 8:
        alert('Лето'); 
        break; 
    case 9:
    case 10:
    case 11:
        alert('Осень');
        break;           
    default:
        alert('Неверно')
        break;
}