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
        process.stdout.write(` ${e}: ${(x => x*x)(e)}\t`);
    }
});

