import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

//헤더 컴포넌트
export default function Header(props) {
  return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21, //폰트 크기
    color: theme.colors.primary, //색상
    fontWeight: 'bold', //글꼴 굵기
    paddingVertical: 12, //위, 아래 여백
  },
})
