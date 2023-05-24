import { DefaultTheme } from 'react-native-paper'

//기존의 DefaultTheme을 확장하고 colors 속성을 쟂정의합니다.
export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000', // 일반 텍스트 색상
    primary: '#560CCE', // 기본 버튼, 앱 바 등의 색상
    secondary: '#414757', // 부가적인 컴포넌트에서 사용되는 보조 색상
    error: '#f13a59', // 오류 발생시 사용되는 색상
    primary: '#009966', // 추가된 primary 색상
  },
}