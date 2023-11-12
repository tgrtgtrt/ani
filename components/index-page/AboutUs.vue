<template>
  <section>
    <div class="fact" v-for="fact in facts">
      <div class="wrapper-text">
        <p class="title">{{ fact.title }}</p>
        <p class="text">{{ fact.text }}</p>
      </div>
      <div class="wrapper-image">
        <img :src="useAsset(fact.urlImg)" alt="">
      </div>
    </div>

    <div class="call-buy">
      <p>You can buy an NFT and help save the lives of thousands of other animals.</p>
      <NuxtLink to="/nft">Buy Now</NuxtLink>

      <div class="monstera-3">
        <img src="~/assets/images/monstera-3.webp" alt="">
      </div>
    </div>

    <div class="monstera-2">
      <img src="~/assets/images/monstera-2.webp" alt="">
    </div>


  </section>
</template>

<script setup lang="ts">
const facts = [
  {
    title: 'Choose to Reuse',
    text: 'Challenge yourself to use more reusable items, like bags, cups, and lunchboxes, and to take only what you need. Before throwing something away, see if you can find a new use for it—turning trash into treasure!',
    urlImg: 'bernard-hermant.webp'
  },
  {
    title: 'Beware of Energy Vampires',
    text: 'Even if something is turned off, it can use or “suck” electricity when it’s plugged into the wall. Unplug electronics like video games and chargers when you aren’t using them.',
    urlImg: 'appolinary-kalashnikova.webp'
  },
  {
    title: 'Be Kind to Wildlife',
    text: 'All wildlife deserves respect—even animals that don’t usually get as much love, like insects, spiders, frogs, and snakes. They have important roles to play in our ecosystems. Make your yard welcoming to all wildlife by planting pollinator-friendly and native plants.',
    urlImg: 'noah-buscher.webp'
  },
  {
    title: 'Spot Check',
    text: 'Keeping track of animal populations is part of protecting wildlife. Scientists gather this information by using “trail cameras” that take pictures of animals in an area. You can help by identifying wildlife in the images taken by these cameras online. Right now, we need your help identifying burrowing owls in the southwestern United States and wildlife in Kenya.',
    urlImg: 'chris-abney.webp'
  },
  {
    title: 'Help Slow Climate Change',
    text: 'It takes community-level action to slow climate change, but your choices can help. Challenge your family to make more meatless dinners, or carpool, walk, bike, or use public transportation when you can. These actions reduce carbon emissions that drive climate change.',
    urlImg: 'paul-green.webp'
  },
  {
    title: 'Be a Responsible Pet Owner',
    text: 'Make sure you do your research and are ready for the large responsibility of caring for an animal its entire life. Keep pets—especially cats—indoors, as they can prey on local wildlife. And remember that wild animals do not make good pets!',
    urlImg: 'arun-anoop.webp'
  },
  {
    title: 'Leave No Trace',
    text: 'When you explore nature, leave only footprints and take only pictures. Be sure to stay on established trails, and never try to approach, touch, or feed wildlife. Instead, observe wildlife respectfully from a distance using binoculars or a camera. Even just a tiny piece of trash can be harmful to wildlife, so if you can safely pick up litter, place it in the appropriate bin.',
    urlImg: 'evelyn-mostrom.webp'
  },
  {
    title: 'Snack Sustainably',
    text: 'Some snack foods are made with unsustainable palm oil, whose production takes habitat away from threatened wildlife. Choose snacks that are certified by the Roundtable for Sustainable Palm Oil (RSPO) instead. You can ask an adult to download an app to find RSPO-approved products.',
    urlImg: 'promodhya-abeysekara.webp'
  },
]

function useAsset(path: String) {
  const assets = import.meta.glob('~/assets/**/*', {
    eager: true,
    import: 'default',
  });
  return assets['/assets/images/main-page/' + path];
}
</script>

<style scoped lang="scss">
section {
  .fact {
    position: relative;
    display: flex;
    color: var(--background);
    background: var(--primary-green);

    .wrapper-text {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px 100px;

      .title {
        font-size: 35px;
        font-weight: 800;
        margin-bottom: 45px;
        z-index: 1;
      }

      .text {
        font-size: 20px;
        font-weight: 700;
        z-index: 1;
      }
    }

    .wrapper-image {
      width: 50%;
      height: 30vw;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &:nth-child(even) {
      color: var(--primary-green);
      background: var(--background);
      flex-direction: row-reverse;

      .wrapper-text {
        .title,
        .text {
          text-align: end;
        }
      }
    }
  }

  .call-buy {
    position: relative;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 300px 0;

    p {
      max-width: 1200px;
      font-size: 50px;
      font-weight: 700;
      color: var(--gray);
      text-align: center;
      margin: 0 50px 70px 50px;
      z-index: 1;
    }

    a {
      text-decoration: none;
      padding: 10px 30px;
      background: var(--primary-green);
      border: none;
      color: var(--background);
      font-size: 20px;
      font-weight: 700;
      cursor: pointer;
      opacity: 1;
      transition: all 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }

    .monstera-3 {
      position: absolute;
      bottom: 0;
      right: -15vw;
      width: 35vw;
      height: 50vh;
      z-index: 0;

      img {
        width: 100%;
        transform: rotate(-110deg);
      }
    }
  }

  .monstera-2 {
    position: absolute;
    top: 200%;
    right: -15vw;
    width: 35vw;
    height: 50vh;
    z-index: 0;

    img {
      width: 100%;
      transform: rotate(-90deg);
    }
  }
}

@media screen and (max-width: 1250px) {
  section {
    .fact {
      .wrapper-text {
        padding: 10px 70px;

        .title {
          font-size: 30px;
        }

        .text {
          font-size: 15px;
        }
      }

      .wrapper-image {
        height: 40vw;
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  section {
    .fact {
      .wrapper-text {
        padding: 10px 30px;
      }
    }
  }
}

@media screen and (max-width: 750px) {
  section {
    .fact {
      flex-direction: column;

      .wrapper-text {
        width: 80%;
        padding: 70px 50px;
      }

      .wrapper-image {
        width: 100%;
        height: 90vw;
      }

      &:nth-child(even) {
        flex-direction: column;

        .wrapper-text {
          width: 100%;
          text-align: end;
        }
      }
    }

    .call-buy {
      width: 100%;
      margin: 120px 0;

      p {
        font-size: 25px;
        padding: 10px 10px 40px;
        margin: unset;
      }

      .monstera-3 {
        display: none;
      }
    }

    .monstera-2 {
      display: none;
    }
  }
}
</style>
