'use strict'
class Person {
    constructor(name){
        this.name=name;
    }
    printGreeting () {
        console.log(`Hi,I am ${this.name}!`);
    }
}
// var person1 = new Person('Andy');
// person1.printGreeting();

// var person2 = new Person('Mike');
// person2.printGreeting();

class Employee extends Person {
    constructor(name,job){
        super(name);
        this.job = job;
    }
    printGreeting(){
        super.printGreeting();
        console.log(`Hi,I am ${this.name} and I am a ${this.job}`);
    }
}

var person1 = new Employee('Andy','teacher');
person1.printGreeting();

var person2 = new Person('Mike');
person2.printGreeting();