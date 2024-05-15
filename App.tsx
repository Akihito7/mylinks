import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { Home } from './src/screens/Home';
import { THEME } from './src/themes';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <Home />
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
