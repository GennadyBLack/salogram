export const mappedEditForm = (entry) => {
  const mappedObj = {}
  if (typeof entry === 'object') {
    Object.entries(entry).forEach(([key, value]) => {
      mappedObj[key] = { val: value, old: value }
    })
  }
  return mappedObj
}

export const mappedSaveForm = (entry) => {
  const mappedObj = {}
  if (typeof entry === 'object') {
    Object.entries(entry).forEach(([key, value]) => {
      if (value.val !== value.old) {
        mappedObj[key] = value.val
      }
    })
  }
  return mappedObj
}
