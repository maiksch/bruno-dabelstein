<script>
  import Nav from "../components/Nav.svelte";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import ScrollUp from "../components/ScrollUp.svelte";

  export let segment;
</script>

<Header />

<Nav {segment} />

<main>
  <slot />
</main>

<Footer />

<ScrollUp />
