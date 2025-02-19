// //задание 1 
// const arr = [1, 5, 4, 10, 0, 3,];
// for (let i = 0 ; i < arr.length; i++){
//     console.log(arr[i]);
//     if (arr[i] === 10){
//         break;
//     }
// }

// //Задание 2 
// const ar = [1, 5, 4, 10, 0, 3,] ;
// for (let i = 0 ; i < ar.length; i++){
//     if(ar[i] === 4){
//         console.log(i);
//         break;
//     }    
// }

//Задание 3 
// const arr = [1, 3, 5, 10, 20];
// console.log(arr.join(' '));

//Задание 4
//  const arr = [];

//  for (let i = 0; i < 3; i++){
//     const arr2 = [];
//     for (let i = 0; i < 3; i++){
//         arr2.push(1);
//     }
//     arr.push(arr2);
//  }
//  console.log(arr);

// Задание 5 
// const arr = [1, 1, 1];
// arr.push(2, 2, 2);
// console.log(arr);

//Задание 6 
// const arr = [9, 8, 7, 'a', 6, 5];
// arr.sort();
// console.log(arr);

//Задание 7 
// const arr = [9, 8, 7, 6, 5];
// const userNamber = +prompt('Введите число');
// if (arr.includes(userNamber)) {
//     alert('Угадал');
// } else {
//     alert('Не угадал');
// }

//Задание 8

// let str = 'abcdef';
// str = str.split('');
// str.reverse();
// str = str.join('');
// console.log(str); 

//Задание 9 

// const arr = [[1, 2, 3],[4, 5, 6]];
// const newArr = [];
// for(let i = 0; i < arr.length; i++){
//     newArr.push(...arr[i]);
// }
// console.log(newArr);

//Задание 10 

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (i = 0; i < arr.length; i++){
//     if(arr[i + 1]){
//     console.log(arr[i] + arr[i +1]);
//     } 
// }

//задание  11

// function square(arr){
//     return arr.map(item => item ** 2);
// }
// console.log(square([1, 2, 3]));

//Задание 12 

// function getLangth(arr){
//     return arr.map(item => item.length);
// }

// console.log(getLangth(['hello', 'world' ]));

//Задание 13

// function negativeNambers(arr){
//     return arr.filter(item => item < 0);
// }

// console.log(negativeNambers([1, 4, -5, 9, -2, -8]));

//Задание 14

// function randomNamb(){
//     return Math.floor(Math.random() * 10);
// }

// const arr = [];

// for ( let i = 0; i < 10; i++){
//     arr.push(randomNamb());
// }

// const evenArr = [];

// for( let i = 0; i < arr.length; i++){
//     if( arr[i] % 2 === 0){
//         evenArr.push(arr[i]);
//     }
// }

// console.log(evenArr);

//Задание 15

function randomNamb(){
    return Math.floor(Math.random() * 10);
}

const arr = [];

for ( let i = 0; i < 10; i++){
     arr.push(randomNamb());
    }

console.log(arr)

console.log(arr.reduce((a, b) => a + b) / arr.length);  