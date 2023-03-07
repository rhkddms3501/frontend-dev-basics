/**
 * Arrow Function
 */


const power = function(x){
    return x * x;
}

const numbers = [1,2,3,4,5];
numbers.forEach(function(n){
    process.stdout.write(`${n}: ${power(n)}\t`);
});

console.log();
console.log();
// ex01
numbers.forEach(function(n){
    //let result = (function(x){
    //    return x * x;
    //})(n);


    //let result = ((x) => {return x*x})(n);

    let result = (x => x*x)(n);
    process.stdout.write(`${n}: ${result}\t`);
});

console.log();
console.log();
//ex02
numbers.forEach(function(n){process.stdout.write(`${n}: ${(x => x*x)(n)}\t`)});


console.log();
console.log();
// ex03: 여러행 함수
[5, 3, 15, 1045, 43, 92].forEach( e=> {
    if(3 % 5){
        process.stdout.write(` ${e}: ${(x => x*x)()}\t`);
    }
});

// ex4 - this를 어휘적으로 바인딩(Lexical Bind)
console.log();
console.log();

const shinchan = {
    name: '짱구',
    friends: ['철수', '유리', '훈이', '맹구'],
    printFriends: function(){
        console.log(this); 
        this.friends.forEach(f =>{console.log(`${this.name}의 친구 ${f}`)});
    }
}

shinchan.printFriends();