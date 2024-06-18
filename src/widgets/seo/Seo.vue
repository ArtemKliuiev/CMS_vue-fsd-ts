<template>
  <div class="seo">
    <h2>Seo</h2>
    <div class="seo__title">
      Title:
      <BaseInput placeholder="Title" name="seoTitle" />
    </div>
    <div class="seo__image">
      Image:
      <v-file-input
        accept="image/png, image/jpeg"
        show-size
        label="Загрузить картинку в seo"
      ></v-file-input>
    </div>
    <div class="seo__description">
      Description:
      <BaseTextarea placeholder="Description" name="seoDescription" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from '@/shared/ui/base/input/ui/BaseInput.vue'
import BaseTextarea from '@/shared/ui/base/text-area/ui/BaseTextarea.vue'
import { InferType, object, string } from 'yup'
import { useAppForm } from '@/index'

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
