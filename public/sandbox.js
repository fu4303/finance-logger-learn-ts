"use strict";
// let age: any;
// age = 24;
// age = true;
// console.log(age);
// let loggedUser: {
//   name: any,
//   age: any,
//   loggedIn: any
// }
// loggedUser = {
//   name: "Tracy",
//   age: 24,
//   loggedIn: 'yes 😎'
// }
// console.log(loggedUser);
// let userScores = [
//   {name: 'Luke', score: 20},
//   {name: 'Jimin', score: 66},
//   {name: 'Jungkookie', score: 80},
//   {name: 'Namjoonie', score: 70},
//   {name: 'Yoongi', score: 88},
//   {name: 'Hobi', score: 68},
//   {name: 'Seokjin', score: 90},
//   {name: 'Taehyung', score: 88}
// ];
// const multiple = (a: number, b: number)=>{
//   return a * b;
// }
// console.log(multiple(20,30));
var isabove18 = function (age, name) {
    if (age >= 18) {
        console.log("Hey " + name + " \uD83D\uDE0E, go and get your driver license");
    }
    else {
        console.log(" You have to be 18 years to get a drivers license");
    }
};
isabove18(18, 'Tracy');
isabove18(15);
var userLoggedIn = function (loggedIn, name) {
    if (name === void 0) { name = 'User'; }
    return "Hello " + name + " \uD83D\uDE0F, did you log in properly ? " + loggedIn;
};
console.log(userLoggedIn('yes I did'));
var userLoggedInTwo = function (loggedIn, name) {
    if (name === void 0) { name = 'User'; }
    console.log("Hello " + name + " \uD83D\uDE0F, did you log in properly ? " + loggedIn);
};
console.log(userLoggedInTwo('yes I did'));
var greet = function (user) {
    console.log(user.name + " say hellooooo \uD83D\uDE0A");
};
greet({
    name: 'tracy',
    uid: 55,
});
