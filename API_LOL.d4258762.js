async function t(){let t=await fetch("https://ddragon.leagueoflegends.com/api/versions.json");return(await t.json())[0]}async function a(){let a=await t(),e=`https://ddragon.leagueoflegends.com/cdn/${a}/data/es_ES/champion.json`,n=await fetch(e);return(await n.json()).data}async function e(a){let e=await t(),n=`https://ddragon.leagueoflegends.com/cdn/${e}/data/es_ES/champion/${a}.json`,o=await fetch(n);return(await o.json()).data[a]}const n=document.getElementById("champSelect"),o=document.getElementById("champInfo");async function s(){let t=n.value,a=await e(t);o.innerHTML=`
    <h2>${a.name}</h2>
    <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${a.id}_0.jpg" alt="${a.name}" />
    <p>${a.title}</p>
    <p><strong>Vida:</strong> ${a.stats.hp.toFixed(1)}</p>
    <p><strong>Ataque:</strong> ${a.stats.attackdamage.toFixed(1)}</p>
    <p><strong>Velocidad movimiento:</strong> ${a.stats.movespeed}</p>
  `}!async function(){Object.values(await a()).forEach(t=>{let a=document.createElement("option");a.value=t.id,a.textContent=t.name,n.appendChild(a)}),n.addEventListener("change",s),s()}();
//# sourceMappingURL=API_LOL.d4258762.js.map
