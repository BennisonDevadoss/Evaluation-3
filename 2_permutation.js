function permutation(string) {
    let length = string.length;
    let temp = [];
    let arr = string.split("");
    for (let j = 0; j < length; j++) {
        for (i = 0; i < length - 1; i++) {
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            console.log(arr.join(","));
        }
    }
}

permutation("ABCD"); 
