import { createContext, useContext } from 'react';
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
import { Signln } from './src/screens/Signln';
import { Signup } from './src/screens/Signup';
import { AuthContextProvider } from './src/Contexts/AuthContext';




export default function App() {

  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_700Bold
  })

  if (!fontsLoaded) return (
    <NativeBaseProvider>
      <Center flex={1} bg="gray.700">
        <Spinner size={40} color="purple.500" />
      </Center>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  )

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <Home />
        <StatusBar style="auto" />
      </AuthContextProvider>

    </NativeBaseProvider>
  );
}
