<template>
  <div class="header">
    <v-app-bar :elevation="2">
      <template v-slot:prepend>
        <router-link to="/">
          <v-btn class="header__logo" icon>
            <BaseSvg id="icon" />
          </v-btn>
        </router-link>
      </template>

      <v-app-bar-title>Admin Panel</v-app-bar-title>

      <v-btn class="header__out" icon>
        <BaseSvg class="header__out" id="out" />
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script setup lang="ts">
import { BaseSvg } from '@/shared/ui/base/image/base-svg'
</script>

<style lang="scss">
@import 'styles';
</style>
