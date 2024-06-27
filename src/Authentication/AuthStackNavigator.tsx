import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Authentication/Login';
import SignUp from '../Authentication/SignUp';
import ForgotPass from '../Authentication/ForgotPass';

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="ForgotPass" component={ForgotPass} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
