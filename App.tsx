import { StatusBar } from 'expo-status-bar';
import { Center, NativeBaseProvider, Spinner } from 'native-base';
import { Home } from './src/screens/Home';
import { THEME } from './src/themes';
import { AboutLink } from './src/screens/AboutLink';

import {
  useFonts,
  RobotoSlab_400Regular,
  RobotoSlab_700Bold
} from "@expo-google-fonts/roboto-slab"

export default function App() {

  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_700Bold
  })


  return (
    <NativeBaseProvider theme={THEME}>

      {
        !fontsLoaded ? <Center flex={1}> <Spinner size={40} /> </Center> : <Home />
      }

      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
