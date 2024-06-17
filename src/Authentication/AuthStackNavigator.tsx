import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from '../Authentication/SignUp';
import Login from '../Authentication/Login';
import ForgotPass from '../Authentication/ForgotPass';
import OTP from '../Authentication/OTP';

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="ForgotPass" component={ForgotPass} />
      <AuthStack.Screen name="OTP" component={OTP} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
