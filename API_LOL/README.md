# League of Legends Champions App

Una aplicación web interactiva que muestra información sobre todos los campeones de League of Legends, consumiendo datos de la API oficial de Riot Games.



## 📁 Estructura del proyecto

```
lol-champions-app/
├── src/
│   ├── js/
│   │   ├── api/
│   │   │   └── championsAPI.js     # Manejo de la API
│   │   ├── ui/
│   │   │   └── championsUI.js      # Interfaz de usuario
│   │   ├── utils/
│   │   │   └── championsFilter.js  # Filtros y búsqueda
│   │   └── main.js                 # Archivo principal
│   └── styles/
│       └── main.css                # Estilos principales
├── index.html                      # Página principal
├── package.json                    # Configuración del proyecto
├── .gitignore                      # Archivos ignorados por Git
└── README.md                       # Documentación
```

### Pasos para ejecutar el proyecto

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/lol-champions-app.git
   cd lol-champions-app
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm start
   ```
   La aplicación se abrirá en `http://localhost:1234`

4. **Construir para producción**
   ```bash
   npm run build
   ```
   Los archivos se generarán en la carpeta `dist/`




### Información mostrada
- Imagen del campeón
- Nombre y título
- Roles/Tags
- Estadísticas (Ataque, Defensa, Magia, Dificultad)
- Descripción breve


##  API utilizada

La aplicación consume la API oficial de Riot Games:
- **URL**: `https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json`
- **Imágenes**: `https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/`


##  Enlaces útiles

- [API de Riot Games](https://developer.riotgames.com/)
- [Documentación de Parcel](https://parceljs.org/)
- [GitHub Pages](https://pages.github.com/)