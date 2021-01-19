// Classes

// Blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'

// Define a set of fields (values) and methods (functions) to represent a 'thing'

class Vehicle {
  constructor(public color: string) {
    // modifiers like public apply the same to variables as they do to methods
    // constructor is a function defined inside of a class - instantly executed when we create a new instance of the class
  }

  protected honk(): void {
    // Protected - this method can be called by other methods in this class, or by other methods in child classes
    console.log('beep')
  }
}

const vehicle = new Vehicle('orange') // takes an argument from the constructor function in Vehicle
console.log(vehicle.color)

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color)
  }
  // even though this doesn't have the constructor function color, typescript will call the constructor from the parent function Vehicle
  private drive(): void {
    // Private - this method can only be called by other methods in this class - this restricts the methods other devs can call
    console.log('vroom')
  }
  startDrivingProcess(): void {
    this.drive()
    this.honk() // child class so can be called even though protected
  }
} // this copies the methods over from Vehicle - can also re-define the methods as seen with the drive method above

const car = new Car(4, 'red')
car.startDrivingProcess()

// Class modifiers - public, private & protected
// Public - this method can be called anywhere, anytime. This is by default.

// Interfaces and classes will be the primary tool we use with typescript
