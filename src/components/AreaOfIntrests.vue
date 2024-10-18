<template>
  <section class="section">
    <h4>{{ data.title }}</h4>
    <p v-if="data.description">{{ data.description }}</p>
    <div class="intrest_wrapper">
    <div class="intrest_container" v-if="data.intrests">
      <span class="intrest" v-for="intrest of data.intrests">{{ intrest }}</span>
    </div>
  </div>
  </section>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});
</script>

<style scoped>
.section {
  margin-top: 20px;
}
.title h4 {
  margin: 0;
}
.section p {
  color: #666;
}
.intrest_wrapper{
  overflow: auto;
  padding-bottom: 10px;
}
.intrest_container {
  display: flex;
    align-items: center;
    gap: 10px;
    width: 472px;
    flex-wrap: wrap;
}
.intrest_wrapper::-webkit-scrollbar {
  width: 0px;
} 
.intrest {
  border: 1px solid;
  border-radius: 25px;
  padding: 5px 10px;
}
</style>
