<script setup lang="ts">

</script>

<template>
  <div class="viewport-center">
    <div class="center-wrapper">
      <slot/>
    </div>
  </div>
</template>


<style scoped lang="scss">
.viewport-center {
  display: flex;
  width: 100%;
  justify-content: center;
}

.center-wrapper {
  width: calc(100% - 60px);
  max-width: 1200px;
}
</style>
