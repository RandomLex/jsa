let a = {
    id: 10,
    delay: 20,              // duplicate declaration. Will be overwritten by last delay
    name: 'en to tre',
    isPresent: true,
    delay: 50
};

a.delay = a.delay * 2;
console.log(a.id);
console.log(a.name);
console.log(a.delay);

console.log(a);
