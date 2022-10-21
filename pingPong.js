// const string = process.argv[2];
// console.log(string);


const pingsAndPongs = [];

let pings = 0
let pongs = 0

for (let i = 0; i < pingsAndPongs.length; i++) {
    if (pingsAndPongs[i] == "ping") {
        pings++
    } else {
        pongs++
    }

}

console.log("match result ping vs pong:" + pings + "-" + pongs);


// OUT "Match result ping vs pong: " + pings + "-" + pongs