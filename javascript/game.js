const myCat = {
  name: "Mimi",
  age: 3,
  color: "yellow",
  feed: 10,
  hungry: false,
  eat: () => {
    console.log("My cat is eating")
    myCat.feed = 10
    myCat.hungry = false
  }
}

const dayHours = 24
let timesToEat = 0

for (let i = 0; i < dayHours; i++) {
  console.log("hour: " + i)
  myCat.feed = myCat.feed - 1

  if(myCat.feed <= 0) {
    console.log("My cat is hungry!!!!!")
    myCat.hungry = true
  }

  if(myCat.hungry) {
    myCat.eat()
    timesToEat++
  }
}

console.log("I have eaten " + timesToEat + " times")