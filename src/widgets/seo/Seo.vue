<template>
  <div class="seo">
    <h2>Seo</h2>
    <div class="seo__title">
      <BaseInput placeholder="Title" label="Title" name="seoTitle" />
    </div>
    <div class="seo__image">
      <InputChoiceInput label="Image:" label-text="Загрузить картинку в seo" />
    </div>
    <div class="seo__description">
      <BaseTextarea placeholder="Description" label="Description:" name="seoDescription" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from '@/shared/ui/base/input/ui/BaseInput.vue'
import BaseTextarea from '@/shared/ui/base/text-area/ui/BaseTextarea.vue'
import { InferType, object, string } from 'yup'
import { useAppForm } from '@/index'
import InputChoiceInput from '@/shared/ui/base/input-choice-file/ui/InputChoiceFile.vue'

export type SeoCinemaFormSchema = InferType<ReturnType<typeof seoSchema>>

const schema = seoSchema()

const { values, setErrors, handleSubmit } = useAppForm<SeoCinemaFormSchema>({
  validationSchema: schema,
  initialValues: schema.getDefault()
})

// const form = useAppForm<SeoCinemaFormSchema>({
//   validationSchema: schema,
//   initialValues: schema.getDefault()
// })

function seoSchema() {
  return object({
    seoTitle: string().required().max(30),
    seoDescription: string().required().max(100)
  })
}
</script>

<style lang="scss" scoped>
@import 'styles';
</style>
