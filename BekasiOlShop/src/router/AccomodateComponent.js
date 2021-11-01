// Import React
import React from 'react'
// 

// Import Stack Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// 


// Import StackComponent
import { StackComponent } from './StackComponent'
// 

// Import DrawerComponnet
import { DrawerComponent } from './DrawerComponent'
// 

// Import BottomComponent
import { BottomComponent } from './BottomComponent'
// 

const Stack = createNativeStackNavigator();

class AccomodateComponent extends React.Component {
    render() {
        return (
            <Stack.Navigator
            screenOptions={{
                headerShown : false
            }}
            >

                <Stack.Screen 
                    name="StackComponent"
                    component={StackComponent}
                />
                
                <Stack.Screen
                    name="DrawerComponent"
                    component={DrawerComponent}
                />

                <Stack.Screen 
                    name="BottomComponent"
                    component={BottomComponent}

                />
                
            </Stack.Navigator>
        )
    }
}

export { AccomodateComponent }
