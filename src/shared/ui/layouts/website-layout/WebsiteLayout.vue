<template>
  <div ref="app" class="site-layout">
    <div class="site-layout__header">
      <slot name="header"></slot>
    </div>

    <div class="site-layout__main">
      <slot />
    </div>

    <div class="site-layout__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import './styles';
</style>
