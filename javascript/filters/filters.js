const users = [
  { name: "Ana", age: 28, country: "España" },
  { name: "Luis", age: 34, country: "México" },
  { name: "Sofía", age: 22, country: "Argentina" },
];

const filterByCountry = (users, country) => {
  return users.filter((user) => user.country === country);
};

const sortByAge = (users, order /* <= asc o desc */) => {
  return users.slice().sort((a, b) => {
    if (order === "asc") {
      return a.age - b.age;
    } else if (order === "desc") {
      return b.age - a.age;
    } else {
      throw new Error("El orden es incorrecto. Usa 'asc' o 'desc'.");
    }
  })
}

const findByName = (users, name) => {
  return users.find((user) => user.name === name);
};

const mexicanUsers = filterByCountry(users, "México");
const sortedUsers = sortByAge(users, "desc");
const user = findByName(users, "Sofía")

console.log(mexicanUsers)
console.log(sortedUsers)
console.log('Encontramos el usuario con el nombre', user.name)