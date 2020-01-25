const ACCESS_TOKEN = 'Oxl91T7UeVA9uL-hnb-bVAdzuAKtV5-JEW_kUCwaAx4';
const DOMAIN = 'https://cdn.contentful.com';
const SPACE = 'yung6ky4n920';

let entries;

export async function getCertificates() {
  const url = `${DOMAIN}/spaces/${SPACE}/environments/master/entries?content_type=zertifikate&order=fields.titel`;

  const response = await fetch(url, {
    headers: {
      authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    method: 'GET',
  });

  entries = await response.json();

  return entries.items.map(entry => toCertificate(entry));
}

function toCertificate(data) {
  return {
    titel: data.fields.titel,
    beschreibung: data.fields.beschreibung || '',
    siegel: data.fields.siegel ? getAsset(data.fields.siegel).fields.file.url : null,
    dabelsteinPdf: data.fields.dabelsteinPdf ? getAsset(data.fields.dabelsteinPdf).fields.file.url : null,
    smrPdf: data.fields.smrPdf ? getAsset(data.fields.smrPdf).fields.file.url : null,
  };
}

function getAsset(asset) {
  const includes = entries.includes.Asset;
  return includes.find(include => include.sys.id === asset.sys.id);
}
