<script setup lang="ts">
import ViewportCenterComponent from '@pieczorx-weather/client/src/modules/ui/components/ViewportCenterComponent.vue'
</script>

<template>
  <section>
    <ViewportCenterComponent>
      <div class="title">
        <h1>
          Save 💸 in your company by using one app that <span class="underscore">does everything 🎉</span>
        </h1>
      </div>
      <div class="description">
        And you can try it out <span class="underscore">for free</span>
      </div>
      <div>
        <img class="app-image" src="/images/landing/landing-app-image.jpg"/>
      </div>
    </ViewportCenterComponent>
  </section>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as variables;

.title {
  h1 {
    font-weight: 800;
    font-size: 64px;
    //text-align: center;
  }
}

.underscore {
  border-bottom: 5px solid map-get(variables.$colors, theme);
  color: map-get(variables.$colors, theme);
  //background-image: linear-gradient(315deg, hsl(300deg, 100%, 60%) 0%, #3399ff 100%);
  //-webkit-background-clip: text;
  //-webkit-text-fill-color: transparent;
}

.app-image {
  width: 100%;
  border-radius: 10px;
  box-sizing: border-box;
  //border: 2px solid rgb(255 255 255 / 10%);
  box-shadow: 0px 0px 32px rgb(0 0 0 / 33%);
  margin-top: 64px;
}

.description {
  font-weight: 600;
  font-size: 48px;
  margin-top: 60px;
  //text-align: center;
}
</style>
