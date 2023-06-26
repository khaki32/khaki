<section>
  <h2>favorite movies</h2>
  <div>
    <a href="/marriage-story">
      <img src="/poster/marriage-story.jpg" alt="marriage story" />
    </a>
    <a href="/before-sunrise">
      <img src="/poster/before-sunrise.jpg" alt="before sunrise" />
    </a>
    <a href="/before-sunset">
      <img src="/poster/before-sunset.jpg" alt="before sunset" />
    </a>
    <a href="/good-will-hunting">
      <img src="/poster/good-will-hunting.jpg" alt="good will hunting" />
    </a>
  </div>
</section>

<style>
  div {
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(4, 1fr);
  }

  h2 {
    text-transform: uppercase;
    color: var(--accent-color);
  }

  img {
    border: 3px solid var(--accent-color);
    transition: filter 0.1s;
    width: 100%;
  }

  img:hover {
    filter: brightness(90%);
  }
</style>
