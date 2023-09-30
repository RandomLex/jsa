let contact = {
  tel: "123-456",
  name: "Ronald",
  // notes: "my notes"     // for further demo
}

console.log(contact);

console.log(contact.email);             // just 'undefined' => no problem
// console.log(contact.email.private);     // TypeError: Cannot read properties of undefined (reading 'private')

// better approach is

// contact && contact.email && console.log(contact.email.private);   // again 'undefined'
// non-compliant. it is better to use
if (contact?.email) {
  console.log(contact.email.private);     // again undefined
}
//also it is possible to use 'in'

if ('notes' in contact) {
  console.log(contact.notes);
}