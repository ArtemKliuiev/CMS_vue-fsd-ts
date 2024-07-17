import { object, string, InferType, setLocale } from 'yup'

setLocale({
  mixed: {
    required: "Це поле обов'язкове"
  },
  string: {
    max: 'Більше ніж ${max} символів'
  }
})

export type CardCinemaHallFormSchema = InferType<ReturnType<typeof cardCinemaHallSchema>>

export function cardCinemaHallSchema() {
  return object({
    numberHall: string().required().max(20),
    descriptionCinemaHall: string().required().max(100)
  })
}
