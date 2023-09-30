let point1 = {x: 10, y:21, z: {asd: 5, lkd: 'abc'}};
let point2 = {x: 10, y:21, z: {asd: 6, lkd: 'abc'}};

console.log(point1 === point2);   // false because of references comparing
console.log(point1 == point2);   // false. == doesn't help

let point3 = point1;

console.log(point1 === point3);   // true because they point to the same object

// There are no JavaScript build-in support for deep comparison of objects
// Can be done by for-in construction or by 3rd party libraries

function deepComparison(a, b) {
  let acc = true;
  for (const key in a) {
    if (typeof a[key] === 'object' && typeof a[key] === typeof b[key]) {
      acc &&= deepComparison(a[key], b[key]);
    } else {
      acc &&= (a[key] === b[key]);
    }
  }
  return acc;
}

function deepComparisonOptimized(a, b) {
  for (const key in a) {
    if (typeof a[key] === 'object' && typeof a[key] === typeof b[key]) {
      if (!deepComparisonOptimized(a[key], b[key])) return false;
    } else if (a[key] !== b[key]) return false;
  }
  return true;
}


const result = deepComparisonOptimized(point1, point2);
console.log(result);
