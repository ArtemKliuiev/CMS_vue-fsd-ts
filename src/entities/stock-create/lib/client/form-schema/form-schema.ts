import { object, string, InferType } from 'yup'

export type StockCreateFormSchema = InferType<ReturnType<typeof stockCreateSchema>>

export function stockCreateSchema() {
  return object({
    nameStock: string().required().max(30),
    descriptionStock: string().required().max(100),
    linkOnVideo: string().required().max(100)
  })
}
