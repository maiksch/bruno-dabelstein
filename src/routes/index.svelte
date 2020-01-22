<script>
  import Icon from "../components/Icon.svelte";
</script>

<picture>
  <source
    type="image/webp"
    srcset="assets/images/landing-page/landing-page-960.webp 960w,
    assets/images/landing-page/landing-page-1280.webp 1280w,
    assets/images/landing-page/landing-page-1920.webp 1920w,
    assets/images/landing-page/landing-page-2560.webp 2560w,
    assets/images/landing-page/landing-page-3840.webp 3840w" />

  <img
    srcset="assets/images/landing-page/landing-page-960.jpg 960w,
    assets/images/landing-page/landing-page-1280.jpg 1280w,
    assets/images/landing-page/landing-page-1920.jpg 1920w,
    assets/images/landing-page/landing-page-2560.jpg 2560w,
    assets/images/landing-page/landing-page-3840.jpg 3840w"
    src="assets/images/landing-page/landing-page-1920.jpg"
    alt="Bruno Dabelstein GmbH"
    class="d-none d-sm-inline-block w-100" />
</picture>

<section>
  <div class="container">
    <div class="row">
      <div class="col-sm-8">
        <h1>Willkommen</h1>
        <p>
          Seit über 40 Jahren sind wir mit unserer erfahrenen und flexiblen
          Mannschaft in allen Bereichen des Stahl- und Maschinenbaus tätig.
          Umfangreiche Grossprojekte werden von uns genauso zuverlässig und
          termingetreu gemeistert, wie kleine Detail- und Sonderaufgaben.
        </p>
      </div>
      <div class="col-sm-4">
        <h1>Kontakt</h1>
        <address class="h-card">
          <span class="p-name d-block font-weight-bold">
            Bruno Dabelstein GmbH
          </span>
          <span class="p-street-address d-block">Otto-Hahn-Straße 2</span>
          <span class="p-postal-code">D-21509</span>
          <span class="p-locality">Glinde</span>
          <span class="p-tel d-block mt-3">
            <span class="type">
              <Icon icon="phone" />
            </span>
            <span class="value ml-1">+49(0)40 - 7 51 14 93 0</span>
          </span>
          <span class="u-email">
            <span class="type">
              <Icon icon="at" />
            </span>
            <a class="value ml-1" href="mailto:info@bruno-dabelstein.de">
              info@bruno-dabelstein.de
            </a>
          </span>
        </address>
      </div>
    </div>
  </div>
</section>

<section class="text-center">
  <div class="container">
    <div class="col-md-10 offset-md-1">
      <h1>Unsere Partner</h1>
      <p>
        Seit einigen Jahren arbeiten wir in erfolgreicher Partnerschaft mit der
        S.M.R Industrie- und Schiffservice GmbH sowie der nano-met Gesellschaft
        für Fertigungstechnik mbH zusammen.
      </p>
    </div>
    <div class="row">
      <div class="col-xs-6 col-sm-6 col-md-4 offset-md-2">
        <figure class="bilderunterschrift_partner">
          <a
            href="http://www.smr-boizenburg.de/"
            target="_blank"
            rel="noreferrer">
            <img
              src="assets/images/partner/smr.jpg"
              alt="Partner: S.M.R"
              class="lazyload img-rounded" />
          </a>
          <figcaption>
            S.M.R Industrie- und
            <br />
            Schiffservice GmbH
            <br />
          </figcaption>
        </figure>
      </div>
      <div class="col-xs-6 col-sm-6 col-md-4">
        <figure class="bilderunterschrift_partner">
          <a href="http://www.nano-met.de/" target="_blank" rel="noreferrer">
            <img
              src="assets/images/partner/nanomet.jpg"
              alt="Partner: Nano-Met"
              class="lazyload img-rounded" />
          </a>
          <figcaption>
            nano-met Gesellschaft f&uuml;r
            <br />
            Fertigungstechnik mbH
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="col-md-12">
      <h2 class="text-center">
        <Icon icon="wrench" />
        Service wird bei uns groß geschrieben!
        <br />
      </h2>
      <p>
        Unser Team steht Ihnen f&uuml;r Reparatur- und Montagearbeiten an
        Schiffs- und Industrieanlagen auch an Sonn- und Feiertagen zur
        Verf&uuml;gung. Defekte Teile werden auf Wunsch von unserem
        qualifiziertem Mitarbeitern ausgebaut, vermessen und falls vor Ort oder
        in unserer Werkstatt umgehend repariert bzw. bei Bedarf komplett neu
        angefertigt. Des Weiteren bieten wir Ihnen unsere Unterst&uuml;tzung bei
        Planung und Projektierung, sowie bei der Konstruktion und Produktion von
        Industrie- und Schiffsanlagen. Nutzen Sie unser KNOW-HOW und lassen Sie
        sich von uns umfassend beraten.
      </p>
    </div>

    <div class="col-md-12">
      <h2 class="text-center">
        <Icon icon="clock" />
        Termintreue ist uns wichtig!
        <br />
      </h2>
      <p>
        Unsere erfahrenen und kompetenten Mitarbeiter sowie die weitgehende
        Unabh&auml;ngigkeit von Fremdleistungen und Zulieferbetrieben
        erm&ouml;glichen es uns, eine termingerechte Lieferung einzuhalten. Bei
        der Reparatur und Instandsetzung von z.B. Industrie- und Schiffsanlagen
        sichern wir Ihnen stets eine schnellstm&ouml;glichste und fachgerechte
        Ausf&uuml;hrung zu. Auch nachts, sowie an Sonn- und Feiertagen steht
        Ihnen unser flexibles Montage- und Werkstattteam nach Absprache zur
        Verf&uuml;gung.
      </p>
    </div>
  </div>
</section>
