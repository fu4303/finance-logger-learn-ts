const character = 'Tracy';

console.log(character);

const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach(input => {
  console.log(input);
})

const circ = (diameter:number) =>{
  return Math.floor(diameter * Math.PI);
}

let results = circ(32.6);

console.log(results);

let profile = [20, 30, 15, 89, "Jane", "😎"];

profile.unshift("Tracy");
profile.push(24);
profile.splice(3, 1, "😂", "🐰");
console.log(profile);

let user: string;
let age: number;
let isPremiumUser: boolean;

user = 'Tracy';
age =  30;
isPremiumUser = true;

//ARRAYS
let premiumUser: (string| number | boolean)[] = [];

premiumUser.push('Tracy', 'software developer', 'Dubai', 24, true);
console.log(premiumUser);
// output
//["Tracy", "software developer", "Dubai"]

let loggedUser: (string | boolean);

loggedUser = 'Tracy'
loggedUser = true;

console.log(loggedUser);

let creditUser : object;
creditUser = {name: 'Jane', job: 'Developer', age: 24};
creditUser = ['tracy'];
console.log(creditUser);
//output 
//{name: "Jane", job: "Developer", age: 24}

let creditUserTwo: {
  name: string,
  job: string,
  age: number
}

//creditUserTwo = ['Jane']
creditUserTwo = {name: 'Tracy', job: 'CEO 😎', age: 24};
console.log(creditUserTwo);
//output
//{name: "Tracy", job: "CEO 😎", age: 24}