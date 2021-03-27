<script>
  import Nav from '../components/Nav.svelte';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import ScrollUp from '../components/ScrollUp.svelte';

  import 'bootstrap/dist/css/bootstrap.min.css';
  import '@fortawesome/fontawesome-free/css/solid.min.css';

  export let segment;
</script>

<Header />

<Nav {segment} />

<main>
  <slot />
</main>

<Footer />

<ScrollUp />
