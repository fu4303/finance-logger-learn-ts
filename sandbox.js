var character = 'Tracy';
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
var circ = function (diameter) {
    return Math.floor(diameter * Math.PI);
};
var results = circ(32.6);
console.log(results);
var profile = [20, 30, 15, 89, "Jane", "😎"];
profile.unshift("Tracy");
profile.push(24);
profile.splice(3, 1, "😂", "🐰");
console.log(profile);
var user;
var age;
var isPremiumUser;
user = 'Tracy';
age = 30;
isPremiumUser = true;
//ARRAYS
var premiumUser = [];
premiumUser.push('Tracy', 'software developer', 'Dubai', 24, true);
console.log(premiumUser);
// output
//["Tracy", "software developer", "Dubai"]
var loggedUser;
loggedUser = 'Tracy';
loggedUser = true;
console.log(loggedUser);
var creditUser;
creditUser = { name: 'Jane', job: 'Developer', age: 24 };
creditUser = ['tracy'];
console.log(creditUser);
//output 
//{name: "Jane", job: "Developer", age: 24}
var creditUserTwo;
//creditUserTwo = ['Jane']
creditUserTwo = { name: 'Tracy', job: 'CEO 😎', age: 24 };
console.log(creditUserTwo);
//output
//{name: "Tracy", job: "CEO 😎", age: 24}
