//Задание №1
let i = 1 
while(i<=2){
   alert('Привет');
    i++;
} 

//Задание №2
let k=1
while(i<=5){
    alert(k)
    k++;
  }
//Задание №3

let a=7
while(a>=7){
    alert(a);
    i++
    if(a==23){
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

//Задание №5

let w = 1000;
let nam = 0 
while (w >=50 ) {
    w /= 2;
    alert(w);
    nam++;
}
alert(`Колличество циклов: ${nam}`); 


//Задание №6

let dayFriday = 3;
let allDay = 31;
for (let i = dayFriday; i <= allDay; i += 7) {
    alert(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`)
}
    
