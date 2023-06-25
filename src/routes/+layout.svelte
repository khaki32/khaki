<script>
  import "../app.css";

  import Navbar from "$lib/Navbar.svelte";
</script>


<main>
  <div>
    <Navbar />
    <section>
      <slot></slot>
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
    padding: 1rem;
  }

  @media screen and (max-width: 650px) {
    div {
      width: 100vw;
    }
  }
</style>
