<script>
  import Icon from '../components/Icon.svelte';

  let zertifikate = getZertifikate();
  let entries;

  async function getZertifikate() {
    const accessToken = 'Oxl91T7UeVA9uL-hnb-bVAdzuAKtV5-JEW_kUCwaAx4';
    const domain = 'https://cdn.contentful.com';
    const space = 'yung6ky4n920';
    const contentType = 'zertifikate';
    const url = `${domain}/spaces/${space}/environments/master/entries?content_type=${contentType}&order=fields.titel`;

    const response = await fetch(url, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
      method: 'GET',
    });
    entries = await response.json();

    zertifikate = entries.items.map(entry => ({
      titel: entry.fields.titel,
      beschreibung: entry.fields.beschreibung || '',
      siegel: entry.fields.siegel ? getAsset(entry.fields.siegel).fields.file.url : null,
      dabelsteinPdf: entry.fields.dabelsteinPdf ? getAsset(entry.fields.dabelsteinPdf).fields.file.url : null,
      smrPdf: entry.fields.smrPdf ? getAsset(entry.fields.smrPdf).fields.file.url : null,
    }));

    function getAsset(asset) {
      const includes = entries.includes.Asset;
      return includes.find(include => include.sys.id === asset.sys.id);
    }
  }
</script>

<style>
  .certificate + .certificate {
    margin-top: 1.5em;
  }
</style>

<section>
  <div class="container">
    <h1 class="text-center">Qualität ist unser Anspruch</h1>
    <p>
      Um unsere Arbeiten in unserer Werkhalle, sowie auf den Baustellen jederzeit regelwerkskonform durchzuführen,
      lassen wir uns regelmäßig zertifizieren.
    </p>
  </div>
</section>

<section>
  <div class="container">

    {#each zertifikate as zertifikat}
      <div class="card certificate">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-column justify-content-between">
              <h1>{zertifikat.titel}</h1>

              <p class="d-none d-sm-block mt-0 pr-5">{zertifikat.beschreibung}</p>

              <div>
                {#if zertifikat.dabelsteinPdf || zertifikat.smrPdf}
                  <Icon icon="filePdf" />
                {/if}

                {#if zertifikat.dabelsteinPdf}
                  <a class="ml-2" href={zertifikat.dabelsteinPdf} target="_blank" rel="noopener noreferrer">
                    Download (Bruno Dabelstein)
                  </a>
                {/if}

                {#if zertifikat.smrPdf}
                  {#if zertifikat.dabelsteinPdf}
                    <span class="ml-2">|</span>
                  {/if}

                  <a class="ml-2" href={zertifikat.smrPdf} target="_blank" rel="noopener noreferrer">
                    Download (S.M.R.)
                  </a>
                {/if}

              </div>
            </div>

            {#if zertifikat.siegel}
              <div class="d-none d-md-flex align-items-center">
                <img src={zertifikat.siegel} alt={zertifikat.titel} style="max-width: 150px" />
              </div>
            {/if}

          </div>
        </div>
      </div>
    {/each}

  </div>
</section>
