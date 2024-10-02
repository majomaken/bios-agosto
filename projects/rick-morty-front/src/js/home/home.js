
const home = {
    name: 'Inicio',
    url: '#',
}

const characters = {
    name: 'Personajes',
    url: './src/pages/characters.html',
}

const locations = {
    name: 'Lugares',
    url: './src/pages/locations.html',
}

const episodes = {
    name: 'Episodios',
    url: './src/pages/episodes.html',
}


const MENU_HEADERS = [
    
    characters,
    locations,
    episodes,
]

const mainMenu =document.getElementById('main-menu')
MENU_HEADERS.map((header) => {
    mainMenu.innerHTML += `
    <li><a href="${header.url}">${header.name}</li>`;
})
