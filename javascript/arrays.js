
// console.log('El siguiente es un array de frutas:')
// console.log(frutas)

// console.log('La fruta seleccionada es una:', frutas[0])
// console.log('La fruta seleccionada es una:', frutas[1])
// console.log('La fruta seleccionada es una:', frutas[2])

// const frutasYNumeros = ["coco", 3, true, "naranja"]
// console.log('El siguiente es un array de frutas y numeros:')
// console.log(frutasYNumeros)

// const numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
// const frutas = ["manzana", "pera", "naranja"]
// console.log('Antes del push el contenido de frutas es:', frutas)
// El push agrega un elemento al final de un array
// frutas.push("uva", "sandia")
// console.log('Después del push el contenido de frutas es:', frutas)
// El pop elimina un elemento del final de un array
// frutas.pop()
// console.log('Después del pop el contenido de frutas es:', frutas)
// console.log('Antes del unshift el contenido de frutas es:', frutas)
// El unshift agrega un elemento al principio de un array
// frutas.unshift("uva", "sandia")
// console.log('Después del unshift el contenido de frutas es:', frutas)
// console.log('Antes del shift el contenido de frutas es:', frutas)
// El shift elimina un elemento del principio de un array
// frutas.shift()
// console.log('Después del shift el contenido de frutas es:', frutas)

// console.log('Antes del splice el contenido de frutas es:', frutas)
// // El splice elimina un elemento del array
// frutas.splice(1, 2)
// console.log('Después del splice el contenido de frutas es:', frutas)

// console.log('Antes del splice el contenido de frutas es:', frutas)
// // El splice remplaza un elemento del array
// frutas.splice(1, 2, 'sandia', 'uva')
// console.log('Después del splice el contenido de frutas es:', frutas)

// frutas.forEach(function(fruta, index) {
  //   console.log("La fruta en la posicion ", index, " es ", fruta)
  //   console.log("Me gusta comer al desayuno ", fruta)
  // })
  // El forEach es una forma de iterar un array
  // frutas.forEach((fruta, index) => console.log("La fruta en la posicion ", index, " es ", fruta))
// frutas.forEach(fruta => console.log("Me gusta comer al desayuno", fruta))

// const frutasMap = frutas.map(function(fruta, index) {
//   console.log(index, fruta)
//   return `La fruta en la posición ${index} es ${fruta}`
// })

// frutasMap.forEach(positionFrutaFrase => console.log(positionFrutaFrase))

const numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// const numerosPares = numbers.filter(function(number) {
//   return number % 2 === 0
// })
// Filtrar números pares
// const numerosPares = numbers.filter(number => number % 2 === 0)

// console.log("Numeros pares:", numerosPares)

const frutas = ["manzana", "pera", "naranja", "uva", "sandia", "mango", "piña", "aguacate"]

// const indiceManzana = frutas.indexOf("manzana")
// const indiceSandia = frutas.indexOf("sandia")
// console.log("El indice de la fruta 'manzana' es:", indiceManzana)


frutas.splice(frutas.indexOf("uva"), 1)
console.log("Despues del splice el contenido de frutas es:", frutas)