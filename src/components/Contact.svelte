<script>
  import Icon from './Icon.svelte';

  export let contact;
</script>

<style>
  .contact {
    font-size: 15px;
  }
</style>

<div class="h-card contact mb-4">
  <span class="p-job-title d-block font-weight-bold">{contact.jobTitle}</span>
  <img src={contact.photo} alt={contact.name} class="p-photo d-none d-sm-inline-block" />
  <span class="p-name d-block">{contact.name}</span>
  <span class="p-tel d-block">
    <span class="type">
      <Icon icon="phone" />
    </span>
    <span class="value">{contact.tel}</span>
  </span>
  <span class="p-tel d-block">
    <span class="type">
      <Icon icon="mobile" />
    </span>
    <span class="value">{contact.mobile}</span>
  </span>
  <span class="p-email">
    <a href="mailto:{contact.email}">{contact.email}</a>
  </span>
</div>
