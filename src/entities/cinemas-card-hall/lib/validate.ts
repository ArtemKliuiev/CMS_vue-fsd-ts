import * as yup from 'yup'

export const cardHallCinemaSchema = yup.object().shape({
  numberCardHall: yup.string().required('Номер зала обязательно').max(15, 'Более 15 символов'),
  descriptionCardHall: yup.string().required('Описание обязательно').max(100, 'Более 100 символов'),
  cardHallSeoTitle: yup.string().required('Название обязательно').max(30, 'Более 30 символов'),
  cardHallSeoDescription: yup
    .string()
    .required('Описание обязательно')
    .max(200, 'Более 200 символов')
})
