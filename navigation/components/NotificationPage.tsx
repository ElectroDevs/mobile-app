import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Notification {
  id: number;
  message: string;
  clicked: boolean;
}

interface NotificationPageProps {
  notifications: Notification[];
  onClick: (notificationId: number) => void;
}

const NotificationPage: React.FC<NotificationPageProps> = ({ notifications, onClick }) => {
  const handleNotificationPress = (id: number) => {
    onClick(id);
    console.log('Notification clicked:', id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Notifications</Text>
      <View style={styles.horizontalLine} />
      {notifications.length === 0 ? (
        <Text>No notifications</Text>
      ) : (
        notifications.map((notification) => (
          <TouchableOpacity
            key={notification.id}
            style={[
              styles.notification,
              !notification.clicked && styles.unclickedNotification,
            ]}
            onPress={() => handleNotificationPress(notification.id)}
          >
            <View style={styles.notificationContent}>
              <Text style={styles.notificationText}>{notification.message}</Text>
              <Ionicons name='alert-circle' size={32} color='red' style={styles.alertIcon} />
            </View>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#226760'
  },
  notification: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  unclickedNotification: {
    backgroundColor: '#DEDEDE',
    borderColor: '#E1BABC',
  },
  notificationContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  alertIcon: {
    marginLeft: 10,
  },
   horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#C1C1DE',
    marginBottom: 20,
    width: '100%',
  },
});

export default NotificationPage;
