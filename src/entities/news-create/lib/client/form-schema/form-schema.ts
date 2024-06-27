import { object, string, InferType, setLocale } from 'yup'

setLocale({
  mixed: {
    required: 'required field'
  },
  string: {
    max: 'more than ${max} characters'
  }
})

export type NewsCreateFormSchema = InferType<ReturnType<typeof newsCreateSchema>>

export function newsCreateSchema() {
  return object({
    nameNews: string().required().max(30),
    descriptionNews: string().required().max(100),
    linkOnVideo: string().required().max(100)
  })
}
