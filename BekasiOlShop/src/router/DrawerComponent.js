// Import Drawer Comoponent
import { createDrawerNavigator } from '@react-navigation/drawer'
// 

// Import React
import React from 'react'
// 

// Import Home
import { Home } from '../screen/Home/Home'
// 

// Import Chatting
import { BottomComponent } from './BottomComponent'
// 

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Drawer = createDrawerNavigator()
class DrawerComponent extends React.Component {

    render() {
        return (
            <Drawer.Navigator
            initialRouteName="Home" 
            >
                <Drawer.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown : false,
                        drawerActiveTintColor : '#E76E6E',
                        drawerInactiveTintColor : '#A7A7A7',
                        drawerIcon : ({color, size}) => (
                            <Icon name="home" color={color} size={size} />
                        ),
                    }}
                />

                <Drawer.Screen 
                    name="Profil"
                    component={BottomComponent}
                    options={{
                        headerShown : false,
                        drawerActiveTintColor : '#E76E6E',
                        drawerInactiveTintColor : '#A7A7A7',
                        drawerIcon : ({color, size}) => (
                            <Icon name="account-circle" color={color} size={size} />
                        ),
                    }}
                />
            </Drawer.Navigator>
        )
    }
}


export { DrawerComponent }
