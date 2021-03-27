<script>
  import Icon from './Icon.svelte';

  export let contact;

  const placeholder = '/assets/images/kontakt/placeholder.png';
</script>

<div class="h-card contact mb-4">
  <span class="p-job-title d-block font-weight-bold">{contact.stellenbeschreibung}</span>
  <img src={contact.bild || placeholder} alt={contact.name} class="p-photo d-none d-sm-inline-block" />
  <span class="p-name d-block">{contact.name}</span>
  <span class="p-tel d-block">
    <span class="type">
      <Icon icon="phone" />
    </span>
    <span class="value">{contact.telefon}</span>
  </span>
  <span class="p-tel d-block">
    <span class="type">
      <Icon icon="mobile" />
    </span>
    <span class="value">{contact.handy}</span>
  </span>
  <span class="p-email">
    <a href="mailto:{contact.email}">{contact.email}</a>
  </span>
</div>

<style>
  .contact {
    font-size: 15px;
  }
</style>
