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
        console.log ('совершеннолетний');
    } else {
        console.log ('несовершеннолетний');
    }

// дз2

// задача 1
let ages = parseInt(prompt('введите ваш возраст:'));
    if (ages >= 60) {
        console.log ('Поздравляем с пенсионным возрастом!');
    } else {
        console.log ('Вам ещё рано на пенсию');}

// задача 2

function numbers () {
    if (m>n){
        console.log ('первое число больше второго');
    } else if (n>m) {
        console.log ('второе число больше первого');
    } else {
        console.log ('числа равны');
    }
}
    let m = parseInt (prompt('введите первое число:'));
    let n = parseInt (prompt('введите второе число:'));
numbers ();

// задача 3

let number = parseInt (prompt ('введите свое число:'));
    if (number % 2 == 0){
        console.log ('это четное число');
    } else {
        console.log ('это нечетное число');
    }

// задача 4

function secretcode (unumber) {
    const secretNumber = 3;
    if (unumber === secretNumber) {
        console.log ('вы угадали!');
    } else {
    console.log ('попробуйте еще раз!');
    }
}
    let usersNumber = parseInt(prompt('введите загаданную цифру:'));
secretcode (usersNumber);
// задача 5

function logpass(login, password) {
    const correctLogin = 'admin';
    const correctPassword = '12345';
    if (login !== correctLogin || password !== correctPassword) {
        console.log('неверен логин или пароль');
    } else {
        console.log('добро пожаловать!');
    }
}
    let usersLogin = prompt('введите ваш логин:');
    let usersPass = prompt('введите ваш пароль:');
logpass(usersLogin, usersPass);

// задача 6

let year = parseInt(prompt('введите год:'));
    if (year % 4 === 0) {
        console.log ('этот год високосный');
    } else if (year % 100 === 0 && year % 400 === 0) {
        console.log('этот год високосный');
    } else {
        console.log('этот год не високосный');
    }

// задача 7

function stolat () {
    
    if (c>100){
        console.log ('большое число');
    } else if (c<100){
        console.log ('маленькое число')
    } else {
        console.log ('точно 100!');
    }
}
    let c = parseInt (prompt('введите любое число:'));
stolat ();

})