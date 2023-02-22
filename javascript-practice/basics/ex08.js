/**
 *  JavaScript 객체 3 - 확장
 */

var o = {
    name: '짱구',
    age: 10
}

var f = function () {
    console.log('Hello world!'); 
}

console.log("===== 확장 =====");
o.another = {
    name: '훈이',
    age: 5,
    print: function(){
        console.log(this.name + " : " + this.age);
    }
}

console.log(o);
o.another.print();

console.log("===== 확장(function 타입) =====");
f.another = {
    name: '훈이',
    age: 5,
    print: function(){
        console.log(this.name + " : " + this.age);
    }
}

console.log(f);
f.another.print();

console.log("===== 확장: 기본타입(primitive type)은 확장되지 않는다. =====");
var i1 = 10;
var i2 = new Number(10);

console.log(i1 + " : " + i2 + " : " + (i1+i2));

i2.another = {
    name: '짱구',
    age: 50
}

console.log(i2);
i1.another = {};            // 유사객체 변환된다. new Number(i1).another = {};
console.log(i1.another);    // 유사객체 변환된다. console.log(new Number(i1).another);