document.addEventListener('DOMContentLoaded',function(){
    // дз1
    // 1 задача

let str = "abcde";
alert(str[0]);
alert(str[1]);
alert(str[4]);

    // 2 задача

let a = parseInt(prompt("введите число 1:"));
let b = parseInt(prompt("введите число 2:"));
console.log(a > 0 || b > 0);

   // 3 задача

let age = parseInt(prompt('введите ваш возраст:'));
if (age >= 18) {
    console.log ('совершеннолетний');}
    else {
    console.log     ('несовершеннолетний');
    }

// дз2
// задача 1
let ages = parseInt(prompt('введите ваш возраст:'));
if (ages >= 60) {
    console.log ('Поздравляем с пенсионным возрастом!');}
else {
    console.log ('Вам ещё рано на пенсию');}

// задача 2

function numbers () {
    let m = parseInt (prompt('введите первое число:'));
    let n = parseInt (prompt('введите второе число:'));
if (m>n){
    console.log ('первое число больше второго');
}
    else if (n>m){
        console.log ('второе число больше первого');
}
else {
    console.log ('числа равны');
}
}
numbers ();

// задача 3

let number = parseInt (prompt ('введите свое число:'));
if (number % 2 == 0){
    console.log ('это четное число');
}
else {
    console.log ('это нечетное число');
}

// задача 4

function getRandomIntInclusive(1, 10) {
    min = Math.ceil(1);
    max = Math.floor(10);
    return Math.floor(Math.random() * (10 - 1 + 1) + 1); // Максимум и минимум включаются
  }


})