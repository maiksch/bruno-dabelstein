<script>
  import Contact from '../components/Contact.svelte';
  import Icon from '../components/Icon.svelte';

  let kontakte = [
    {
      name: 'Andreas Schmaddebeck',
      tel: '+49(0)40 - 751 1493 0',
      mobile: '+49(0)176 - 17 32 33 44',
      email: 'a.schmaddebeck@bruno-dabelstein.de',
      jobTitle: 'Geschäftsführung',
      photo: '/assets/images/kontakt/schmaddebeck.jpg',
    },
    {
      name: 'Marc Salin',
      jobTitle: 'Geschäftsführung',
      tel: '+49(0)40 - 751 1493 0',
      mobile: '+49(0)170 - 31 81 80 2',
      email: 'm.salin@bruno-dabelstein.de',
      photo: '/assets/images/kontakt/salin.jpg',
    },
    {
      name: 'Jan Ferber',
      jobTitle: 'Industrieanlagenservice',
      tel: '+49(0)40 - 751 1493 30',
      mobile: '+49(0)176 - 17 32 33 47',
      email: 'j.ferber@bruno-dabelstein.de',
      photo: '/assets/images/kontakt/ferber.jpg',
    },
    {
      name: 'Matthias Brempel',
      jobTitle: 'Konstruktion',
      tel: '+49(0)38847 - 33 91 14',
      mobile: '+49(0)171 - 45 63 98 4',
      email: 'm.brempel@bruno-dabelstein.de',
    },
    {
      name: 'Alexandr Sciuchin',
      jobTitle: 'Konstruktion',
      tel: '+49(0)40 - 751 1493 36',
      mobile: '+49(0)176 - 13 77 68 00',
      email: 'a.sciuchin@bruno-dabelstein.de',
    },
    {
      name: 'Norbert Schmidt',
      jobTitle: 'Schweißfachingenieur',
      tel: '+49(0)38847 - 33 91 12',
      mobile: '+49(0)176 - 13 77 68 02',
      email: 'n.schmidt@bruno-dabelstein.de',
    },
    {
      name: 'Uwe Tiedemann',
      jobTitle: 'Baustellenkoordinator',
      tel: '+49(0)40 - 751 1493 35',
      mobile: '+49(0)176 - 17 32 33 45',
      email: 'u.tiedemann@bruno-dabelstein.de',
    },
    {
      name: 'Olaf Bruysten',
      jobTitle: 'Werkstattmeister',
      tel: '+49(0)40 - 751 14 93 40',
      mobile: '+49(0)176 - 17 32 33 48',
      email: 'o.bruysten@bruno-dabelstein.de',
    },
  ];
</script>

<style>

</style>

<section class="text-center">
  <div class="d-flex justify-content-center flex-column">
    <h1>Unser Sekretariat:</h1>
    <div class="h-card">
      <span class="p-tel d-block">
        <span class="type">
          <Icon icon="phone" />
        </span>
        <span class="value">+49(0)40 - 7 51 14 93 0</span>
      </span>
      <span class="p-tel-fax d-block">
        <span class="type">
          <Icon icon="fax" />
        </span>
        <span class="value">+49(0)40 - 7 51 14 93 33</span>
      </span>
      <span class="p-email">
        <span class="type">
          <Icon icon="at" />
        </span>
        <a class="value" href="mailto:info@bruno-dabelstein.de">info@bruno-dabelstein.de</a>
      </span>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <h1 class="text-center mb-3 mb-md-4">Ihre Ansprechpartner</h1>

    <div class="col-md-12 col-lg-10 offset-lg-1 text-center">

      <div class="d-flex flex-wrap justify-content-around">

        {#each kontakte as contact}
          <Contact {contact} />
        {/each}

      </div>

    </div>
  </div>
</section>
