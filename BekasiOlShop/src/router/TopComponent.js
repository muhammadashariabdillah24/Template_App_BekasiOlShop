import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Chatting } from '../screen/Chatting/Chatting';
import { ListMember } from '../screen/ListMember/ListMember';

const Top = createMaterialTopTabNavigator();

class TopComponent extends React.Component {
    render() {
        return (
            <Top.Navigator
            screenOptions={{
                headerShown : false,
                tabBarActiveTintColor : '#E76E6E',
                tabBarInactiveTintColor : '#A7A7A7',
                tabBarItemStyle : {
                    flexDirection : 'row',
                },
                tabBarIconStyle : {
                    flexDirection : 'column',
                    justifyContent : 'center',
                    width : 20
                }
            }}
            >
                <Top.Screen 
                    name="Chatting"
                    component={Chatting}
                    options={{
                        tabBarIcon : ({color, size}) => (
                            <Icon name="message-text" color={color} size={size} />
                        ),
                        tabBarLabel : 'Chat'
                    }}
                />

                <Top.Screen 
                    name="ListMember"
                    component={ListMember}
                    options={{
                        tabBarIcon : ({color, size}) => (
                            <Icon name="account-group" color={color} size={size} />
                        ),
                        tabBarLabel : 'List Member'
                    }}
                />
            </Top.Navigator>
        )
    }
}

export { TopComponent }