export function getTextOrDefault(object, field, defaultText = '') {
  return object && object[field] ? object[field] : defaultText
}
