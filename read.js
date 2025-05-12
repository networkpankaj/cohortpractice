const fs = require('fs')
fs.readFile("a.txt", "utf-8", function(err, data) {
    console.log(data)
});

console.log("Hie There");

let a = 0;

for(let i = 0 ; i < 10000000000; i++){
    a++
}

console.log("Hi There 2 !");