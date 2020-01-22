<script>
  import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
  import { faAt } from "@fortawesome/free-solid-svg-icons/faAt";
  import { faWrench } from "@fortawesome/free-solid-svg-icons/faWrench";
  import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";

  export let icon;
  export let size = 1;

  let path;
  const height = `${size}em`;

  const dict = {
    phone: faPhone,
    at: faAt,
    clock: faClock,
    wrench: faWrench
  };

  const faIcon = dict[icon];
  if (faIcon) {
    path = faIcon.icon[4];
  } else {
    console.error(`Trying to use not imported icon ${icon}`);
  }
</script>

<style>
  svg {
    fill: currentColor;
  }
</style>

{#if path}
  <svg viewBox="0 0 576 512" {height}>
    <path d={path} />
  </svg>
{/if}
