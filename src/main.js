import api from './api';
import { setLoading, render } from './functions';

class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers()
    }
    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0) {
            return;
        }

        setLoading(this.formEl);

        try {
            const response = await api.get(`/repos/${repoInput}`);

            const { name, description, html_url, owner: { avatar_url } } = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            });

            this.inputEl.value = '';

            render(this.listEl, this.repositories);

        } catch (error) {
            alert('O repositorio não existe!')
        }

        setLoading(false, this.formEl);
    }

}

new App();