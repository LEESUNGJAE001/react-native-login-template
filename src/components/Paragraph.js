import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

//중앙 정렬된 단락 텍스트를 렌더링합니다.
export default function Paragraph(props) {
  return <Text style={styles.text} {...props} />
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
  },
})
