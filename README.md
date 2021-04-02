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
type stringOrNum = string | boolean;
type objectName = { name: string; premium: stringOrNum };

const premiumUser = (user: objectName) => {
  console.log(`Hey ${user.name}, premium subscribed? ${user.premium} 😊`);
};

premiumUser({
  name: "tracy",
  premium: true,
});
//output
//Hey tracy, premium subscribed? true 😊
```

- Instead of writing out the whole name type for the object properties, we use type aliases to make the code DRY. The `objectName` type aliase can be used in different areas of your code. Hence you won't repeat yourself in your projecct.

#### Function signatures

```ts
let checkAge: (a: number, b: string, c?: string) => string;

checkAge = (age: number, name: string, country?: string) => {
  if (age >= 18) {
    return `Hey ${name}, you can legally drive, yeeaahh🚘`;
  } else {
    return `Hey ${name}, you can't drive until you are 18 years 😏`;
  }
};

console.log(checkAge(23, "Tracy"));
```

- For objects you can also use signature. Let's see from an example below.

```ts
let userDetails: (obj: { name: string; loggedIn: boolean | string }) => void;

type obj = { name: string; loggedIn: boolean | string };

userDetails = (obj) => {
  console.log(`Hey ${obj.name} 😎, are you logged in ${obj.loggedIn}`);
};

userDetails({ name: "Tracy", loggedIn: true });
//output
//Hey Tracy 😎, are you logged in true
```

#### Classes in TS

```ts
class PremiumUser {
  name: string;
  premium: boolean;
  amount: number;

  constructor(name: string, premium: boolean, amount: number) {
    this.name = name;
    this.premium = premium;
    this.amount = amount;
  }

  getUser() {
    return `Hey ${this.name} are you a premium user? ${this.premium}. How much $ ${this.amount}`;
  }
}

let userOne = new PremiumUser("Tracy", true, 20000);
let userTwo = new PremiumUser("Hobi", true, 60000);

let premiumUsers: PremiumUser[] = [];

premiumUsers.push(userOne, userTwo);

console.log(premiumUsers);
```

#### Access modifiers | Member visibility

- We write this access modifiers before the properties listed in the constructors. They include the following:

- public - we can read and change values inside and outside the class. This is also the default visibility modifier, you can add it or not include it.
- Private - change and read inside the class only
- readOnly - You can ready the value only inside and outside the class but you can't change the value.

```ts
class PremiumUser {
  constructor(name, premium, amount) {
    this.name = name;
    this.premium = premium;
    this.amount = amount;
  }
  getUser() {
    return `Hey ${this.name} are you a premium user? ${this.premium}. How much $ ${this.amount}`;
  }
}

let userOne = new PremiumUser("Tracy", true, 20000);
let userTwo = new PremiumUser("Hobi", true, 60000);

let premiumUsers: PremiumUser[] = [];

premiumUsers.push(userOne, userTwo);

premiumUsers.forEach((user) => {
  console.log(user.name, user.premium);
});

console.log(premiumUsers);
```

#### Modules with Ts

- You can use your classes as modules and import them to your files. This helps with the DRY method where you keep your code base clean and easier to understand.

1. Create a folder in the src folder called modules. Inside the modules folder add the file you want to export. In our case the file name will be `premium.ts`.
2. Create the module, we shall import the class `PremiumUser` and export it.

```ts
export class PremiumUser {
  constructor(
    public name: string,
    readonly premium: boolean,
    private amount: number
  ) {}

  getUser() {
    return `Hey ${this.name} are you a premium user? ${this.premium}. How much $ ${this.amount}`;
  }
}
```

3. Import it to the file you want to use

```ts
import { PremiumUser } from "./modules/premium.js";
```

**Interface**

- Interface creates a structure for future variables to use. When you list down the properties you want later on the variables using that interface will have all those properties.

```ts
interface User {
  name: string;
  age: number;
  loggedIn(a: boolean | string): void;
  changePassword(b: number): number;
}

const firstUser: User = {
  name: "Tracy",
  age: 24,
  loggedIn(logged: boolean | string): void {
    console.log(`Hey ${this.name}, are you logged in? ${logged}`);
  },
  changePassword(password: number): number {
    console.log(`I changed my password to ${password}`);
    return password;
  },
};

console.log(firstUser.changePassword(12345667));
```

- When we create the object `firstUser` it has to contain all the properties stated in the `User` interface otherwise it will cause errors.

#### Extend with Interface

- The extend keyword can be used to copy members of the other named types. This gives you flexiblity of choosing which name types you want to add to the final variable. Let's say from the example below,

```ts
interface BasicUserDetails {
  name: string;
  age: number;
}

interface LoggingDetails {
  loggedIn(a: boolean | string): void;
  changePassword(b: number): number;
}
interface User extends BasicUserDetails, LoggingDetails {}

const firstUser: User = {
  name: "Tracy",
  age: 24,
  loggedIn(logged: boolean | string): void {
    console.log(`Hey ${this.name}, are you logged in? ${logged}`);
  },
  changePassword(password: number): number {
    console.log(`I changed my password to ${password}`);
    return password;
  },
};

console.log(firstUser.changePassword(12345667));
//output
//I changed my password to 12345667
//12345667
```

- We have created two interfaces that can be added to the `User` interface using the `extend` keyword.
- In the `User` interface you can choose to add the `BasicUserDetails` or `LoggingDetails` depending on what you want. This makes interface more flexible for use.

#### Implements

- To include a interface in a class you can use `implements` keyword to ensure the classes follows what's in the interface.

```ts
//our interface
export interface UserDetails {
  getUser(): string;
}

// implement it in our class
import { UserDetails } from "../interfaces/formatter.js";
export class PremiumClient implements UserDetails {
  constructor(
    public client: string,
    readonly premium: boolean,
    private amount: number
  ) {}

  getUser() {
    return `Hey ${this.client} are you a premium user? ${this.premium}. How much $ ${this.amount}`;
  }
}
```

- Implementing the interface in variables or array is used the same way as you use name types. Let me show you in the code below.

```ts
//our interface that we want to implement
export interface UserDetails {
  getUser(): string;
}

// import it in our file
import { UserDetails } from "./interfaces/formatter.js";

// implement the interface in variables
let clientOne: UserDetails;
let clientTwo: UserDetails;

clientOne = new PremiumUser("Jungkook", true, 30000);
clientTwo = new PremiumClient("NamJoon", true, 40000);

let aprilClients: UserDetails[] = [];

aprilClients.push(clientOne, clientTwo);
```

- This will ensure that the variable or array used with `clientOne or ClientTwo` and the array aprilClients must have the interface of `UserDetails` to run completely. If the variables didn't inclued the `getUser` method in the `PremiunUser or PremiumClient` there would be an error.

<i>It's important to understand that an implements clause is only a check that the class can be
treated as the interface type. It doesn't change the type of the class or its methods at all.</i>

#### Generics

- It will know or capture what properties are on the object or array.

```ts
///generics
const profile = <T>(obj: T) => {
  let randomID = Math.floor(Math.random() * 100);
  return { ...obj, randomID };
};

let personOne = profile({ name: "tracy", age: 24 });
console.log(personOne.name);
```

- To make the type to be more specific you can add `extends name type`. eg extends object to make sure the parameter will be an object not any other data type.

```ts
///generics
const profile = <T extends object>(obj: T) => {
  let randomID = Math.floor(Math.random() * 100);
  return { ...obj, randomID };
};

let personOne = profile({ name: "tracy", age: 24 });
console.log(personOne.name);
```

- To be more specific you can add a name type that should be included in the type.

```ts
const profile = <T extends { name: string }>(obj: T) => {
  let randomID = Math.floor(Math.random() * 100);
  return { ...obj, randomID };
};

let personOne = profile({ name: "tracy", age: 24 });
console.log(personOne.name);
```

- This means the object must have the name property and it should be a string.

```ts
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}
let academicResources: Resource<string[]> = {
  uid: 23,
  resourceName: "Biology",
  data: ["tracy", "Jimin", "Jungkook", "Yoongi", "NamJoon"],
};

console.log(academicResources);
// output
//{uid: 23, resourceName: "Biology", data: Array(5)};
let otherResources: Resource<object> = {
  uid: 50,
  resourceName: "Software development",
  data: { name: "Web development" },
};
console.log(otherResources);
//output
//{uid: 50, resourceName: "Software development", data: {…}}
```

#### Enums

- Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

```ts
enum ResourceType {
  BOOK,
  NAME,
  AUTHOUR,
}
interface Resource<T> {
  uid: ResourceType;
  resourceName: string;
  data: T;
}

let academicResources: Resource<string[]> = {
  uid: ResourceType.AUTHOUR,
  resourceName: "Biology",
  data: ["tracy", "Jimin", "Jungkook", "Yoongi", "NamJoon"],
};

let otherResources: Resource<object> = {
  uid: ResourceType.BOOK,
  resourceName: "Software development",
  data: { name: "Web development" },
};
```
