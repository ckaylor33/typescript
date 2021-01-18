// Annotations with objects

const profile = {
  name: 'Alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age
  },
}

// how to destructure different properties from the profile object above
// have to write out the structure we expect profile to have - below we have an object, that is an age property, that is a number

const { age }: { age: number } = profile
// have to double up on the structure incase you want to pull out multiple properties

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile
