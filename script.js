//task1
//let a = 10;
//alert(a)
//a = 20;
//alert(a)

//task2
//const date = 2007;
//alert(date) 

//task3
//const namejs = 'Брендан Эйк';
//alert(namejs)

//task4

//сложение
//let a=10
//let b=2
//let result = a + b;
//alert (result)

//вычитание
//let a=10 
//let b=2
//let result = a - b;
//alert(result)

//умножение 
//let a=10 
//let b=2
//let result= a * b;
//alert(result)

//деление
//let a=10
//let b=2
//let result= a/b;
//alert(result)

//task5
//let a=2 
//let result=(a**5)
//alert(result)

//task6
//let a=9
//let b=2
//let result=(a%b)
//alert(result)
 
//task7 
//let num = 1;
//num += 5;
//num -= 3;
//num *= 7;
//num /= 3;
//num += 1;
//num -= 1;
//alert(num);

//task8
//let age= prompt('Cоколько вам лет?');
//alert(age)

//task9
//const user = {
    //name: 'Иван',
    //age: 19,
    //isAdmin:true,}

//task10
//let userName=prompt('Как вас зовут?') ;  
//alert( `Привет, ${userName}!`)


//Задания 3й УРОК
//task1 
//const password = '12345'
//let guestPassword=prompt('Введите пароль')
//if(guestPassword==password){
//   alert('Пароль введеён верно');
//}
//else{
   // alert('Пароль введён неверно')
//}
 
//task2 
////let c=9
//if (c>0 && c<10) {
    //alert('верно');
//} else {
 //   alert('не верно');
//}

//task3
//let d=8
//let e=120
//if(d>100 || e>100){
//    alert('верно');
//}
//else{
//    alert('Неверно');
//}
 
//task4
//let a = '2';
//let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
//alert(+a + +b);

//task5 
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