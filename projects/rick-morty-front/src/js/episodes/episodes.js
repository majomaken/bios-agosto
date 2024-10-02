const episodes = []
const divContainerEpisodes = document.getElementById('episodes')

const getOnePageEpisodes = async () => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/episode?page=1`)
        const data = await response.json()
        episodes.push(...data.results)

        episodes.forEach((episode) => {
            divContainerEpisodes.innerHTML += `
            <div>
                <div class="episode-card">
                    <h2 class="episode-name">${episode.name}</h2>
                    <span>Date of air: ${episode.air_date}</span>
                    <a href="${episode.url}" target="_blank"> - ${episode.url}</a>
                </div>
            </div>
            `
        })
    } catch (error) {
        console.error('El error al obtener los episodios es el siguiente:', error)
    }
};

getOnePageEpisodes()