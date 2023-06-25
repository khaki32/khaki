<section>
  <h2>favorite movies</h2>
  <div>
    <a href="/marriage-story">
      <img src="/marriage-story.jpg" alt="marriage story">
    </a>
    <a href="/before-sunrise.jpg">
      <img src="/before-sunrise.jpg" alt="before sunrise">
    </a>
    <a href="/before-sunset">
      <img src="/before-sunset.jpg" alt="before sunset">
    </a>
    <a href="/good-will-hunting">
      <img src="/good-will-hunting.jpg" alt="good will hunting">
    </a>
  </div>
</section>

<style>
  div {
    display: flex;
    gap: 10px;
  }

  img {
    border: 3px solid var(--accent-color);
    width: calc((var(--page-width) - 50px) / 4);
  }

  h2 {
    text-transform: uppercase;
    color: var(--accent-color);
  }
</style>