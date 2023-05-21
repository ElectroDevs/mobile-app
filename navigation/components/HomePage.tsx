import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

interface Card {
  id: string;
  title: string;
  image: number;
}

interface DeviceCard {
  id: string;
  title: string;
  status: string;
}

const mockDeviceCards: DeviceCard[] = [
  { id: '1', title: 'CCTV', status: "ON" },
  { id: '2', title: 'LIGHT', status: "OFF" },
  { id: '3', title: 'SMOKE DETECTOR', status: "ON" },
  { id: '4', title: 'MOTION DETECTOR', status: "ON" },

  // Add more cards without images
];

const mockCards: Card[] = [
  { id: '1', title: 'Living Room', image: require('../../assets/2.png') },
  { id: '2', title: 'Library', image: require('../../assets/3.png') },
  { id: '3', title: 'Kitchen', image: require('../../assets/4.png') },
  { id: '4', title: 'Bedroom', image: require('../../assets/5.png') },
  // Add more cards with their respective images
];

export default function HomePage() {
  const [breachDetected, setBreachDetected] = useState(false);
  const [viewLive, setViewLive] = useState(true);
  const [viewDevices, setViewDevices] = useState(false);

  const renderDeviceCards = () => {
    return mockDeviceCards.map((device) => (
      device.status == "ON"
        ?
      <View key={device.id} style={styles.cardDevice}>
        <Ionicons name='wifi-outline' size={32} color='green' style={styles.wifiIcon} />
        <Text style={styles.cardDeviceTitle}>{device.title}</Text>
        <Text style={styles.cardDeviceStatus}>{device.status}</Text>
      </View>
        :
      <View key={device.id} style={styles.cardDevice}>
        <Ionicons name='wifi-outline' size={32} color='red' style={styles.wifiIcon} />
        <Text style={styles.cardDeviceTitle}>{device.title}</Text>
        <Text style={styles.cardDeviceStatus}>{device.status}</Text>
      </View>
  ));
};


  const renderCards = () => {
    return mockCards.map((card) => (
      <View key={card.id} style={styles.card}>
        <Image source={card.image} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{card.title}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.alertContainer}>
        <View style={styles.alertContentContainer}>
          <View style={styles.alertMessageContainer}>
            <Text style={styles.alertMessage}>
              {breachDetected
                ? 'An alarm was triggered! Check your notifications'
                : 'There are no security alerts from your devices'}
            </Text>
          </View>
          <Image
            source={breachDetected ? require('../../assets/safe.png') : require('../../assets/safe.png')}
            style={styles.alertIcon}
          />
        </View>
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

      {viewDevices && (
        <ScrollView style={styles.cardsDeviceContainer}>
          {renderDeviceCards()}
        </ScrollView>
      )}

      {viewLive && (
        <ScrollView horizontal contentContainerStyle={styles.cardsContainer}>
          <View style={styles.rowContainer}>{renderCards()}</View>
        </ScrollView>
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
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#E6E6E6',
    margin: 30,
    borderRadius: 12,
    padding: 15,
    width: 340,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    height: 100,
  },
  alertContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  alertMessageContainer: {
    flex: 1,
  },
  alertMessage: {
    fontSize: 14,
    textAlign: 'left',
    fontFamily: 'Trebuchet MS',
  },
  alertIcon: {
    marginLeft: 10,
    width: 80,
    height: 80,
    flexDirection: 'column',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 1,
  },
  button: {
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#DDDDDD',
    marginHorizontal: 10,
    width: 150,
  },
  activeButton: {
    backgroundColor: '#7B8FA5',
    borderWidth: 1,
    borderColor: '#7B8FA5',
  },
  buttonText: {
    borderColor: 'black',
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Trebuchet MS',
  },
  activeButtonText: {
    color: 'white',
    fontFamily: 'Trebuchet MS',
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
    paddingBottom: 10,
  },
  deviceListText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardsContainer: {
    alignItems: 'center',
    paddingTop: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  card: {
    width: 200,
    height: 280,
    borderRadius: 8,
    backgroundColor: '#DDDDDD',
    marginHorizontal: 5,
    marginVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: 170,
    height: 200,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Trebuchet MS',
    color: '#226760'
  },
  cardsDeviceContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 25,
  },
  cardDevice: {
    // backgroundColor: '#EDEFE8',
    padding: 10,
    borderRadius: 5,
    width: 337,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center' ,
  },
 cardDeviceTitle: {
  flex: 1,
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'left',
  color: 'black',
  fontFamily: 'Trebuchet MS',
  },
  cardDeviceStatus: {
  flex: 1,
  fontSize: 12,
  textAlign: 'right',
  color: 'black',
    fontFamily: 'Trebuchet MS',
 },
  wifiIcon: {
  marginRight: 10,
},
});
