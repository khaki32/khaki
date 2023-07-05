<script>
  import logo from "$lib/images/logo.png";
  import letterboxd from "$lib/images/letterboxd.svg";
  import lastfm from "$lib/images/lastfm.png";
</script>

<nav>
  <header>
    <a href="/">
      <img class="logo" src={logo} alt="Jesse Pinkman, from Breaking Bad, sitting in his car">
    </a>
    <div>
      <a href="/">
        <h1>khaki</h1>
      </a>
      <div class="link-row">
        <a href="https://letterboxd.com/khaki32/">
          <img class="link" src={letterboxd} alt="Letterboxd logo">
          letterboxd
        </a>
        <a href="https://www.last.fm/user/khaki32">
          <img class="link" src={lastfm} alt="LastFM logo">
          lastfm
        </a>
      </div>
    </div>
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

  .logo {
    border: 3px solid #3f3b3b;
    height: 50px;
  }

  .link {
    width: 20px;
  }

  .link-row {
    display: flex;
    gap: 0.5rem;
  }

  div a {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
</style>
