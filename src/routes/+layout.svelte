<script>
  import "../app.css";

  import Navbar from "$lib/Navbar.svelte";
</script>

<Navbar />

<main>
  <div>
    <slot></slot>
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div {
    display: flex;
    flex-direction: column;
    width: var(--page-width);
    padding: 1rem;
  }
</style>
