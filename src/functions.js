function setLoading(formEl, loading = true) {
    if (loading === true) {
        let loadingEl = document.createElement('span');
        loadingEl.textContent = "Carregando..."
        loadingEl.setAttribute('id', 'loading');
        formEl.appendChild(loadingEl);
    } else {
        document.getElementById('loading').remove();
    }
}

function render(listEl, repositories) {
    listEl.innerHTML = '';

    repositories.forEach(repo => {
        let imgEl = document.createElement('img');
        imgEl.setAttribute('src', repo.avatar_url);

        let titleEl = document.createElement('strong');
        titleEl.appendChild(document.createTextNode(repo.name));

        let descriptionEl = document.createElement('p');
        descriptionEl.appendChild(document.createTextNode(repo.description));

        let linkEl = document.createElement('a');
        linkEl.setAttribute('target', "_blank");
        linkEl.setAttribute('href', repo.html_url)
        linkEl.appendChild(document.createTextNode('Acessar'));

        let listItemEl = document.createElement('li');
        listItemEl.appendChild(imgEl)
        listItemEl.appendChild(titleEl)
        listItemEl.appendChild(descriptionEl)
        listItemEl.appendChild(linkEl)

        listEl.appendChild(listItemEl);


    });
}

export { setLoading, render };