const prompt = require
('prompt-sync')({sigint: true});

let earthWeight = Number(prompt("what is your Earth Weight?: "));
let planetType = (prompt("What planet will you be competing on?: "))

if(planetType === "Venus"){
    console.log(`Your desire weight for this planet is ${earthWeight * 0.78}!`)
}
else if(planetType === "Mars"){
    console.log(`Your desire weight for this planet is ${earthWeight * 0.39}!`)
}
else if(planetType === "Jupiter"){
    console.log(`Your desire weight for this planet is ${earthWeight * 2.65}!`)
}
else if(planetType === "Saturn"){
    console.log(`Your desire weight for this planet is ${earthWeight * 1.17}!`)
}
else if(planetType === "Uranus"){
    console.log(`Your desire weight for this planet is ${earthWeight * 1.05}!`)
}
else if(planetType === "Neptune"){
    console.log(`Your desire weight for this planet is ${earthWeight * 1.23}!`)
} else{ 
    console.log("Capitalize the First letter, or enter a planet from the following list Venus, Mars, Jupiter, Saturn, Uranus, and Neptune.  ")
}
