import Cookies from 'js-cookie'

// Установка токена
export function setTokenFromCookies(name: string, token: string, expiresInDays: number): void {
  Cookies.set(name, token, { expires: expiresInDays })
}

// Получение токена
export function getTokenFromCookies(name: string): string | undefined {
  return Cookies.get(name)
}

// Удаление токена
export function removeTokenFromCookies(name: string): void {
  Cookies.remove(name)
}

// Пример использования
// setTokenFromCookies('accessToken', 'abc123', 7); // Сохранить accessToken на 7 дней
// setTokenFromCookies('refreshToken', 'xyz456', 30); // Сохранить refreshToken на 30 дней
//
// const accessToken = getToken('accessToken');
// console.log('Access Token:', accessToken);
//
// removeToken('accessToken');
// console.log('Access Token after removal:', getToken('accessToken'));
