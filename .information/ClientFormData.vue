<script lang="ts" setup>
import {
  BaseContainer,
  getErrorMessages,
  useApi,
  ClientStatuses,
  ChangeCabinetLoginPasswordType,
  ClientsApi,
  ClientFullInfoSchema,
  SystemFile,
  UsersApi,
  SimilarNameSchema
} from '@automodern/components'
import { useToast } from 'vue-toastification'
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { ClientForm, ClientFormSkeleton } from '@/features/client'
import { ClientFormSchema, useClientForm } from '@/entities/client'
import { useAuthStore } from '@/shared/store'
import { useI18n } from 'vue-i18n'

const emit = defineEmits<{
  (e: 'update-data'): void
}>()

interface Props {
  item: ClientFullInfoSchema | null
  status: ClientStatuses | null
  isInitialized: boolean
}
const props = defineProps<Props>()

const router = useRouter()
const toast = useToast()

const authStore = useAuthStore()

const api = useApi(ClientsApi)
const apiUsers = useApi(UsersApi)
const { t } = useI18n()

const initialState = ref<ClientFormSchema | null>(null)
const ignoreUnsavedChanges = ref(false)
const isLoading = ref(false)
const showSimilarNameModal = ref(false)

const {
  values,
  setValues,
  setErrorsFromServer,
  handleSubmit,
  duplicateVATNumber,
  duplicateRegisterNumber,
  avatarErrorText,
  isCurrenciesUpdateActive,
  setFieldValue,
  checkCreditDepthAndLimit
} = useClientForm()

const preloadedAvatar = ref<string | null>(null)
const localAvatar = ref<SystemFile | null>(null)
const similarNameData = ref<SimilarNameSchema | null>(null)
const disabledOptions = ref<string[]>([])

watch(() => props.item, initData, { immediate: true })

watch(
  () => localAvatar.value,
  () => {
    avatarErrorText.value = undefined
  }
)

const canChangeCurrencyCreditLimits = computed(() => {
  if (isCurrenciesUpdateActive.value) {
    return authStore.can('crmWarehouseChangeCurrencyCreditLimits')
  }

  if (!props.item) {
    return authStore.can('crmWarehouseChangeCurrencyCreditLimits')
  }

  setFieldValue('userCurrencies', props.item.userCurrencies)
  return isCurrenciesUpdateActive.value
})

async function initData() {
  if (props.item === null) {
    return
  }

  setValues(props.item)

  props.item?.userCurrencies.forEach((item) => {
    if (!item.canBeDeleted) {
      disabledOptions.value.push(item.currency.id.toString())
    }
  })

  preloadedAvatar.value = props.item.avatar || null

  initialState.value = JSON.parse(JSON.stringify(props.item))
}

function updateData() {
  emit('update-data')
}

const onCheck = handleSubmit(checkSimilarName)
const onSubmit = handleSubmit(submit)

async function submit() {
  showSimilarNameModal.value = false
  const id = props.item?.id
  if (!props.item) {
    return
  }

  if (id === undefined || id === null) {
    return
  }
  if (
    !values.country ||
    !values.counterAgentKind ||
    !values.documentLanguage ||
    !values.clientManager ||
    !values.clientType ||
    !values.clientPriceCategory
  ) {
    return
  }

  isLoading.value = true

  const userCurrencies = values.userCurrencies.map((item) => {
    return {
      id: item.id,
      currencyId: item.currency.id,
      creditLimit: {
        creditDepth: Number(item.clientCreditLimit.creditDepth) || undefined,
        creditSum: Number(item.clientCreditLimit.creditSum) || undefined
      },
      deleted: false
    }
  })

  props.item?.userCurrencies.forEach((item) => {
    const currentItem = userCurrencies.find((e) => e.id === item.id)

    if (currentItem === undefined) {
      userCurrencies.push({
        id: item.id,
        currencyId: item.currency.id,
        creditLimit: {
          creditDepth: Number(item.supplierCreditLimit.creditDepth) || undefined,
          creditSum: Number(item.supplierCreditLimit.creditSum) || undefined
        },
        deleted: true
      })
    }
  })

  if (!checkCreditDepthAndLimit(userCurrencies)) {
    return
  }

  try {
    await api.usersClientsUpdateClientsClientIdPut({
      clientId: id,
      clientUpdateSchema: {
        name: values.name,
        registrationNumber: values.registrationNumber || undefined,
        phone: values.phone,
        email: values.email,
        counterAgentKind: values.counterAgentKind,
        mainLocation: {
          region: values.mainLocation.region || undefined,
          city: values.mainLocation.city || undefined,
          address: values.mainLocation.address || undefined
        },
        additionalLocations: values.additionalLocations,
        documentLanguage: values.documentLanguage,
        countryId: values.country.id,
        sites: values.sites,
        userCurrencies,
        clientMainContact: values.clientMainContact,
        clientAdditionalContacts: values.clientAdditionalContacts,
        clientDeliveryMethods: values.clientDeliveryMethods,
        clientPriceCategoryId: values.clientPriceCategory.id,
        clientManagerId: values.clientManager.id,
        clientAgentId: values.clientAgent?.id || undefined,
        clientCategoryId: values.clientCategory?.id || undefined,
        clientSourceId: values.clientSource?.id || undefined,
        clientType: values.clientType,
        vatNumber: values.vatNumber || undefined,
        isVatPayer: values.isVatPayer || false,
        isCurrenciesUpdateActive: canChangeCurrencyCreditLimits.value
      }
    })

    if (localAvatar.value) {
      // change everywhere
      if (localAvatar.value.size > 2000000) {
        avatarErrorText.value = t('STAFF.AVATAR_ERROR')
        toast.error(t('STAFF.AVATAR_ERROR'))

        return
      }

      await api.usersClientsUpdateAvatarClientsClientIdAvatarPut({
        clientId: id,
        avatar: localAvatar.value
      })
    }

    ignoreUnsavedChanges.value = true

    updateData()

    await router.back()
  } catch (e) {
    const messages = getErrorMessages(e)
    messages.forEach((item) => toast.error(item))

    setErrorsFromServer(e)
  } finally {
    isLoading.value = false
  }
}

async function sendLoginDetails(changeLoginPasswordType: ChangeCabinetLoginPasswordType) {
  if (!props.item?.id) {
    return
  }

  try {
    await api.usersClientsGenerateTemporaryPasswordClientsClientIdGenerateTemporaryPasswordPut({
      clientId: props.item.id,
      generateTemporaryPasswordSchema: {
        changeLoginPasswordType,
        sendEmail: true
      }
    })
  } catch (e) {
    const messages = getErrorMessages(e)
    messages.forEach((item) => toast.error(item))
  }
}

async function sendPhoneDetails() {
  if (!props.item?.id) {
    return
  }

  try {
    await api.usersClientsSendPhoneEmailClientsClientIdSendPhoneEmailPost({
      clientId: props.item.id
    })
  } catch (e) {
    const messages = getErrorMessages(e)
    messages.forEach((item) => toast.error(item))
  }
}

async function checkSimilarName() {
  if (!props.item?.id) {
    return
  }

  try {
    const { data } = await apiUsers.usersSimilarNameUsersSimilarNamePost({
      name: values.name,
      excludeId: props.item.id
    })

    if (!data) {
      await onSubmit()
      showSimilarNameModal.value = false
    } else {
      similarNameData.value = data
      showSimilarNameModal.value = true
    }
  } catch (e) {
    const messages = getErrorMessages(e)
    messages.forEach((item) => toast.error(item))
  }
}

function cancelSubmit() {
  showSimilarNameModal.value = false
}
</script>

<template>
  <BaseContainer>
    <ClientForm
      v-if="props.isInitialized"
      v-model:preloaded-avatar="preloadedAvatar"
      v-model:local-avatar="localAvatar"
      :submit-callback="async () => await onCheck()"
      :initial-state="initialState"
      :curr-state="values"
      :status="props.status"
      :ignore-unsaved-changes="ignoreUnsavedChanges"
      :duplicate-vat-number="duplicateVATNumber"
      :avatar-error-text="avatarErrorText"
      :duplicate-register-number="duplicateRegisterNumber"
      :show-similar-name-modal="showSimilarNameModal"
      :similar-name-data="similarNameData"
      :disabled-currency-options="disabledOptions"
      :change-credit-limits="canChangeCurrencyCreditLimits"
      class="edit-form"
      edit
      @send-login-details="sendLoginDetails"
      @send-phone-details="sendPhoneDetails"
      @update-data="updateData"
      @confirm-submit="onSubmit()"
      @cancel-submit="cancelSubmit()"
    />

    <ClientFormSkeleton v-else class="edit-form-skeleton" />
  </BaseContainer>
</template>

<style lang="scss" scoped>
@import 'ClientEditForm';
</style>
