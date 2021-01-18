// Typed Arrays - Arrays where each element is some consistent type of value

const carMakers = ['ford', 'toyota', 'bmw'] // type inference works here

const carMakers2: string[] = [] // would need to use annotations for empty arrays

const dates = [new Date(), new Date()] // inference works

const carsByMake = [['f150'], ['yaris'], ['m4']] // inference works but annotation would be: string[][]

// help with inference when extracting values
const car1 = carMakers[0]
const myCar = carMakers.pop() // correctly infers that these will be strings

// Prevent incompatible values
carMakers.push(10) // tells us it should be a string instead

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase()
})

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '10-10-2022'] // anything inside here should be dates or strings
importantDates.push('02-12-2031')
importantDates.push(new Date())
