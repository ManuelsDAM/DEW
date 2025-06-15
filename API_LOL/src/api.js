const versionUrl = 'https://ddragon.leagueoflegends.com/api/versions.json';
async function getLatestVersion() {
  const res = await fetch(versionUrl);
  const data = await res.json();
  return data[0];
}

export async function getAllChamps() {
  const ver = await getLatestVersion();
  const url = `https://ddragon.leagueoflegends.com/cdn/${ver}/data/es_ES/champion.json`;
  const res = await fetch(url);
  const json = await res.json();
  return json.data;
}

export async function getChampData(key) {
  const ver = await getLatestVersion();
  const url = `https://ddragon.leagueoflegends.com/cdn/${ver}/data/es_ES/champion/${key}.json`;
  const res = await fetch(url);
  const json = await res.json();
  return json.data[key];
}
