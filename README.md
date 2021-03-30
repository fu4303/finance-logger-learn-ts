# Finance-logger

A simple finance logger for tracking invoices and payments to other people. A great way to practice Typescript.

#### Some notes on TypeScript

- In TypeScript you can change the value but not the type.

Example

```ts
const circ = (diameter) => {
  return Math.floor(diameter * Math.PI);
};

let results = circ("yes");

console.log(results);
// output NaN = Not a number
```

- This will give you NaN because the yes string is not a number. To make it even more secure you can define the type in the arguments.

```ts
const circ = (diameter: number) => {
  return Math.floor(diameter * Math.PI);
};

let results = circ("yes");

console.log(results);
// error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

//let results = circ('yes');
```

#### In Arrays

```ts
let age = [20, 30, 15, 89];
age.unshift(99);
console.log(age);

//output
//(5) [99, 20, 30, 15, 89]

let age = [20, 30, 15, 89];
age.unshift("Tracy");
console.log(age);

//Output
//error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// age.unshift('tracy');
```

- If you want to push a string to the array, it will give you an error. This is because the array type has already being defined and set to number. Anything that's not a number will be an error.

- To solve this, you can add numbers and strings at the intial stage of the array declaration. This way you can add both strings and numbers without getting any errors.

```ts
let profile = [20, 30, 15, 89, "Jane", "😎"];

profile.unshift("Tracy");
profile.push(24);
profile.splice(3, 1, "😂", "🐰");
console.log(profile);
//Output
// (10) ["Tracy", 20, 30, "😂", "🐰", 89, "Jane", "😎", 24]
```

#### Explict Types

- When dealing with variables that has no value initially, you can set it to be strict by adding they type of variable it should be. Whether it's a string, number, boolean or even an object. Thus when using the variable later on, the values with match the expected value from the variable set intially.

```ts
let user: string;
let user: string;
let age: number;
let isPremiumUser: boolean;

user = "Tracy";
age = "Jane";
isPremiumUser = true;
//error
//Type 'string' is not assignable to type 'number'
```

- In arrays you can also set the intial type for it.

```ts
let premiumUser: string[] = [];

premiumUser.push("Tracy", "software developer 👩🏽‍💻", "Dubai ✈");
console.log(premiumUser);
// output
//["Tracy", "software developer", "Dubai"]
```

- Anything that's not a string that's being pushed in the array, it will create an error.

#### Union types

This is when you want something like an array to have mixed values. Example have strings and numbers, you can add a parathesis ( | ) before intializing the array and set the type there separating them with the pipe symbol.

- A union type is type formed from two or more other types, representing values that may be any one of those types.

```ts
let premiumUser: (string | number | boolean)[] = [];

premiumUser.push("Tracy", "software developer", "Dubai", 24, true);
console.log(premiumUser);
// output
//["Tracy", "software developer", "Dubai", 24, true]
```

- You can use union types with simple variable too.

```ts
let loggedUser: string | boolean;

loggedUser = "Tracy";
loggedUser = true;

console.log(loggedUser);
//output
//true
```

- When using objects instead of defining the name type by writing `:object` or using object symbol `{}`. You can write the property names and specify their type as well. Let see the difference using examples.

```ts
let creditUser: {};
creditUser = { name: "Jane", job: "Developer", age: 24 };
creditUser = ["tracy"];
console.log(creditUser);
//output
//{name: "Jane", job: "Developer", age: 24}
//['tracy']
```

```ts
let creditUserTwo: {
  name: string;
  job: string;
  age: number;
};

//creditUserTw0 = ['Tracy'] // this will be an error
//Type 'string[]' is missing the following properties from type '{ name: string; job: string; age: number; }': name, job, age

creditUserTwo = { name: "Tracy", job: "CEO 😎", age: 24 };
console.log(creditUserTwo);
//output
//{name: "Tracy", job: "CEO 😎", age: 24}
```

- When you are using functions you can also use union types if you want to combine two or more types.

```ts
// if you want to use one type
const isabove18 = (age: number) => {
  if (age >= 18) {
    console.log("You are go and get your driver license");
  } else {
    console.log("You have to be 18 years to get a drivers license");
  }
};

isabove18(18);
isabove18(15);

//union type
const myAge = (age: string | number) => {
  console.log(`my age is ${age}`);
};

myAge(18);
myAge("thirty two 🥰");
//my age is 18
//my age is thirty two 🥰
```

**Adding optional arguments**

- If you to add an argument that is optional in your function, you can easily do that by using question mark after the argument.

```ts
const isabove18 = (age: string | number, name?: string) => {
  if (age >= 18) {
    console.log(`Hey ${name} 😎, go and get your driver license`);
  } else {
    console.log(` You have to be 18 years to get a drivers license`);
  }
};
isabove18(18, "Tracy");
isabove18(15);
```

- The name argument is optional, when calling the function you can decide whether to add the value or not. This won't cause any errors with TypeScript.

```ts
const userLoggedIn = (loggedIn: boolean | string, name: string = "User") => {
  console.log(`Hello ${name} 😏, did you log in properly ? ${loggedIn}`);
};

console.log(userLoggedIn("yes I did"));
//output
//Hello User 😏, did you log in properly ? yes I did
```

#### Dynamic typing

- In typescript you can use dynamic typing by setting the type to `any` if you don't know the future output if it will be a primitive value or an object.
- This should be used with caution because strict typing in Typescript helps us to have less error prune code in our projects. Makes it easier when debugging in future.
- This is how you can use any in your code like objects.

```ts
let looggedUser: {
  name: any;
  age: any;
  loggedIn: any;
};

looggedUser = {
  name: "Tracy",
  age: 24,
  loggedIn: "yes 😎",
};

console.log(looggedUser);
//output
//{name: "Tracy", age: 24, loggedIn: "yes 😎"}
```

#### Type Aliases

- For the most of our examples we have being writing objects, arrays or union types in the arguments or in the type annotations. It make thing very repetitive if we have a large code base. With TypeScript we can use Type aliases that is the type name of any type.

```ts
const greet = (user: { name: string; uid: string | number }) => {
  console.log(`${user.name} say hellooooo 😊`);
};

//WIth Type Aliases
type stringOrNum = string | number;
type objectName = { name: string; uid: stringOrNum };
const greet = (user: objectName) => {
  console.log(`${user.name} say hellooooo 😊`);
};

greet({
  name: "tracy",
  uid: 55,
});
//output
//tracy say hellooooo 😊
```
