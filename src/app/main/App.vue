<template>
  <v-app>
    <component :is="layout">
      <template v-slot:header>
        <HeaderAdmin v-if="layout === AdminLayout" />
        <HeaderWebsite v-else />
      </template>

      <template v-slot:navigation>
        <NavigationAdmin v-if="layout === AdminLayout" />
      </template>

      <template v-slot:default>
        <router-view />
      </template>

      <template v-slot:footer>
        <TheFooter />
      </template>
    </component>
  </v-app>

  <SvgManager />
</template>

<script setup lang="ts">
import { HeaderAdmin, HeaderWebsite } from '@/widgets/headers'
import { TheFooter } from '@/widgets/footer'
import { AdminLayout, NavigationAdmin, SvgManager } from '@/shared/ui'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useApi } from '@/shared/api/base'
import { AuthApi, ProformasClientApi, UsersApi } from '@/shared/api/gen'

const route = useRoute()
const layout = computed(() => route.meta.layout || AdminLayout)

const pizda = useApi(ProformasClientApi)

async function down() {
  const { data } = await pizda?.proformasClientsGetProformasClientsProformaIdGet({
    proformaId: 882
  })

  console.log(data)
}

down()
</script>

<style lang="scss" scoped></style>
