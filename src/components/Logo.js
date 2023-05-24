import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/Logo.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 110, //로고 이미지의 너비
    height: 110, //로고 이미지의 높이
    marginBottom: 0, //아래 여백
    marginTop: 24,
  },
})
