const languageList = document.getElementById('language-list');
const languageInfo = document.getElementById('language-info');
const container = document.getElementById('container');

const getLanguages = async () => {
    try {
        const response = await fetch(`https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json`)
        const data = await response.json()
        data.forEach((language) => {
            const option = document.createElement('option')
            option.value = language.title
            option.innerText = language.value
            languageList.appendChild(option)
        });

        languageList.addEventListener('change', () => {
            // Valor seleccionado en la lista
            getRepoByLanguage(languageList.value)
        });

        // Agregar botón después de elegir lenguaje en lista select
        const refreshButton = document.createElement('button');
        refreshButton.innerText = 'Refresh';
        refreshButton.id = 'refresh-button';
        refreshButton.onclick = function() { window.location.reload() }
        container.appendChild(refreshButton);
    } catch (error) {
        console.error('El error al obtener los lenguaje es el siguiente:', error)
    }
}

const getRepoByLanguage = async (lang) => {
    // Obtener el valor seleccionado en la lista por parametro lang
    const selectedLanguage = lang.toLowerCase()

    try {
        // Llamada a la api para obtener repositorios en dónde modificamos la url con el valor de la variable selectedLanguage
        const response = await fetch(
            `https://api.github.com/search/repositories?q=language:${selectedLanguage}&sort=stars&order=desc`
        )
        const data = await response.json()
        const languageInfoText = data.items
        const randomIndex = Math.floor(Math.random() * languageInfoText.length)
        const randomRepository = languageInfoText[randomIndex]

        languageInfo.innerHTML =`
            <div class="repo-card">
                <h2 class="repo-name">${randomRepository.name}</h2>
                <p class="repo-description">${randomRepository.description}</p>
                <a class="repo-link" href="${randomRepository.html_url}" target="_blank">More Info</a>
            </div>
        `
    } catch (error) {
        languageInfo.innerHTML = `
        <div class="repo-card">
        <h2 class="repo-name error">Error fetching repositories</h2>
        </div> `
        languageInfo.style.backgroundColor = 'rgb(177, 71, 71)';
    }
}

getLanguages()
