import { object, string, InferType, setLocale } from 'yup'

setLocale({
  mixed: {
    required: "Це поле обов'язкове"
  },
  string: {
    max: 'Більше ніж ${max} символів'
  }
})

export type PageMoviesCreateFormSchema = InferType<ReturnType<typeof pageMoviesCreateSchema>>

export function pageMoviesCreateSchema() {
  return object({
    name: string().required().max(50),
    description: string().required().max(100),
    linkOnVideo: string().required().max(100)
  })
}
