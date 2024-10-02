const locations = []
const divContainerLocations = document.getElementById('locations')

const getOnePageLocations = async () => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/location?page=1`)
        const data = await response.json()
        locations.push(...data.results)

        locations.forEach((location) => {
            divContainerLocations.innerHTML += `
            <div>
                <div class="location-card">
                    <h2 class="location-name">${location.name}</h2>
                    <span>Type: ${location.type}</span>
                    <a href="${location.url}" target="_blank"> - ${location.url}</a>
                </div>
            </div>
            `
        })
    } catch (error) {
        console.error('El error al obtener las locaciones es el siguiente:', error)
    }
};

getOnePageLocations()