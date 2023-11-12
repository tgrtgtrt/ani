<template>
  <header>
    <LogoBlock></LogoBlock>
    <MainButtons></MainButtons>
  </header>
</template>

<script setup lang="ts">
import MainButtons from "~/components/MainButtons.vue";
import LogoBlock from "~/components/LogoBlock.vue";
</script>

<style scoped lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 32px 100px 32px 60px;
  background: var(--background);
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.25);
  z-index: 100;
}

@media screen and (max-width: 650px) {
  header {
    padding: 32px 15px;
  }
}

@media screen and (max-width: 500px) {
  header {
    flex-direction: column;
    gap: 25px;
  }
}
</style>
