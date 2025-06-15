import { getAllChamps, getChampData } from './api.js';

const select = document.getElementById('champSelect');
const info = document.getElementById('champInfo');

async function init() {
  const champs = await getAllChamps();
  Object.values(champs).forEach(ch => {
    const opt = document.createElement('option');
    opt.value = ch.id;
    opt.textContent = ch.name;
    select.appendChild(opt);
  });
  select.addEventListener('change', onSelect);
  onSelect(); // cargar primero
}

async function onSelect() {
  const key = select.value;
  const c = await getChampData(key);
  info.innerHTML = `
    <h2>${c.name}</h2>
    <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${c.id}_0.jpg" alt="${c.name}" />
    <p>${c.title}</p>
    <p><strong>Vida:</strong> ${c.stats.hp.toFixed(1)}</p>
    <p><strong>Ataque:</strong> ${c.stats.attackdamage.toFixed(1)}</p>
    <p><strong>Velocidad movimiento:</strong> ${c.stats.movespeed}</p>
  `;
}

init();
