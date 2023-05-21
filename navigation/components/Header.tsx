import React, { ReactElement } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  title: string;
  location: string;
  onProfilePress: () => ReactElement | React.FC;
}

const Header = ({ title, location, onProfilePress }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
      <TouchableOpacity style={styles.profileButton} onPress={onProfilePress}>
        <View style={styles.profileImageContainer}>
           <Image source={require('../../assets/id-pic-compressed.png')} style={styles.profileImage} />
        </View>
        {/* <Ionicons name="person-circle-outline" size={32} color="white" /> */}   
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#007AFF',
    width: '100%',
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    color: 'white',
  },
  profileButton: {
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 10,
  },
  profileImageContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
});

export default Header;
