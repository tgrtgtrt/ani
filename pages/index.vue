<template>
  <div class="hero-section">
    <HeroSection></HeroSection>
    <AboutUs></AboutUs>
  </div>
</template>

<script setup lang="ts">
import HeroSection from "~/components/index-page/HeroSection.vue";
import AboutUs from "~/components/index-page/AboutUs.vue";
</script>

<style scoped lang="scss">
.hero-section {
  width: 100%;
  max-width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding-top: 100px;
  overflow: hidden;
  background: var(--background);
}
</style>
