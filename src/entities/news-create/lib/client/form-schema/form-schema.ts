import { object, string, InferType } from 'yup'

export type NewsCreateFormSchema = InferType<ReturnType<typeof newsCreateSchema>>

export function newsCreateSchema() {
  return object({
    nameNews: string().required().max(30),
    descriptionNews: string().required().max(100),
    linkOnVideo: string().required().max(100)
  })
}
