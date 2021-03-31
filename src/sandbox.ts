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

const isabove18 = (age: string | number, name?: string) =>{
  if(age >= 18){
    console.log(`Hey ${name} 😎, go and get your driver license`)
  }else{
    console.log(` You have to be 18 years to get a drivers license`);
  }
  
}

isabove18(18, 'Tracy');
isabove18(15);

const userLoggedIn = (loggedIn: boolean | string, name: string = 'User', )=>{
  return `Hello ${name} 😏, did you log in properly ? ${loggedIn}`;
}

console.log(userLoggedIn('yes I did'));

const userLoggedInTwo = (loggedIn: boolean | string, name: string = 'User', )=>{
  console.log( `Hello ${name} 😏, did you log in properly ? ${loggedIn}`);
}

console.log(userLoggedInTwo('yes I did'));

type stringOrNum = string | boolean;
type objectName = {name: string, premium: stringOrNum};

const premiumUser = (user: objectName)=>{
  console.log(`Hey ${user.name}, premium subscribed? ${user.premium} 😊`)
}

premiumUser({
  name: 'tracy',
  premium: true,
});

let add: (x: number, y: number) => void;

add = (a: number, b: number) =>{
  console.log(a + b);
}

add(24, 75);

let userDetails: (obj : {name: string, loggedIn: boolean | string}) => void;

type obj = {name: string, loggedIn: boolean | string};

userDetails = (obj) =>{
  console.log(`Hey ${obj.name} 😎, are you logged in ${obj.loggedIn}`);
}

userDetails({name:'Tracy', loggedIn:true});