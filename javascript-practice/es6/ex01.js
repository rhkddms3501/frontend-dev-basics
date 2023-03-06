/**
 * let : Block Scope의 변수
 * 
 * 
 */

// let 블록 범위
try {
    if(true){
        let i = 10;
        var j = 20;
    }

    console.log(i);
    console.log(j);
} catch (error) {
    console.error('error: ' + error);
}


// cf: var 함수 범위
try {
    let f = function(){
        var m = 20;
    }

    f();
    console.log(m);
} catch (error) {
    console.error('error: ' + error);
}
