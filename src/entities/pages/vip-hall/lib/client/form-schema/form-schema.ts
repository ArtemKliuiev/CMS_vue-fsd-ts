import { object, string, InferType, setLocale } from 'yup'

setLocale({
  mixed: {
    required: 'required field'
  },
  string: {
    max: 'more than ${max} characters'
  }
})

export type PageVipHallFormSchema = InferType<ReturnType<typeof pageVipHallSchema>>

export function pageVipHallSchema() {
  return object({
    name: string().required().max(50),
    description: string().required().max(100)
  })
}
