class t{constructor(){this.apiUrl="https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json",this.imageBaseUrl="https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/"}async loadChampions(){try{let t=await fetch(this.apiUrl);if(!t.ok)throw Error(`HTTP error! status: ${t.status}`);let i=await t.json(),a={};return Object.keys(i.data).forEach(t=>{a[t]={...i.data[t],imageUrl:`${this.imageBaseUrl}${i.data[t].image.full}`}}),a}catch(t){throw console.error("Error loading champions:",t),Error("No se pudieron cargar los campeones. Verifica tu conexión a internet.")}}getChampionImageUrl(t){return`${this.imageBaseUrl}${t}`}async getChampionDetails(t){try{let i=`https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion/${t}.json`,a=await fetch(i);if(!a.ok)throw Error(`HTTP error! status: ${a.status}`);return(await a.json()).data[t]}catch(t){return console.error("Error loading champion details:",t),null}}}class i{constructor(){this.initializeElements()}initializeElements(){this.loadingEl=document.getElementById("loading"),this.errorEl=document.getElementById("error"),this.gridEl=document.getElementById("championsGrid"),this.searchInput=document.getElementById("searchInput"),this.filterButtons=document.querySelectorAll(".filter-btn"),this.championCountEl=document.getElementById("championCount")}showLoading(){this.loadingEl.style.display="block",this.errorEl.style.display="none",this.gridEl.style.display="none",this.championCountEl.style.display="none"}hideLoading(){this.loadingEl.style.display="none",this.gridEl.style.display="grid"}showError(t="Error al cargar los datos. Por favor, intenta de nuevo."){this.loadingEl.style.display="none",this.errorEl.style.display="block",this.errorEl.textContent=t,this.gridEl.style.display="none",this.championCountEl.style.display="none"}displayChampions(t){let i=Object.values(t);if(0===i.length){this.gridEl.innerHTML=`
                <div style="grid-column: 1 / -1; text-align: center; padding: 50px; color: #c9aa71;">
                    <h3>No se encontraron campeones</h3>
                    <p>Intenta con otros t\xe9rminos de b\xfasqueda o filtros diferentes.</p>
                </div>
            `;return}this.gridEl.innerHTML=i.map(t=>this.createChampionCard(t)).join("")}createChampionCard(t){return`
            <div class="champion-card" onclick="window.app.showChampionDetails('${t.id}')">
                <img 
                    src="${t.imageUrl}" 
                    alt="${t.name}"
                    class="champion-image"
                    onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZW48L3RleHQ+Cjwvc3ZnPg=='"
                >
                <h3 class="champion-name">${t.name}</h3>
                <p class="champion-title">${t.title}</p>
                
                <div class="champion-tags">
                    ${t.tags.map(t=>`<span class="tag">${this.translateTag(t)}</span>`).join("")}
                </div>
                
                <div class="champion-stats">
                    <div class="stat">
                        <span class="stat-name">Ataque</span>
                        <span class="stat-value">${t.info.attack}/10</span>
                    </div>
                    <div class="stat">
                        <span class="stat-name">Defensa</span>
                        <span class="stat-value">${t.info.defense}/10</span>
                    </div>
                    <div class="stat">
                        <span class="stat-name">Magia</span>
                        <span class="stat-value">${t.info.magic}/10</span>
                    </div>
                    <div class="stat">
                        <span class="stat-name">Dificultad</span>
                        <span class="stat-value">${t.info.difficulty}/10</span>
                    </div>
                </div>
                
                <div class="champion-description">
                    ${t.blurb}
                </div>
            </div>
        `}translateTag(t){return({Assassin:"Asesino",Fighter:"Luchador",Mage:"Mago",Marksman:"Tirador",Support:"Soporte",Tank:"Tanque"})[t]||t}updateChampionCount(t,i){this.championCountEl.textContent=`Mostrando ${t} de ${i} campeones`,this.championCountEl.style.display="block"}showChampionModal(t){alert(`
            ${t.name} - ${t.title}
            
            ${t.blurb}
            
            Roles: ${t.tags.map(t=>this.translateTag(t)).join(", ")}
            
            Estad\xedsticas:
            \u{2022} Ataque: ${t.info.attack}/10
            \u{2022} Defensa: ${t.info.defense}/10
            \u{2022} Magia: ${t.info.magic}/10
            \u{2022} Dificultad: ${t.info.difficulty}/10
        `)}}class a{constructor(){this.validTags=["Assassin","Fighter","Mage","Marksman","Support","Tank"]}applyFilters(t,i,a){let s={...t};return"all"!==i&&this.validTags.includes(i)&&(s=this.filterByRole(s,i)),a&&""!==a.trim()&&(s=this.filterBySearch(s,a.trim())),s}filterByRole(t,i){return Object.fromEntries(Object.entries(t).filter(([t,a])=>a.tags&&a.tags.includes(i)))}filterBySearch(t,i){let a=this.normalizeString(i);return Object.fromEntries(Object.entries(t).filter(([t,i])=>!!(this.normalizeString(i.name).includes(a)||this.normalizeString(i.title).includes(a)||i.tags&&i.tags.some(t=>this.normalizeString(t).includes(a)||this.normalizeString(this.translateTag(t)).includes(a))||i.blurb&&this.normalizeString(i.blurb).includes(a))))}normalizeString(t){return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}translateTag(t){return({Assassin:"Asesino",Fighter:"Luchador",Mage:"Mago",Marksman:"Tirador",Support:"Soporte",Tank:"Tanque"})[t]||t}sortChampions(t,i="name"){let a=Object.entries(t);switch(i){case"name":return a.sort(([,t],[,i])=>t.name.localeCompare(i.name));case"difficulty":return a.sort(([,t],[,i])=>i.info.difficulty-t.info.difficulty);case"attack":return a.sort(([,t],[,i])=>i.info.attack-t.info.attack);case"defense":return a.sort(([,t],[,i])=>i.info.defense-t.info.defense);case"magic":return a.sort(([,t],[,i])=>i.info.magic-t.info.magic);default:return a}}}class s{constructor(){this.api=new t,this.ui=new i,this.filter=new a,this.champions={},this.filteredChampions={},this.currentFilter="all",this.searchTerm="",this.init()}async init(){try{this.ui.showLoading(),this.bindEvents(),this.champions=await this.api.loadChampions(),this.filteredChampions={...this.champions},this.ui.hideLoading(),this.filterAndDisplayChampions()}catch(t){console.error("Error initializing app:",t),this.ui.showError()}}bindEvents(){this.ui.searchInput.addEventListener("input",t=>{this.searchTerm=t.target.value.toLowerCase(),this.filterAndDisplayChampions()}),this.ui.filterButtons.forEach(t=>{t.addEventListener("click",t=>{this.ui.filterButtons.forEach(t=>t.classList.remove("active")),t.target.classList.add("active"),this.currentFilter=t.target.dataset.filter,this.filterAndDisplayChampions()})})}filterAndDisplayChampions(){this.filteredChampions=this.filter.applyFilters(this.champions,this.currentFilter,this.searchTerm),this.ui.displayChampions(this.filteredChampions),this.ui.updateChampionCount(Object.keys(this.filteredChampions).length,Object.keys(this.champions).length)}showChampionDetails(t){let i=this.champions[t];i&&this.ui.showChampionModal(i)}}document.addEventListener("DOMContentLoaded",()=>{window.app=new s}),window.addEventListener("error",t=>{console.error("Error global:",t.error)}),window.addEventListener("unhandledrejection",t=>{console.error("Promise rejection:",t.reason)});
//# sourceMappingURL=API_LOL.5194fbfc.js.map
