<template>
  <div ref="app" class="layout">
    <div class="layout__header">
      <slot name="header"></slot>
    </div>

    <div class="layout__main">
      <div class="layout__main-navigation">
        <slot name="navigation"></slot>
      </div>

      <div class="layout__main-content">
        <slot />
      </div>
    </div>

    <div class="layout__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import './styles';
</style>
