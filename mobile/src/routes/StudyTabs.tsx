import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favourites from '../pages/Favourites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                    marginRight: 3,
                },

                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 14,
                    marginLeft: 16,
                },

                inactiveBackgroundColor: '#EBEBF5',
                activeBackgroundColor: '#CACACC',
                inactiveTintColor: '#C1BCCC',
                activeTintColor: '#32264D',
            }}
        >
            <Screen 
                name="TeacherList" 
                component={TeacherList}
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name="ios-easel" color={focused ? '#8257E5' : color} size={size} />
                        )
                    }
                }}
            />

            <Screen 
                name="Favourites" 
                component={Favourites}
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name="ios-heart" color={focused ? '#8257E5' : color} size={size} />
                        )
                    }
                }} 
            />

        </Navigator>
    )
};

export default StudyTabs;