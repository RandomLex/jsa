console.log('--------Only unique elements----------');
let emptySet1 = new Set(); // -> {}
console.log(emptySet1.size); // -> 0
let petsSet1 = new Set(["cat", "dog", "cat"]); // -> {"cat", "dog"}
console.log(petsSet1.size); // -> 2

console.log('\n--------Presence of an element----------');
let petsSet2 = new Set(["cat", "dog"]); // -> {"cat", "dog"}
console.log(petsSet2.has("cat")); // -> true
console.log(petsSet2.has("shark")); // -> false

console.log('\n--------Handling elements----------');
let petsSet3 = new Set(["cat", "dog"]); // -> {"cat", "dog"}
console.log(petsSet3.size); // -> 2
petsSet3.add("shark");
petsSet3.add("hamster");
console.log(petsSet3.size); // -> 4
console.log(petsSet3.has("shark")); // -> true
console.log(petsSet3.delete("dog")); // -> true
console.log(petsSet3.delete("dog")); // -> false
console.log(petsSet3.size); // -> 3
petsSet3.clear();
console.log(petsSet3.size); // -> 0

console.log('\n--------Walking through----------');
let petsSet4 = new Set(["cat", "dog", "hamster"]); // -> {"cat", "dog", "hamster"}
petsSet4.forEach(value => console.log(value)); // -> cat -> dog -> hamster
console.log('Elements in fact comprise a Map')
petsSet4.forEach((value, key) => console.log(`(${value}:${key})`)); // -> (cat:cat) -> (dog:dog) -> (hamster:hamster)

console.log('\n--------Iterator of the Set----------');
let petsSet5 = new Set(["cat", "dog", "hamster"]); // -> {"cat", "dog", "hamster"}
let petsIterator51 = petsSet5.values();
console.log(petsIterator51.next().value); // -> cat
console.log(petsIterator51.next().value); // -> dog
console.log(petsIterator51.next().value); // -> hamster

console.log('\n----Using while-----')
let petsIterator52 = petsSet5.values();
let result52;
while (result52 = petsIterator52.next().value) {
  console.log(result52)
}

console.log('\n--------Iterator of the Set----------');
let petsIterator53 = petsSet5.values();
let result53 = petsIterator53.next();
while (!result53.done) {
  console.log(result53.value); // -> cat -> dog -> hamster
  result53 = petsIterator53.next();
}

console.log('\n--------spread on Set----------');
let petsSet6 = new Set(["cat", "dog", "hamster"]); // -> {"cat", "dog", "hamster"}
console.log(petsSet6 instanceof Set); // -> true
let petsArray6 = [...petsSet6];
console.log(petsArray6 instanceof Array);

