<template>
    <div :class="['divider', orientation]">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      orientation: {
        type: String,
        default: 'horizontal', // Default orientation is horizontal
        validator: value => ['horizontal', 'vertical'].includes(value), // Validating the prop value
      },
    },
  };
  </script>
  
  <style scoped>
  .divider {
    margin: 20px 0; /* Vertical spacing for horizontal divider */
    position: relative;
  }
  
  .divider.horizontal {
    border-top: 1px solid #ccc; /* Horizontal line style */
  }
  
  .divider.vertical {
    border-left: 1px solid #ccc; /* Vertical line style */
    height: 100px; /* Adjust height as needed */
    margin: 0 20px; /* Horizontal spacing for vertical divider */
  }
  </style>
  