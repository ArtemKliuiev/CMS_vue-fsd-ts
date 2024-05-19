<template>
  <v-app>
    <DefaultLayout>
      <template v-slot:header>
        <HeaderAdmin v-if="part === 'admin'"/>
        <HeaderWebsite v-else/>
      </template>

      <template v-slot:navigation>
        <NavigationAdmin v-if="part === 'admin'"/>
      </template>

      <template v-slot:default>
        <router-view />
      </template>

      <template v-slot:footer>

      </template>
    </DefaultLayout>
  </v-app>


  <SvgManager/>
</template>

<script setup lang="ts">
import { HeaderAdmin, HeaderWebsite } from '@/widgets/headers'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { DefaultLayout } from '@/shared/ui/layouts'
import NavigationAdmin from '@/shared/ui/navigation/admin'
import SvgManager from '@/shared/ui/base/SvgManager.vue'

const route = useRoute()



const part = computed(() => {
  return route.meta.part
} )
</script>

<style lang="scss" scoped>

</style>