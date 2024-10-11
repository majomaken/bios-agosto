async function fetchLanguages() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json');
        const data = await response.json();

        const selectElement = document.getElementById('languageSelect');
        data.forEach(language => {
            const option = document.createElement('option');
            option.value = language.title;
            option.textContent = language.title;
            selectElement.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching languages:', error);
    }

    const languageSelect = document.getElementById('languageSelect');
    languageSelect.addEventListener('change', () => {
        const selectedLanguage = languageSelect.value;
        fetchRepositories(selectedLanguage);
    });
}



window.onload = fetchLanguages;


document.getElementById('randomRepoButton').addEventListener('click', function() {
    const url = 'https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.items && data.items.length > 0) {
                // Seleccionar un repositorio aleatorio
                const randomIndex = Math.floor(Math.random() * data.items.length);
                const repo = data.items[randomIndex];

                const container = document.getElementById('random-repo-container');
                container.innerHTML = `
                    <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                    <p>${repo.description || 'Sin descripción'}</p>
                    <p>⭐ Stars: ${repo.stargazers_count}</p>
                `;
            } else {
                console.log('No se encontraron repositorios.');
            }
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
        });
});
