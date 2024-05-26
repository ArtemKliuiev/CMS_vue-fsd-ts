export interface DetailedErrorMessage {
  field: string
  message: string
  ids?: number[]
}

export interface DetailedErrorMessageItem {
  field: string
  message: string
  location?: string
  field_full?: string
  ids?: number[]
  id?: string
  name?: string
  user_type?: string
}

export interface ApiError {
  code: string
  details: DetailedErrorMessage | DetailedErrorMessageItem[]
}

export interface InnerAxiosError {
  error: ApiError
  status: number
}

export interface FieldErrors {
  [field: string]: string
}

export function getErrorMessages(error: unknown): string[] {
  if (!checkApiErrorType(error)) {
    console.error('invalid error format', error)
    return []
  }

  if (Array.isArray(error.details)) {
    return error.details.map((item) => item.message)
  }

  return [error.details.message]
}

export function getFieldsErrors(error: unknown): FieldErrors {
  const result: FieldErrors = {}

  if (!checkApiErrorType(error)) {
    console.error('invalid error format', error)
    return result
  }

  if (!Array.isArray(error.details)) {
    result[error.details.field] = error.details.message
    return result
  }

  for (const item of error.details) {
    result[item.field] = item.message
  }
  return result
}

export function checkApiErrorType(obj: unknown): obj is ApiError {
  return typeof obj === 'object' && obj !== null && 'code' in obj && 'details' in obj
}
