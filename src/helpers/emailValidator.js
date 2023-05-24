// 이메일 유효성 검사 함수
// 유효한 이메일 주소 형식이 아니거나, 이메일이 비어있는 경우 에러 메시지를 반환합니다.
// 유효한 이메일 주소인 경우 빈 문자열을 반환합니다.
export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "이메일은 비울 수 없습니다."
  if (!re.test(email)) return '유효한 이메일 주소가 필요합니다.'
  return ''
}
