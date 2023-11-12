<template>
  <div class="wrapper-button">
    <NuxtLink v-for="button in buttons" :to="button.path"
              :class="{'active': button.path === router.currentRoute.value.path && !isFooter}">{{
        button.name
      }}
    </NuxtLink>

  </div>
</template>

<script setup lang="ts">
import {useRouter} from "nuxt/app";
import {onMounted, ref} from "vue";


const props = defineProps({
  isFooter: Boolean
})

const router = useRouter();
const buttons: { name: string, path: string }[] = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'NFTs',
    path: '/nft'
  },
  {
    name: 'Our mission',
    path: '/our-mission'
  }
];

let isFooter = ref(false);

onMounted(() => {
  isFooter.value = !!props.isFooter;
})
</script>

<style scoped lang="scss">

.wrapper-button {
  display: flex;
  gap: 20px;

  a {
    border: none;
    background: none;
    font-size: 20px;
    font-weight: 700;
    color: var(--white);
    opacity: 1;
    transition: all 0.2s;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      opacity: 0.6;
    }
  }

  .active {
    position: relative;

    color: var(--primary-green);

    &:after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 100%;
      height: 3px;
      background: var(--primary-green);
    }

    &:hover {
      opacity: 1;
    }
  }
}

@media screen and (max-width: 500px) {
  .wrapper-button {
    .active {
      &:after {
        content: '';
        bottom: -2px;
      }
    }
  }
}
</style>
