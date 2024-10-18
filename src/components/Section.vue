import { default } from './Divider.vue';
<template>
  <section class="section">
    <div class="title">
      <h4>{{ data.title }}</h4>
      <span v-if="data.subTitle">{{ data.subTitle }}</span>
    </div>
    <p>{{ data.description }}</p>
    <p v-if="data.subDivTitle">{{ data.subDivTitle }}</p>
    <ul v-if="data.subDivision">
      <li v-for="division of data.subDivision">{{ division }}</li>
    </ul>
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

.title span {
  font-size: 12px;
}
.section p {
  color: #666;
  margin-top: 5px;
}

.section ul {
  color: #666;
  margin-top: 5px;
  list-style-type: decimal;
}
</style>
