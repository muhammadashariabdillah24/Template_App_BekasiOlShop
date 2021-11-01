import React from 'react'
// Stack Component
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// 

// Screen Stack Component
import { SplashScreen } from '../screen/SplashScreen/SplashScreen';
import { Login } from '../screen/Login/Login'
import { Registration } from '../screen/Registration/Registration';
import { ForgotPassword } from '../screen/ForgotPassword/ForgotPassword'
import { ChatInbox } from '../screen/ChatInbox/ChatInbox';
//


const Stack = createNativeStackNavigator()

class StackComponent extends React.Component{

    render() {
        return (

              <Stack.Navigator>

                  <Stack.Screen 
                    name="SplashScreen" 
                    component={SplashScreen}
                    options={{
                      headerShown : false
                    }}
                  />

                  <Stack.Screen 
                    name="Login"
                    component={Login}
                    options={{
                      headerShown : false
                    }}
                  />
                  
                  <Stack.Screen 
                    name="ForgotPassword"
                    component={ForgotPassword}
                    options={{
                      headerShown : false
                    }}
                  />

                  <Stack.Screen 
                    name="Registration"
                    component={Registration}
                    options={{
                      headerShown : false
                    }}
                  />

                  <Stack.Screen 
                    name="ChatInbox"
                    component={ChatInbox}
                    options={{
                      headerShown : false
                    }}
                  />

            </Stack.Navigator>   

        )
    }
}

export { StackComponent }