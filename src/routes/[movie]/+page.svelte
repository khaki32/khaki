<script lang="ts">
  export let data;

  import marriageStory from "$lib/images/banner/marriage-story.jpg";
  import beforeSunrise from "$lib/images/banner/before-sunrise.jpg";
  import beforeSunset from "$lib/images/banner/before-sunset.jpg";
  import goodWillHunting from "$lib/images/banner/good-will-hunting.jpg";

  const introduction = {
    "marriage-story":
      "A stage director and an actress struggle through a grueling, coast-to-coast divorce that pushes them to their personal extremes.",
    "before-sunrise":
      "Jesse and Céline meet on a train and spend a magical evening exploring Vienna, while sharing deep conversations and a fleeting but profound connection.",
    "before-sunset":
      'A  captivating and intimate sequel to "Before Sunrise," reuniting Jesse and Celine in Paris as they navigate a poignant and emotionally charged encounter, delving into the complexities of their lives and reigniting the spark of their connection.',
    "good-will-hunting":
      "A janitor with a genius-level intellect navigates personal struggles and confronts his past with the guidance of a therapist, unlocking his true potential.",
  };

  const paragraph1 = {
    "marriage-story":
      'The story follows Charlie and Nicole, a couple going through a heartbreaking divorce. As they navigate the complexities of separation, the film explores the raw emotions, challenges, and compromises that arise in the process. Through exceptional performances by Adam Driver and Scarlett Johansson, "Marriage Story" presents a poignant and realistic portrayal of the complexities of love, the breakdown of a marriage, and the impact it has on individuals and their families. It offers a thought-provoking and emotionally resonant examination of the human condition and the fragility of relationships.',
    "before-sunrise":
      "The film is a masterclass in dialogue-driven storytelling, with Hawke and Delpy delivering remarkable performances that feel natural, authentic, and incredibly captivating. Their chemistry is palpable, drawing viewers into their whirlwind romance and making us feel like participants in their intimate conversations. The dialogue itself is intelligent, heartfelt, and brimming with philosophical musings on life, love, and the human condition. It is a testament to the film's brilliance that it manages to hold our attention and evoke such genuine emotions despite its simple premise.",
    "before-sunset":
      "Director Richard Linklater crafts a masterful narrative that unfolds seamlessly, effortlessly blending poignant dialogue, soul-searching discussions, and tender moments of vulnerability. Hawke and Delpy's performances are nothing short of remarkable, carrying the weight of their characters' history and unfulfilled desires with subtle grace and raw emotion.",

    "good-will-hunting":
      'The story follows Will Hunting, a brilliant but troubled janitor working at MIT. When his mathematical talents are discovered by a professor and a therapist, Will embarks on a transformative journey of self-discovery, challenging his past traumas and embracing his true potential. Through the power of human connection and personal growth, he learns to overcome his limitations and find his place in the world. With exceptional performances by Matt Damon and Robin Williams, "Good Will Hunting" offers a heartfelt exploration of intellect, emotions, and the pursuit of personal identity.',
  };

  const paragraph2 = {
    "before-sunset":
      '"Before Sunset" is a cinematic masterpiece that explores the complexities of love, regret, and the enduring nature of true connections. It is an evocative and emotionally resonant film that leaves a lasting impression, reminding us of the profound beauty and fragility of human relationships.',
  };

  const director = {
    "marriage-story": "Noah Baumbach",
    "before-sunrise": "Richard Linklater",
    "before-sunset": "Richard Linklater",
    "good-will-hunting": "Gus Van Sant",
  };
</script>

{#if data.movie === "marriage-story"}
  <div class="wrapper">
    <img src={marriageStory} alt="Marriage Story banner" />
  </div>
{:else if data.movie === "before-sunrise"}
  <div class="wrapper">
    <img src={beforeSunrise} alt="Before Sunrise banner" />
  </div>
{:else if data.movie === "before-sunset"}
  <div class="wrapper">
    <img src={beforeSunset} alt="Before Sunset Banner" />
  </div>
{:else if data.movie === "good-will-hunting"}
  <div class="wrapper">
    <img src={goodWillHunting} alt="Good Will Hunting banner" />
  </div>
{/if}

<header>
  <div>
    <h1>{data.movieTitle}</h1>
    <h3>Directed by {director[data.movie]}</h3>
  </div>
</header>

<h4>{introduction[data.movie]}</h4>

<p>{paragraph1[data.movie]}</p>

{#if paragraph2[data.movie]}
  <p>{paragraph2[data.movie]}</p>
{/if}

<style>
  header {
    display: flex;
    gap: 15px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .wrapper {
    width: 100%;
    height: 0;
    padding-top: 56%;
    position: relative;
    background-color: var(--accent-color);
  }

  img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border: 3px solid var(--accent-color);
  }
</style>
