// babel.config.js 파일 설정
// Expo에서 제공하는 babel-preset-expo를 사용하기 위한 설정
// api.cache(true)는 설정이 캐시되어 빌드 시간을 단축시키기 위한 코드
// presets 배열에 'babel-preset-expo'를 추가하여 사용

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
