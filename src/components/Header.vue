<template>
  <div class="header">
    <div class="profile-pic" :style="style">
      <i :class="leftIcon"></i>
    </div>
    <h4>Profile</h4>
    <div class="settings-icon" :style="style">
      <i :class="rightIcon"></i>
    </div>
  </div>
  <img class="user-image" :src="image" alt="profile" />
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    default: ''
  },
  leftIcon: { type: String, default: null },
  rightIcon: { type: String, default: null },
  style: { type: Object, default: () => ({}) }
})
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
.profile-pic,
.settings-icon {
  font-size: 30px;
}
.profile-pic img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.settings-icon img {
  width: 25px;
  height: 25px;
}

.user-image {
  width: 100%;
}
</style>
