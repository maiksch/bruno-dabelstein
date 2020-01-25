<script>
  import { faAt, faFax, faPhone, faMobile, faWrench, faClock, faFilePdf } from '@fortawesome/free-solid-svg-icons';

  export let icon;
  export let size = 1;

  let path;
  let viewBoxX;
  let viewBoxY;

  const dict = {
    at: faAt,
    clock: faClock,
    fax: faFax,
    filePdf: faFilePdf,
    mobile: faMobile,
    phone: faPhone,
    wrench: faWrench,
  };

  const faIcon = dict[icon];
  if (faIcon) {
    viewBoxX = faIcon.icon[0];
    viewBoxY = faIcon.icon[1];
    path = faIcon.icon[4];
  } else {
    console.error(`Trying to use not imported icon ${icon}`);
  }
</script>

<style>
  svg {
    fill: currentColor;
    width: 1em;
    display: inline-block;
    font-size: inherit;
    overflow: visible;
    vertical-align: -0.125em;
  }
</style>

{#if path}
  <svg viewBox="0 0 {viewBoxX} {viewBoxY}" style="height: {size}em">
    <path d={path} />
  </svg>
{/if}
