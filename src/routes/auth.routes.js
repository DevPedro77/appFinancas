import React from "react";
import {createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AppRoutes from "./app.routes";

const AuthStack = createNativeStackNavigator();
function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerStyle: {
            backgroundColor: '#000',
            borderBottomWidth: 1,
            borderBottomColor: '#ccc'
          },
          headerTintColor: '#fff',
          headerTitle: 'Voltar',
          headerBackTitleVisible: false
        }}
      />
    </AuthStack.Navigator>
  )
}

export default AuthRoutes;