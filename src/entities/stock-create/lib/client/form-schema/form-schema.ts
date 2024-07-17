import { object, string, InferType, setLocale } from 'yup'

setLocale({
  mixed: {
    required: "Це поле обов'язкове"
  },
  string: {
    max: 'Більше ніж ${max} символів'
  }
})

export type StockCreateFormSchema = InferType<ReturnType<typeof stockCreateSchema>>

export function stockCreateSchema() {
  return object({
    nameStock: string().required().max(30),
    descriptionStock: string().required().max(100),
    linkOnVideo: string().required().max(100)
  })
}
