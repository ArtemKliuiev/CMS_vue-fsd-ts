import {
  useAppForm,
  DetailedErrorMessageItem,
  pageCafeBarSchema,
  PageCafeBarFormSchema
} from '@/index'
import { ref, nextTick } from 'vue'

export type PageCafeBarPageFormSchema = ReturnType<typeof usePageCafeBarForm>

export function usePageCafeBarForm() {
  const serverErrorMessages = ref<string[]>([])

  const schema = pageCafeBarSchema()
  const form = useAppForm<PageCafeBarFormSchema>({
    validationSchema: schema,
    initialValues: schema.getDefault()
  })

  const { values, setFieldValue, resetForm } = form

  // const cinemas = useAppFieldArray<CinemaInSchema>('cinemas')
  //test

  async function setValuesFromObject(data: object) {
    const clonedData = JSON.parse(JSON.stringify(data))
    resetForm()

    await nextTick()
    await nextTick()

    for (const key of Object.keys(form.values)) {
      setFieldValue(key as keyof typeof form.values, clonedData[key])
    }
  }

  function errorsSetterCinemaCard(cinemaCards: DetailedErrorMessageItem[]) {
    cinemaCards.forEach((field) => {
      const incomeField = field.field.replace(/Id/g, 'fg') as keyof typeof form.values

      form.setFieldError(incomeField, field?.message)
    })
  }

  return {
    values,
    instance: form,
    serverErrorMessages,
    setValuesFromObject,
    errorsSetterCinemaCard
  }
}
