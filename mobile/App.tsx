import React from 'react';
import { StatusBar } from 'react-native';

import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { AppLoading } from 'expo';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';

import Routes from './src/routes';

export default function App() {
  //diz quando a fonte terminou de ser carregada
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  })
  //enquanto as fontes ainda não foram carregadas
  if (!fontsLoaded) {
    return <AppLoading /> //sinal de carregamento
  }
  /*
    barStyle="dark-content" -> insere cor preta na statusbar 
   backgroundColor="transparent" -> só funciona no Android
   translucent -> (só funciona no Android) para a statusbar ficar por cima do conteúdo
 */
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
}
