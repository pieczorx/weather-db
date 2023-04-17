<template>
  <div class="page-loading-bar">
    <div class="bar"/>
  </div>
</template>

<style scoped lang="scss">
@use '../../../styles/variables' as variables;

@keyframes expand {
  0% {
    width: 20px;
    opacity: 0;
  }
  10%, 90% {
    opacity: 1;
  }
  100% {
    width: calc(100% - 10px);
    opacity: 0;
  }
}
  .page-loading-bar {
    position: fixed;
    top: 5px;
    width: 100%;
    display: flex;
    justify-content: center;
    @include variables.zIndex(pageLoadingBar);
  }

  .bar {
    height: 4px;
    background: map-get(variables.$colors, theme);
    border-radius: 10px;
    animation: expand infinite 5s ease-in-out;
  }
</style>
