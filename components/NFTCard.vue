<template>
  <div class="card">
    <img class="card__img" :src="useAsset(`nft${id}.webp`)" alt="nft"/>
    <div class="card__info info">
      <p class="info__title">{{ props.title }}</p>
      <div class="info__sum">
        <!--        <p class="info__currency">$</p>-->
        <p class="info__currency matic">MATIC</p>
        <p class="info__value">{{ props.sum }}</p>
      </div>

      <crossmint-pay-button
          collectionId="c5bb31c2-c559-4948-ba28-3e71f0708bc7"
          projectId="adefac0d-2ad9-4f34-bea5-7794fd80e5cb"
      />
    </div>
  </div>


</template>

<script setup lang="ts">
const props = defineProps({
  id: Number,
  title: String,
  sum: String,
})

function useAsset(path: String) {
  const assets = import.meta.glob('~/assets/**/*', {
    eager: true,
    import: 'default',
  });
  return assets['/assets/images/nft/' + path];
}
</script>

<style scoped lang="scss">
.card {
  max-width: 400px;
  height: 583px;
  background-image: url("/assets/images/nft/vecteezy.webp");
  background-size: cover;
  margin: 10px;
  display: flex;
  flex-direction: column;

  &__img {
    max-width: 400px;
    width: 100%;
  }

  .info {
    height: 100%;
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    background: rgba(255, 255, 255, 0.05);

    &__title {
      color: var(--Gray-4, #BDBDBD);
      font-family: Montserrat, sans-serif;
      font-size: 20px;
      font-weight: 700;
      grid-area: 1/1/2/2;
      margin-top: 10px;
    }

    &__sum {
      display: flex;
      flex-direction: row;
      gap: 6px;
      align-items: flex-end;
      grid-area: 1/2/2/3;
      justify-self: flex-end;
      align-self: flex-start;

      .info__currency {
        color: var(--primary, #42B719);
        font-family: Montserrat, sans-serif;
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 2px;
      }

      .matic {
        color: #7c3ee2;
      }

      .info__value {
        color: #FFF;
        font-family: Montserrat, sans-serif;
        font-size: 32px;
        font-weight: 700;
      }
    }

    crossmint-pay-button {
      width: 200px;
      height: 54px;
      color: var(--primary, #42B719);
      font-family: Montserrat, sans-serif;
      font-size: 20px;
      font-weight: 700;
      border: 2px solid var(--primary, #42B719);
      background: transparent;
      grid-area: 2/2/3/3;
      white-space: nowrap;
      align-self: flex-end;
      justify-self: flex-end;
      cursor: pointer;

      &:hover {
        background: rgba(66, 183, 25, 0.10);
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.28);
      }

      &:active {
        background: rgba(66, 183, 25, 0.20);
        box-shadow: 0 0 30px black;
      }
    }
  }
}
</style>
