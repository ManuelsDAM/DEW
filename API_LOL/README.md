# League of Legends Champions App

Una aplicación web interactiva que muestra información sobre todos los campeones de League of Legends, consumiendo datos de la API oficial de Riot Games.

##  Características

- **Visualización de campeones**: Muestra todos los campeones con sus imágenes, estadísticas y información
- **Búsqueda en tiempo real**: Busca campeones por nombre, título o rol
- **Filtros por rol**: Filtra campeones por Asesino, Luchador, Mago, Tirador, Soporte y Tanque
- **Diseño responsivo**: Compatible con dispositivos móviles y de escritorio
- **Interfaz moderna**: Diseño atractivo inspirado en League of Legends

##  Tecnologías utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con gradientes y efectos
- **JavaScript ES6+**: Lógica de la aplicación con módulos
- **Parcel**: Empaquetador de módulos
- **API de Riot Games**: Datos oficiales de League of Legends

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

##  Instalación y uso

### Prerrequisitos
- Node.js 
- npm o yarn

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

## 🌐 Despliegue en GitHub Pages

## Despliegue manual

1. **Construir el proyecto**
   ```bash
   npm run build
   ```

2. **Subir archivos a GitHub**
   ```bash
   git add .
   git commit -m "Build for production"
   git push origin main
   ```

3. **Configurar GitHub Pages**
   - Ve a la configuración del repositorio en GitHub
   - En la sección "Pages", selecciona "Deploy from a branch"
   - Selecciona la rama `gh-pages` y la carpeta `/ (root)`

##  Funcionalidades

### Búsqueda
- Busca por nombre del campeón (ej: "Jinx")
- Busca por título (ej: "La Artillera Demente")
- Busca por rol (ej: "Asesino", "Mago")

### Filtros
- **Todos**: Muestra todos los campeones
- **Asesino**: Campeones especializados en eliminar objetivos rápidamente
- **Luchador**: Campeones versátiles en combate cuerpo a cuerpo
- **Mago**: Campeones que infligen daño mágico
- **Tirador**: Campeones de daño a distancia
- **Soporte**: Campeones que ayudan al equipo
- **Tanque**: Campeones resistentes que protegen al equipo

### Información mostrada
- Imagen del campeón
- Nombre y título
- Roles/Tags
- Estadísticas (Ataque, Defensa, Magia, Dificultad)
- Descripción breve

##  Solución de problemas

### La página aparece en blanco
- Verifica que todas las dependencias estén instaladas: `npm install`
- Asegúrate de estar ejecutando `npm start` y no solo abriendo el archivo HTML
- Revisa la consola del navegador para errores de JavaScript

### Error de CORS
- La aplicación debe ejecutarse desde un servidor (usando Parcel)
- No abras el archivo HTML directamente en el navegador

### Imágenes no cargan
- Las imágenes se cargan desde la CDN de Riot Games
- Verifica tu conexión a internet
- Si persiste el problema, las imágenes tienen un fallback automático

##  API utilizada

La aplicación consume la API oficial de Riot Games:
- **URL**: `https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json`
- **Imágenes**: `https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/`


##  Enlaces útiles

- [API de Riot Games](https://developer.riotgames.com/)
- [Documentación de Parcel](https://parceljs.org/)
- [GitHub Pages](https://pages.github.com/)