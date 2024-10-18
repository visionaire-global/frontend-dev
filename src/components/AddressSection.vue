import { default } from './Divider.vue';
<template>
  <section class="address-section">
    <h4>{{ data.title }}</h4>
    <p>
      <span>Company Name</span><span>{{ data.companyName }}</span>
    </p>
    <p>
      <span>Industries</span><span>{{ data.industries }}</span>
    </p>
    <p>
      <span>Location</span><span>{{ data.location }}</span>
    </p>
    <p>
      <span>Founded Date</span><span>{{ data.foundedDate }}</span>
    </p>
  </section>
</template>

<script setup>
const props = defineProps({
  data: { type: Object, default: {} },
});
</script>

<style scoped>
.address-section h4 {
  margin-bottom: 5px;
}
.address-section p {
  display: flex;
  align-items: center;
  font-size: 14px;
  justify-content: space-between;
}
</style>
