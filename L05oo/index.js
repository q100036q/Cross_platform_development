/**
 * Created by hp-dhr on 2014/10/8.
 */
function A(){
//使用函数闭包方式动态附加属性
    this.sayHeHe = function(){
        console.log("Hello duanhaoran");
    }
}
//实例方法
A.prototype.sayHello = function(){
    console.log("Hello JS");
}
//静态方法
A.sayHi = function(){
    console.log("Hello DHR");
}

var a = new A();
a.sayHello();
A.sayHi();
//继承
function B(){

}
B.prototype = new A();
var b = new B();
b.sayHello();
b.sayHeHe();