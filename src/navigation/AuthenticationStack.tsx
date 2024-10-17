import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import Registration from '../container/registration';
import Welcome from '../container/welcome';
import Verification from '../container/verification';

type RootStackParamList = {
  signUp: undefined;
  verification: undefined;
  welcome: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AuthStack: React.FC = () => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false,
    } as NativeStackNavigationOptions}
  >
    <RootStack.Screen name="signUp" component={Registration} />
    <RootStack.Screen name="verification" component={Verification} />
    <RootStack.Screen name="welcome" component={Welcome} />
  </RootStack.Navigator>
);

export default AuthStack;
