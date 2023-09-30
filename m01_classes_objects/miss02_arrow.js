const getCar = (make, model) => ({ make, model });

let car = getCar('Dodge', 'Viper');
console.log(`${car.make} ${car.model}`);


let returnAB = (a, b) => ({a, b});
console.log(returnAB(1, 2));
