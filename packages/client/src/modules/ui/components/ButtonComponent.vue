<script setup lang="ts">
import LoadingComponent from '@pieczorx-weather/client/src/modules/ui/components/LoadingComponent.vue'

interface Props {
  iconClass?: string
  isLoading?: boolean
  isDisabled?: boolean
  round?: boolean
  color?: string
  hasArrow?: boolean
  hasFocus?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  iconClass: null,
  isLoading: false,
  round: false,
  color: 'theme',
  hasArrow: false,
  hasFocus: false,
  isDisabled: false,
})
</script>

<template>
  <button class="button" :class="{'is-loading': props.isLoading, 'is-disabled': props.isDisabled, 'is-round': props.round, 'has-focus': props.hasFocus}">
    <LoadingComponent v-if="props.isLoading"/>
    <div class="content" v-if="$slots.default">
      <slot/>
    </div>
  </button>
</template>

<style scoped lang="scss">
@use '../../../styles/variables' as variables;

  .button {
    border-radius: variables.$borderRadius;
    background: map-get(variables.$colors, theme);
    color: white;
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    outline: none;
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;

    &:after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0;
      background: hsl(0deg 0% 100% / 50%);
      left: 0;
      top: 0;
    }

    &:hover:after, &.has-focus:after {
      opacity: 1;
    }

    &.is-disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }

  i {
    font-size: 13px;
  }

  .button.is-loading  {
    background: hsl(0deg 0% 100% / 10%);
    cursor: default;
    pointer-events: none;

    &:hover:after {
      opacity: 0;
    }

    & i, & .content {
      opacity: 0;
    }
  }

  .loading {
    position: absolute;
    width: 24px;
    height: 24px;
    border-width: 5px;
  }

  .arrow {
    font-size: 12px;
    color: rgb(255 255 255 / 66%);
  }

  .button.has-focus .arrow {
    transform: rotate(180deg);
  }
</style>
