<template>
  <div class="body">
    <HeaderElement></HeaderElement>
    <main>
      <NuxtPage></NuxtPage>
    </main>
    <FooterElement></FooterElement>
  </div>
</template>
<script setup lang="ts">
import HeaderElement from "~/components/HeaderElement.vue";
import FooterElement from "~/components/FooterElement.vue";
</script>
<style scoped>
.body {
  background: var(--background);
  overflow: hidden;
}
</style>
