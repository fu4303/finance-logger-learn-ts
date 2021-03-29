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
