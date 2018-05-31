var obj={a:1};
console.log('a'in obj);
console.log('toString' in obj);
function hasPrototypeProperty(o,name){
    return name in o && !o.hasOwnProperty(name); 
}
console.log(hasPrototypeProperty(obj,'a'))

// 函数是对象Object
//Person 原型链对象
//js入口 js把所有对象其实是由function构造
function Person(name){
    this.name=name
}
// prototype,js里面几乎所有的函数都有一个prototype属性，指针一样，
//指向一个对象，这个对象就是要添加的属性或者集合
Person.prototype.getName=function(){
    return this.name;
}

// js 原型式继承
//让子类拥有父类的所有的属性
function Author(name,books){
    // 新的构造函数
    Person.call(this,name);
    this.books=books;
}
// 得到person的prototype
extend(Author,Person);

const author=new Author('雨果',['悲惨世界']);
// author 函数prototype指向Autho的prototype
//this 实例对象函数，this指向作用域可以找到的属性
// console.log(author.name);
// console.log(author.books)

Author.prototype.getBooks=function(){
    return this.books;
}
// 构造函数 Author
function extend(subClass,superClass){
    var F=function(){};//空的构造函数
    F.prototype=superClass.prototype;
    subClass.prototype=new F();//新的对象
    // 失去构造函数
    subClass.prototype.constructor=subClass;
}
console.log(author.getName())
// console.log(author.getBooks())