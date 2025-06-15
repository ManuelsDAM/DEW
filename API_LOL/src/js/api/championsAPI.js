export class ChampionsAPI {
    constructor() {
        this.apiUrl = 'https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json';
        this.imageBaseUrl = 'https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/';
    }

    async loadChampions() {
        try {
            const response = await fetch(this.apiUrl);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            // Procesar los datos para añadir URLs de imágenes
            const champions = {};
            Object.keys(data.data).forEach(key => {
                champions[key] = {
                    ...data.data[key],
                    imageUrl: `${this.imageBaseUrl}${data.data[key].image.full}`
                };
            });
            
            return champions;
            
        } catch (error) {
            console.error('Error loading champions:', error);
            throw new Error('No se pudieron cargar los campeones. Verifica tu conexión a internet.');
        }
    }

    getChampionImageUrl(imageName) {
        return `${this.imageBaseUrl}${imageName}`;
    }

    // Método para obtener detalles de un campeón específico
    async getChampionDetails(championKey) {
        try {
            const detailUrl = `https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion/${championKey}.json`;
            const response = await fetch(detailUrl);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data.data[championKey];
            
        } catch (error) {
            console.error('Error loading champion details:', error);
            return null;
        }
    }
}