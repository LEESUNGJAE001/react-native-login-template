import React from 'react'
import Background from '../components/Background' // Background 컴포넌트 import
import Logo from '../components/Logo' // Logo 컴포넌트 import
import Header from '../components/Header' // Header 컴포넌트 import
import Paragraph from '../components/Paragraph' // Paragraph 컴포넌트 import
import Button from '../components/Button' // Button 컴포넌트 import

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>반가워요!</Header>
      <Paragraph>
      🌷친환경을 위해 노력하는 당신 축복해요🌷
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  )
}
