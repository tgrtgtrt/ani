<template>
  <footer>
    <div class="wrapper-deer">
      <img src="~/assets/images/deer.webp" alt="">
    </div>

    <div class="wrap-button">
      <MainButtons :isFooter="true"></MainButtons>
    </div>

    <div class="wrapper-logo">
      <LogoBlock></LogoBlock>
      <p>© 2023 Furry Fund</p>
    </div>

  </footer>
</template>

<script setup lang="ts">
import MainButtons from "~/components/MainButtons.vue";
import LogoBlock from "~/components/LogoBlock.vue";
</script>

<style scoped lang="scss">
footer {
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 30px 50px;
  box-shadow: 10px -5px 20px 0px rgba(0, 0, 0, 0.25);

  .wrapper-deer {
    position: absolute;
    left: -100px;
    top: -215px;
    overflow: hidden;
    width: 400px;
    height: 400px;
    opacity: 0.7;
    z-index: 0;

    img {
      position: absolute;;
      width: 400px;
      height: 400px;
    }
  }

  .wrap-button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10%;
    flex: 1;
    z-index: 2;
  }

  .wrapper-logo {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    p {
      margin-top: 10px;
      color: var(--gray);
    }
  }
}

@media screen and (max-width: 750px) {
  footer {
    flex-direction: column-reverse;
    padding:30px 15px 320px 15px;

    .wrapper-deer {
      top: 145px;
    }

    .wrap-button {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-left: unset;
    }

    .wrapper-logo {
      margin-bottom: 50px;
      justify-content: flex-start;
      align-items: flex-start;
      p {
      }
    }
  }
}
</style>
