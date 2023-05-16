import React from 'react';
import Header from './navigation/components/Header';
import AppNavigator from './navigation/AppNavigator';


export default function App() {
  return (
    <>
      <Header title='My Mansion' location='Jaro, Iloilo, Philippines' onProfilePress={() => alert('Profile pressed')}/>
      <AppNavigator/>
      
    </>
  );
}