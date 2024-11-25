//Задание №1
let i = 1 
while(i<=2){
   alert('Привет');
    i++;
} 

//Задание №2
let i=1
while(i<=5){
    alert(i)
    i++;
    }
 */

//Задание №3

let i=7
while(i>=7){
    alert(i);
    i++
    if(i==23){
        break
    }
} 
 
//Задание №4

const obj={
    Коля:'200',
    Вася:'300',
    Петя:'400'
}
for(const key in obj){
    alert(`${key} - ${obj[key]}`);
}
*
//Задание №5

let n=1000;
let nam = 0 
while (n >=50 ) {
    n /= 2;
    alert(n);
    nam++;
}
alert(`Колличество циклов: ${nam}`); 


//Задание №6

let dayFriday = 3;
let allDay = 31;
for (let i = dayFriday; i <= allDay; i += 7) {
    alert(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`)
}
    
