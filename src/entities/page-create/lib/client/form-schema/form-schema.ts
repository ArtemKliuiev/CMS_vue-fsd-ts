import { object, string, InferType, setLocale } from 'yup'

setLocale({
  mixed: {
    required: "Це поле обов'язкове"
  },
  string: {
    max: 'Більше ніж ${max} символів'
  }
})

export type PageCreateFormSchema = InferType<ReturnType<typeof pageCreateSchema>>

export function pageCreateSchema() {
  return object({
    namePage: string().required().max(30),
    descriptionPage: string().required().max(100),
    linkOnVideo: string().required().max(100)
  })
}
