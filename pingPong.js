const string = process.argv[2];
console.log(string);


const pingsAndPongs = string.split(",");
console.log(pingsAndPongs)

// let pings = 0
// let pongs = 0

// for (let i = 0; i < pingsAndPongs.length; i++) {
//     if (pingsAndPongs[i] == "ping") {
//         pings++
//     } else {
//         pongs++
//     }

// }

// console.log("match result ping vs pong:" + pings + "-" + pongs);


// IN pingsAndPongs[] of TEXT
// LET pings = 0
// LET pongs = 0
// FOR i = 0 TO(pingsAndPongs LENGTH - 1)
//     IF pingsAndPongs[i] == "ping"
// pings++
// ELSE
// pongs++
// OUT "Match result ping vs pong: " + pings + "-" + pongs