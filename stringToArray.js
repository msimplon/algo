const string = process.argv[2];
console.log(string);

const numbers = [];

let tmp = "";

for (let i = 0; i < string.length; i++) {
    const candidate = string[i];
    if (candidate != ",") {
        tmp += candidate;

    } else {
        numbers.push(tmp);
        tmp = "";
    }
}
numbers.push(tmp);
console.log(numbers);


// PSEUDO CODE :

// IN string of TEXT
// LET numbers[] of TEXT
// LET tmp of TEXT
// FOR i = 0 TO string LENGTH - 1
//     LET candidate = string[i]
//     IF candidate != "," THEN
// tmp += candidate
// ELSE
//         ADD tmp INTO numbers
// tmp = ""
// ADD tmp INTO numbers
// OUT numbers





