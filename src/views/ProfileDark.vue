<script setup>
import Header from "@/components/Header.vue";
import Section from "@/components/Section.vue";
import AddressSection from "@/components/AddressSection.vue";
import Carousel from "@/components/Carousel.vue";
import davidImg from "@/assets/images/david.jpg";
import SocialNetworks from "@/components/SocialNetworks.vue";
import AreaOfIntrests from "@/components/AreaOfIntrests.vue";
import Divider from "@/components/Divider.vue";
import { data } from "@/utils/helpers";
</script>

<template>
  <div class="profile-container">
    <Header
      :image="davidImg"
      leftIcon="bx bx-arrow-back"
      rightIcon="bx bx-cog"
      :style="{ color: 'white' }"
    />
    <div class="profile-details">
      <Section :data="data.userDetails" />
      <Divider orientation="horizontal" />
      <AddressSection :data="data.addressSection" />
      <Divider orientation="horizontal" />
      <Section :data="data.introduction" />
      <Divider orientation="horizontal" />
      <Section :data="data.about" />
      <Divider orientation="horizontal" />
      <Section :data="data.investment" />
      <Divider orientation="horizontal" />
      <Section :data="data.leadership" />
      <Divider orientation="horizontal" />
      <Section :data="data.pointOfView" />
      <Carousel :data="data.pointOfViews" views="1.5"/>
      <Divider orientation="horizontal" />
      <AreaOfIntrests :data="data.areaOfIntrest" />
      <Divider orientation="horizontal" />
      <Section :data="data.theLatest" />
      <Carousel :data="data.articles" views="2.5"/>
      <Divider orientation="horizontal" />
      <SocialNetworks
        :data="data.socialNetworks"
        :style="{ color: 'white' }"
      />
      <Divider orientation="horizontal" />
      <Section :data="data.services" />
      <Divider orientation="horizontal" />
      <Section :data="data.lifestyle" />
      <Divider orientation="horizontal" />
      <Section :data="data.legacy" />
      <Divider orientation="horizontal" />
      <Section :data="data.vision" />
      <Divider orientation="horizontal" />
      <Section :data="data.economic" />
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  background-color: black;
  color: white;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.profile-details {
  padding: 20px;
}
</style>
