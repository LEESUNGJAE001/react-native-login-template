import React, { useState } from 'react'

// React Native의 UI 컴포넌트들
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'

// 커스텀 컴포넌트들
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'

// 테마와 유틸리티 함수들
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'

export default function RegisterScreen({ navigation }) {
  // 입력값과 에러 상태를 관리하는 state
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  // 로그인 버튼이 눌렸을 때 처리하는 함수
  const onSignUpPressed = () => {
    // 입력값을 검증하는 함수를 호출하고 에러가 있으면 에러 상태를 업데이트한다.
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    // 입력값에 문제가 없으면 Dashboard 화면으로 이동한다.
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }  

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header style={{ color: '#009966', fontSize: 22, marginTop: 10 }}>계정 생성</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
       mode="contained"
      onPress={onSignUpPressed}
      style={{ marginTop: 24, backgroundColor: theme.colors.primary }}>
      회원가입
      </Button>
      <View style={styles.row}>
        <Text>이미 계정을 가지고 계신가요? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>로그인</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}


//스타일시트
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
