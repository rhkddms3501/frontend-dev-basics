/**
 * 변수의 스코프(Scope)
 * 
 *  1. 자바스크립트는 코드에서 변수의 범위를 알 수 있다. (정적 스코프)
 *  2. 자바스크립트 전역 범위
 *  3. ES6 이전 (<=ESS)
 *      - 자바와 같은 블록({}) 범위를 지원하지 않았다.
 *      - 함수 범위만 지원 했다.
 *      - var 키워드를 사용해야 함수 범위를 가진다.
 *  4. ES6 이후(ES6 ~ ES2023)
 *      - 자바와 같은 블록 스코프를 지원한다.
 *      - let 키워드를 사용해서 블록 범위를 가지게 한다.
 *      - const 키워드는 블록 범위에 있는 상수를 정의할 때 사용한다.
 * 5. 결론
 *      const/let만 사용하고 둘 중에 하나를 반디시 붙히자! (안 붙히면 전역범위가 된다.) (hoisting)
 */
var i = 20;

var f = function() {
    var i = 20;
    j = 100;

    console.log(i);
    i = j - i;
}

f();
console.log(i);
console.log(j);
console.log("===== var 키워드는 함수 블록에서만 함수 범위를 만든다 =====");
if (90 + 10 == 100) {
    var k = 10;
}

console.log(k);

{
    let x = 1000;
    const PI = 3.14;
    
    x = 100;
    // PI = 0; // Assignment to constant variable.

}

// console.log(x); // not defined error
// console.log(PI); // not defined error