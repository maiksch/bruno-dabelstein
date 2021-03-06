const ACCESS_TOKEN = 'Oxl91T7UeVA9uL-hnb-bVAdzuAKtV5-JEW_kUCwaAx4';
const DOMAIN = 'https://cdn.contentful.com';
const SPACE = 'yung6ky4n920';

let entries;

export async function getKontakte(fetch) {
  const url = `${DOMAIN}/spaces/${SPACE}/environments/master/entries?content_type=kontakt&order=fields.reihenfolge`;

  const response = await fetch(url, {
    headers: {
      authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    method: 'GET',
  });

  entries = await response.json();

  return entries.items.map(toKontakt);
}

function toKontakt(data) {
  return {
    name: data.fields.name,
    stellenbeschreibung: data.fields.stellenbeschreibung,
    telefon: data.fields.telefon,
    handy: data.fields.handy,
    email: data.fields.email,
    bild: data.fields.bild ? sanitizeUrl(getAsset(data.fields.bild).fields.file.url) : null,
  };
}

export async function getCertificates(fetch) {
  const url = `${DOMAIN}/spaces/${SPACE}/environments/master/entries?content_type=zertifikate&order=fields.titel`;

  const response = await fetch(url, {
    headers: {
      authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    method: 'GET',
  });

  entries = await response.json();

  return entries.items.map(toCertificate);
}

function toCertificate(data) {
  return {
    titel: data.fields.titel,
    beschreibung: data.fields.beschreibung || '',
    siegel: data.fields.siegel ? sanitizeUrl(getAsset(data.fields.siegel).fields.file.url) : null,
    dabelsteinPdf: data.fields.dabelsteinPdf ? sanitizeUrl(getAsset(data.fields.dabelsteinPdf).fields.file.url) : null,
    smrPdf: data.fields.smrPdf ? sanitizeUrl(getAsset(data.fields.smrPdf).fields.file.url) : null,
  };
}

function getAsset(asset) {
  const includes = entries.includes.Asset;
  return includes.find((include) => include.sys.id === asset.sys.id);
}

function sanitizeUrl(url) {
  return `https:${url}`;
}
