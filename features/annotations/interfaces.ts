// Interfaces - Creates a new type, describing the property names and value types of an object

interface Reportable {
  summary(): string
} // can assign any type inside of an interface

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  },
}

const drink1 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  },
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}
printSummary(oldCivic)
printSummary(drink1)

// interfaces encouraage us to write generic functions - great for reusable code

// general strategy for reusable code in TS
// 1. Create functions that accept arguments that are typed with interfaces
// 2. Objects/classes can decide to implement a given interface to work with a function
