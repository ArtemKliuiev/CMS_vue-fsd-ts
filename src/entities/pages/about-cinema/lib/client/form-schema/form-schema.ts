import { object, string, InferType, setLocale } from 'yup'

setLocale({
  mixed: {
    required: 'required field'
  },
  string: {
    max: 'more than ${max} characters'
  }
})

export type PageAboutCinemaFormSchema = InferType<ReturnType<typeof pageAboutCinemaSchema>>

export function pageAboutCinemaSchema() {
  return object({
    name: string().required().max(50),
    description: string().required().max(100)
  })
}
