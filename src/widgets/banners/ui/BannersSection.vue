<template>
  <div class="banners-section">
    <div class="banners-section__top-line">
      <v-btn @click="addBanner">Додати</v-btn>

      <div class="banners-section__checkbox">
        <v-switch v-model="selected" color="#eee" :label="switchInfo"></v-switch>
      </div>
    </div>

    <div class="banners-section__image-card">
      <ImageCard
        v-for="(item, index) in banners"
        :key="item"
        :banner="item"
        @delete="deleteBanner(index)"
      />
    </div>

    <div class="banners-section__bottom">
      <div class="banners-section__select">
        <span>Швидкість обертання</span>

        <select v-model="selectOption">
          <option>10</option>
          <option>20</option>
          <option>30</option>
        </select>

        <span> секунд</span>
      </div>

      <v-btn @click="saveChange">Зберегти</v-btn>
    </div>
  </div>

  <!--  <v-dialog v-model="dialog" width="auto">-->
  <!--    <div class="alert">-->
  <!--      <h3>Видалити баннер</h3>-->

  <!--      <div class="alert__btn">-->
  <!--        <v-btn @click="delBtn = !delBtn">Видалити</v-btn>-->

  <!--        <v-btn @click="dialogDelUser = false">Відмінити</v-btn>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </v-dialog>-->
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { ImageCard } from '@/shared'

const props = defineProps(['dataSliders', 'startItems'])
const emit = defineEmits(['sendBanners'])

interface Banner {
  id: number
  image: object
  text_ru: string
  text_uk: string
  delete: Boolean
}

const switchInfo = ref<string>('Увімкнено')
const selectOption = ref<string>('30')
const selected = ref<boolean>(true)

watch(props.dataSliders, () => {
  selectOption.value = props.dataSliders.speed
  selected.value = props.dataSliders.active
})

const banners = computed(() => props.dataSliders.items)

setTimeout(() => {
  console.log(props.dataSliders.active)
}, 2000)

watch(selected, () => {
  if (selected.value) {
    switchInfo.value = 'Увімкнено'
  } else {
    switchInfo.value = 'Вимкнено'
  }
})

function addBanner() {
  if (banners.value.length < 10) {
    banners.value.push({} as never)
  }
}

function deleteBanner(index: number) {
  const current = banners.value[index]
  if (current.id) {
    current.delete = true
  } else {
    banners.value.splice(index, 1)
  }
}

function checkEmptyBanner() {
  const arr: Array<Object> = []

  banners.value.forEach((item: any) => {
    if (item.image && item.text_ru && item.text_uk && item.url) {
      arr.push(item)
    }
  })

  return arr
}

function saveChange() {
  const arrForSend = checkEmptyBanner()

  emit('sendBanners', {
    active: selected.value,
    speed: selectOption.value,
    items: arrForSend
  })
}
</script>

<style lang="scss">
@import 'styles';
</style>
