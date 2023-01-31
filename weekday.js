const prompt = require
('prompt-sync')({sigint: true});

let numOfWeek = Number(prompt("Enter a number 1-7: "))

if(numOfWeek === 1){
    console.log("The Day of the week is Monday!")
}else if(numOfWeek === 2){
    console.log("The Day of the week is Tuesday!")
}else if(numOfWeek === 3){
    console.log("The Day of the week is Wednesday!")
}else if(numOfWeek === 4){
    console.log("The Day of the week is Thursday!")
}else if(numOfWeek === 5){
    console.log("The Day of the week is Friday!")
}else if(numOfWeek === 6){
    console.log("The Day of the week is Saturday!")
}else if(numOfWeek === 7){
    console.log("The Day of the week is Sunday!")
}else{
    console.log("Error")
}