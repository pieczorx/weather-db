<script setup lang="ts">
interface Emits {
  (e: 'event1', payload: string): void
}

interface Props {
  value: number
  title: string
  suffix: string
}

const props = withDefaults(defineProps<Props>(), {})

const emit = defineEmits<Emits>()
</script>

<template>
  <div class="weather-measurement-data-item">
    <div class="value">{{props.value}} <span class="suffix">{{props.suffix}}</span></div>
    <div class="title">{{props.title}}</div>
  </div>
</template>

<style scoped lang="scss">
@use '../../../styles/variables' as variables;

.weather-measurement-data-item {
  text-align: center;
}

.value {
  font-size: 18px;
  font-weight: 600;
}

.title {
  text-transform: uppercase;
  color: hsl(0deg 0% 100% / 66%);
}

.suffix {
  color: map-get(variables.$colors, theme);
}
</style>
