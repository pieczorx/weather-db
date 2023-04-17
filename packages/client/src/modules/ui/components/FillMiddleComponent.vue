<script setup lang="ts">

</script>

<template>
  <div class="fill-middle">
    <slot/>
  </div>
</template>


<style scoped lang="scss">
.fill-middle {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
