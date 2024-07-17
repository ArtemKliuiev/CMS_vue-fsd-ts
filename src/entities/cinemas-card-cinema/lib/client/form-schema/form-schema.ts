import { object, string, InferType, setLocale } from 'yup'

setLocale({
  mixed: {
    required: "Це поле обов'язкове"
  },
  string: {
    max: 'Більше ніж ${max} символів'
  }
})

export type CardCinemaFormSchema = InferType<ReturnType<typeof cardCinemaSchema>>

export function cardCinemaSchema() {
  return object({
    nameCinema: string().required().max(30),
    descriptionCinema: string().required().max(100),
    conditions: string().required().max(60),
    address: string().required().max(100),
    mapCoordinates: string().required().max(100)
  })
}
