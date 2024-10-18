<template>
  <div class="carousel-container">
    <swiper-container :slides-per-view="1" navigation pagination>
      <Swiper :slides-per-view="views">
        <swiper-slide
          v-for="(item, index) in data"
          :key="index"
          class="carousel-item"
        >
          <div class="item-content">
            <p v-if="item.id" class="serial-number">{{ item.id }}</p>
            <img :src="item.image" :alt="`${item.name} at ${item.location}`" />
            <div class="text-item-bottom">
              <p v-if="item.location">{{ item.location }}</p>
            <h4 v-if="item.name">{{ item.name }}</h4>
            <p v-if="item.date">{{ item.date }}</p>
            <h4 v-if="item.title">{{ item.title }}</h4>
            <p v-if="item.description">{{ item.description }}</p>
          </div>
          </div>
        </swiper-slide>
      </Swiper>
    </swiper-container>
  </div>
</template>

<script setup>
import { defineProps } from "vue"; // Ensure this is imported correctly
import { Swiper, SwiperSlide } from "swiper/vue"; // Correctly import Swiper and SwiperSlide
import "swiper/swiper-bundle.css"; // Import Swiper styles

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
    validator: (value) =>
      value.every((item) => item.image && item.location && item.name),
  },
  views:{
    type:String,
    default:"2"
  }
});
</script>

<style scoped>
.carousel-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.carousel-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* text-align: center; */
}

.carousel-item img {
  width: 100%;
  border-radius: 10%;
}

.carousel-item p {
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

.carousel-item h4 {
  margin: 5px 0 0;
}

.item-content {
  background: white;
  color: black;
  width: 90%;
  border-radius: 10px;
}

.item-content .serial-number{
  text-align: center;
  padding: 10px 0px;
}
.text-item-bottom{
  padding: 10px;
}
@media (max-width: 768px) {
  .carousel-container {
    max-width: 90%;
  }

  .carousel-item img {
    width: 80px;
    height: 80px;
  }
}
</style>
