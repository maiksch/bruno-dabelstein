<script>
  import Icon from './Icon.svelte';

  const SHOW_SCROLL_BUTTON_PX = 450;
  let show = false;

  function onScroll(event) {
    show = window.pageYOffset > SHOW_SCROLL_BUTTON_PX;
  }

  function scrollUp() {
    window.scroll(0, 0);
  }
</script>

<style>
  .scroll-top-button {
    position: fixed;
    right: 30px;
    bottom: 30px;
    z-index: 99999999;
    padding: 0.6em;

    opacity: 0;
    visibility: hidden;

    background-color: #777777;
    color: #eeeeee;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;

    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  .scroll-top-button:hover {
    background-color: #888888;
  }

  .scroll-top-button.show {
    visibility: visible;
    cursor: pointer;
    opacity: 1;
  }
</style>

<svelte:window on:scroll={onScroll} />

<div class="scroll-top-button d-flex justify-content-center" class:show on:click={scrollUp}>
  <Icon icon="arrowCircleUp" size="2.5" />
</div>
