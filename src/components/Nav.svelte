<script>
  export let segment;

  let title;

  $: title = capitalizeFirstLetter(segment);

  function capitalizeFirstLetter(string) {
    return string ? string.charAt(0).toUpperCase() + string.slice(1) : 'Startseite';
  }
</script>

<style>

</style>

<nav class="navbar navbar-expand-sm navbar-light">
  <div class="container">
    <span class="navbar-brand d-block d-sm-none">{title}</span>

    <button class="navbar-toggler" type="button" (click)="toggleNavigation()">
      <span class="navbar-toggler-icon" />
    </button>

    <div class="collapse navbar-collapse">

      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <a class="nav-link" class:active={segment === 'dienstleistungen'} href="/dienstleistungen">
            Dienstleistungen
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" class:active={segment === 'spreader'} href="spreader">Spreader</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" class:active={segment === 'kontakt'} href="kontakt">Kontakt</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" class:active={segment === 'anfahrt'} href="anfahrt">Anfahrt</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" class:active={segment === 'zertifikate'} href="zertifikate">Zertifikate</a>
        </li>
      </ul>

    </div>
  </div>
</nav>
