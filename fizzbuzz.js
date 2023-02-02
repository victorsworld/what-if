const prompt = require
('prompt-sync')({sigint: true});

let ask = Number(prompt("Enter a number: "))

if(ask % 3 === 0){
console.log("Fizz")
}  else if(ask % 5 === 0){
console.log("Buzz")
}else if(ask % 3 === 0 && ask % 5 === 0 ){
    console.log("FizzBuzz")

}




// === your comparing the type and face value
// == conmparing the value 