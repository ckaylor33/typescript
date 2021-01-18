// Type annotations with functions
// annotate every single argument - no type inference
// after the argument list write an annotation for what the function should return - this should always usually be written as well as typsescipt might not tell you if you don't return anything from a function - it will use void instead

const add = (a: number, b: number): number => {
  return a + b
}

const subtract = (a: number, b: number): number => {
  return a - b
}

function divide(a: number, b: number): number {
  return a / b
}

const multiply = function (a: number, b: number): number {
  return a * b
}

// syntax you'll see for annotating functions

const logger = (message: string): void => {
  console.log(message)
}
// void is used to say there won't be a return value for the function

const throwError = (message: string): never => {
  throw new Error(message)
}
// never used to show we don't expect the function to return anything ever

const throwError2 = (message: string): string => {
  if (!message) {
    throw new Error(message)
  }
  return message
}
// if we throw an error then return something we still use the orginal value type we're trying to get

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
}
const logWeather = ({
  date,
  weather,
}: {
  date: Date
  weather: string
}): void => {
  console.log(date)
  console.log(weather)
}

logWeather(todaysWeather)
