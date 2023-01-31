const prompt = require("prompt-sync")({ sigint: true });

let students = Number(prompt("Enter class size: "));

let div3 = Number((Math.floor(students / 3)));

let oddNum = students % 3;


let div2 = Math.floor(students / 2);


let evenNum = students % 2;


if (students % 3 === 3) {
  console.log(`create ${div3} groups of 3 and ${oddNum} groups of 2`);
} else if (students % 3 === 2) {
  console.log(`create ${div3} groups of 3 and ${evenNum} groups of 2`);
}else if (students % 3 === 1) {
    console.log(`create ${div3} groups of 3 and ${evenNum} groups of 2`);
  }else if (students % 3 === 0) {
    console.log(`create ${div3} groups of 3 and ${evenNum} groups of 2`);
  }