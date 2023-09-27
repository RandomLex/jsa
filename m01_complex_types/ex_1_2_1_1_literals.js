let contact1 = {};
contact1.tel = "123-456";
console.log(contact1);
console.log(contact1.tel);

console.log();

let contact2 = {
  tel: "123-456",
  email: "name@mail.com"
};
console.log(contact2);
console.log(contact2.tel);

console.log();

let contact3 = {
  // first name: "Ronald"     // Wrong naming: space cannot be inside
  "first name": "Ronald"     // Not good but possible
}
console.log(contact3);
console.log(contact3["first name"]);    // Accessible by [] only