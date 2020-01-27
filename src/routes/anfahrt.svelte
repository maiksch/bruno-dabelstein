<script>
  const API_KEY = 'AIzaSyDjqE3Q9PCN7cJQEKqu8kRcGO7LtQyIKiE';
  const PLACE = 'Bruno Dabelstein Stahl- und Maschinenbau GmbH';
  const src = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${PLACE}`;
</script>

<style>
  @media (min-width: 576px) {
    .map-section {
      padding: 0;
    }
  }

  .map {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
  }

  .map iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  @media (max-width: 576px) {
    .map {
      display: none;
    }
  }
</style>

<section class="text-center">
  <div class="d-flex flex-column justify-content-center">
    <h1>Hier finden Sie uns:</h1>
    <address class="h-card">
      <span class="p-name d-block">Bruno Dabelstein Stahl- und Maschinenbau GmbH</span>
      <span class="p-street-address d-block">Otto-Hahn-Straße 2</span>
      <span class="p-postal-code">D-21509</span>
      <span class="p-locality">Glinde</span>
    </address>
  </div>
</section>

<section class="map-section text-center">
  <div class="map">
    <iframe {src} title="Google Maps Anfahrt" frameborder="0" allowfullscreen />
  </div>

  <div class="d-flex d-sm-none w-100 justify-content-center flex-column">
    <h2>In Google Maps öffnen:</h2>
    <a href="https://goo.gl/maps/Kf5uxVuWWgqzZq3U7">
      <picture>
        <source type="image/webp" srcset="assets/images/google-maps.webp" />
        <img src="assets/images/google-maps.png" alt="Anfahrt in Google Maps öffnen" width="100px" />
      </picture>
    </a>
  </div>
</section>
