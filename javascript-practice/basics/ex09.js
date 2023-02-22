/**
 *  JavaScript Object 4 - prototype 기반의 상속과 오버라이딩:
 */

var MyObject = function (name, age) {
    this.name = name;
    this.age = age;    
}

MyObject.prototype.school = 'bit_academy';
MyObject.prototype.course = 'Spring & React'
MyObject.prototype.info = function () {
    console.log(this.name + ", " + this.age + ", " + this.school + ", " + this.course);
}

console.log(MyObject.prototype);

// MyObject 인스턴스 생성
var o1 = new MyObject("짱구", 5);
o1.info();
o1.school = 'douzone';
o1.info();

//  MyObject 인스턴스 생성 2
var o2 = new MyObject("훈이", 5);
o2.info = function () {
    console.log("비밀이야 아아아 아직 아니야 아니야");
}
o2.info();