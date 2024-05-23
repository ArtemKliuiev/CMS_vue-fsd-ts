<template>
  <div ref="app" class="admin-layout">
    <div class="admin-layout__header">
      <slot name="header"></slot>
    </div>

    <div class="admin-layout__main">
      <div class="admin-layout__main-navigation">
        <slot name="navigation"></slot>
      </div>

      <div class="admin-layout__main-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import './styles';
</style>
