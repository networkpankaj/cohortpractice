const fs = require('fs')

// function pankajreadFile(cb){
//     fs.readFile('a.txt', 'utf-8', function(err, data){
//         cb(data)
//     })
// }

function pankajreadFile(){
    return new Promise(function resolve(){
        fs.readFile('a.txt', utf-8, function(err, data){
            resolve(data)
        })
    })
}

function waitFor(data){
    console.log(data);
}
pankajreadFile().then(waitFor)


// pending and resolve

var d = new Promise(function resolve(resolve, reject){
    setTimeout(function(){
        resolve('foo')
    }, 1000)
})
function waitFor(){
    console.log(d)
}

d.then(waitFor)
console.log('hello world')