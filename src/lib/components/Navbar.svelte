<script>
  import logo from "$lib/images/logo.png";
</script>

<nav>
  <header>
    <a href="/">
      <img src={logo} alt="Jesse Pinkman, from Breaking Bad, sitting in his car">
    </a>
    <a href="/">
      <h1>khaki</h1>
    </a>
  </header>
  <section>
    <a href="https://github.com/khaki32/khaki987">
      <h2>github</h2>
    </a>
  </section>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  section {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  header {
    display: flex;
    gap: 10px;
  }

  img {
    border: 3px solid #3f3b3b;
    height: 50px;
  }
</style>
