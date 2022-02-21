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

#### 3: 





