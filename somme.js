const string = process.argv[2];
console.log(string);


const numbers = string.split(",");
//parse
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    let value = numbers[i]
    let sum = sum + value

}

console.log("Sum is equal to " + sum);

// PSEUDO CODE :
// IN numbers[] of NUMBER
// LET sum = 0 // or of NUMBER
// FOR LET i = 0 TO(numbers LENGTH - 1)
//     LET value = numbers[i]
// sum = sum + value
// OUT "Sum is equal to " + sum