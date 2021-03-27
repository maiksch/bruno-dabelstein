<script context="module">
  import { getKontakte } from '$lib/contentful';

  export async function load({ fetch }) {
    return {
      props: {
        kontakte: await getKontakte(fetch),
      },
    };
  }
</script>

<script>
  import Contact from '../components/Contact.svelte';
  import Icon from '../components/Icon.svelte';

  export let kontakte = [];
</script>

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
