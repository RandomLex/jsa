let contact = {
  email_1: "ronald@mail.com",
  email_2: "ronny@mail.com",
}

for (let i = 0; i < Object.keys(contact).length; i++) {
  // console.log('email_' + i);   // just prints keys
  let key = 'email_' + i;
  console.log(`${key}: ${contact[key]}`)
}