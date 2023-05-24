import React, { useState } from 'react'
import Background from '../components/Background' //배경 컴포넌트
import BackButton from '../components/BackButton' //뒤로가기 버튼 컴포넌트
import Logo from '../components/Logo' //로고 컴포넌트
import Header from '../components/Header' //헤더 컴포넌트
import TextInput from '../components/TextInput' //텍스트 입력 컴포넌트
import Button from '../components/Button' // 버튼 컴포넌트
import { emailValidator } from '../helpers/emailValidator' //이메일 유효성 검사 함수

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    navigation.navigate('LoginScreen')
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>비밀번호 찾기</Header>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="비밀번호 초기화 링크를 이메일로 받을 수 있습니다."
      />
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        전송하기
      </Button>
    </Background>
  )
}
