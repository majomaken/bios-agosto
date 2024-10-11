const characters = []
const divContainerCharacters = document.getElementById('characters')
// const getOnePageCharactersFetch = async () => {
//     try {
//         const response = await fetch(`https://rickandmortyapi.com/api/character?page=1`)
//         const data = await response.json()
//         characters.push(...data.results)
//         characters.forEach((character) => {
//             divContainerCharacters.innerHTML = divContainerCharacters.innerHTML + 
//             '<div class="card">' +
//             '<img src="' + character.image + '" alt="' + character.name + '"/>' +
//             '<div class="card-info">' +
//             '<h2 class="character-name">' + character.name + '</h2>' +
//             '<span>'+ character.status + '-' + character.species +'</span>' +
//             '<a href="' + character.location.url + '" target="_blank"> - ' + character.location.name + '</a>' +
//             '</div>' +
//             '</div>'
//         })
//     } catch (error) {
//         console.error('El error al obtener los personajes es el siguiente:', error)
//     }
// };
const getOnePageCharactersFetch = async () => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=1`)
        const data = await response.json()
        characters.push(...data.results)

        characters.forEach((character) => {
            const html = `
                <div class="card">
                <img src="${character.image}" alt="${character.name}"/>
                <div class="card-info">
                    <h2 class="character-name">${character.name}</h2>
                    <span>${character.status} - ${character.species}</span>
                    <a href="${character.location.url}" target="_blank">${character.location.name}</a>
                </div>
            </div>
            `
            divContainerCharacters.innerHTML += html
        })
    } catch (error) {
        console.error('El error al obtener los personajes es el siguiente:', error)
    }
};

getOnePageCharactersFetch()