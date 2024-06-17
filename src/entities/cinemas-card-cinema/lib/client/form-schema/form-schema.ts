import { object, string, InferType } from 'yup'

export type CardCinemaFormSchema = InferType<ReturnType<typeof cardCinemaSchema>>

export function cardCinemaSchema() {
  return object({
    nameCinema: string().required().max(30),
    // descriptionCinema: string().required().max(100),
    // conditions: string().required('Условия обязательны').max(60, 'Более 60 символов'),
    // address: string().required('Адрес обязателен').max(100, 'Более 100 символов'),
    mapCoordinates: string().required().max(100),
    cardCinemaSeoTitle: string().required().max(30)
    // cardCinemaSeoDescription: string()
    //   .required('Описание обязательно')
    //   .max(200, 'Более 200 символов'),
    // cinemas: object({})
  })
}
