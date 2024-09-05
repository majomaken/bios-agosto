/*Los objetos son estructuras de datos,
que nos permiten almacenar en una unica variable varios datos a la vez.*/

const persona = {
    name:"Victor",
    lastName: "Montilla",
    birthDate: "18/11/1992",
    age: 31,
    vehicle: {
        brand: "Chevrolet",
        model: "Aveo",
        year: 2023,
        km: 12000,
    }
}

let personName = persona.name
console.log("el nombre de la persona es",personName)

const personVehicle = persona.vehicle.brand
console.log(`El vehiculo de ${personName} es de marca ${personVehicle}`)

 personName = persona.name = "Juan"

console.log("el nombre de la persona es",personName)

console.log(persona)
const personas = [
    {
        name:"Victor",
        lastName: "Montilla",
        birthDate: "18/11/1992",
        age: 31,
        vehicle: {
            brand: "Chevrolet",
            model: "Aveo",
            year: 2023,
            km: 12000,
        }
    },
    {
        name:"Juan",
        lastName: "Doe",
        birthDate: "18/11/2003",
        age: 20,
        vehicle: {
            brand: "Ford",
            model: "Fiesta",
            year: 2023,
            km: 12000,
        }
    }
]