<template>
  <NuxtLink to="/" class="logo">
    <img src="~/assets/images/logo.svg" alt="">
    <span>urryFund</span>
  </NuxtLink>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

.logo {
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  text-decoration: none;

  img {
    width: 35px;
    height: 35px;
  }

  span {
    color: var(--primary-green);
    font-size: 22px;
    font-weight: 800;
  }
}
</style>
