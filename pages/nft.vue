<template>
  <div class="wrapper-page">
    <img class="img-1" src="~/assets/images/monstera-4.webp" alt="monstera">
    <img class="img-2" src="~/assets/images/monstera-5.webp" alt="monstera">
    <p class="title">You can buy an NFT and help save the lives of thousands of other animals. All proceeds from the
      sale
      of NFTs will
      go to help animals.</p>
    <p class="subtitle">Together - we are power</p>
    <div class="nft-wrapper">
      <div class="nft-list">
        <template v-for="nft in nftList">
          <NFTCard :id="nft.id" :title="nft.title" :sum="nft.sum"/>
        </template>
      </div>
    </div>
    <div class="text-bottom">
      <img class="text-bottom__img" src="~/assets/images/monstera-4.webp" alt="monstera">
      <p>Let this NFT be stored in your wallet, you will feel peace and joy, knowing that you have
        contributed to helping
        save the lives of animals, thank you for your kind heart.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import NFTCard from "../components/NFTCard.vue";
import {nftList} from "../const/const.js";
</script>

<style scoped lang="scss">
.wrapper-page {
  padding: 250px 100px;
  position: relative;

  .img-1 {
    position: absolute;
    top: 0;
    left: -125px;
    transform: rotate(255deg);

    @media screen and (max-width: 700px) {
      display: none;
    }
  }

  .img-2 {
    position: absolute;
    top: 210px;
    right: 0;

    @media screen and (max-width: 700px) {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 150px 30px 150px 30px;
  }

  .title {
    padding-bottom: 38px;
    color: var(--Gray-6, #F2F2F2);
    text-align: center;
    font-family: Montserrat, sans-serif;
    font-size: 35px;
    font-weight: 700;
    position: relative;
    z-index: 10;

    @media screen and (max-width: 768px) {
      font-size: 20px;
      border: none;
      padding-bottom: 20px;
    }
  }

  .subtitle {
    margin: 0 auto;
    color: var(--Gray-3, #828282);
    font-family: Montserrat, sans-serif;
    font-size: 35px;
    font-weight: 700;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 20px;
      border: none;
      padding: 0;
    }
  }

  .nft-wrapper {
    width: 100%;
    padding: 200px 0;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {
      padding: 50px 0;
    }

    .nft-list {
      width: 100%;
      display: grid;
      justify-items: center;
      grid-template-columns: repeat(1, 1fr);

      @media screen and (min-width: 1020px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media screen and (min-width: 1430px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media screen and (min-width: 1880px) {
        grid-template-columns: repeat(4, 1fr);
      }

      @media screen and (min-width: 2500px) {
        grid-template-columns: repeat(5, 1fr);
      }

      @media screen and (min-width: 2800px) {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }

  .text-bottom {
    position: relative;
    border: 5px solid var(--primary, #42B719);

    &__img {
      position: absolute;
      top: -150px;
      right: -100px;
    }

    p {
      color: var(--Gray-6, #F2F2F2);
      text-align: center;
      font-family: Montserrat, sans-serif;
      font-size: 35px;
      font-weight: 700;
      padding: 102px 160px;
    }

    @media screen and (max-width: 768px) {
      border: none;

      p {
        padding: 20px 10px 0;
        font-size: 20px;
      }

      &__img {
        display: none;
      }
    }
  }
}
</style>
