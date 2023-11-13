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
import {scripts, metaMainPage} from "~/seoConfig"
import seo from "~/mixins/seo";

const {setProperty} = seo();
setProperty(metaMainPage.title, [...[], ...metaMainPage.meta], [], scripts);
</script>
<style scoped>
.body {
  background: var(--background);
  overflow: hidden;
}
</style>
