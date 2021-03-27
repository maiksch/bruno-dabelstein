<script>
  import * as icons from '@fortawesome/free-solid-svg-icons';

  export let icon;
  export let size = 1;

  let path;
  let viewBoxX;
  let viewBoxY;

  const dict = {
    at: icons.faAt,
    clock: icons.faClock,
    download: icons.faDownload,
    fax: icons.faFax,
    filePdf: icons.faFilePdf,
    mobile: icons.faMobile,
    phone: icons.faPhone,
    wrench: icons.faWrench,
    arrowCircleUp: icons.faArrowCircleUp,
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

{#if path}
  <svg viewBox="0 0 {viewBoxX} {viewBoxY}" style="font-size: {size}em">
    <path d={path} />
  </svg>
{/if}

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
