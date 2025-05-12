console.log("Hi There")

setTimeout( function() {
    console.log("Async func is running on the loop")
}, 5000)

let a = 0;
for(let i = 0; i < 10; i++){
    a++;
}

console.log('Hi there 2')