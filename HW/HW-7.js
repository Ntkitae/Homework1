// Задача 1 

const js = "Привет";
up = js.toUpperCase();
console.log(up);

//Задание 2 

function filter(arr, str){
    const lowerStr = str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr));
}

console.log(filter(['JavaScript', 'java', 'python'], 'ja'));

//Задание 3 

let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

//Задание 4 

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//Задание 5 

function randomNumber(){
    return Math.floor(Math.random() * 10) + 1; 
}

console.log(randomNumber());

//Задание 6 

function getRandomNamber(num){
    return Array.from({ length: Math.floor(num / 2)}, () => Math.floor(Math.random() * num));
}

console.log(getRandomNamber(10));

//Задание 7 

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(15, 18));

//Задание 8 

console.log( new Date());

//Задание 9 

 const currenDate = new Date();
 currenDate.setDate(currenDate.getDate() + 73); 

 console.log(currenDate); 

 //Задание 10 

 function formatDate(date){
    const days = ["Воскресенье", "Понедельник","Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль","Март", "Апрель", "Май", "Июнь", "Июль", "Август","Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();
    const dayOfWeek = days[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `
    
    Дата : ${day} ${months[month]} ${year} - это ${dayOfWeek}. 
    Время : ${hours} ${minutes} ${seconds}`;
 }
 console.log(formatDate(new Date));