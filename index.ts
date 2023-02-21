// The primitives: string, number, and boolean

let stringVar: string = 'Hello World'; // declaring a string variable
let numberVar: number = 5; // declaring a number variable
let booleanVar: boolean = true; // declaring a boolean variable

// Arrays

let numberArray: number[] = [1, 2, 3, 4, 5]; // declaring an array of numbers

// any

let anyVar: any = 'This can be anything'; // declaring a variable with any type

// nolmplicitAny

// Add "noImplicitAny": true to your tsconfig.json file

// Type Annotations on Variables

let stringType: string = 'Hello World'; // declaring a string variable with a type annotation

// Functions

// Parameter Type Annotations
// When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts. Parameter type annotations go after the parameter name
function addNumbers(param1: number, param2: number) {
  // defining a function with parameter type annotations and a return type annotation
  return param1 + param2;
}

// Return Type Annotations

function addNumbers2(num1: number, num2: number): number {
  // defining a function with parameter type annotations and a return type annotation
  return num1 + num2;
}

// Anonymous Functions
// Anonymous functions are a little bit different from function declarations. When a function appears in a place where TypeScript can determine how it’s going to be called, the parameters of that function are automatically given types
let myFunction = function (param1: number, param2: number) {
  // declaring an anonymous function with parameter type annotations and a return type annotation
  return param1 + param2;
};

// Object Types

let myObject: { name: string; age: number } = { name: 'John Doe', age: 30 }; // declaring an object with property type annotations

function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// Optional Properties

let myOptionalObject: { name: string; age?: number } = { name: 'John Doe' }; // declaring an object with an optional property

function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: 'Bob' });
printName({ first: 'Alice', last: 'Alisson' });

// Union Types

let unionVar: string | number = 'Hello World'; // declaring a variable with a union type

function printId(id: number | string) {
  console.log(id.toUpperCase());
}

/**
 * The solution is to narrow the union with code, the same as you would in JavaScript without type annotations. Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.
 */
function printId2(id: string | number) {
  if (Array.isArray(id)) {
    // Here: 'id' is 'string[]'
    console.log('Hello, ' + id.join(' and '));
  } else {
    // Here: 'id' is 'string'
    console.log('Welcome lone traveler ' + id);
  }
}


// Sometimes you’ll have a union where all the members have something in common. For example, both arrays and strings have a slice method. If every member in a union has a property in common, you can use that property without narrowing:

// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

// Type Aliases

type MyTypeAlias = { name: string; age: number }; // defining a type alias for an object type

// Interfaces

interface MyInterface {
  // defining an interface for an object type
  name: string;
  age: number;
}

// Differences Between Type Aliases and Interfaces

/**
 * Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

 */
// Type aliases can create primitive types, union types, and tuple types, while interfaces are mainly for objects.

// Type Assertions

let anyVar2: any = 'This can be anything';
let stringType2: string = <string>anyVar2; // asserting the type of myVariable to be string

// wrong
const x = "hello" as number;

// Literal Types

let stringLiteral: 'Hello World' = 'Hello World'; // declaring a literal type for a string variable

// Literal Inference

let stringLiteral2 = 'Hello World'; // TypeScript infers the type of myString to be a string literal

// null and undefined

let myNull: null = null; // declaring a null variable
let myUndefined: undefined = undefined; // declaring an undefined variable

// strictNullChecks off

// Set "strictNullChecks": false in your tsconfig.json file

// strictNullChecks on

// Set "strictNullChecks": true in your tsconfig.json file

function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}

// Non-null Assertion Operator (Postfix ! )

function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}

// let varWithNullableType: string | null | undefined =
