export class ChampionsUI {
    constructor() {
        this.initializeElements();
    }

    initializeElements() {
        this.loadingEl = document.getElementById('loading');
        this.errorEl = document.getElementById('error');
        this.gridEl = document.getElementById('championsGrid');
        this.searchInput = document.getElementById('searchInput');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.championCountEl = document.getElementById('championCount');
    }

    showLoading() {
        this.loadingEl.style.display = 'block';
        this.errorEl.style.display = 'none';
        this.gridEl.style.display = 'none';
        this.championCountEl.style.display = 'none';
    }

    hideLoading() {
        this.loadingEl.style.display = 'none';
        this.gridEl.style.display = 'grid';
    }

    showError(message = 'Error al cargar los datos. Por favor, intenta de nuevo.') {
        this.loadingEl.style.display = 'none';
        this.errorEl.style.display = 'block';
        this.errorEl.textContent = message;
        this.gridEl.style.display = 'none';
        this.championCountEl.style.display = 'none';
    }

    displayChampions(champions) {
        const championsArray = Object.values(champions);
        
        if (championsArray.length === 0) {
            this.gridEl.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 50px; color: #c9aa71;">
                    <h3>No se encontraron campeones</h3>
                    <p>Intenta con otros términos de búsqueda o filtros diferentes.</p>
                </div>
            `;
            return;
        }

        this.gridEl.innerHTML = championsArray.map(champion => 
            this.createChampionCard(champion)
        ).join('');
    }

    createChampionCard(champion) {
        const fallbackImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZW48L3RleHQ+Cjwvc3ZnPg==';
        
        return `
            <div class="champion-card" onclick="window.app.showChampionDetails('${champion.id}')">
                <img 
                    src="${champion.imageUrl}" 
                    alt="${champion.name}"
                    class="champion-image"
                    onerror="this.src='${fallbackImage}'"
                >
                <h3 class="champion-name">${champion.name}</h3>
                <p class="champion-title">${champion.title}</p>
                
                <div class="champion-tags">
                    ${champion.tags.map(tag => `<span class="tag">${this.translateTag(tag)}</span>`).join('')}
                </div>
                
                <div class="champion-stats">
                    <div class="stat">
                        <span class="stat-name">Ataque</span>
                        <span class="stat-value">${champion.info.attack}/10</span>
                    </div>
                    <div class="stat">
                        <span class="stat-name">Defensa</span>
                        <span class="stat-value">${champion.info.defense}/10</span>
                    </div>
                    <div class="stat">
                        <span class="stat-name">Magia</span>
                        <span class="stat-value">${champion.info.magic}/10</span>
                    </div>
                    <div class="stat">
                        <span class="stat-name">Dificultad</span>
                        <span class="stat-value">${champion.info.difficulty}/10</span>
                    </div>
                </div>
                
                <div class="champion-description">
                    ${champion.blurb}
                </div>
            </div>
        `;
    }

    translateTag(tag) {
        const translations = {
            'Assassin': 'Asesino',
            'Fighter': 'Luchador',
            'Mage': 'Mago',
            'Marksman': 'Tirador',
            'Support': 'Soporte',
            'Tank': 'Tanque'
        };
        return translations[tag] || tag;
    }

    updateChampionCount(current, total) {
        this.championCountEl.textContent = `Mostrando ${current} de ${total} campeones`;
        this.championCountEl.style.display = 'block';
    }

    showChampionModal(champion) {
        // Crear modal simple con información del campeón
        const modalContent = `
            ${champion.name} - ${champion.title}
            
            ${champion.blurb}
            
            Roles: ${champion.tags.map(tag => this.translateTag(tag)).join(', ')}
            
            Estadísticas:
            • Ataque: ${champion.info.attack}/10
            • Defensa: ${champion.info.defense}/10
            • Magia: ${champion.info.magic}/10
            • Dificultad: ${champion.info.difficulty}/10
        `;
        
        alert(modalContent);
    }
}