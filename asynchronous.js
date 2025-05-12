function stillFind(n){
    let count = 0;

    for(let i = 0; i < n; i++){
        count += i;
    }
    return count;
}

function stillstillFind(){
   return stillFind(100)
}

setTimeout(stillstillFind, 1000)
console.log("HEllo WOrld!");