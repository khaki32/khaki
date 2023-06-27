<script>
  import "../app.css";

  import Navbar from "$lib/components/Navbar.svelte";
</script>

<main>
  <div>
    <Navbar />
    <section>
      <slot />
    </section>
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  div {
    width: 650px;
  }

  section {
    display: flex;
    flex-direction: column;
    padding: 0 1rem 1rem 1rem;
    gap: 1rem;
  }

  @media screen and (max-width: 650px) {
    div {
      width: 100vw;
    }
  }
</style>
