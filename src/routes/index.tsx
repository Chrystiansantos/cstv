import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { MatchDetails } from '../pages/MatchDetails';

const { Navigator, Screen } = createNativeStackNavigator();

interface RoutesProps {
  onReadFunction: () => Promise<void>;
}

export function Routes({ onReadFunction }: RoutesProps) {
  return (
    <NavigationContainer onReady={onReadFunction} >
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="MatchDetails" component={MatchDetails} />
      </Navigator>
    </NavigationContainer>
  );
}
