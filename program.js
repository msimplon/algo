const string = process.argv[2]//node js non pas javascript
console.log(string);

const array = string.split(",");
console.log(array);

const numbers = []; //destination
for (let i = 0; i < array.lenght; i++) { //loop code block
    const candidate = array[i]; //type string
    //objective: convert candidate into number
    const number = parseInt(candidate, 10);
    numbers.push(number);

}
console.log(numbers);