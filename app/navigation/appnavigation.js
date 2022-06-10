import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Playlist from '../screens/playlist';
import Songs from '../screens/songs';
import Player from '../screens/player';

const Tab=createBottomTabNavigator()

/* <Ionicons name="musical-notes-sharp" size={24} color="black" /> */
const AppNavigator=() => {
    return <Tab.Navigator>
        <Tab.Screen name='Songs' component={Songs} options={{
            tabBarIcon: ({color,size}) => {
                return <SimpleLineIcons name="list" size={size} color={color} />
                }
        }}/>
        <Tab.Screen name='Player' component={Player} options={{
            tabBarIcon: ({color,size}) => {
                return <MaterialIcons name="headset" size={size} color={color} />
                }
        }}/>
        <Tab.Screen name='PlayList' component={Playlist} options={{
            tabBarIcon: ({color,size}) => {
                return <MaterialIcons name="playlist-play" size={size} color={color} />
                }
        }}/>
    </Tab.Navigator>
}

export default AppNavigator;