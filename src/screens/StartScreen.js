import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />

      <Header style={{ color: '#009966', fontSize: 22, marginTop: 10 }}>로그인</Header>
      <Paragraph style={{ marginBottom: 10, marginTop: 10 }}>
      🌷친환경을 위해 노력하는 당신, 축복해요🌷
      </Paragraph>
      <Button
        mode="contained" color="#009966"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        로그인
      </Button>
      <Button
        mode="outlined" color="#009966"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        회원가입
      </Button>
    </Background>
  )
}
