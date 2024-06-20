import { object, string, InferType } from 'yup'

export type CardCinemaHallFormSchema = InferType<ReturnType<typeof cardCinemaHallSchema>>

export function cardCinemaHallSchema() {
  return object({
    numberHall: string().required().max(20),
    descriptionCinemaHall: string().required().max(100)
  })
}
