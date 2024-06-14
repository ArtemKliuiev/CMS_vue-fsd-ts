<template>
  <div class="user-info">
    <div class="user-info__main">
      <div class="user-info__column">
        <div class="user-info__item">
          //рефакторинг (v-for)
          <label for="name">Ім'я</label>

          <BaseInput id="name" v-model="userSchema.first_name" />
        </div>

        <div class="user-info__item">
          <label for="lastname">Прізвище</label>

          <BaseInput id="lastname" v-model="userSchema.last_name" />
        </div>

        <div class="user-info__item">
          <label for="email">Email</label>

          <BaseInput id="email" v-model="userSchema.email" />
        </div>

        <div class="user-info__item">
          <label for="address">Адреса</label>

          <BaseInput id="address" v-model="userSchema.address" />
        </div>

        <div class="user-info__item">
          <label for="password">Пароль</label>

          <BaseInput id="password" />
        </div>

        <div class="user-info__item">
          <label for="check-password">Повторіть пароль</label>

          <BaseInput id="check-password" />
        </div>
      </div>

      <div class="user-info__column">
        <div class="user-info__item">
          <span>Стать</span>

          <div class="user-info__radio">
            <div>
              <input type="radio" v-model="sex" value="man" id="man" />
              <label for="man">Чоловік</label>
            </div>

            <div>
              <input type="radio" v-model="sex" value="woman" id="woman" />
              <label for="woman">Жінка</label>
            </div>
          </div>
        </div>

        <div class="user-info__item">
          <label for="nickname">Nickname</label>

          <BaseInput id="nickname" v-model="userSchema.nickname" />
        </div>

        <div class="user-info__item">
          <label for="phone">Телефон</label>

          <BaseInput id="phone" v-model="userSchema.phone_number" />
        </div>

        <div class="user-info__item">
          <label for="birthday">Дата народження</label>

          <input id="birthday" type="date" v-model="selectDate" />
        </div>

        <div class="user-info__item">
          <label>Місто</label>

          <BaseSelect :options="cities" v-model="city" />
        </div>
      </div>
    </div>

    <div class="user-info__btn">
      <v-btn @click="setData">Зберегти</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from '@/shared/ui/base/input/ui/BaseInput.vue'
import { useApi } from '@/shared/api'
import { UsersApi } from '@/shared/api/gen'
import { AuthApi } from '@/shared/api/gen'
import { ref, watch } from 'vue'
import { BaseSelect } from '@/shared/ui'
import type { UserOutSchema } from '@/shared/api/gen'

const props = defineProps(['id'])
const lang = ref<string>('uk')
const cities = ref<Array<string>>([''])
const userApi = useApi(UsersApi)
const authApi = useApi(AuthApi)
const city = ref<string>('')
const sex = ref<string>('man')
const selectDate = ref<string>('')
const userSchema = ref<UserOutSchema>({
  city_display: '',
  first_name: '',
  last_name: '',
  nickname: '',
  city: '',
  man: '',
  phone_number: '',
  email: '',
  address: '',
  birthday: ''
})

//Убрать watch (onMunted)
watch(sex, () => {
  if (sex.value === 'woman') {
    userSchema.value.man = false
  } else {
    userSchema.value.man = true
  }
})

watch(selectDate, () => {
  userSchema.value.birthday = selectDate.value
})

watch(city, () => {
  userSchema.value.city = city.value
})

async function getCities() {
  const response = await authApi.getCities()
  cities.value = response.data.results.map((item: Array<string>) => {
    if (lang.value === 'ru') {
      return item[1]
    } else {
      return item[0]
    }
  })
}

//вызов функций вынести в onMounted
getCities()

async function getData() {
  const response = await userApi.getUserById({
    userId: props.id
  })

  userSchema.value = response.data
  updates()
}

getData()

function updates() {
  if (!userSchema.value.man) {
    sex.value = 'woman'
  }

  city.value = userSchema.value.city

  selectDate.value = userSchema.value.birthday
}

async function setData() {
  const response = await userApi.updateUserById({
    userId: props.id,
    userUpdateSchema: userSchema.value
  })

  console.log(response)
}
</script>

<style lang="scss" scoped>
@import './styles';
</style>
