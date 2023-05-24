import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../core/theme'


//Background 컴포넌트는 맵의 배경을 구성합니다.
export default function Background({ children }) {
  return (
    //ImageBackground 컴포넌트는 배경 이미지를 렌더링합니다.
    <ImageBackground
      source={require('../assets/background_dot.png')}
      resizeMode="repeat"
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

//StyleSheet 사용하여 컴포넌트의 스타일을 지정합니다.
const styles = StyleSheet.create({
  //background 스타일은 배경 이미지를 꾸며줍니다.
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  //container 스타일은 Background 컴포넌트의 내용을 감싸는 컨테이너를 꾸며줍니다.
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
