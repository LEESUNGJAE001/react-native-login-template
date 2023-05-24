import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

//BackButton 컴포넌트는 뒤로가기 기능을 수행하는 화살표 이미지를 렌더링합니다.
export default function BackButton({ goBack }) {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/arrow_back.png')}
      />
    </TouchableOpacity>
  )
}

// StyleSheet을 사용하여 컴포넌트의 스타일을 지정합니다.
const styles = StyleSheet.create({
   // container 스타일은 BackButton의 위치를 결정합니다.
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 4,
  },
   // image 스타일은 화살표 이미지의 크기를 결정합니다.
  image: {
    width: 24,
    height: 24,
  },
})
