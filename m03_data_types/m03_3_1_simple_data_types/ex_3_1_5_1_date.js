let date1 = new Date(0);
let date2 = new Date(10 * 60 * 60 * 1000);
console.log(date1.toUTCString());       // Thu, 01 Jan 1970 00:00:00 GMT
console.log(date2.toUTCString());       // Thu, 01 Jan 1970 10:00:00 GMT
console.log(date2.getTimezoneOffset())  // -240  // for Tbilisi GMT+4 (60 minutes * 4 hours)
console.log(date2.toLocaleString())     // 1/1/1970, 2:00:00 PM
console.log(date2.toISOString())        // 1970-01-01T10:00:00.000Z
console.log(date2.toUTCString())        // Thu, 01 Jan 1970 10:00:00 GMT

console.log('-----with Z ----------------')
let date3 = new Date("2020-02-02T20:20:00.000");
let date4 = new Date("2020-02-02T20:20:00.000Z");

console.log(date3.toLocaleString()); // -> 2/2/2020, 8:20:00 PM
console.log(date3.toISOString()); // -> 2020-02-02T16:20:00.000Z
console.log(date3.toUTCString()); // -> Sun, 02 Feb 2020 16:20:00 GMT

console.log(date4.toLocaleString()); // -> 2/3/2020, 12:20:00 AM
console.log(date4.toISOString()); // -> 2020-02-02T20:20:00.000Z
console.log(date4.toUTCString()); // -> Sun, 02 Feb 2020 20:20:00 GMT

console.log(date3.getTime());     // 1580660400000
console.log(date4.getTime());     // 1580674800000
console.log(date4.getTime() - date3.getTime()); // 14400000

console.log('-------- current time ----------');
let nowObj1 = new Date();
console.log(nowObj1.toLocaleString());      // 10/8/2023, 11:40:08 AM
let now2 = Date.now();              // timestamp
let nowObj2 = new Date(now2);
console.log(`now : ${typeof now2} : ${now2}`)       // now : number : 1696750905145
console.log(`now : ${typeof nowObj2} : ${nowObj2}`) // now : object : Sun Oct 08 2023 11:41:45 GMT+0400 (Georgia Standard Time)

console.log('-------- specification for individual components ----------');
let date5 = new Date(2020, 6);
let date6 = new Date(2020, 6, 8);
let date7 = new Date(2020, 6, 8, 10);
let date8 = new Date(2020, 6, 8, 10, 20);
let date9 = new Date(2020, 6, 8, 10, 20, 45);

console.log(date5.toLocaleString());
console.log(date6.toLocaleString());
console.log(date7.toLocaleString());
console.log(date8.toLocaleString());
console.log(date9.toLocaleString());

console.log('------------ specification with date string -----------------');
// YYYY-MM-DDTHH:mm:ss.sss is simple and legible
// (year, month, day, hour, minutes, seconds, milliseconds).
// The time given in this format is always the local time,
// unless the letter Z appears at the end of the string. Then it is UTC+0.
let date10 = new Date("2020-07-08");
let date11 = new Date("2020-07-08T10:20:00");
let date12 = new Date("2020-07-08T10:20:00Z");
console.log(date10.toLocaleString());
console.log(date11.toLocaleString());
console.log(date12.toLocaleString());

let date13 = new Date("Mon Mar 02 2020 10:00:00");
let date14 = new Date("Mon March 2 2020 10:00");
let date15 = new Date("Mar 02 2020 10:00:00");
let date16 = new Date("2 March 2020, 10:");

let date17 = new Date("3.2.2020");
let date18 = Date("03/02-2020, 10:00");
let date19 = new Date("2020, 10:00");
let date20 = new Date("2020 march-02, 10:00");

let date21 = new Date("3.2.2020 GMT+0400");
let date22 = new Date("Mon Mar 02 2020 10:00:00 UTC-4");

console.log('---------- timestamp --------------');
let date23 = new Date(2020, 6, 8, 10, 20, 0);
let date24 = new Date(2020, 6, 9, 10, 20, 0);

console.log(date24.getTime() - date23.getTime()); // -> 86400000 -> 1000 x 60 x 60 x 24

let startTime = Date.now();
for(let i=0; i<10000000; i++){/* timeout */}
let endTime = Date.now();
console.log(endTime - startTime);

let date25 = new Date("2020-07-08T10:20:00");
console.log(date25.getMonth()); // -> 6
console.log(date25.getDay()); // -> 3
console.log(date25.getDate()); // 8
console.log(date25.getHours()); // -> 10
date25.setHours(12);
console.log(date25.getHours()); // -> 12
console.log(date25.getMinutes()); // -> 20
console.log(date25.getSeconds()); // -> 0
console.log(date25.getMilliseconds()); // -> 0

