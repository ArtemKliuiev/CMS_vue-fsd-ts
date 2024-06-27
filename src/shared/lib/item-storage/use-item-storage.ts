export function useItemStorage(key: string) {
  function getItem() {
    return localStorage.getItem(key)
  }

  function setItem(value: string | null) {
    if (value === null) {
      removeItem()
      return
    }

    localStorage.setItem(key, value)
  }

  function removeItem() {
    localStorage.removeItem(key)
  }

  return { getItem, setItem, removeItem }
}
