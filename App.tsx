import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components'
import theme from './src/styles/theme';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';
import { Routes } from './src/routes';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useCallback } from 'react';

const queryClient = new QueryClient()

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="light" />
        <Routes onReadFunction={onLayoutRootView} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}