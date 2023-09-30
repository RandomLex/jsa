let contact = {
  tel: "207-662-5412",
  email: "RonaldSMurphy@freepost.org"
};
for(const x in contact) {
  // print property name
  console.log(x);
}

console.log();

for (const x in contact) {
  console.log(`${x} : ${typeof contact[x]} : ${contact[x]}`)
}