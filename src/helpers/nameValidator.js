//이름이 비어있을 경우 "이름은 비울 수 없습니다." 메세지 반환하는 코드

export function nameValidator(name) {
  if (!name) return "이름은 비울 수 없습니다."
  return ''
}
