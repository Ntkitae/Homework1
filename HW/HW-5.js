// Задание 1 
function min (a, b){
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
 console.log(min(8,4)); 
 console.log(6,6);

 //Задание 2 
 function isEven(n){
    if (n % 2 === 0) {
        return 'Число чётное';
    } else {
        return 'Число не чётное';
    }
 }
 console.log(isEven(4));
 console.log(isEven(3));

 //Задание 3
function square(namber){
    return namber ** 2;
}
console.log(square(5));

const up = (n) => n ** 2;
console.log(up(5));

//Задание 4 

function age(){

    let age = +prompt('Cколько тебе лет?');

    if (age < 0) {
        alert ('Возраст не может быть отрицательным');
    } else if (age>=0 || age <= 12) {
        alert ('Привет друг!');
    } else if( age > 13){
        alert ('Добро пожаловать!');
    } else{
        alert ('Вы ввели неправильное значение');
    }
}
age();

//Задание 5 

function calc(a,b){
    if (isNaN(a) && isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
       return a * b;
    }
}
console.log(calc(6,2));

//Задание 6 

function getNamber(){
    let namber = prompt('Введите число');
    if (isNaN(namber)) {
        return 'Переданный параметр не является числом';
    } else {
        return ` ${namber} в кубе равняется ${ namber ** 3}`;
    } 
}
console.log(getNamber());

//Задание 7 

function getArea(){
    return Math.PI * this.radius ** 2;
}

function getPerimeter(){
        return 2 * Math.PI * this.radius;
    }  


const circle1 = {
    radius: 10, 
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}

const circle2 = {
    radius: 20, 
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}
console.log(circle1.methodGetArea());
console.log(circle2.methodGetArea()); 