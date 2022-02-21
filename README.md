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

#### Algorithm

step1: 

#### 5: Class And Static Method

#### Algorithm: 

step 1: first I create a class with a name Detail. 

step 2: Inside the Detail constructor, the constructor takes the two parameter which is called name and detail. 

step 3: And the class have a method named classMethod(). 

step 4: And the have an condition to print the variable name and address. 

step 5: 
