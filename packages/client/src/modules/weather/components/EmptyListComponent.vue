<script setup lang="ts">
import ButtonComponent from '@pieczorx-weather/client/src/modules/ui/components/ButtonComponent.vue'

interface Emits {
  (e: 'refreshClick'): void
}

interface Props {
  title: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'There are no items on the list',
})

const emit = defineEmits<Emits>()
</script>

<template>
  <div class="empty-list">
    <div class="title">{{props.title}}</div>
    <ButtonComponent @click="emit('refreshClick')">Refresh</ButtonComponent>
  </div>
</template>

<style scoped lang="scss">
@use '../../../styles/variables' as variables;


.empty-list {
  background: hsl(0deg 0% 100% / 10%);
  border-radius: variables.$borderRadius;
  padding: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.title {
  font-size: 20px;
  font-weight: 500;
}

.button {
  font-size: 18px;
  padding: 5px 15px;
  font-weight: 500;
}
</style>
