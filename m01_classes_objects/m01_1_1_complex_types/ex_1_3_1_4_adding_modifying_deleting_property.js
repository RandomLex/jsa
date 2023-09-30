let contact = {
  tel: "123-456",
  email: "ronald@mail.com",
};
console.log(contact);

contact.firstName = "Ronald";
contact.lastName = "Murphy";
console.log(contact);

console.log(contact.notes);   // -> undefined

contact.email = [contact.email, "ronny@mail.com"];
console.log(contact.email);

delete contact.tel;
console.log(contact);
