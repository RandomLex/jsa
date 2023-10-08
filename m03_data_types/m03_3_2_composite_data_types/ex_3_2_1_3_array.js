let array1 = []; // -> []
let array2 = [2, 4, "six"]; // -> [2, 4, "six"]
let array3 = new Array(); // -> []
let array4 = new Array(2); // -> [undefined, undefined]
let array5 = new Array(2, 4, "six"); // -> [2, 4, six]
let array6 = new Array("2"); // -> ["2"]

console.log(`array2 : ${typeof array2} : ${array2 instanceof Array} : ${array2.length}`); // -> array2 : object : true : 3
console.log(`array5 : ${typeof array5} : ${array5 instanceof Array} : ${array5.length}`); // -> array5 : object : true : 3
console.log(array2[0]);
console.log(array5[2]);
console.log(array5[5]);

console.log('-------- concat ---------');
let array7 = [10, 20, 30];
let array8 = ["cat", "dog"];
let array9 = array7.concat(array8);

console.log(array7.length);
console.log(array8.length);
console.log(array9.length);
console.log(array9);

console.log('-------- push (adding to the end) & unshift (adding to the beginning) ---------');
let array10 = [10, 20, 30];
console.log(array10);
array10.push(100);
console.log(array10);
array10.push(50, "dog");
console.log(array10);
array10.unshift("cat", 90, 80);
console.log(array10);

console.log('-------- pop (removing from the end) & shift (removing from the beginning) ---------');
console.log(array10);
console.log(array10.length);
console.log(array10.shift());
console.log(array10);
console.log(array10.pop());
console.log(array10);
console.log(array10.length);

console.log('-------- adding and removing without using methods ---------');
let array11 = [10, 20, 30];
console.log(array11);
array11[3] = 100;
console.log(array11);
array11[5] = 1000;
console.log(array11);
console.log(array11[4]);
delete array11[1]; //NOSONAR
console.log(array11);


let array12 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
for(let index=0; index<array12.length; index++) {
  console.log(`${index} : ${array12[index]}`); // -> 0 : cat -> 1 : 90 -> 2 : 80 -> 3 : 10 -> 4 : 20 -> 5 : 30 -> 6 : 100 -> 7 : 50 -> 8 : dog
}
console.log('--- using forEach(function) method');
function toConsole(item, index, array) {
  console.log(`${index} : ${item}`);
}
array12.forEach(toConsole); // -> 0 : cat -> 1 : 90 -> 2 : 80 -> 3 : 10 -> 4 : 20 -> 5 : 30 -> 6 : 100 -> 7 : 50 -> 8 : dog
console.log('---forEach and anonymous function');
array12.forEach(function (item, index) {
  console.log(`${index} : ${item}`);
});
console.log('---forEach and arrow function');
array12.forEach((item, index) => {
  console.log(`${index} : ${item}`);
});

console.log('\n---- every and some methods ------');
// 'every' checks if all the elements of the array meet a certain condition
// 'some' is successful if at least one of the elements meets the condition
let array13 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let anyNumberPresent = array13.some(item => typeof item === 'number');
console.log(anyNumberPresent); // true
let array14 = [90, 80, 10, 20, 30, 100, 50];
let allPositive = array14.every(item => item > 0);
console.log(allPositive);

console.log('\n---- filtering ------');
let array15 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
console.log(array15.length); // -> 9
let numbers = array15.filter(item => typeof item === "number"); // -> [90, 80, 10, 20, 30, 100, 50]
console.log(numbers); // -> 7
console.log(array15); // -> 9

console.log('\n---- mapping ------');
let array16 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let squarePower = array16
  .filter(item => typeof item === 'number')
  .map(item => item * item);
console.log(squarePower);

console.log('\n---- sorting ------');
let array17 = [90, 80, 10, 20, 30, 100, 50];
array17.sort((left, right) => {
  if (left < right) {
    return -1;
  } else if (left === right) {
    return 0;
  } else {
    return 1;
  }
});
console.log(array17);

console.log('\n---- reduce ------');
let array18 = [10, 20, 30, 50, 80, 90, 100];
let sum18 = array18.reduce((acc, item) => acc + item);
console.log(sum18);

let anotherSum18 = array18.reduce((accumulator, item) => accumulator + item, 1000);
console.log(anotherSum18); // -> 1380, as soon as 1000 is the initial value of accumulator

let strangeObj = numbers.reduce((accumulator, item, index) => {
  accumulator[item] = index;
  return accumulator;
} , {});
console.log(strangeObj); // -> {10: 0, 20: 1, 30: 2, 50: 3, 80: 4, 90: 5, 100: 6}, as soon as accumulator is {} in the beginning

console.log('\n---- reverse ------');
let array19 = [10, 20, 30, 50, 80, 90, 100];
array19.reverse();
console.log(array19);

console.log('\n---- search ------');
let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
console.log(myPets.includes("shark")); // -> true
console.log(myPets.includes("unicorn")); // -> false

console.log(myPets.indexOf("dog")); // -> 1
console.log(myPets.lastIndexOf("dog")); // -> 6
console.log(myPets.indexOf("unicorn")); // -> -1

console.log(myPets.find(item => item.length > 3)); // -> hamster
console.log(myPets.find(item => item.includes("og"))); // -> dog
console.log(myPets.find(item => item.includes("fish"))); // -> undefined

console.log(myPets.findIndex(item => item.length > 3)); // -> 2
console.log(myPets.findIndex(item => item.includes("og"))); // -> 1
console.log(myPets.findIndex(item => item.includes("fish"))); // -> -1

console.log('\n---- slice ------');
let p1 = myPets.slice(3);
console.log(p1);
let p2 = myPets.slice(3, 5);
console.log(p2);
let p4 = myPets.slice(-3);
console.log(p4);let p3 = myPets.slice(-3, -1);
console.log(p3);

console.log('\n---- splice ------');
let myPets2 = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
let removedPets2 = myPets2.splice(2, 3);
console.log(myPets2);
console.log(removedPets2);

console.log('\n---- destructuring assignment ------');
let myPets3 = ["cat", "dog", "hamster", "canary"];
let [pet31, , pet33, pet34] = myPets3;
console.log(pet31);
console.log(pet33);
console.log(pet34);

console.log("\n---- destructuring assignment out of bound just gives 'undefined' ------");
let myPets4 = ["cat", "dog"];
let [pet41, , pet43] = myPets4;
console.log(pet41); // -> cat
console.log(pet43); // -> undefined

console.log('\n---- spread operator "..." ------');
let array20 = [100, 200, 300];
let array21 = [1000, 2000];
let array22 = [10, 20, ...array20, 500, ...array21];
console.log(array22);

console.log('\n---- usage of the spread operator "..." for function calling ------');
let testFn = (a, b, c, d) => a + b + c + d;
let array23 = [10, 20, 30, 40];
console.log(testFn(...array23));