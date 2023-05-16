import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomePage() {
  const [breachDetected, setBreachDetected] = useState(false);
  const [viewLive, setViewLive] = useState(true);
  const [viewDevices, setViewDevices] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.alertContainer}>
        <Ionicons
          name={breachDetected ? 'warning' : 'shield-checkmark'}
          size={80}
          color={breachDetected ? '#FF3B30' : '#4CD964'}
        />
        <Text style={styles.alertText}>{breachDetected ? 'Warning!' : 'Safe'}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, viewLive && styles.activeButton]}
          onPress={() => {
            setViewLive(true);
            setViewDevices(false);
          }}
        >
          <Text style={[styles.buttonText, viewLive && styles.activeButtonText]}>Live</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, viewDevices && styles.activeButton]}
          onPress={() => {
            setViewLive(false);
            setViewDevices(true);
          }}
        >
          <Text style={[styles.buttonText, viewDevices && styles.activeButtonText]}>Devices</Text>
        </TouchableOpacity>
      </View>
      {viewLive && (
        <View style={styles.cameraContainer}>
          <Text style={styles.liveViewText}>Render live view here</Text>
        </View>
      )}
      {viewDevices && (
        <View style={styles.devicesContainer}>
          {/* Render device list and indicators here */}
          <Text style={styles.deviceListText}>Render device list here</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  alertContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  alertText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4CD964',
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  button: {
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#007AFF',
    marginHorizontal: 10,
  },
  activeButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  activeButtonText: {
    color: '#007AFF',
  },
  cameraContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  liveViewText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  devicesContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deviceListText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
