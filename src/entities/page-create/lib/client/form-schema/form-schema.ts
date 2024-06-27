import { object, string, InferType, setLocale } from 'yup'

setLocale({
  mixed: {
    required: 'required field'
  },
  string: {
    max: 'more than ${max} characters'
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
