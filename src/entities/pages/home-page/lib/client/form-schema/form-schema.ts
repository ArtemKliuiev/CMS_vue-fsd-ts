import { object, string, InferType } from 'yup'

const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/

export type PageHomeFormSchema = InferType<ReturnType<typeof pageHomeSchema>>

export function pageHomeSchema() {
  return object({
    tel: string().matches(phoneRegExp).max(13).required(),
    seoText: string().required().max(100)
  })
}
