<script>
  let expanded = false;

  function toggleDescription() {
    expanded = !expanded;
  }
</script>

<style>
  .bildunterschrift_spreader {
    float: right;
    margin: -5px 5px -2px 20px;
  }
  .bildunterschrift_spreader img {
    border-radius: 3px 3px 0 0;
  }

  .bildunterschrift_spreader figcaption {
    padding: 6px 4px 2px 4px;
    background-color: #636363;
    color: #cccccc;
    border-radius: 0 0 3px 3px;
    font-size: 11px;
    margin-top: -4px;
  }

  .clickable-text {
    cursor: pointer;
    color: #007bff;
  }

  img {
    width: 100%;
  }

  table {
    margin: 0;
  }

  table .table-head {
    background-color: skyblue;
    color: black;
  }

  .spreader-column *:not(hr):not(h2) + * {
    margin-top: 1em;
  }
</style>

<section>
  <div class="container">
    <h1 class="text-center">Spreader</h1>

    <p>
      Als Spreader oder Containergeschirr bezeichnet man im Betrieb der
      Umschlagbahnhöfe und Hafen-Terminals die Hebezeuge, mit denen ISO-genormte
      Container umgeschlagen werden.
    </p>

    <figure class="bildunterschrift_spreader">
      <a href="assets/handbuch.pdf" target="_blank">
        <img
          src="assets/images/spreader/pdf_download.png"
          alt="Handbuch download" />
      </a>
      <figcaption>Handbuch.pdf</figcaption>
    </figure>

    <p>
      Meist handelt sich hierbei um Teleskoprahmen, die auf die Länge (20', 30',
      40' oder 45') des Containers eingestellt werden können (spread engl. für
      „spreizen“) und so in die vier oberen Eckbeschläge (engl. Corner casting)
      des Containers eingreifen und sich dort durch Drehen mit den Twistlocks
      verriegeln. Auch nicht verstellbare Container-Hebezeuge werden mit dem
      Begriff Spreader bezeichnet.
      {#if !expanded}
        <span class="clickable-text" on:click={toggleDescription}>
          »mehr lesen
        </span>
      {/if}
    </p>

    {#if expanded}
      <div>
        <p>
          Viele Spreader sind mit klappbaren Flippern ausgestattet, die beim
          Aufsetzen auf den frei stehenden Container den Spreader zentrieren.
          Die Flipper lassen sich nach Bedarf vom Kranfahrer nach oben und unten
          klappen.
        </p>
        <p>
          Auch Anbaugeräte an Gabelstapler zum Aufnehmen von Containern
          verschiedener Bauart werden als Spreader bezeichnet. Außer den von
          oben greifenden Spreadern werden für leere Container auch Bauarten
          verwendet, die den Container von der Seite greifen.
        </p>
        <p>
          Außerdem gibt es Spreader, die sich auch im sogenannten Twinbetrieb
          (twin engl. für „Zwilling“) nutzen lassen. So können zwei
          20'-Container gleichzeitig umgeschlagen werden. Die Twinlücke, der
          Abstand zwischen den Containern, lässt sich hierbei stufenlos
          einstellen, bis eine Gesamtlänge von 40' oder 45' erreicht ist. Der
          Twinbetrieb steigert die Geschwindigkeit beim Löschen (Entladen) oder
          Laden (Beladen) von Schiffen. (Quelle: Wikipedia)
          <span class="clickable-text" on:click={toggleDescription}>
            »weniger lesen
          </span>
        </p>
      </div>
    {/if}
  </div>
</section>

<section>
  <div class="container">
    <h1 class="text-center mb-4">Unsere Spreader Typen</h1>
    <div class="row">
      <div class="spreader-column col-md-4 col-sm-12 text-center">
        <hr class="d-md-none" />

        <h2>Spreader I</h2>

        <img
          src="assets/images/spreader/bild1.jpg"
          class="img-fluid"
          alt="Spreader Bild 1" />

        <img
          src="assets/images/spreader/zeichnung_bild1.jpg"
          class="img-fluid"
          alt="Spreader Zeichnung 1" />

        <table class="table-bordered table">
          <tr class="table-head">
            <td>Typ</td>
            <td>D1064/20 (AH 20-33)</td>
          </tr>
          <tr>
            <td>Size</td>
            <td>20 ft</td>
          </tr>
          <tr>
            <td>SWL</td>
            <td>33 tons</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>1.8 tons</td>
          </tr>
        </table>

        <table class="table-bordered table">
          <tr class="table-head">
            <td>Typ</td>
            <td>D1064/40 (AH 40-36)</td>
          </tr>
          <tr>
            <td>Size</td>
            <td>40 ft</td>
          </tr>
          <tr>
            <td>SWL</td>
            <td>36 tons</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>2.4 tons</td>
          </tr>
        </table>
      </div>

      <div class="spreader-column col-sm-12 col-md-4 text-center">
        <hr class="d-md-none" />
        <h2>Spreader II</h2>
        <img
          src="assets/images/spreader/bild2.jpg"
          class="img-responsive"
          style="width: 100%"
          alt="Spreader Bild 2" />
        <br />
        <img
          src="assets/images/spreader/zeichnung_bild2.jpg"
          class="img-responsive"
          style="width: 100%"
          alt="Spreader Zeichnung 2" />
        <br />
        <table class="table-bordered table">
          <tr class="table-head">
            <td>Typ</td>
            <td>D1224</td>
          </tr>
          <tr>
            <td>Size</td>
            <td>20 ft</td>
          </tr>
          <tr>
            <td>SWL</td>
            <td>33 tons</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>2 tons</td>
          </tr>
        </table>

        <table class="table-bordered table">
          <tr class="table-head">
            <td>Typ</td>
            <td>D1225</td>
          </tr>
          <tr>
            <td>Size</td>
            <td>40 ft</td>
          </tr>
          <tr>
            <td>SWL</td>
            <td>36 tons</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>3 tons</td>
          </tr>
        </table>

      </div>

      <div class="spreader-column col-sm-12 col-md-4 text-center">
        <hr class="d-md-none" />
        <h2>Spreader III</h2>

        <img
          src="assets/images/spreader/bild3.jpg"
          class="img-responsive"
          style="width: 100%"
          alt="Spreader Bild 3" />
        <br />
        <img
          src="assets/images/spreader/zeichnung_bild3.jpg"
          class="img-responsive"
          style="width:100%;"
          alt="Spreader Zeichnung 3" />
        <br />
        <table class="table-bordered table">
          <tr class="table-head">
            <td>Typ</td>
            <td>D1241</td>
          </tr>
          <tr>
            <td>Size</td>
            <td>20 ft</td>
          </tr>
          <tr>
            <td>SWL</td>
            <td>36 tons</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>1.8 tons</td>
          </tr>
        </table>

        <table class="table-bordered table">
          <tr class="table-head">
            <td>Typ</td>
            <td>D1242</td>
          </tr>
          <tr>
            <td>Size</td>
            <td>40 ft</td>
          </tr>
          <tr>
            <td>SWL</td>
            <td>36 tons</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>2.8 tons</td>
          </tr>
        </table>
      </div>

    </div>
  </div>
</section>
<!-- end .section -->
