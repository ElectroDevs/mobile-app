import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomePage from './components/HomePage';
import NotificationPage from './components/NotificationPage';
import ProfileView from './components/Settings';
import ProfilePage from './components/ProfilePage';

type IconName =
  | "key"
  | "search"
  | "repeat"
  | "link"
  | "at"
  | "body"
  | "code"
  | "map"
  | "menu"
  | "time"
  | "ellipse"
  | "filter"
  | "image"
  | "stop"
  | "text"
  | "alert"
  | "checkbox"
  | "radio"
  | "home"
  | "cog-outline"
  | "home-outline"
  | "notifications"
  | "notifications-outline"
  | "profile-outline"
  | "person-circle-outline"; // Add more icon names as needed

interface Notification {
  id: number;
  message: string;
  clicked: boolean;
}

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Simulated fetch request to check for notifications
    const fetchNotifications = () => {
      // Simulating a delay of 2 seconds before receiving notifications
      setTimeout(() => {
        const mockNotifications: Notification[] = [
          { id: 1, message: 'Fire Detector was activated', clicked: false },
          { id: 2, message: 'Motion Detector was activated', clicked: false },
        ];
        setNotifications(mockNotifications);
      }, 2000);
    };

    // Call the fetchNotifications function
    fetchNotifications();
  }, []);

  const handleNotificationClick = (notificationId: number) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === notificationId ? { ...notification, clicked: true } : notification
    );
    setNotifications(updatedNotifications);
  };

  const unclickedNotificationCount = notifications.filter((notification) => !notification.clicked).length;

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: IconName = 'home'; // Default icon name

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications-outline';
              color = unclickedNotificationCount > 0 ? 'red' : color;
            } else if (route.name === 'Settings') {
              iconName = 'cog-outline';
            } else if (route.name === 'Profile') {
              iconName = "person-circle-outline"
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name='Home' component={HomePage} />
        <Tab.Screen
          name='Notifications'
          options={{
            tabBarBadge: unclickedNotificationCount > 0 ? unclickedNotificationCount : undefined,
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? 'notifications' : 'notifications-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        >
          {() => (
            <NotificationPage
              notifications={notifications}
              onClick={handleNotificationClick}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name='Settings' component={ProfileView} />
        <Tab.Screen name='Profile' component={ProfilePage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
