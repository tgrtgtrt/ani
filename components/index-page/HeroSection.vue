<template>
  <section>
    <img class="jungle-image" src="~/assets/images/monstera-1.webp" alt="jungle leave">

    <div class="wrapper-main-text">
      <h1>Buy NFT - Help animals</h1>
      <p>All proceeds from the sale of NFTs will go to help animals.</p>
    </div>

    <p>Calling all animal fans: This page is where we share ideas of ways you can help animals no matter where you live.
      Things you do in your everyday life have an effect on wildlife and their habitats. Be part of our team and help
      save animals!
    </p>

    <img class="monstera-image" src="~/assets/images/monstera-2.webp" alt="monstera leaves">

    <div class="monstera-leaves">
      <img class="monstera-2" src="~/assets/images/monstera-3.webp" alt="monstera leaves">
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
section {
  width: 100%;
  position: relative;
  padding: 0 0 100px 100px;

  .jungle-image {
    position: absolute;
    left: -200px;
    top: -300px;
    transform: rotate(180deg);
    width: 800px;
    z-index: 105;
    opacity: 0.7;
  }

  .wrapper-main-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 80vw;
    height: calc(100vh - 100px);

    h1 {
      max-width: 1200px;
      color: var(--white);
      font-size: 11vw;
      margin-bottom: 40px;
      z-index: 2;
      text-shadow: 8px 8px 10px rgba(0, 0, 0, 0.6);
    }

    p {
      width: 600px;
      color: var(--gray);
      font-size: 40px;
      font-weight: 600;
      text-shadow: 8px 8px 10px rgba(0, 0, 0, 0.6);
    }
  }

  p {
    position: relative;
    width: 85%;
    max-width: 1200px;
    color: var(--white);
    font-size: 22px;
    font-weight: 500;
    text-shadow: 8px 8px 10px rgba(0, 0, 0, 0.6);
    z-index: 2;
  }

  .monstera-leaves {
    position: absolute;
    height: 100vh;
    max-width: 90vw;
    right: -35vw;
    top: 0;
    transform: rotate(-71deg);
    z-index: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      opacity: 0.9;
    }
  }

  .monstera-image {
    position: absolute;
    top: calc(100vh - 500px);
    left: -220px;
    width: 500px;
    transform: rotate(71deg);
    z-index: 0;
    opacity: 0.9;
  }
}

@media screen and (min-width: 1600px) {
  section {
    .wrapper-main-text h1 {
      font-size: 170px;
    }

    .monstera-leaves {
      max-width: 100vw;
    }
  }
}

@media screen and (max-width: 750px) {
  section {
    padding: 0 0 50px 40px;

    .wrapper-main-text {
      h1 {
        font-size: 60px;
      }

      p {
        width: unset;
        font-size: 30px;
      }
    }

    .jungle-image, .monstera-leaves, .monstera-image {
      opacity: 0.2;
      z-index: 0;
    }
  }
}

@media screen and (max-width: 450px) {
  section {
    padding: 0 0 10px 10px;

    .wrapper-main-text {
      h1 {
        font-size: 40px;
      }

      p {
        font-size: 20px;
      }
    }

    p {
      font-size: 15px;
    }
  }
}
</style>
