let strObj = new String("Do bats eat cats?");  //NOSONAR
console.log(typeof strObj);
console.log(strObj.length);
let words = strObj.split(' ');
let firstWord = words[0];
console.log(firstWord);
console.log(typeof firstWord);

console.log('--------------------')

let strObj2 = "Do bats eat cats?";  //NOSONAR
console.log(typeof strObj2);
console.log(strObj2.length);
let words2 = strObj2.split(' ');
let firstWord2 = words2[0];
console.log(firstWord2);
console.log(typeof firstWord2);

// When using dot notation, we indicate that we will want to use
// some method or property of a primitive (which does not have any property
// nor any property of its methods) and the engine converts it in flight to the corresponding object.
//
// The temporary object is kept in the memory only until the operation is completed,
// after which the JavaScript engine releases it.
//
// Such an operation obviously has an impact on the engine's performance,
// but the memory we save in this way is worth it. This behavior of the JavaScript engine is called autoboxing.
//
//
// Use primitives. Do not explicitly create objects using Boolean,
// Number, or String constructors. Of course, it is possible to create such objects,
// as we have shown in the previous example, but it is not recommended.
// You can rely on the JavaScript engine to recognize when you want to treat a primitive as an object
// and enable you to do so by performing the appropriate conversion on the fly.