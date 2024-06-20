import { object, string, InferType } from 'yup'

export type PageCreateFormSchema = InferType<ReturnType<typeof pageCreateSchema>>

export function pageCreateSchema() {
  return object({
    namePage: string().required().max(30),
    descriptionPage: string().required().max(100),
    linkOnVideo: string().required().max(100)
  })
}
