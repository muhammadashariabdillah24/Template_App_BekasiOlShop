import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { Component } from 'react'
// Import Top COmponent
import { TopComponent } from './TopComponent';
// 

// Screen For Bottom Tabs
import { MyProfile } from '../screen/Profile/Profile';
// 
const Tab = createBottomTabNavigator();

class BottomComponent extends Component {

    render() {
        return (
            <Tab.Navigator
            screenOptions={{
                headerShown : false,
                tabBarShowLabel : false,
                tabBarActiveTintColor : '#E76E6E',
                tabBarInactiveTintColor : '#dcdcdc',
            }}
            >
                <Tab.Screen
                    name="Profile"
                    component={MyProfile}
                    options={{
                        tabBarIcon : ({color, size}) => (
                            <Icon name="account-circle" color={color} size={size} />
                        ),
                    }}
                />

                <Tab.Screen 
                    name="Menu"
                    component={TopComponent}
                    options={{
                        tabBarIcon : ({color, size}) => (
                            <Icon name="account-group" color={color} size={size} />
                        )
                    }}
                />

            </Tab.Navigator>
        )
    }
}

export { BottomComponent }