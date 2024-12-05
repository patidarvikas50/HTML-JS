
// let students = ["vikas", "vishal", "punit"]

// let randomIndex = Math.floor(Math.random() * students.length);


// let randomName = students[randomIndex];
// console.log(randomName)


// let button = document.getElementById("btn");
// let div = document.getElementById("div");

// let handleButtonClick = () => {
//   div.style.color = "red"
// }

// button.addEventListener("click", handleButtonClick)


// const products = [
//   {
//     productName: "Mobile",
//     price: 10000,
//     qty: 2
//   },
//   {
//     productName: "Watch",
//     price: 5000,
//     qty: 1
//   },
//   {
//     productName: "Washing Machine",
//     price: 20000,
//     qty: 2
//   }
// ]


// let total = products.map(function (product) {

//   return product.price * product.qty

// })
// console.log(total)

// let sum = 0

// for (let i = 0; i < total.length; i++) {

//   sum += total[i]
// }

// console.log(sum)


//find uncommon and fill in he new array

// let arr1 =[1,2,3,4]
// let arr2 =[2,3,4,5,6];

// let result = [];

// arr1.forEach(function(el){

//   if(!arr2.includes(el)){
//     result.push(el)
//   }
// })


// arr2.forEach(function(el){

//   if(!arr1.includes(el)){
//     result.push(el)
//   }
// })

// console.log(result)


//fibbonacci series

// let fibonacci = (number)=>{

// if(number<2){
//   return [1]
// }else{
//   let output = [1,1,2,3]

//   for(i=2;i<number;i++){
//     output[i] = output[i-1] + output[i-2]
//   }
//   return output
// }

// }
// console.log(fibonacci(8))


// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

// Examples
// makesTen(9, 10) ➞ true

// makesTen(9, 9) ➞ false

// makesTen(1, 9) ➞ true
// Notes
// Don't forget to return the result.

let makesTen = (a, b) => {

  return a == 10 || b == 10 || (a + b) == 10
}

console.log(makesTen(1, 9))


// Given a number, return the total sum of that number multiplied by every number between 1 and 10.

// Examples
// multiSum(1) ➞ 55
// // 1 x 1 + 1 x 2 + 1 x 3 ...... 1 x 9 + 1 x 10 = 55

// multiSum(6) ➞ 330
// // 6 x 1 + 6 x 2 + 6 x 3 ...... 6 x 9 + 6 x 10 = 330

// multiSum(10) ➞ 550

// multiSum(8) ➞ 440

// multiSum(2) ➞ 110


let multiSum = (num) => {

  let sum = 0;

  for (let i = 1; i <= 10; i++) {

    sum += num * i;

  }
  return sum

}
console.log(multiSum(10))


// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

// Examples
// societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"

// societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"

// societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"
// Notes
// The secret society's name should be entirely uppercased.


//let friends = [];

let societyName = (names) => {

  names.sort();

  let secretName = names.map((el) =>

    el[0]

  ).join('')

  return secretName.toUpperCase()

}

console.log(societyName(["ashish", "pankaj", "vikas"]));



// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

// Examples
// animals(2, 3, 5) ➞ 36

// animals(1, 2, 3) ➞ 22

// animals(5, 2, 8) ➞ 50
// Notes
// Don't forget to return the result.
// The order of animals passed is animals(chickens, cows, pigs).
// Remember that the farmer wants to know the total number of legs and not the total number of animals.



let animals = (chickens, cows, pigs) => {

  let chickensLeg = chickens * 2;
  let cowLeg = cows * 4;
  let pigLeg = pigs * 4

  let totalLegs = chickensLeg + cowLeg + pigLeg;

  return totalLegs;
}
console.log(animals(2, 3, 5))


// A salesman has a number of cities to visit. He wants to calculate the total number of 
// possible paths he could take, visiting 
//each city once before returning home. 
// Return the total number of possible paths a salesman can travel, given n cities.

// If we have cities A, B and C, possible paths would be:

// A -> B -> C
// A -> C -> B
// B -> A -> C
// B -> C -> A
// C -> B -> A
// C -> A -> B
// ... which gives us 6 as the possible number of paths.

// Examples
// paths(4) ➞ 24

// paths(1) ➞ 1

// paths(9) ➞ 362880


let paths = (countOfCities) => {

  if (countOfCities == 1) {
    return 1;
  } else {

    return countOfCities * paths(countOfCities - 1);
  }
}



console.log(paths(4));
console.log(paths(1));
console.log(paths(9));



// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

// Examples
// dividesEvenly(98, 7) ➞ true
// // 98/7 = 14

// dividesEvenly(85, 4) ➞ false
// // 85/4 = 21.25

// Notes
// a will always be greater than or equal to b.



function dividesEvenly(a, b) {

  if (a % b == 0 && a >= b) {

    return true
  } else {
    return false
  }

}
console.log(dividesEvenly(98, 7));



// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

// Examples
// convert(1, 3) ➞ 3780

// convert(2, 0) ➞ 7200

// convert(0, 0) ➞ 0
// Notes
// Don't forget to return the result.



let convert = (hours, minutes) => {

  let hoursInSeconds = hours * 3600

  let minutesInSeconds = minutes * 60

  return total = (hoursInSeconds + minutesInSeconds)

}
console.log(convert(2 , 0))



// Create a function that takes a string and returns the number (count) of vowels contained within it.

// Examples
// countVowels("Celebration") ➞ 5

// countVowels("Palm") ➞ 1

// countVowels("Prediction") ➞ 4
// Notes
// a, e, i, o, u are considered vowels (not y).
// All test cases are one word and only contain letters.


let countVowels = (String) =>{

let vowels = ['a', 'e', 'i', 'o', 'u',  'A','E','I','O','U'];

let count = 0;

String.split('').forEach(
  
  char => {

  if (vowels.includes(char)) {
    count++;
  }
});

return count;

}
console.log(countVowels("VIKASpatidaer"))












