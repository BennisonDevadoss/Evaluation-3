const detail = {
    fastName: "Bennison",
    lastName: "Devadoss",

    fullName: () => { console.log("Hello! " + this.fastName, this.lastName) },

    // global: () => { console.log(this === window) } // It will work on the console, and this condition gives the output true. 
};

console.log(detail);
detail.fullName();   //Now the console prints the Undefined, Because an arrow function points the parent scope. 
// detail.global();


function arrow(name, address) {
    console.log(`${name} from ${address}`);
}

arrow("Bennison Devadoss", "Tirunelveli"); 