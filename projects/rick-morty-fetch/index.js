// const axios = require('axios')

// async function getAllCharactersFetch() {}
// const getAllCharactersFetch = async function () {}


// const getAllCharactersFetch = async () => {
//   let currentPage = 1
//   let hasNextPage = true

//   while (hasNextPage) {
//     try {
//       const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
//       response.data.results.map(character => characters.push(character.name))
//       hasNextPage = response.data.info.next !== null
//       currentPage++
//     } catch (error) {
//       console.error('El error al obtener los personajes es el siguiente:', error)
//       hasNextPage = false
//     }
//   }
// }

// getAllCharactersFetch()

// setTimeout(() => console.log('La lista de personajes es la siguiente: ', characters.length), 5000)

// const getOnePageCharactersFetch = async () => {
//   try {
//     const response = await fetch(`https://rickandmortyapi.com/api/character?page=1`)
//     const data = await response.json()
//     characters.push(...data.results)
//   } catch (error) {
//     console.error('El error al obtener los personajes es el siguiente:', error)
//   }
// }

// getOnePageCharactersFetch()

// // setTimeout(() => console.log('La lista de personajes es la siguiente: ', characters), 1000)
// setTimeout(() => console.log('El número de personajes es: ', characters.length), 1000)

// const getSearchByNameCharacterFetch = async (name) => {
//   try {
//     const response = await fetch(`https://rickandmortyapi.com/api/character?name=${name}&status=alive`)
//     const data = await response.json()
//     console.log(data.results)
//   } catch (error) {
//     console.error('El error al obtener los personajes es el siguiente:', error)
//   }
// }

// getSearchByNameCharacterFetch('Rick Sanchez')

// setTimeout(() => console.log('La lista de personajes es la siguiente: ', characters), 1000)
// setTimeout(() => console.log('El nombre de el personaje es : ', characters), 1000)
const characters = []

const getOnePageCharactersFetch = async () => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=1`)
    const data = await response.json()
    characters.push(...data.results)
  } catch (error) {
    console.error('El error al obtener los personajes es el siguiente:', error)
  }
}

getOnePageCharactersFetch().then(() => {
  console.log('La lista de personajes es la siguiente: ', characters)
  // Búsqueda de personaje por nombre
  // Hacer filtro de personajes por genero
  // Hacer filtro de personajes por location
  // Ordenar invertido por id
})
