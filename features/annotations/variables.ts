// TYPE ANNOTATIONS
// - Code we add to tell Typesecript what type of value a variable will refer t

let apples: number = 5
// apples = 'stringy string string' - would result in an error

let speed: string = 'fast'
let hasName: boolean = true

let nothingMuch: null = null
let nothing: undefined = undefined

// built in objects
let now: Date = new Date()

// Array
let colors: string[] = ['red', 'green', 'blue']
let myNumbers: number[] = [1, 2, 3]
let truths: boolean[] = [true, true, false]

// Classes
class Car {}
let car: Car = new Car()

// Object literal
let point: { x: number; y: number } = {
  x: 10, // these now have to be numbers - both x & y
  y: 20,
}

// Function
// What arguments does the function take? What type of values is it going to return?
// on the right of the equal sign after void is where the function begins and annotation ends
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}
// type inference only works for the type of value a function will return

// We don't have to add in the type annotations - everything above would work with type inference

// - When to use type annotations?

// 1. When a function returns the 'any' type and we need to clarify the value
const json = '{"x": 10, "y": 20}'
const coordinates: { x: number; y: number } = JSON.parse(json) // coordinates is type any
// typescript doesn't know what value we'll get back from JSON.parse as it depends on the string we put into the function. This means typescript uses type any - NEED TO AVOID THIS!!!
console.log(coordinates) // {x: 10, y: 20}
// to fix this we need to use type annotation for coordinates as seen above

// 2. When we declare a variable on one line then initialize it later
let words = ['red', 'green', 'blue']
let foundWord: boolean // add type annotation as variable declared below
// let foundWord = false - could also do this

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true
  }
}

// 3. When we want a variable to have a type that can't be inferred
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}

// TYPE INFERENCE
// - Typescript tries to figure out what type of value a variable refers to
const color = 'red'
// - If declaration and initialization are on the same line, Typescript will figure out the type of 'color' for us
// - If the initialization is made on another line then it doesn't work
// - Whenever we can we will rely on type inference
