import React from 'react';
import HomeScreen from './components/HomeScreen';
import Header from './components/Header';

export default function App() {
  return (
    <Header title='My Mansion' location='Jaro, Iloilo, Philippines' onProfilePress={() => alert('Profile pressed')}/>
  );
}