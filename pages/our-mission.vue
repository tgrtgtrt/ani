<template>
  <div class="our-mission">
    <h1>Our Mission</h1>
    <p>Furry Fund stands as a beacon of hope for animals in need, embodying a profound commitment to their welfare. At
      the heart of our mission is the unwavering dedication to rescue, rehabilitate, and rehome our furry companions. We
      understand that each animal has a unique story, and we strive to be the turning point in their lives, providing a
      second chance filled with love and care.
    </p>

    <div class="wrap-img">
      <img src="~assets/images/our-mission/doctor.webp" alt="">
    </div>


    <p>Our journey begins with rescue operations, reaching out to animals in distress, whether abandoned, abused, or
      facing neglect. Furry Fund becomes their refuge, offering a safe haven where they can heal physically and
      emotionally. Our team of passionate professionals, from veterinarians to animal behaviorists, works tirelessly to
      ensure each furry friend receives the attention and care they deserve.
    </p>

    <div class="wrap-img">
      <img src="~assets/images/our-mission/dog.webp" alt="">
    </div>

    <p>Beyond rescue, education plays a pivotal role in our mission. Furry Fund actively engages with communities to
      raise awareness about responsible pet ownership, the importance of spaying and neutering, and the signs of animal
      abuse. By fostering a sense of empathy and understanding, we aim to create a society where every individual
      recognizes their role in the well-being of animals.
    </p>

    <div class="wrap-img">
      <img src="~assets/images/our-mission/family.webp" alt="">
    </div>

    <p>Our adoption programs are a celebration of success stories. Furry Fund endeavors to match animals with loving
      families, carefully considering both the unique needs of the animals and the lifestyles of potential adopters.
      Through this process, we not only find homes for our furry friends but also cultivate a network of compassionate
      individuals who become advocates for animal welfare.
    </p>

    <div class="wrap-img">
      <img src="~assets/images/our-mission/community.webp" alt="">
    </div>


    <p>At Furry Fund, we envision a world where every pawprint matters. By extending our reach beyond rescue and
      adoption, we seek to create lasting change in attitudes and behaviors towards animals. Together, with our
      supporters, we are building a future where the bond between humans and animals is one of mutual respect, care, and
      companionship. Join us in our mission to make a profound difference in the lives of those who cannot speak for
      themselves.
    </p>

    <div class="wrap-img">
      <img src="~assets/images/our-mission/we.webp" alt="">
    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.our-mission {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding: 200px 100px;
  background: var(--background);
  overflow: hidden;

  h1 {
    color: var(--primary-green);
    font-weight: 800;
    font-size: 150px;
    margin-bottom: 80px;
  }

  p {
    width: 80%;
    color: var(--white);
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 80px;
  }

  .wrap-img {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 80px;

    img {
      width: 70%;
    }
  }
}

@media screen and (max-width: 900px) {

  .our-mission {
    padding: 150px 40px;

    h1 {
      font-size: 100px;
    }
  }
}

@media screen and (max-width: 500px) {

  .our-mission {
    padding: 150px 10px 30px;

    h1 {
      font-size: 50px;
      align-self: flex-start;
    }

    p {
      width: 100%;
      font-size: 20px;
    }

    .wrap-img {
      img {
        width: 90%;
      }
    }
  }
}
</style>
