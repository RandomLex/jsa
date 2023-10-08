let name1 = "Bob";
console.log(name1.length);

let strings1 = [undefined, "", "ab", "cd ef", 4, null];
for (const element of strings1) {
  if (element?.length) {
    console.log(element)
  }
}

let title1 = "Alien 10";
console.log(title1[0]);
console.log(title1.charAt(0));  // same result

let aBcD = "aBcD";
console.log(aBcD.toLowerCase());
console.log(aBcD.toUpperCase());

let ipStr1 = "127.0.0.1";
let ipParts1 = ipStr1.split(".");
console.log(ipParts1);

let text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a," +
    " scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet " +
    "tellus. Phasellus pharetra nulla ac diam.";
let words1 = text1.toLowerCase()
    .replaceAll('.', '')
    .replaceAll(',', '')
    .split(' ');
console.log(words1.length);  // 30

let text2 = "One, two, three, one, two, three";
console.log(text2.includes("two")); // true
console.log(text2.includes("four")); // false
console.log(text2.indexOf("two")); // 5
console.log(text2.indexOf("four")); // -1
console.log(text2.lastIndexOf("two")); // 22

let text3 = "One, two, three, one, two, three.";
console.log(text3.substr(0, 8));    //NOSONAR deprecated One, two
console.log(text3.substr(10));             //NOSONAR deprecated three, one, two, three.
console.log(text3.substr(-6));             //NOSONAR deprecated three.
console.log(text3.substr(-6, 2))    //NOSONAR deprecated
console.log(text3.substring(5, 8)); // -> two
console.log(text3.substring(5)); // -> two, three, one, two, three.
console.log(text3.substring(-11, 8)); // -> One, two

console.log(text3.slice(0, 3)); // -> One
console.log(text3.slice(5)); // -> two, three, one, two, three.
console.log(text3.slice(-11)); // -> two, three.
console.log(text3.slice(-11, -8)); // -> two

// padding
console.log('-------padding-------')
let numbers1 = [100, 5, 66];
for (const number of numbers1) {
  console.log(String(number).padStart(10, '0'));
  console.log(String(number).padStart(10, 'abc'));
  console.log(String(number).padStart(10));
}
console.log('-------padEnd-------')
for (const number of numbers1) {
  console.log(String(number).padEnd(10, '0'));
  console.log(String(number).padEnd(10, 'abc'));
  console.log(String(number).padEnd(10));
}

console.log('--------trimming--------');
let city1 = " Bergen  ";
let street1 = "\t Dokkeboder\n";

console.log(city1.trimLeft().length) // 8 -> "Bergen  "   // deprecated
console.log(city1.trimStart().length) // 8 -> "Bergen  "
console.log(city1.trimRight().length) // 7 -> " Bergen"   // deprecated
console.log(city1.trimEnd().length) // 7 -> " Bergen"
console.log(city1.trim().length) // 6 -> "Bergen"
console.log(street1.trim().length) // 10 -> "Dokkeboder"

console.log('-------- comparing strings --------');
console.log('a' < 'b'); // true
console.log('abc' < 'acd'); // true
console.log('a' < 'acd'); // true
console.log('b' < 'acd'); // false
console.log('4' < '5'); // true
console.log('2' < '12'); // false
console.log('34' < '332'); // true

console.log("Ørnes" < "Sundsfjord"); // -> false
console.log("Ørnes".localeCompare("Sundsfjord", "nn")) // -1
console.log("Ørnes".localeCompare("Brettesnes", "nn")) // 1

