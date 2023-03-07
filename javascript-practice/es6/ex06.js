/**
 * 구조 분해 (Destrunting)
 */


//! ex1
const user = {
    firstName: '짱',
    lastName: '구',
    email: 'shinchan@email.com'
};

// let firstName = user.firstName;
// let lastName = user.lastName;
// let email = user.email;

const {firstName, lastName, email} = user;
console.log(firstName, lastName, email);

//! ex2 - Default Value
const goods = {
    name: 'TV',
    price: 10000,
    stockCount: 10
}

const {name, price, stockCount=0, soldCount=0} = goods;
console.log(name, price, stockCount, soldCount);

//! ex3 - 구조 분해해야 할 객체의 속성 이름과 변수 이름이 다를 때
const person = {
    n: '맹구',
    c: '떡잎마을'
}

const{n: fullName, c: country} = person;
console.log(fullName, country);

//! ex4 - 내부 개체(Nested Object)의 구조 분해
const student = {
    name: '짱구',
    age: 5,
    score: {
        math: 10,
        korean: 100,
        science: 20
    }
}

const {
    name: studentName, 
    score: {
        math=0, // math가 없으면 빵점
        korean=0,
        science=0,
        music=0
    }
} = student;
console.log(`
${studentName}의 성적
국어: ${korean}
수학: ${math}
과학: ${science}
음악: ${music}
`);

//! ex05
const averageScore = function ({name: studentName, score: {math=0, korean=0, science=0}}){
    console.log(`${student}의 평균은 ${(math + korean + science) / 3} 입니다.`);
}
    
averageScore(student);

//! ex06 - 배열의 구조 분해
const color = [155, 200, 87];
let [red, green, blue] = color;
console.log(red, green, blue);

//! ex07 - 배열의 구조 분해 ( default 값)
[red=0, green=0, blue=0, alpha=0] = color;
console.log(red, green, blue, alpha);

//! ex08 - 배열의 구조분해 (skip value)
const [,, colorOfBlue=0] = color;
console.log(colorOfBlue);

//! ex09 - 배열의 구조분해 (swap values)
let x = 20;
let y = 10;
console.log(x, y);

let temp = x;
x = y;
y = temp;
console.log(x, y);

[x, y] = [y, x];
console.log(x, y);

//! ex10 - 배열의 구조분해 (... array spread operator)
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [firstColor, secondColor, ...otherColors] = rainbow;
console.log(firstColor, secondColor, otherColors);

console.log("Colors of Rainbow:", rainbow);
console.log("Colors of Rainbow:", ...rainbow);

//! ex10 - 배열의 구조분해: ... array spread operator 함수의 파라미터로 사용하기(arguments 대용)
// "red orange yellow"

// const f = function(...colors) {
//    return colors.join(' ');
// }

//const s = f('red', 'orange', 'yellow');
const s = ((...colors) => colors.join(' '))('red', 'orange', 'yellow'); 

console.log(s);