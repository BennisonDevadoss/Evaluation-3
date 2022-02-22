# Evaluation-3

#### 1: "this" keyword in JavaScript

#### Algorithm.

step 1: First the Object is created, and wrote some property and method to that object. 

step 2: And the method is created by the arrow function. (=>).

step 3: inside the arrow function, the condition is, the arrow function should print that objects name and address.

step 4: But, when the object's arrow function is run, the arrow function try to take a input from that objects parent object.

#### psudocode
```
SET detail = {
    fastName: "Bennison",
    lastName: "Devadoss",

    fullName: () => { console.log("Hello! " + this.fastName, this.lastName) },
};

PRINT detail
detail.fullName()
FUNCTION arrow(name, address) 
    console.log(`${name} from ${address}`)
ENDFUNCTION

arrow("Bennison Devadoss", "Tirunelveli")
```

#### 2: Permutataion

#### Psudocode:


step 1: Get the input value as a string. 

step 2: Inside the function I created an logic to find the permutaion. 

step 3: Inside the function (permutation),, First the parameter string is converted to array by the split method(). 

step 4: And the next stap, the array index place will be changed. 

step 5: Once the array value is modified,then the modified array will be printed immediatly. 

#### Psudocode.
```
FUNCTION permutation(string) {
    SET length = string.length;
    SET temp = [];
    SET arr = string.split("");
    FOR (let j = 0; j < length; j++) 
        FOR(i = 0; i < length - 1; i++) 
            temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
            PRINT arr.join(",")
        ENDFOR
    ENDFOR
}
permutation("ABCD")
```

#### 3: CallBack function in Events. 

#### Algorithm: 

step 1: A call back function is created. 

step 2: A call back function is only passed as an argument to the function. 

step 3: The call back function is passed as an argument to that Eventlistner

step 4: And document.addEventListener is used , and it takes two argumets. 

step 5: first argument is must be an evet, and the seconde argument is must be an callback function. 

step 6: When the event is happened, at the time the event listener executes that parameter call back function. 

#### Psudocode: 
```
FUNCTION callback = () => 
    console.log(this)
ENDFUNCTION

document.addEventListener("click", callback);

FUNCTION callBack() 
    console.log("Hi I am in Normal function")
ENDFUNCTION

document.addEventListener("onresize", callBack)
```

#### 4: SetTimeOut.js

#### Algorithm: 

step 1: Inside the for loop, that for loop have an condition setTimeOut

step 2: And the setTimeOut function have an condtion and time. 

step 3: The setTimeOut have an condition, and the condition will print the value of variable k. 

step 4: The call stack don't waits untill the timer is finished, the call stack goes to to execute the next line. 

step 5: This is why the the call stack don't wait to execute the setTimeOut. 

step 6: After the setTimeOut function, and that setTimeOut function's call back functon move to call back queue. 

step 7: Then the event listener moves the call back function to call stack. 

step 8: Then only, the call back function is executed. 

#### Psudocode: 
```
FOR(let i = 1; i < 10; i++) {
    SET k = i;
    setTimeout(FUNCTION () {
        PRINT k
    }, 1000 * (k + 1));
}
```

#### Algorithm

step1: 

#### 5: Class And Static Method

#### Algorithm: 

step 1: first I create a class with a name Detail. 

step 2: Inside the Detail constructor, the constructor takes the two parameter which is called name and detail. 

step 3: And the class have a method named classMethod(). 

step 4: And the constructor have an statement, to print the variable name and address. 

step 5: Finlly, A variale will be created by the class with the 
help of new keyword. 

step 6: Then we can access the property and method by the object name. 

step 7: A class is an templet to create object. 

step 8: Inside the class, we can declatre a method and property in privetly. 

step 9: With the help of static keyword, we can create an private method and property. 

step 10: And the object can't access that private property and method. 

step 11: The pirivate property and method can be accessed by the class name. 

#### Psudocode: 
```
class Detail {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    classMethod() {
        PRINT `Hi ${this.name} your age is ${this.age}`);
    }
}

const obj = new Detail("Bennison Devadoss", 21);
obj.classMethod();
class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    static staticMethod(name, address) {
        console.log(`${name} from ${address}`)
    }
}

SET person = new Person("Bennison", "Tirunelveli")
PRINT person
Person.staticMethod("Bennison Devadoss", "Tirunelveli")
```

#### 6: this inside the class method. 

####  Algorithm: 

step 1: We would use this keyword inside the constructor in class. 

step 2: With the help of the this keyword the variable will be assigned to an objects. 

step 3: Using this keyword, we can declare a function inside the class, and the method can be accessed by the objects.

step 4: Inside the class the this keyword must be declared inside the constructor. then only the property and method will be accessed by the objects. 

#### Psudocode: 
```
class Detail {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.arrow = () => { PRINT "I am inside the constructor" };
    }
    method() {
        PRINT `Hello ${this.name}, your age is ${this.age}`)
    }
};
SET person = new Detail("Bennison Devadoss", 21);
person.arrow()
```

#### 7: ExecutionOrder

#### Algorithm: 

step 1: First the ex() is called then the JavaScript interpreter goes into the function ex

step 2: And then it prints the ex function. 

step 3: Now the setTime out executed.

step 4: While the setTimeout takes one second, The call stack executes the next statement(ex2()).

step 5: After setTimeout took one second, the callback function goes to callBack queue. 

step 6: Then the statement (ex1()) is pushed to callstack, Finally the ex1 is executed. 

#### Psudocode: 
```
SET ex1 = () => console.log(ex1)
SET ex2 = () => console.log(ex2)
SET ex = () => {
    PRINT ex
    setTimeout(ex1, 1000)
    ex2()
}
ex()
```

#### 8: Event loops in JavaScript

#### What is call stack ? 

```
* Every Browser engine have an JavaScript engine. 

* inside the javascript enine, an call stack is there. 

* Every Javacript program is executed in inside the callstack. 

* While the program execution , an global execution context is created. 

* Then only the program is ready to executiom line by line. 

* When the program is executed line by line, if the callstack see an function call, then the call stack create an another execution contex to that function. 

* After the function is executed,  and that function execution context is deleted. 

* And then the call stack executes the program in global execution context. 

* Once the program execution is finished, the global execution context is deleted. 

* This is how an call stacks works 
```

#### What is Event Loop: 

```
* The job of the event loop is check the call back queue. and push the call back fuction from callback queue to call stack. 

* If our program have an setTimeout function, While the exection time, when the call stack see the setTimeOut function, the settimeout function starts the timer function from the browser. 

* setTimeOut function must need an call back function. 

* Till the timer is stoped, the call back function waits. 

* But the call stack don't wait to timer. the call stack executes the next statements. 

* Once the timer is finished, the callback function is not directly moved to call stack. 

* The call back function is moved to call back queue. 

* An event loop checks the call back queue and call stack.

* An event loop job is, When the call back function have an call back function.

* Then the call stack is free, the event loop push the call back function from call back queue to call stack. 

* Then only the call stack creats an execution context to that call back function. 

* And finally, that call back function is executed by the call stack. 
```

#### 9: Custom Event

#### Algorithm 

step 1: Wrote an html file, and that file 

#### 10: Super keyword inside the class

#### Algorithm: 

step 1: We can use super keyword inside the child class. 

step 2: if you Declare a variable inside the child constructor, and the variable which is in the parent consructor, then our program will give the errror message. 

step 3: to prevent this error message, the supper keyword should be used in child class constructor before the this keyword. 

step 4: Then we can use the variable name whice is already in the parent constructor. 

#### Psudocode: 
```
class Detail {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    method() {
        return `I am ${this.name}, from ${this.address}`;
    }
}

class Person extends Detail {
    constructor(name, address, age) {
        super(name, address)  
        this.age = age
    }
    method() {
        console.log(`${super.method()}, and I am ${this.age}.`);
    }

}

SET person1 = new Person("Bennison", "Tirunelveli", 21);

person1.method(); 
```
































