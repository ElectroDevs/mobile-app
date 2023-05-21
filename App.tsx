import React from 'react';
import Header from './navigation/components/Header';
import AppNavigator from './navigation/AppNavigator';
import ProfileView from './navigation/components/Settings';


export default function App() {
  return (
    <>
      <Header title='My Mansion' location='Jaro, Iloilo, Philippines' onProfilePress={() => <ProfileView/>} />
      <AppNavigator/>
      
    </>
  );
}