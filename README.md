dependencias USasadas con NPM 


npm add nativewind
npm add --dev tailwindcss
npx tailwindcss init


npm i firebase
npm install expo-constants dotenv 
 npm install react-native-screens
 npm install react-native-safe-area-context
 npm add @react-navigation/native-stack @react-navigation/native 

npm install react-native-vector-icons
npm install react-native-popup-menu


para babel 
// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel'], // add this line
  };
};


agregar este content a el tailwindconfig
  content: [
    './App.{js,jsx,ts,tsx}',
    './componentes/**/*.{js,jsx,ts,tsx}',
  ],