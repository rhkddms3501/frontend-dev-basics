/**
 * 클로저(Closure)  : "클로저는 함수와 그 함수가 정의되었을 때의 스코프(Lexical scope)와의 조합"
 * 
 *  1. 자유변수에 닫혀(closed, 엮여)있는 함수
 *  2. 클로저는 자신이 생성될 때의 스코프(Lexical Scope)를 기억하는 함수
 *  3. 클로저는 함수가 자신이 선언되었을때의 스코프(Lexical Scope)를 기억하여 자신이 선언되었을 떄의 스코프 밖에서 호출되어도 그 스코프에 접근할 수 있는 함수
 *  4. 클로저를 사용하는 이유
 *      - 상태유지 ⭐ ex) react's useState
 *      - 전역 변수 회피
 *      - 정보 은닉 ex) react's useState
 * 
 */

// Lexical Scope
const f1 = function(){
    const s = "Hello Closure";
    const inner = function(){
        console.log(s);
    }
    inner();
}
f1();

// Closure
const f2 = function(){
    const s = "Hello Closure";
    return function(){
        console.log(s);
    }
}

const closure = f2();
closure();