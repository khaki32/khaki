<script>
  // @ts-ignore
  import marriageStory from "$lib/images/poster/marriage-story.webp";
  import beforeSunrise from "$lib/images/poster/before-sunrise.webp";
  import beforeSunset from "$lib/images/poster/before-sunset.webp";
  import goodWillHunting from "$lib/images/poster/good-will-hunting.webp";
</script>

<section>
  <h2>favorite movies</h2>
  <div class="row">
    <a href="/marriage-story">
      <div class="wrapper">
        <img src={marriageStory} alt="Marriage Story poster" />
      </div>
    </a>
    <a href="/before-sunrise">
      <div class="wrapper">
        <img src={beforeSunrise} alt="Before Sunrise poster" />
      </div>
    </a>
    <a href="/before-sunset">
      <div class="wrapper">
        <img src={beforeSunset} alt="Before Sunset poster" />
      </div>
    </a>
    <a href="/good-will-hunting">
      <div class="wrapper">
        <img src={goodWillHunting} alt="Good Will Hunting" />
      </div>
    </a>
  </div>
</section>

<style>
  .row {
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(4, 1fr);
  }

  h2 {
    text-transform: uppercase;
    color: var(--accent-color);
  }

  .wrapper {
    width: 100%;
    height: 0;
    padding-top: 150%;
    position: relative;
    background-color: var(--accent-color);
  }

  img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border: 3px solid var(--accent-color);
    transition: filter 0.1s;
  }

  img:hover {
    filter: brightness(90%);
  }
</style>
