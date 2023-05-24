export function passwordValidator(password) {
  if (!password) return "패스워드는 비울 수 없습니다." //비어있는 경우 에러 메세지 반환
  if (password.length < 5) return '암호는 적어도 5자 이상이여야 합니다.' //패스워드 길이가 5자 미만인 경우 에러 메세지 반환
  return '' // 유효성 검사 통과
}
