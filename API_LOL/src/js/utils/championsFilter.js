export class ChampionsFilter {
    constructor() {
        this.validTags = ['Assassin', 'Fighter', 'Mage', 'Marksman', 'Support', 'Tank'];
    }

    applyFilters(champions, roleFilter, searchTerm) {
        let filtered = { ...champions };

        // Filtrar por rol
        if (roleFilter !== 'all' && this.validTags.includes(roleFilter)) {
            filtered = this.filterByRole(filtered, roleFilter);
        }

        // Filtrar por búsqueda
        if (searchTerm && searchTerm.trim() !== '') {
            filtered = this.filterBySearch(filtered, searchTerm.trim());
        }

        return filtered;
    }

    filterByRole(champions, role) {
        return Object.fromEntries(
            Object.entries(champions).filter(([key, champion]) =>
                champion.tags && champion.tags.includes(role)
            )
        );
    }

    filterBySearch(champions, searchTerm) {
        const normalizedSearch = this.normalizeString(searchTerm);
        
        return Object.fromEntries(
            Object.entries(champions).filter(([key, champion]) => {
                // Buscar en nombre
                if (this.normalizeString(champion.name).includes(normalizedSearch)) {
                    return true;
                }
                
                // Buscar en título
                if (this.normalizeString(champion.title).includes(normalizedSearch)) {
                    return true;
                }
                
                // Buscar en tags (roles)
                if (champion.tags && champion.tags.some(tag => 
                    this.normalizeString(tag).includes(normalizedSearch) ||
                    this.normalizeString(this.translateTag(tag)).includes(normalizedSearch)
                )) {
                    return true;
                }
                
                // Buscar en descripción
                if (champion.blurb && this.normalizeString(champion.blurb).includes(normalizedSearch)) {
                    return true;
                }
                
                return false;
            })
        );
    }

    normalizeString(str) {
        return str.toLowerCase()
                 .normalize('NFD')
                 .replace(/[\u0300-\u036f]/g, ''); // Remover acentos
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

    sortChampions(champions, sortBy = 'name') {
        const championsArray = Object.entries(champions);
        
        switch (sortBy) {
            case 'name':
                return championsArray.sort(([,a], [,b]) => a.name.localeCompare(b.name));
            case 'difficulty':
                return championsArray.sort(([,a], [,b]) => b.info.difficulty - a.info.difficulty);
            case 'attack':
                return championsArray.sort(([,a], [,b]) => b.info.attack - a.info.attack);
            case 'defense':
                return championsArray.sort(([,a], [,b]) => b.info.defense - a.info.defense);
            case 'magic':
                return championsArray.sort(([,a], [,b]) => b.info.magic - a.info.magic);
            default:
                return championsArray;
        }
    }
}