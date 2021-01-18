// Tuples - Array-like structure where each element represents some property of a record

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
}

const pepsi = ['brown', true, 40] // need to keep track of the order of elements inside of here - if we swapped the order then the data model breaks

type Drink = [string, boolean, number] // creates the idea of a tuple inside of the application - new type we can freely use where we would usually put a type annotation

// Type alias
const pepsi2: Drink = ['brown', true, 40]

const pepsiTuple: [string, boolean, number] = ['brown', true, 40]
// this array will have a very consistent order of elements inside of it
// if we now try to change the order around we'll get an error - pepsi[0] = 40 would result in an error

// can re-use type Drink from above
const sprite: Drink = ['clear', true, 40]
const tea: Drink = ['brown', false, 0]

// probably won't use tuples very often however
const carSpecs: [number, number] = [400, 3350] // what does this code mean? Hard to guess at what the numbers mean so isn't very clear - this is why we don't use tuples very often - objects much clearer as seen below

const carStats = {
  horsepower: 400,
  weight: 3350,
}
