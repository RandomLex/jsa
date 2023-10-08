console.log("----------simple Object----------");
let petsObj1 = {"snakes": 1,"cats": 3,"dogs": 2};
console.log(petsObj1);

console.log("\n----------Handling elements of the Object----------");
let petsObj2 = {"snakes": 1,"cats": 3,"dogs": 2};
console.log(petsObj2.snakes); // -> 1
petsObj2.snakes = 2;
console.log(petsObj2.snakes); // -> 2
delete petsObj2.snakes;
console.log(petsObj2.snakes); // -> undefined
petsObj2.snakes = 0;
console.log(petsObj2.snakes); // 0

console.log("\n----------for each----------");
let petsObj3 = {"snakes": 1,"cats": 3,"dogs": 2};
console.log("---keys");
Object.keys(petsObj3).forEach(key=>console.log(key)); // -> snakes -> cats -> dogs
console.log("---values");
Object.values(petsObj3).forEach(key=>console.log(key)); // -> 1 -> 3 -> 2
console.log("---entries");Object.entries(petsObj3).forEach(key=>console.log(key)); // -> ["snakes", 1] -> ["cats", 3] -> ["dogs", 2]

console.log("\n----------for ... in----------");
let petsObj4 = {"snakes": 1,"cats": 3,"dogs": 2};
for (let key in petsObj4) {
  console.log(key); // -> snakes -> cats -> dogs
  console.log(petsObj4[key]); // -> 1 -> 3 -> 2
}

console.log("\n----------spread on Object----------");
let petsObj5 = {"cats": 1, "dogs": 3, "hamsters": 2};
let newPetsObj6 = {...petsObj5, "sharks": 1}; // -> {cats: 1, dogs: 3, hamsters: 2, sharks: 1}
console.log(newPetsObj6);