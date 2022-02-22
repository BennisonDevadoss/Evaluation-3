// This inside the class methods 
class Detail {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.arrow = () => { console.log("I am inside the constructor") };
    }
    method() {
        console.log(`Hello ${this.name}, your age is ${this.age}`)
    }

    // arrow1 = () => { console.log(`I am ${this.name}`) }   // This is worked on the Chrome console 
};

let person = new Detail("Bennison Devadoss", 21);

person.arrow();
// person.arrow1();   /// It doesn't work in the node but it is worked on the chrome console. 