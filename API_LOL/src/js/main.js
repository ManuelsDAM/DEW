import { ChampionsAPI } from './api/championsAPI.js';
import { ChampionsUI } from './ui/championsUI.js';
import { ChampionsFilter } from './utils/championsFilter.js';

class ChampionsApp {
    constructor() {
        this.api = new ChampionsAPI();
        this.ui = new ChampionsUI();
        this.filter = new ChampionsFilter();
        
        this.champions = {};
        this.filteredChampions = {};
        this.currentFilter = 'all';
        this.searchTerm = '';
        
        this.init();
    }

    async init() {
        try {
            this.ui.showLoading();
            this.bindEvents();
            
            this.champions = await this.api.loadChampions();
            this.filteredChampions = { ...this.champions };
            
            this.ui.hideLoading();
            this.filterAndDisplayChampions();
            
        } catch (error) {
            console.error('Error initializing app:', error);
            this.ui.showError();
        }
    }

    bindEvents() {
        // Evento de búsqueda
        this.ui.searchInput.addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.filterAndDisplayChampions();
        });

        // Eventos de filtros
        this.ui.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.ui.filterButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.filter;
                this.filterAndDisplayChampions();
            });
        });
    }

    filterAndDisplayChampions() {
        this.filteredChampions = this.filter.applyFilters(
            this.champions, 
            this.currentFilter, 
            this.searchTerm
        );
        
        this.ui.displayChampions(this.filteredChampions);
        this.ui.updateChampionCount(
            Object.keys(this.filteredChampions).length,
            Object.keys(this.champions).length
        );
    }

    showChampionDetails(championId) {
        const champion = this.champions[championId];
        if (champion) {
            this.ui.showChampionModal(champion);
        }
    }
}

// Inicializar la aplicación cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    window.app = new ChampionsApp();
});

