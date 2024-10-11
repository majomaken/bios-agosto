const languageList = document.getElementById('language-list');
const languageInfo = document.getElementById('language-info');
const container = document.getElementById('container');

const getLenguages = async () => {
    try {
        const response = await fetch(`https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json`)
        const data = await response.json()
        data.forEach((language) => {
            const option = document.createElement('option')
            option.value = language.tittle
            option.innerText = language.value
            languageList.appendChild(option)
        });

        const languageInfoText = []

        const getRepoByLanguage = async () => {
            try {
                const response = await fetch(`https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc`)
                const data = await response.json()

                languageInfoText.push(...data.items)
                languageInfoText.forEach((language) => {
                    languageInfo.innerHTML =
                        `<div class="repo-card">
                            <h2 class="repo-name">${language.name}</h2>
                            <p class="repo-description">${language.description}</p>
                            <a class="repo-link" href="${language.html_url}" target="_blank">More Info</a>
                        </div>
                            `
                        })

                } catch (error) {
                languageInfo.innerHTML = `
                <div class="repo-card">
                <h2 class="repo-name error">Error fetching repositories</h2>
                </div> `
                languageInfo.style.backgroundColor = 'rgb(177, 71, 71)';
                //h2.style.color = 'black';
                }
                
            }
        
        languageList.addEventListener('change', getRepoByLanguage);

        // Agregar botón después de elegir lenguaje en lista select
        
        const refreshButton = document.createElement('button');
        refreshButton.innerText = 'Refresh';
        refreshButton.id = 'refresh-button';
        container.appendChild(refreshButton);
        
        //refreshButton.addEventListener('click', getRepoByLanguage);

    } catch (error) {
        
        console.error('El error al obtener los lenguaje es el siguiente:', error)
    }
}

getLenguages()