<template>
  <div class="newsletter">
    <div class="newsletter__block">
      <h2>Поточна розсилка</h2>

      <div class="newsletter__inform" v-if="informActive">
        <h3 class="newsletter__inform-quantity">
          Кількість листів:
          <span>{{ quantity }}</span>
        </h3>

        <h3 class="newsletter__inform-percent">
          Розсилка виконана на:
          <span>{{ percent }}%</span>
        </h3>
      </div>

      <div class="newsletter__not-active" v-else>Немає активних розсилок</div>
    </div>

    <div class="newsletter__block">
      <h2>Створити нову розсилку</h2>

      <v-file-input
        v-model="inputHtmlFile"
        @change="addHtmlFile"
        label="Завантажити html-лист"
      ></v-file-input>

      <v-btn @click="setOldMailing">Додати в список розсилок</v-btn>
    </div>

    <div class="newsletter__block">
      <h2>Запустити розсилку</h2>

      <div class="newsletter__choose">
        <h3>Кому відправляти</h3>

        <div class="newsletter__users-radio">
          <v-radio-group v-model="radioBtn" inline :hide-details="true">
            <v-radio label="Всі користувачі" value="one"></v-radio>
            <v-radio label="Виборочно" value="two"></v-radio>
          </v-radio-group>
        </div>

        <v-btn @click="dialog = true" :disabled="chooseUsersBtn">Вибрати користувачів</v-btn>
      </div>

      <div v-if="usersForSend.length > 0 && !chooseUsersBtn" class="newsletter__chips">
        <v-chip v-for="(item, index) in usersForSend" :key="item">
          {{ index + 1 }}. {{ item[0].first_name }} {{ item[0].last_name }}
        </v-chip>
      </div>

      <h3>Список доступних розсилок:</h3>

      <div class="newsletter__list">
        <v-radio-group v-model="radioChangeMailing" inline :hide-details="true">
          <div class="newsletter__list-item" v-for="(item, index) in oldMailing" :key="item">
            <v-radio :value="index"></v-radio>

            <span> # {{ index + 1 }} {{ item.name }} </span>

            <v-btn @click="deleteMailing(item.id)">Видалити</v-btn>
          </div>
        </v-radio-group>
      </div>

      <div class="newsletter__btn">
        <v-btn @click="startMailing">Запустити розсилку</v-btn>
      </div>
    </div>
  </div>

  <v-dialog v-model="dialog" width="auto">
    <div class="newsletter__alert">
      <h3>Виберіть користувачів</h3>

      <ul>
        <li v-for="(item, index) in users" :key="item">
          {{ index }}. {{ item.first_name }} {{ item.last_name }}
          <v-switch
            v-model="item.checked"
            @change="(e) => addUsers(item.id, item.checked)"
            color="#eee"
            :hide-details="true"
          ></v-switch>
        </li>
      </ul>

      <v-btn @click="dialog = false">Вибрати</v-btn>
    </div>
  </v-dialog>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useApi, UsersApi } from '@/shared/api'
import { MailingApi } from '@/shared/api'
import { compareObjects } from '@/shared'
import { boolean, number } from 'yup'

const oldTemplate = ref('Старий шаблон.html')
const quantity = ref('13334')
const percent = ref('32')
const chooseUsersBtn = ref(true)
const radioBtn = ref('one')
const radioChangeMailing = ref(0)
const oldMailing = ref([])
const inputHtmlFile = ref(null)
const informActive = ref(false)
const dialog = ref(false)
const users = ref([])
const usersForSend = ref([])
const usersId = ref([])

watch(radioBtn, () => {
  if (radioBtn.value === 'one') {
    chooseUsersBtn.value = true
  } else {
    chooseUsersBtn.value = false
  }
})

onMounted(() => {
  getOldMailing()

  // setInterval(() => {
  //   // getStatus()
  // }, 1000)
})

function addUsers(userIndex, condition) {
  const currentUser = users.value.filter((item) => item.id === userIndex)

  if (currentUser) {
    if (condition) {
      usersForSend.value.push(currentUser)
    } else {
      const filterChecked = usersForSend.value.filter((userObj) => {
        return !compareObjects(userObj[0], currentUser[0])
      })
      usersForSend.value = filterChecked
    }
  }

  usersId.value = usersForSend.value.map((item) => item[0].id)
}

async function getOldMailing() {
  const api = await useApi(MailingApi)

  const response = await api.getTemplates()

  oldMailing.value = response.data
}

async function getStatus() {
  const api = await useApi(MailingApi)

  try {
    const response = await api.statusMailing()

    if (response.status === 200) {
      informActive.value = true

      quantity.value = response.data.letters_count

      percent.value = response.data.progress
    }
  } catch (info) {
    if (info.response.status === 400) {
      informActive.value = false
    }
  }
}

async function startMailing() {
  const currentMailing = oldMailing.value[radioChangeMailing.value]
  const mailingShem = {
    temp_id: currentMailing.id
  }

  if (!chooseUsersBtn.value && usersId.value.length > 0) {
    console.log(usersId.value)
    mailingShem.user_ids = [...usersId.value]
  }

  const api = await useApi(MailingApi)

  const response = await api.startMailing({
    mailingInSchema: mailingShem
  })

  console.log(response)
}

async function getUsers() {
  const api = await useApi(UsersApi)

  const response = await api.usersDatatable()

  users.value = response.data.results
}
getUsers()

async function deleteMailing(id) {
  const api = await useApi(MailingApi)

  const response = await api.deleteTemplate({
    tempId: id
  })

  await getOldMailing()
}

function addHtmlFile(event) {
  const file = event.target.files[0]

  console.log(file)
  console.log(inputHtmlFile.value)

  if (file.type !== 'text/html') {
    alert('Можна заватнтажувати тільки html файли')
    inputHtmlFile.value = null
  }
}

async function setOldMailing() {
  if (inputHtmlFile.value) {
    const api = await useApi(MailingApi)

    const response = await api.createTemplate(
      {
        file: inputHtmlFile.value
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )

    console.log(response)
  } else {
    alert('Додайте html файл')
  }
}
</script>

<style lang="scss" scoped>
@import 'styles';
</style>
