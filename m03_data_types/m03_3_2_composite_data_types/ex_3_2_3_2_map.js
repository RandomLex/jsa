console.log("-------------Constructing---------------");
let emptyMap1 = new Map();
let petsMap1 = new Map([["cats", 1], ["dogs", 2], ["hamster", 5]]);
console.log(emptyMap1);
console.log(emptyMap1.size);  // -> 0
console.log(petsMap1);
console.log(petsMap1.size);  // -> 3

console.log("\n-------------Presence---------------");
let petsMap2 = new Map([["cats", 1],[ "dogs", 2],[ "hamsters", 5]]);
console.log(petsMap2.has("dogs")); // -> true
console.log(petsMap2.has("sharks")); // -> false
console.log(petsMap2.has(1)); // -> false

console.log("\n-------------Handling elements---------------");
let petsMap3 = new Map([["cats", 1],[ "dogs", 2],[ "hamsters", 5]]);
console.log(petsMap3.get("hamsters")); // -> 5
petsMap3.set("hamsters", 6);
console.log(petsMap3.get("hamsters")); // -> 6
petsMap3.delete("hamsters");
console.log(petsMap3.get("hamsters")); // -> undefined
petsMap3.clear();
console.log(petsMap3.size); // -> 0

console.log("\n-------------For each---------------");
let petsMap4 = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
petsMap4.forEach((value, key) => console.log(`${key} : ${value}`)); // -> snakes : 1 -> cats : 3 -> dogs : 2

console.log("\n-------------Values' Iterator---------------");
let petsMap5 = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
let petValuesIterator5 = petsMap5.values();
console.log(petValuesIterator5.next().value); // -> 1
console.log(petValuesIterator5.next().value); // -> 3
console.log(petValuesIterator5.next().value); // -> 2

console.log("\n-------------Keys' Iterator---------------");
let petsMap6 = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
let petKeysIterator6 = petsMap6.keys();
console.log(petKeysIterator6.next().value); // -> snakes
console.log(petKeysIterator6.next().value); // -> cats
console.log(petKeysIterator6.next().value); // -> dogs

console.log("\n-------------Entries' Iterator---------------");
let petsMap7 = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
let petEntriesIterator7 = petsMap7.entries();
console.log(petEntriesIterator7.next().value); // -> 1
console.log(petEntriesIterator7.next().value); // -> 3
console.log(petEntriesIterator7.next().value); // -> 2

console.log("\n-------------While on Entries' Iterator---------------");
let petsMap8 = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
let petsEntries8 = petsMap8.entries();
let result = petsEntries8.next();
while (!result.done) {
  console.log(result.value); // -> ["snakes", 1] -> "cats", 3] -> ["dogs", 2]
  result = petsEntries8.next();
}

console.log("\n-------------for ... of loop---------------");
console.log("---Array");
let petsArray9 = ["cat", "dog", "hamster"];
for( let pet of petsArray9) {
  console.log(pet); // -> cat -> dog -> hamster
}

console.log("---Set");
let petsSet9 = new Set(["cat", "dog", "hamster"]);
for( let pet of petsSet9) {
  console.log(pet); // -> cat -> dog -> hamster
}

console.log("---Map");
let petsMap9 = new Map([["cats", 1], ["dogs", 3], ["hamsters", 2]]);
for( let pet of petsMap9) {
  console.log(pet); // -> ["cats", 1] -> ["dogs", 3] -> ["hamsters", 2]
  console.log(pet[0]); // -> ctas -> dogs -> hamsters
}

console.log("\n-------------spread on Map---------------");
let petsMap10 = new Map([["cats", 1], ["dogs", 3], ["hamsters", 2]]);
console.log(petsMap10 instanceof Map); // -> true
console.log(petsMap10);
let petsArray10 = [...petsMap10]; // -> [["cats", 1], ["dogs", 3], ["hamsters", 2]]
console.log(petsArray10 instanceof Array); // -> true
console.log(petsArray10);