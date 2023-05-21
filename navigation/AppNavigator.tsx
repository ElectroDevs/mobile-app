import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomePage from './components/HomePage';
import NotificationPage from './components/NotificationPage';
import ProfileView from './components/Profile';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' 
                    screenOptions={({route}) => ({
                      tabBarIcon: ({focused, color, size}) => {
                        let rn = route.name;

                        if (rn === "Home") {
                          return <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color}/>
                        } else if (rn === "Notifications") {
                          return <Ionicons name={focused ? "notifications" : "notifications-outline"} size={size} color={color}/>
                        }
                        else if (rn === "Account") {
                          return <Ionicons name="person-circle-outline" size={size} color={color}/>
                        }
                      },
                      headerShown: false
      }) }>

        <Tab.Screen name='Home' component={HomePage}/>
        <Tab.Screen name='Notifications' component={NotificationPage} />
        <Tab.Screen name='Account' component={ProfileView}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}