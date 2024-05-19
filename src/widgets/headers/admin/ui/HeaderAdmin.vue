<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-btn icon="$vuetify"></v-btn>
    </template>

    <v-app-bar-title>Admin Panel</v-app-bar-title>

    <v-btn icon="$vuetify"> </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import 'styles';
</style>
