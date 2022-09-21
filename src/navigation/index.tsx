import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';

export type RootStackParamList = {
  Main: undefined;
  'Main.Home': undefined;
  'Main.Notifications': undefined;
  'Main.Profile': undefined;
  Languages: undefined;
  ChangePassword: {userId: number};
};

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main">{() => <BottomTabs />}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
