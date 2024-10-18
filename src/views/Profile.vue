<script setup>
import Header from "@/components/Header.vue";
import Section from "@/components/Section.vue";
import AddressSection from "@/components/AddressSection.vue";
import Carousel from "@/components/Carousel.vue";
import defaultImage from "@/assets/images/default.png";
import AreaOfIntrests from "@/components/AreaOfIntrests.vue";
import SocialNetworks from "@/components/SocialNetworks.vue";
import { placeholderData } from "@/utils/helpers";
</script>

<template>
  <div class="profile-container">
    <Header
      :image="defaultImage"
      leftIcon="bx bx-user-circle"
      rightIcon="bx bx-cog"
      :style="{ color: 'black' }"
    />
    <div class="profile-details">
      <Section :data="placeholderData.userDetails" />
      <AddressSection :data="placeholderData.addressSection" />
      <Section :data="placeholderData.introduction" />
      <Section :data="placeholderData.about" />
      <Section :data="placeholderData.investment" />
      <Section :data="placeholderData.leadership" />
      <Section :data="placeholderData.pointOfView" />
      <Carousel :data="placeholderData.pointOfViews" views="1.5"/>
      <AreaOfIntrests :data="placeholderData.areaOfIntrest" />
      <Section :data="placeholderData.theLatest" />
      <Carousel :data="placeholderData.articles" views="2.5"/>
      <SocialNetworks
        :data="placeholderData.socialNetworks"
        :style="{ color: 'black', marginBottom: '0px' }"
      />
      <Section :data="placeholderData.services" />
      <Section :data="placeholderData.lifestyle" />
      <Section :data="placeholderData.legacy" />
      <Section :data="placeholderData.vision" />
      <Section :data="placeholderData.economic" />
    </div>
  </div>
</template>

<!-- <template>
  <div class="profile-container">
    <Header
      :image="defaultImage"
      leftIcon="bx bx-user-circle"
      rightIcon="bx bx-cog"
      :style="{ color: 'black' }"
    />
    <div class="profile-details">
      <Section title="Profile Name" description="Membership Class" />
      <AddressSection title="Company Details" :address="address" />
      <Section title="Introduction" :description="loremDummyText" />
      <Section title="About" :description="loremDummyText" />
      <Section title="Investment Criteria" :description="loremDummyText" />
      <Section title="Leadership Highlights" :description="loremDummyText" />
      <Section title="Point of View" :description="loremDummyText" />
      <Carousel :articles="articles" />
      <AreaOfIntrests title="Areas of Interests" :instrests="instrests" />
      <Section
        title="The Latest"
        :description="loremDummyText"
        subTitle="In the news, on stage, and in print"
      />
      <Carousel :articles="articles" />
      <SocialNetworks
        title="Social Networks"
        :networks="socialNetworks"
        :style="{ color: 'black' ,marginBottom:'0px' }"
      />
      <Section
        title="Favourite Global Service Providers"
        :description="loremDummyText"
      />
      <Section
        title="Lifestyle Management Services"
        :description="loremDummyText"
      />
      <Section title="Lives and Legacies" :description="loremDummyText" />
      <Section title="Visionaire Events" :description="loremDummyText" />
      <Section
        title="Economic Wellness Performance"
        :description="loremDummyText"
      />
    </div>
  </div>
</template> -->

<style scoped>
.profile-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  background-color: white;
  color: black;
}

.profile-details {
  padding: 20px;
}
</style>
