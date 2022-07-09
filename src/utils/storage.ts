export const getItem = <T>(key:string): T | null => {
  const data = window.localStorage.getItem(key)
  if (!data) return null
  try { // 当data 不是标准的json对象
    return JSON.parse(data) as T
  } catch (error) {
    return null
  }
//   window.localStorage.getItem(key)
}

export const setItem = (key:string, value:object|string|null) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

export const removeItem = (key:string) => {
  window.localStorage.removeItem(key)
}
