import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const ProfilePage = () => {
  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logout pressed');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/id-pic-compressed.png')}
        style={styles.profilePicture}
      />
      <Text style={styles.userName}>Jenny Sue</Text>
      <Text style={styles.contactNumber}>Contact #: 09636261878</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactNumber: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfilePage;