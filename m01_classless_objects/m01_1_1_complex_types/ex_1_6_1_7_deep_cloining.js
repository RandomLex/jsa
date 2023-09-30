let deepClone = function (obj) {
  const newObj = {...obj};
  for (let prop in newObj) {
    if (typeof newObj[prop] === "object") {
      newObj[prop] = deepClone(newObj[prop])
    }
  }
  return newObj;
}

let circle0 = {
  radius: 10,
  center: {
    x: 5,
    y: 15
  }
}

let circle1 = deepClone(circle0);
console.log(circle0 === circle1);                 // false, as expected
console.log(circle0.center === circle1.center);   // false because of deep cloning