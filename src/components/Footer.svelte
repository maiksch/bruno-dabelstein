<script>
  const today = new Date();
</script>

<style>
  footer {
    background-color: rgb(42, 49, 67);
    text-align: center;
    font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: white;
    font-weight: 700;
    width: 100%;
    bottom: 0;
    left: 0;
  }

  .copyright {
    text-transform: uppercase;
  }

  a {
    color: white;
  }
</style>

<footer class="py-2">
  <div>
    <a href="impressum" target="_blank">Impressum</a>
    <span>-</span>
    <a href="assets/agb.pdf" target="_blank">AGB</a>
    <fa-icon class="ml-1" [icon]="faDownload" />
  </div>

  <div class="copyright">
    &copy; Bruno Dabelstein GmbH {today.getFullYear()}
  </div>
</footer>
