<template>
  <div class="social-networks">
    <h4>{{ data.title }}</h4>
    <div class="social-icons">
      <a
        v-for="network in data.networks"
        :key="network.name"
        :href="network.url"
        target="_blank"
        rel="noopener noreferrer"
        :style="style"
      >
        <i :class="`bx bxl-${network.name.toLowerCase()}`"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  },
  style: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped>
.social-networks {
  margin-top: 20px;
}

.social-icons {
  display: flex;
  align-items: center;
  gap: 10px;
}

.social-networks a {
  font-size: 40px;
}
</style>
