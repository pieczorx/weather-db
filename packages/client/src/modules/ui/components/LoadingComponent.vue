<script setup>

</script>

<template>
  <div class="loading"/>
</template>

<style scoped lang="scss">
  @use '../../../styles/variables' as variables;

  @keyframes rotate-infinite {
    0% {
      transform: rotate(0)
    }
    100% {
      transform: rotate(360deg)
    }
  }

  .loading {
    width: 16px;
    height: 16px;
    border: 3px solid transparent;
    border-radius: 100px;
    animation: rotate-infinite .5s linear infinite;
    border-top-color: map-get(variables.$colors, theme);

  }
</style>
