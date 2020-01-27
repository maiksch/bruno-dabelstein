<script context="module">
  import { getCertificates } from '../contentful';

  let zertifikate = [];

  export async function preload() {
    zertifikate = await getCertificates();
  }
</script>

<script>
  import Icon from '../components/Icon.svelte';
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
            <div class="d-flex flex-column justify-content-between overflow-auto">
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
