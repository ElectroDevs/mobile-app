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
        <View style={styles.locationContainer}>
          <Ionicons
                name='location'
                size={22}
                color='#FFE878' />
           <Text style={styles.location}>{location}</Text>
        </View>
       
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
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#7B8FA5',
    width: '100%',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  titleContainer: {
    flex: 1,
  },
   locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
    marginLeft: 3,
    fontFamily: 'Trebuchet MS'
  },
  location: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'Trebuchet MS'
  },
  profileButton: {
    borderRadius: 50,
    padding: 5,
  },
  profileImageContainer: {
    width: 42,
    height: 42,
    borderRadius: 20,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
});

export default Header;
