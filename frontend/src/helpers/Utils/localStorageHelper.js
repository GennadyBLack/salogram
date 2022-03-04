export function saveToken(token) {
  if (token) localStorage.setItem('token', JSON.stringify(token))
  else localStorage.setItem('token', null)
}

export function getToken() {
  const strToken = localStorage.getItem('token')
  return strToken ? JSON.parse(strToken) : null
}

export function removeItem({ item }) {
  localStorage.removeItem(item)
}
