import { object, string, InferType } from 'yup'

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
